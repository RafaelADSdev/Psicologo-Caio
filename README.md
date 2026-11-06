# Caio Leonardi — Psicologia online

Site institucional estático, com HTML semântico, CSS responsivo e JavaScript sem dependências de produção. Os contatos e CRP foram confirmados pelo cliente em 06/11/2026.

## Prévia e verificação

Execute `npm run dev` e abra `http://127.0.0.1:4173`. Execute `npm run check` para verificar a sintaxe. O diretório publicável é `dist/`; os documentos de referência e documentos pessoais não fazem parte dele.

## Conteúdo

`dist/index.html`: página principal. `dist/styles.css`: tokens e apresentação. `dist/app.js`: menu, preferências e incorporação do Instagram. `dist/config.js`: configuração pública dos contatos e perfil do Instagram. `dist/privacidade.html`: política correspondente à versão atual.

As imagens fornecidas foram convertidas para WebP. Retrato: 48 KB em 1100 px e 24 KB em 640 px, aproximadamente. Fontes Lora e Inter são servidas localmente, em WOFF2 com subconjunto latino. Origem: Google Fonts, famílias Lora e Inter; ambas sob SIL Open Font License. As licenças estão em `licenses/`.

## Instagram — atualização de 06/11/2026

A newsletter e as peças editoriais de demonstração foram removidas a pedido do cliente. A seção `#conteudo` incorpora o perfil real `@caioleonardi.psi` via `https://www.instagram.com/caioleonardi.psi/embed/`, após permissão específica do visitante. O perfil e os posts foram verificados no navegador. Não há cópia local dos posts, scraping, chave de API ou fornecedor pago.

O conteúdo é servido pelo próprio Instagram a cada carregamento. Novas publicações não exigem editar o site; ordem, quantidade de posts, cache, disponibilidade e tempo de atualização dependem do Instagram. Não há promessa de atualização em tempo real. O perfil deve permanecer público e permitir incorporações. Há link direto ao perfil como alternativa quando o embed é bloqueado ou exige login.

A preferência `cl-privacy-v2` diferencia `necessary` de `instagram`. A preferência anterior não autoriza a nova integração. O iframe carrega de forma adiada, próximo à seção, somente depois da permissão; a revogação o remove. Validação inclui permitir, reabrir página, recusar/revogar e confirmar ausência de iframe. Não basta o evento load para certificar o conteúdo: o teste visual confirma posts reais.

Referência oficial: [Meta Embeds — formatos aceitos, incluindo perfis do Instagram](https://github.com/meta/meta-embeds-for-wordpress#supported-url-formats).

## Privacidade e publicidade profissional

Registro CRP, nome profissional, nome completo no rodapé e aviso de crise estão presentes. O site usa armazenamento local da preferência e só incorpora conteúdo externo do Instagram após permissão; não instala analytics próprio. A implementação não equivale a certificação jurídica ou auditoria integral de conformidade.

Referências consultadas em 06/11/2026: [publicidade profissional — CFP/CRP](https://transparencia.cfp.org.br/crp10/pergunta-frequente/publicidade-profissional/), [LGPD — texto atualizado](https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html).

## Publicação e pendências

Hospedagem no Sites, inicialmente privada para revisão. O acesso público precisa ser solicitado pelo cliente. Para outra hospedagem estática, envie `dist/` e atualize URLs canônicas, Open Graph, sitemap e robots. O repositório de origem da hospedagem é separado de um eventual repositório GitHub.

A meta PageSpeed acima de 90 não foi certificada; deve ser aferida na URL de produção acessível ao teste. Não se afirma criptografia de uma plataforma de videochamada antes de o profissional escolher a plataforma.

## Revisão visual — 06/11/2026
Após o feedback de que a primeira versão era genérica, a página ganhou abertura marinho, contraste tipográfico, fotografia maior, sequência vertical de atendimento e rodapé tipográfico. Referências visuais pesquisadas e visitadas: [Serotonin](https://www.taylorbowmanmft.com/), [Self Embrace Therapy](https://www.selfembracetherapy.com/) e [Earthbound](https://earthboundpsychotherapy.com/). Foram estudadas composição, escala de imagem e consistência de marca; textos, fotografias e alegações dessas referências não foram reutilizados.
