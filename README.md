# Caio Leonardi — Psicologia online

Site institucional estático, com HTML semântico, CSS responsivo e JavaScript sem dependências de produção. Os contatos e CRP foram confirmados pelo cliente em 06/11/2026.

## Prévia e verificação

Execute `npm run dev` e abra `http://127.0.0.1:4173`. Execute `npm run check` para verificar a sintaxe. O diretório publicável é `dist/`; os documentos de referência e documentos pessoais não fazem parte dele.

## Conteúdo

`dist/index.html`: página principal. `dist/styles.css`: tokens e apresentação. `dist/app.js`: menu e animações. `dist/config.js`: configuração pública do WhatsApp. `dist/privacidade.html`: política correspondente à versão atual.

As imagens fornecidas foram convertidas para WebP. Retrato: 48 KB em 1100 px e 24 KB em 640 px, aproximadamente. Fontes Lora e Inter são servidas localmente, em WOFF2 com subconjunto latino. Origem: Google Fonts, famílias Lora e Inter; ambas sob SIL Open Font License. As licenças estão em `licenses/`.

## Instagram — atualização de 06/11/2026

A newsletter e as peças editoriais de demonstração foram removidas a pedido do cliente. A seção `#conteudo` incorpora o perfil real `@caioleonardi.psi` via `https://www.instagram.com/caioleonardi.psi/embed/`. O usuário pediu exibição direta; o iframe está no HTML e usa `loading="lazy"`, sem botão, autorização prévia na página ou dependência de JavaScript. O perfil e os posts foram verificados no navegador.

O conteúdo é servido pelo próprio Instagram a cada carregamento. Novas publicações não exigem editar o site; ordem, quantidade de posts, cache, disponibilidade e tempo de atualização dependem do Instagram. Não há promessa de atualização em tempo real. O perfil deve permanecer público e permitir incorporações. Há link direto ao perfil como alternativa quando o embed é bloqueado ou exige login. O site não lê mais as preferências de versões anteriores. A política informa o carregamento externo automático e o possível uso de cookies pela Meta.

## Animações

A abertura combina entrada breve dos textos, enquadramento progressivo do retrato e chegada da legenda. Ao rolar, cabeçalhos e etapas ganham movimento discreto uma vez; os traços da ilustração do encontro são desenhados ao entrar no campo de visão. Botões, links, menu e especialidades têm respostas curtas. Não há loops contínuos nem dependências adicionais.

O conteúdo permanece visível por padrão e o Instagram funciona sem JavaScript. `prefers-reduced-motion` elimina movimentos espaciais e a animação dos traços; mudanças dessa preferência cancelam animações em andamento. Sem suporte a IntersectionObserver/WAAPI, o conteúdo segue estático. O cabeçalho usa evento de rolagem passivo com requestAnimationFrame.

Referência oficial: [Meta Embeds — formatos aceitos, incluindo perfis do Instagram](https://github.com/meta/meta-embeds-for-wordpress#supported-url-formats).

## Privacidade e publicidade profissional

Registro CRP, nome profissional, nome completo no rodapé e aviso de crise estão presentes. O site exibe diretamente o Instagram e não grava novas preferências locais; a Meta pode usar cookies próprios. Não há analytics próprio. A implementação não equivale a certificação jurídica ou auditoria integral de conformidade.

Referências consultadas em 06/11/2026: [publicidade profissional — CFP/CRP](https://transparencia.cfp.org.br/crp10/pergunta-frequente/publicidade-profissional/), [LGPD — texto atualizado](https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html).

## Publicação e pendências

Hospedagem no Sites, inicialmente privada para revisão. O acesso público precisa ser solicitado pelo cliente. Para outra hospedagem estática, envie `dist/` e atualize URLs canônicas, Open Graph, sitemap e robots. O código também é enviado ao [repositório GitHub do cliente](https://github.com/RafaelADSdev/Psicologo-Caio).

A meta PageSpeed acima de 90 não foi certificada; deve ser aferida na URL de produção acessível ao teste. Não se afirma criptografia de uma plataforma de videochamada antes de o profissional escolher a plataforma.

## Revisão visual — 06/11/2026
Após o feedback de que a primeira versão era genérica, a página ganhou abertura marinho, contraste tipográfico, fotografia maior, sequência vertical de atendimento e rodapé tipográfico. Referências visuais pesquisadas e visitadas: [Serotonin](https://www.taylorbowmanmft.com/), [Self Embrace Therapy](https://www.selfembracetherapy.com/) e [Earthbound](https://earthboundpsychotherapy.com/). Foram estudadas composição, escala de imagem e consistência de marca; textos, fotografias e alegações dessas referências não foram reutilizados.

## Acordeão de especialidades
Abertura e fechamento animam a altura real (520/400 ms), com transição do texto e rotação do ícone. Cliques durante a transição invertem o movimento a partir da altura atual. Ao terminar, a altura volta a ser automática; redimensionamento e ativação de movimento reduzido encerram a transição no estado solicitado. Sem WAAPI/JavaScript ou com movimento reduzido, mantém-se o comportamento nativo de details/summary.
