// Com npm run dev ativo, instale apenas as ferramentas de teste:
// npm install --no-save --package-lock=false puppeteer-core @axe-core/puppeteer
// node scripts/check-flow.mjs
// CAIO_BROWSER_TOOLS permite usar ferramentas instaladas fora deste projeto.
import {createRequire} from 'node:module';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
const require = createRequire(resolve(process.env.CAIO_BROWSER_TOOLS || '.', 'package.json'));
const {default: puppeteer} = await import(pathToFileURL(require.resolve('puppeteer-core')));
const {AxePuppeteer} = await import(pathToFileURL(require.resolve('@axe-core/puppeteer')));
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const base='http://127.0.0.1:4173';
const browser=await puppeteer.launch({executablePath:process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage();
const errors=[];
page.on('pageerror',e=>errors.push(e.message));
await page.setRequestInterception(true);
let noConfig=false;
page.on('request',r=>(!r.url().startsWith(base)&&!r.url().startsWith('data:'))||(noConfig&&r.url().endsWith('/config.js'))?r.abort():r.continue());
const result={layouts:[],checks:[],accessibility:[]};
await fs.mkdir('.hallmark',{recursive:true});
async function load(){await page.goto(base,{waitUntil:'networkidle0'});await page.evaluate(()=>document.fonts.ready);}
try {
for(const width of [320,375,390,760,761,940,1024,1280,1440,1920]) {
  await page.setViewport({width,height:width<=760?812:width===1280?800:900});
  await load();
  const metrics=await page.evaluate(()=>{
    const cta=document.querySelector('.hero .button').getBoundingClientRect();
    const font=getComputedStyle(document.body).fontFamily;
    const clipped=[...document.querySelectorAll('.button,.text-link,.brand,nav a,summary,.footer-contact a')].filter(e=>{
      if(!e.getClientRects().length)return false;
      const r=e.getBoundingClientRect();return r.left< -1||r.right>innerWidth+1||e.scrollWidth>e.clientWidth+2;
    }).map(e=>e.textContent.trim());
    return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,ctaBottom:Math.round(cta.bottom),font,clipped};
  });
  result.layouts.push(metrics);
  assert.equal(metrics.scrollWidth,width,'horizontal overflow');
  assert.deepEqual(metrics.clipped,[],`clipped control at ${width}`);
  assert.match(metrics.font,/Inter/);
  if(width>=1280)assert.ok(metrics.ctaBottom<=800,`CTA outside fold at ${width}`);
  if(width===375 || width===1440) {
    const axe=await new AxePuppeteer(page).withTags(['wcag2a','wcag2aa','wcag21aa']).disableRules(['frame-tested']).analyze();
    result.accessibility.push({route:'/',width,violations:axe.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))});
    assert.deepEqual(axe.violations,[],`accessibility at ${width}`);
  }
}
result.checks.push('10 larguras sem overflow ou controles cortados; CTA visivel em desktop');
await page.setViewport({width:375,height:812});await load();
await page.keyboard.press('Tab');
assert.equal(await page.$eval('.skip',e=>e===document.activeElement),true);
assert.equal(await page.$eval('.skip',e=>getComputedStyle(e).outlineStyle),'solid');
await page.click('.menu-toggle');await page.focus('nav a');await page.keyboard.press('Escape');
assert.equal(await page.$eval('.menu-toggle',e=>e===document.activeElement&&e.getAttribute('aria-expanded')==='false'),true);
await page.click('.menu-toggle');await page.click('.hero h1');
assert.equal(await page.$eval('.menu-toggle',e=>e.getAttribute('aria-expanded')),'false');
await page.click('.menu-toggle');await page.focus('nav a');await page.keyboard.down('Shift');await page.keyboard.press('Tab');await page.keyboard.press('Tab');await page.keyboard.up('Shift');
assert.equal(await page.$eval('.menu-toggle',e=>e.getAttribute('aria-expanded')),'false');
await page.click('.menu-toggle');await page.click('nav a[href="#como-funciona"]');
assert.equal(await page.$eval('.menu-toggle',e=>e.getAttribute('aria-expanded')),'false');
assert.equal(new URL(page.url()).hash,'#como-funciona');
await page.click('.menu-toggle');await page.setViewport({width:1024,height:900});await page.setViewport({width:375,height:812});
assert.equal(await page.$eval('.menu-toggle',e=>e.getAttribute('aria-expanded')),'false');
result.checks.push('menu: Escape e foco, clique externo, Tab, ancora e redimensionamento');
await page.focus('.topics details:nth-child(2) summary');await page.keyboard.press('Enter');
await page.waitForFunction(()=>document.querySelectorAll('.topics details[open]').length===1&&document.querySelector('.topics details:nth-child(2)').open);
await page.click('.topics details:nth-child(3) summary');await page.click('.topics details:nth-child(3) summary');await page.click('.topics details:nth-child(4) summary');
await page.waitForFunction(()=>document.querySelectorAll('.topics details[open]').length===1&&document.querySelector('.topics details:nth-child(4)').open);
await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);
await page.click('.topics details:nth-child(5) summary');
assert.equal(await page.$$eval('.topics details[open]',es=>es.length),1);
assert.equal(await page.$eval('.topics details:nth-child(5)',e=>e.style.height),'');
await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'no-preference'}]);
await page.click('.topics details:nth-child(1) summary');await page.setViewport({width:390,height:812});
await page.waitForFunction(()=>![...document.querySelectorAll('.topics details')].some(e=>e.style.height));
result.checks.push('acordeao: teclado, cliques rapidos, movimento reduzido e resize durante animacao');
await load();
const links=await page.$$eval('[data-whatsapp]',es=>es.map(e=>e.href));
assert.equal(links.length,6);assert.equal(new Set(links).size,1);
assert.equal(new URL(links[0]).pathname,'/5581988088277');
assert.equal(new URL(links[0]).searchParams.get('text'),'Olá! Encontrei seu site e gostaria de informações sobre agendamento de consulta.');
const popupPromise=new Promise(resolve=>page.once('popup',resolve));
await page.click('.hero .button');const popup=await popupPromise;await popup.close();
assert.equal(await page.$eval('.instagram-fallback a',e=>e.href),'https://www.instagram.com/caioleonardi.psi/');
result.checks.push('6 links WhatsApp, numero, mensagem e abertura em nova aba; alternativa Instagram');
await page.goto(base+'/privacidade.html');
assert.equal(await page.$eval('h1',e=>e.textContent),'Política de Privacidade');
for(const width of [375,1440]) {
  await page.setViewport({width,height:900});
  const axe=await new AxePuppeteer(page).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  result.accessibility.push({route:'/privacidade.html',width,violations:axe.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))});
  assert.deepEqual(axe.violations,[],`privacy accessibility at ${width}`);
}
await page.setViewport({width:375,height:812});
await page.click('.header a.text-link');await page.waitForFunction(()=>document.querySelector('#hero-title'));
await page.setJavaScriptEnabled(false);await load();
assert.equal(await page.$eval('nav',e=>getComputedStyle(e).display),'flex');
assert.equal(await page.$eval('.menu-toggle',e=>getComputedStyle(e).display),'none');
await page.click('nav a[href="#especialidades"]');await page.click('.topics details:nth-child(2) summary');
assert.equal(await page.$eval('.topics details:nth-child(2)',e=>e.open),true);
assert.equal(await page.$eval('.hero .button',e=>e.href),'https://wa.me/5581988088277');
await page.setJavaScriptEnabled(true);noConfig=true;await load();await page.click('.menu-toggle');
assert.equal(await page.$eval('.menu-toggle',e=>e.getAttribute('aria-expanded')),'true');
assert.deepEqual(errors,[]);
result.checks.push('privacidade e volta; sem JavaScript; config.js indisponivel; nenhum erro JavaScript');
} finally {
await fs.writeFile('.hallmark/browser-results.json',JSON.stringify({...result,errors},null,2));
console.log(JSON.stringify({...result,errors},null,2));
await browser.close();
}
