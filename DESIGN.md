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
- Espaçamento amplo, divisórias finas, etapas verticais e integração de conteúdo com consentimento.
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
- **Title:** títulos de etapas e acordeão usam Lora, (22–24px); o painel de permissão usa título serifado de (28px) na base e (26px) no celular.
- **Body:** o estilo global está no frontmatter. A explicação principal usa (16px) de forma consistente na abertura, apresentação, etapas, especialidades, acordeão, abordagem, introdução do Instagram e fechamento, inclusive no celular. Metadados, notas e controles mantêm tamanhos menores. A introdução serifada usa (26px) e entrelinha (1.5).
- **Label:** o papel do frontmatter corresponde ao botão principal. A navegação usa (12px); informações auxiliares do site variam entre (10–12px).

### Named Rules
**The Two Voices Rule.** Títulos e passagens reflexivas usam Lora; navegação, ações e metadados usam Inter.

## Layout

O contêiner central tem largura máxima de (1200px) e margem lateral total de (96px). Abaixo de (1150px), essa margem total cai para (72px); abaixo de (760px), para (40px). As seções usam espaço vertical de (116px), passando a (85px) abaixo de (940px) e (68px) abaixo de (760px).

A abertura de desktop divide texto e retrato em duas colunas (1.15fr / 1fr), com intervalo de (70px). O campo marinho ocupa toda a largura; o retrato tem altura de (620px) incluindo a área de legenda. Abaixo de (760px), empilha texto e retrato, preservando a chamada antes da imagem. As seções de apresentação e especialidades também passam de duas para uma coluna. As etapas permanecem uma sequência vertical numerada, ao lado da introdução no desktop e abaixo dela no celular. A seção Instagram divide introdução e painel em colunas (.85fr / 1.25fr), com intervalo de (85px); abaixo de (1000px), usa (.85fr / 1.15fr) e intervalo de (45px). Abaixo de (760px), empilha introdução e painel com intervalo de (26px). O fechamento divide título e ação no desktop e empilha no celular.

O cabeçalho fixo ao rolar tem altura de (94px), reduzida a (78px) no celular. A navegação se recolhe em menu abaixo de (760px); a ação lateral do cabeçalho desaparece abaixo de (940px).

## Elevation & Depth

A base é plana: alternância tonal, divisórias finas e fotografia criam hierarquia. Sombras suaves aparecem nos botões em hover, no menu móvel e nos controles flutuantes. Não há sombras duras deslocadas. Os valores exatos dessas exceções ficam no sidecar.

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
- **Reduced motion:** a preferência de movimento reduzido desativa transições, animação e rolagem suave. Sem essa preferência, o retrato entra em (.8s), com deslocamento vertical de (10px) e mudança sutil de luminosidade.

### Conteúdo do Instagram

O painel incorpora o perfil nativo de `@caioleonardi.psi`, com borda fria fina, cantos de superfície e recorte do conteúdo. A tipografia e o conteúdo dentro do iframe pertencem ao Instagram e não definem os tokens locais.

Antes da autorização, uma superfície clara apresenta ícone SVG, título Lora, explicação, botão de permissão e link direto alternativo. O painel de permissão tem altura mínima de (470px), preenchimento de (42px 32px), texto de (13px) e botão com altura mínima de (52px). No celular, usa altura mínima de (450px) e preenchimento de (32px 22px). A altura do iframe é específica da integração e deve acompanhar o CSS entregue, sem virar um token de contêiner.

O iframe só é criado após a escolha explícita de permitir Instagram; com permissão lembrada, aguarda a proximidade da seção para carregar. A escolha de somente necessários mantém a apresentação de permissão. As preferências podem ser reabertas no rodapé. Um link abaixo do painel permite abrir o perfil quando a incorporação não aparece. A decisão salva usa a versão atual de preferências; não representa uma autorização genérica a outras integrações.

### Navigation

Marca à esquerda, links horizontais e ação contornada à direita. A ação do cabeçalho ganha fundo marinho e texto branco em hover. Hover dos links em cobalto. No celular, o botão de menu abre uma lista vertical sob o cabeçalho, com links de (14px) e área de toque ampliada. O foco segue o contorno global.

### Faixa de abordagem e rodapé

A faixa escura reúne desenho SVG de encontro, citação grande e texto claro em duas colunas. No celular o desenho aparece antes do texto. O rodapé marinho repete a identidade em grande escala: nome em Lora com tamanho fluido (clamp(56px,7.2vw,96px)), seguido por informações e divisórias claras discretas.

### Acordeão de especialidades

Elementos nativos `details` e `summary`, separados por divisórias. O título serifado é acompanhado por um sinal de expansão, girado (45deg) quando aberto. A primeira entrada inicia expandida. O marcador padrão do navegador é ocultado.

### Exceções locais aprovadas

O selo de atendimento online acima do título é exigido pelo usuário e permanece uma exceção da abertura, sem virar uma regra de sobrancelhas para novas seções. O verde reconhecível do WhatsApp pertence apenas ao controle flutuante de contato. O painel do Instagram mantém sua permissão e alternativa de acesso visíveis; a newsletter e os antigos cartões editoriais foram removidos.

## Do's and Don'ts

### Do:
- **Do** preservar a marca CL e o retrato autêntico fornecido.
- **Do** usar marinho para estrutura, ação branca na abertura e cobalto para ações sobre fundos claros.
- **Do** manter títulos em Lora e interface em Inter.
- **Do** preservar o foco visível e a preferência de movimento reduzido.
- **Do** apresentar a permissão do Instagram antes de carregar conteúdo externo e manter o link direto alternativo.

### Don't:
- **Don't** transformar o selo obrigatório da abertura em um padrão de sobrancelhas para novas seções.
- **Don't** usar o verde do WhatsApp como nova cor institucional.
- **Don't** documentar textos auxiliares muito pequenos como uma escala recomendada para novas telas.
- **Don't** simular publicações com cartões locais ou apresentar a incorporação como conteúdo controlado pelo site.

Não canonizado: o sinal tipográfico de expansão do acordeão e os metadados locais de (8–10px) presentes em regras locais não são modelos para novos componentes; o primeiro deve ceder a um ícone SVG em trabalhos futuros e os segundos exigem avaliação de legibilidade. O selo obrigatório permanece apenas uma exceção aprovada pelo usuário.
