---
name: Caio Leonardi
description: Psicologia clínica online com uma presença sóbria e acolhedora.
colors:
  primary: "#0B2545"
  secondary: "#134074"
  accent: "#1D4ED8"
  accent-hover: "#1E40AF"
  bg-main: "#FFFFFF"
  bg-alt: "#F8FAFC"
  text-main: "#0F172A"
  text-muted: "#475569"
  border: "#DCE3EB"
  focus: "#527DFA"
typography:
  display:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(46px,4.55vw,64px)"
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(36px,3.6vw,50px)"
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: "-.035em"
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  control: "6px"
  surface: "8px"
spacing:
  small: "12px"
  medium: "18px"
  large: "25px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg-main}"
    typography: "{typography.label}"
    rounded: "{rounded.surface}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-outline:
    backgroundColor: "{colors.bg-main}"
    textColor: "{colors.primary}"
    rounded: "{rounded.surface}"
  button-outline-hover:
    backgroundColor: "{colors.bg-alt}"
  button-hero:
    backgroundColor: "{colors.bg-main}"
    textColor: "{colors.primary}"
    rounded: "{rounded.surface}"
    padding: "16px 21px"
  button-navigation:
    textColor: "{colors.primary}"
    rounded: "{rounded.surface}"
    padding: "11px 17px"
---

# Design System: Caio Leonardi

## Overview

**Creative North Star: "Uma presença acolhedora"**

A presença profissional é sóbria, clara e próxima. A identidade se apoia no azul-marinho, em títulos serifados e no retrato autêntico fornecido, preservando a marca CL. O nome descritivo acima resume o resultado construído, sem acrescentar uma nova direção à identidade aprovada.

A abertura marinho e o rodapé escuro emolduram áreas brancas e superfícies claras. O título branco com itálico azul-claro, o retrato amplo com legenda branca e o nome em grande escala no rodapé dão personalidade editorial à identidade. Textos e divisórias organizam o conteúdo com mais frequência que caixas decorativas. Esta documentação registra `dist/index.html` e `dist/styles.css`; valores pontuais não constituem novos tokens.

**Key Characteristics:**
- Azul-marinho em grandes campos, branco na abertura e cobalto nas ações sobre fundo claro.
- Lora para títulos; Inter para leitura e interface.
- Espaçamento amplo, divisórias finas, etapas verticais e conteúdo nativo do Instagram e movimento breve de entrada.
- Fotografia autêntica e marca fornecida.

## Colors

A paleta é fria e contida, com contraste entre a estrutura escura e os fundos muito claros.

### Primary
- **Marinho institucional** (`primary`): títulos, marca, abertura, faixa de abordagem e rodapé.
- **Cobalto de ação** (`accent`, `accent-hover`): botões principais sobre fundo claro e resposta ao passar o ponteiro. O foco usa o azul mais luminoso de `focus`.

### Secondary
- **Azul de acolhimento** (`secondary`): ênfases em itálico, links textuais, números das etapas e ícones.

### Neutral
- **Branco** (`bg-main`): fundo principal, painel de conteúdo e texto sobre botões.
- **Névoa clara** (`bg-alt`): faixas de conteúdo e ação secundária em hover.
- **Ardósia escura** (`text-main`): texto principal.
- **Ardósia suave** (`text-muted`): parágrafos e informação auxiliar.
- **Divisória fria** (`border`): contornos e separações.

### Named Rules
**The Action Contrast Rule.** O cobalto identifica ações sobre fundos claros; na abertura marinho a ação é branca. O foco mantém seu azul luminoso próprio.

## Typography

**Display Font:** Lora, com Georgia e serif como alternativas.
**Body Font:** Inter, com Arial e sans-serif como alternativas.

**Character:** A serifa traz uma leitura humana e reflexiva. A interface sem serifa mantém rótulos e navegação diretos. As fontes são servidas localmente; Lora usa peso regular e Inter usa regular e semibold.

