# Caio Leonardi — Psicologia online

Site institucional estático, com HTML semântico, CSS responsivo e JavaScript sem dependências de produção. Os contatos e CRP foram confirmados pelo cliente em 06/11/2026.

## Prévia e verificação

Execute `npm run dev` e abra `http://127.0.0.1:4173`. Execute `npm run check` para verificar a sintaxe. O diretório publicável é `dist/`; os documentos de referência e documentos pessoais não fazem parte dele.

## Conteúdo

`dist/index.html`: página principal. `dist/styles.css`: tokens e apresentação. `dist/app.js`: menu, preferências, newsletter e carregamento opcional do feed. `dist/config.js`: configuração pública dos contatos e endpoints. `dist/privacidade.html`: política correspondente à versão atual.

As imagens fornecidas foram convertidas para WebP. Retrato: 48 KB em 1100 px e 24 KB em 640 px, aproximadamente. Fontes Lora e Inter são servidas localmente, em WOFF2 com subconjunto latino. Origem: Google Fonts, famílias Lora e Inter; ambas sob SIL Open Font License. As licenças estão em `licenses/`.

## Newsletter (aguardando fornecedor)

O formulário começa desativado, com aviso visível, conforme escolha do cliente. Para ativar:

1. Criar um formulário real no Formspree e configurar o destinatário, retenção e gestão de consentimento.
2. Atualizar a política de privacidade com fornecedor, retenção, eventual transferência internacional e canal de cancelamento.
3. Preencher `newsletterEndpoint` em `dist/config.js` com o endpoint público `https://formspree.io/f/ID`.
4. Validar entrega, erros, recebimento do registro de consentimento e cancelamento com o fornecedor. Recomenda-se confirmação de inscrição por e-mail antes de iniciar envios.

O formulário envia nome, e-mail, texto de consentimento e data ao endpoint configurado. Não coloque chaves privadas ou tokens no JavaScript público. Brevo/Mailchimp exigem uma integração de servidor própria, ainda não implementada.

## Instagram

Sem credenciais fornecidas, quatro peças editoriais levam ao perfil, com aviso de que não constituem o feed real. Não há scraping nem embeds de terceiros. Para usar o feed, configurar um endpoint no mesmo domínio que retorne um array JSON com pelo menos três objetos `{ "title": "Título", "url": "https://www.instagram.com/p/ID/", "image": "/assets/imagem.webp" }`. O servidor precisa obter os dados pela API autorizada; essa parte depende de credenciais e não está implementada. Falha, timeout ou retorno inválido preservam os cards editoriais. Tokens devem ficar exclusivamente no servidor.

## Privacidade e publicidade profissional

Registro CRP, nome profissional, nome completo no rodapé e aviso de crise estão presentes. O site usa apenas armazenamento local da preferência de privacidade; não instala analytics ou scripts do Instagram. A implementação não equivale a certificação jurídica ou auditoria integral de conformidade.

Referências consultadas em 06/11/2026: [publicidade profissional — CFP/CRP](https://transparencia.cfp.org.br/crp10/pergunta-frequente/publicidade-profissional/), [LGPD — texto atualizado](https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html).

## Publicação e pendências

Hospedagem no Sites, inicialmente privada para revisão. O acesso público precisa ser solicitado pelo cliente. Para outra hospedagem estática, envie `dist/` e atualize URLs canônicas, Open Graph, sitemap e robots. O repositório de origem da hospedagem é separado de um eventual repositório GitHub.

A meta PageSpeed acima de 90 não foi certificada; deve ser aferida na URL de produção acessível ao teste. Não se afirma criptografia de uma plataforma de videochamada antes de o profissional escolher a plataforma.
