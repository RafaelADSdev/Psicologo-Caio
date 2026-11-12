<div align="center">

<img src="./dist/assets/logo-cl.webp" width="105" alt="Monograma CL">

# Caio Leonardi

**Site institucional de psicologia clínica online**
Caio Leonardi Oliveira de Barros · Psicólogo · CRP 02/30232

[![Acessar o site](https://img.shields.io/badge/Acessar%20o%20site-Vercel-0B2545?style=for-the-badge&logo=vercel&logoColor=white)](https://psicologocaio.vercel.app/)

[![HTML5](https://img.shields.io/badge/HTML5-estrutura-134074?style=flat-square&logo=html5&logoColor=white)](#estrutura-do-projeto)
[![CSS3](https://img.shields.io/badge/CSS3-responsivo-134074?style=flat-square&logo=css&logoColor=white)](#identidade-visual)
[![JavaScript](https://img.shields.io/badge/JavaScript-nativo-1D4ED8?style=flat-square&logo=javascript&logoColor=white)](#recursos)

[Recursos](#recursos) · [Rodar localmente](#rodar-localmente) · [Personalizar](#personalizar) · [Publicar](#publicar)

</div>

O site apresenta a abordagem fenomenológica-existencial de Caio Leonardi, explica como funciona o atendimento online para adultos e encaminha o agendamento pelo WhatsApp.

[![Abertura com fundo azul-marinho e retrato de Caio Leonardi](./docs/images/desktop.png)](https://psicologocaio.vercel.app/)

<sub>Captura de uma versão anterior do site. Clique na imagem para ver a versão atual.</sub>

<details>
<summary><strong>Ver a versão mobile, o Instagram e as especialidades</strong></summary>

<table>
  <tr><th>Apresentação no celular</th><th>Publicações no site</th></tr>
  <tr>
    <td valign="top"><img src="./docs/images/mobile.png" width="240" alt="Seção sobre o profissional no celular"></td>
    <td valign="top"><img src="./docs/images/instagram.png" width="620" alt="Publicações do Instagram de Caio Leonardi incorporadas ao site"></td>
  </tr>
</table>

![Seção de especialidades com descrições expandidas](./docs/images/especialidades.png)

</details>

## Recursos

| Seção | Como funciona |
| --- | --- |
| **Apresentação** | Retrato profissional, registro no CRP e proposta de atendimento. |
| **Sobre e atendimento** | Formação, abordagem clínica e quatro etapas até a consulta online. |
| **Especialidades** | Acordeão que recolhe a opção anterior ao abrir outra, com transição suave e suporte a teclado. |
| **Instagram** | Publicações de [@caioleonardi.psi](https://www.instagram.com/caioleonardi.psi/) incorporadas à página, com link para o perfil. |
| **Agendamento** | Botões que abrem o WhatsApp com uma mensagem pronta. No celular, o botão principal aparece antes dos parágrafos da abertura. |
| **Privacidade** | Página com informações sobre conteúdo externo, identificação profissional e contato. |

A abertura anima o retrato e a entrada dos textos. O retrato sobe levemente ao passar o mouse. As animações respeitam a preferência do sistema por movimento reduzido.

## Identidade visual

O azul-marinho estrutura a abertura e o rodapé. O cobalto destaca os controles. **Lora** é usada nos títulos e **Inter** nos textos e na navegação.

| Azul-marinho | Azul secundário | Cobalto | Fundo alternativo |
| :---: | :---: | :---: | :---: |
| `#0B2545` | `#134074` | `#1D4ED8` | `#F8FAFC` |

As fontes WOFF2 são servidas pelo próprio site. O navegador escolhe entre as versões de **640 px** e **1100 px** do retrato em WebP, com aproximadamente **24 KB** e **48 KB**. [Sistema visual](./DESIGN.md)

## Rodar localmente

Com Node.js e npm instalados, clone o repositório e inicie o servidor. O comando usa apenas módulos nativos do Node.js.

```bash
git clone https://github.com/Tekton-DigitalBR/Psicologo-Caio.git
cd Psicologo-Caio
npm run dev
```

Abra a página local em [http://127.0.0.1:4173](http://127.0.0.1:4173). Use `npm run check` para validar a sintaxe do JavaScript.

O código está na [Tekton Digital](https://github.com/Tekton-DigitalBR/Psicologo-Caio) e no [repositório de Rafael](https://github.com/RafaelADSdev/Psicologo-Caio).

## Estrutura do projeto

```text
Psicologo-Caio/
├── dist/                  # Arquivos publicados
│   ├── assets/            # Retratos, marcas, fontes e licenças
│   ├── index.html         # Página institucional
│   ├── styles.css         # Layout, cores e animações CSS
│   ├── app.js             # Menu, animações e acordeão
│   ├── config.js          # Número e mensagem do WhatsApp
│   ├── privacidade.html   # Política de privacidade
│   ├── robots.txt
│   └── sitemap.xml
├── docs/images/           # Capturas de referência
├── scripts/serve.mjs      # Servidor local
├── DESIGN.md              # Sistema visual
├── PRODUCT.md             # Contexto do projeto
└── vercel.json            # Configuração do deploy na Vercel
```

O projeto usa HTML, CSS e JavaScript nativo. As edições são feitas diretamente em `dist/`, que também é o diretório servido em produção.

## Personalizar

| Para editar | Arquivo |
| --- | --- |
| Textos, seções, formação e links do menu | [dist/index.html](./dist/index.html) |
| Número do WhatsApp e mensagem inicial | [dist/config.js](./dist/config.js) |
| Cores, fontes e espaçamento | [dist/styles.css](./dist/styles.css) |
| Acordeão e animações de rolagem | [dist/app.js](./dist/app.js) |
| E-mail de contato | [dist/index.html](./dist/index.html) e [dist/privacidade.html](./dist/privacidade.html) |

O número do WhatsApp usa código do país e DDD, só com dígitos. Ao trocar o número, ajuste também os endereços `wa.me` no HTML para a navegação com JavaScript desativado.

A seção de Instagram usa um iframe com carregamento adiado. O Instagram controla a disponibilidade, a ordem e o tempo de atualização dos posts. Ao trocar de perfil, atualize a URL do iframe, os links e o perfil mencionado na política de privacidade.

## Publicar

Na Vercel, importe o repositório e selecione a **raiz do projeto**. O arquivo de configuração aponta a saída para `dist/` e deixa as etapas de instalação e compilação vazias. Com a integração Git configurada, a branch de produção dispara o deploy. [vercel.json](./vercel.json)

Para outra hospedagem estática, publique o **conteúdo de `dist/` como raiz do site**. Ao mudar o domínio principal, revise a URL canônica, a imagem Open Graph, o sitemap e o robots.txt.

A versão de revisão no Sites usa um fluxo de publicação próprio. [Configuração](./.openai/hosting.json) · [Abrir versão de revisão](https://caio-leonardi-psicologia-online.wittyphlox3.chatgpt.site/)

## Créditos

<table>
  <tr>
    <td width="150"><img src="./dist/assets/tekton-logo.png" width="120" alt="Tekton Labs"></td>
    <td><strong>Desenvolvimento por Tekton Labs</strong><br>Projeto institucional para Caio Leonardi Oliveira de Barros.</td>
  </tr>
</table>

A marca e o retrato foram fornecidos para este projeto. As fontes Lora e Inter e o ícone do WhatsApp têm licenças próprias. [Licenças das fontes](./licenses/) · [Bootstrap Icons](./dist/assets/Bootstrap-Icons-LICENSE.txt)