### Hierarchy
- **Display:** papel e valores no frontmatter; no celular o título principal usa (clamp(40px,7vw,52px)), com entrelinha (1.16), e (37px) abaixo de (370px). Na abertura os títulos são brancos, com ênfase em azul-claro.
- **Headline:** papel e valores no frontmatter; títulos de seção usam (36px) abaixo de (760px), com ajustes por seção.
- **Title:** títulos de etapas e acordeão usam Lora, (22–24px).
- **Body:** o estilo global está no frontmatter. A explicação principal usa (16px) de forma consistente na abertura, apresentação, etapas, especialidades, acordeão, abordagem, introdução do Instagram e fechamento, inclusive no celular. Metadados, notas e controles mantêm tamanhos menores. A introdução serifada usa (26px) e entrelinha (1.5).
- **Label:** o papel do frontmatter corresponde ao botão principal. A navegação usa (12px); informações auxiliares do site variam entre (10–12px).

### Named Rules
**The Two Voices Rule.** Títulos e passagens reflexivas usam Lora; navegação, ações e metadados usam Inter.

## Layout

O contêiner central tem largura máxima de (1200px) e margem lateral total de (96px). Abaixo de (1150px), essa margem total cai para (72px); abaixo de (760px), para (40px). As seções usam espaço vertical de (116px), passando a (85px) abaixo de (940px) e (68px) abaixo de (760px).

A abertura de desktop divide texto e retrato em duas colunas (1.15fr / 1fr), com intervalo de (70px). O campo marinho ocupa toda a largura; o retrato tem altura de (620px) incluindo a área de legenda. Abaixo de (760px), empilha texto e retrato, preservando a chamada antes da imagem. As seções de apresentação e especialidades também passam de duas para uma coluna. As etapas permanecem uma sequência vertical numerada, ao lado da introdução no desktop e abaixo dela no celular. A seção Instagram divide introdução e painel em colunas (.85fr / 1.25fr), com intervalo de (85px); abaixo de (1000px), usa (.85fr / 1.15fr) e intervalo de (45px). Abaixo de (760px), empilha introdução e painel com intervalo de (26px). O fechamento divide título e ação no desktop e empilha no celular.

O cabeçalho fixo ao rolar tem altura de (94px), reduzida a (78px) no celular. A navegação se recolhe em menu abaixo de (760px); a ação lateral do cabeçalho desaparece abaixo de (940px).

## Elevation & Depth

A base é plana: alternância tonal, divisórias finas e fotografia criam hierarquia. Sombras suaves aparecem nos botões em hover, no menu móvel e nos controles flutuantes. Ao rolar além de (20px), o cabeçalho recebe uma sombra suave. Não há sombras duras deslocadas. Os valores exatos dessas exceções ficam no sidecar.

### Named Rules
**The Quiet Surface Rule.** Conteúdo institucional permanece plano; sombra suave serve à interação ou à separação de controles sobrepostos.

## Shapes

Botões e painel do Instagram compartilham cantos suavizados, definidos por `rounded.surface`; o botão do menu usa `rounded.control`. Contornos são finos, geralmente (1px). O retrato tem cantos superiores arredondados e uma legenda branca na base, com nome marinho. Linhas finas deslocadas junto à foto sugerem enquadramento editorial. O botão flutuante de WhatsApp é circular.

A faixa de abordagem usa um desenho SVG de linhas curvas entrelaçadas, junto à citação serifada. O desenho permanece um motivo local da abordagem.

## Components

### Buttons

Ações sólidas e compactas, com texto semibold e ícones SVG lineares.
- **Primary:** cores, preenchimento e raio no frontmatter; altura mínima (58px), intervalo entre itens (13px). Na abertura a variante branca inverte o contraste, com hover azul muito claro.
- **Small:** altura mínima (43px), preenchimento (11px 17px), texto (11px).
- **Outline:** fundo branco, contorno de divisória e texto marinho; hover com fundo claro.
- **Hover / Focus:** transições de fundo e sombra em (.2s). Foco visível com contorno azul luminoso de (3px), afastado (5px).
- **Reduced motion:** a preferência de movimento reduzido desativa animações, transições e rolagem suave, incluindo movimentos de hover. Animações em execução são canceladas quando a preferência muda.
- **Motion:** a abertura usa entradas curtas e escalonadas para selo, título, parágrafo e botão; o retrato revela seu recorte e luminosidade, seguido pela legenda. Introduções de seção entram uma vez ao chegar à área visível; as etapas entram lateralmente. Os caminhos SVG do encontro se desenham por seu comprimento real. O conteúdo permanece visível sem JavaScript ou suporte às animações.

### Respostas de interação

Setas de botões e links avançam (4px) em hover; botões respondem à pressão com deslocamento vertical de (1px). O contato flutuante sobe (4px) em hover. As transições espaciais usam aproximadamente (.25s) e são desligadas com movimento reduzido. O movimento de leitura é pontual, sem repetição contínua.

### Conteúdo do Instagram

O painel incorpora o perfil nativo de `@caioleonardi.psi`, com borda fria fina, cantos de superfície e recorte do conteúdo. A tipografia e o conteúdo dentro do iframe pertencem ao Instagram e não definem os tokens locais.

O iframe nativo já está presente no HTML, com carregamento automático adiado pelo navegador (`loading="lazy"`). Não há botão de permissão, painel de consentimento, preferências salvas ou banner de cookies. O usuário encontra os posts diretamente na seção, conforme o serviço externo os disponibiliza. Um link abaixo do painel permite abrir o perfil quando a incorporação não aparece.

O iframe tem altura de (680px) no desktop e (440px) abaixo de (760px). São dimensões específicas desta integração, não tokens de contêiner. O conteúdo incorporado mantém sua própria interface e seu próprio comportamento.

### Navigation

Marca à esquerda, links horizontais e ação contornada à direita. A ação do cabeçalho ganha fundo marinho e texto branco em hover. Hover dos links em cobalto. No celular, o botão de menu abre uma lista vertical sob o cabeçalho, com links de (14px) e área de toque ampliada. O foco segue o contorno global. Os links recebem uma linha inferior progressiva; o menu móvel abre com recorte breve. A atualização da sombra do cabeçalho acompanha a rolagem com processamento limitado por quadro.

### Faixa de abordagem e rodapé

A faixa escura reúne desenho SVG de encontro, citação grande e texto claro em duas colunas. No celular o desenho aparece antes do texto. O rodapé marinho repete a identidade em grande escala: nome em Lora com tamanho fluido (clamp(56px,7.2vw,96px)), seguido por informações e divisórias claras discretas.

### Acordeão de especialidades

Elementos nativos `details` e `summary`, separados por divisórias. O título serifado é acompanhado por um sinal de expansão, girado (45deg) quando aberto. A primeira entrada inicia expandida. O marcador padrão do navegador é ocultado. A altura real expande em (540ms) e recolhe em (440ms), com curva cubic-bezier(.4,0,.2,1). O texto acompanha em (420/260ms), e o ícone gira em (440ms). Abrir uma especialidade inicia o fechamento da anterior. Cliques rápidos invertem a transição a partir da altura atual. Ao terminar, remove-se a altura fixa; mudança de largura ou ativação de movimento reduzido finaliza o estado solicitado. Sem suporte à animação ou com movimento reduzido, usa a interação nativa.

### Exceções locais aprovadas

O selo de atendimento online acima do título é exigido pelo usuário e permanece uma exceção da abertura, sem virar uma regra de sobrancelhas para novas seções. O verde reconhecível do WhatsApp pertence apenas ao controle flutuante de contato. O painel do Instagram aparece automaticamente e mantém uma alternativa de acesso direto; a newsletter e os antigos cartões editoriais foram removidos.

## Do's and Don'ts

### Do:
- **Do** preservar a marca CL e o retrato autêntico fornecido.
- **Do** usar marinho para estrutura, ação branca na abertura e cobalto para ações sobre fundos claros.
- **Do** manter títulos em Lora e interface em Inter.
- **Do** preservar o foco visível e a preferência de movimento reduzido.
- **Do** manter o Instagram nativo visível automaticamente com carregamento adiado e link direto alternativo.

### Don't:
- **Don't** transformar o selo obrigatório da abertura em um padrão de sobrancelhas para novas seções.
- **Don't** usar o verde do WhatsApp como nova cor institucional.
- **Don't** documentar textos auxiliares muito pequenos como uma escala recomendada para novas telas.
- **Don't** simular publicações com cartões locais ou apresentar a incorporação como conteúdo controlado pelo site.

Não canonizado: o sinal tipográfico de expansão do acordeão e os metadados locais de (8–10px) presentes em regras locais não são modelos para novos componentes; o primeiro deve ceder a um ícone SVG em trabalhos futuros e os segundos exigem avaliação de legibilidade. O selo obrigatório permanece apenas uma exceção aprovada pelo usuário.
