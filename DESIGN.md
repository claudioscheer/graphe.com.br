# Design system do site Graphe

Última atualização: 30 de outubro de 2026.
Status: conferido com `app/`, `components/` e `lib/links.ts`.

Escopo: `graphe.com.br`, o site institucional e de distribuição do Graphe
(software de estudo bíblico para desktop) e do Graphe Play (app Android).

Este documento é a fonte de verdade visual do site. O ponto de partida foi o
estudo de design da tela de resultado perfeito do Graphe Play:
`docs/quiz-perfect-score-options.html`, no repositório do app. A mesma
linguagem de papel, tinta, serifa grande e linhas finas foi trazida para o site,
com as adaptações necessárias para leitura na web.

## 1. Direção

**Uma mesa de estudo editorial.** O site deve parecer um caderno bem impresso,
não uma página de startup. Papel quente, tinta escura, um acento de latão e
tipografia grande fazem o trabalho. As imagens entram como evidência do
programa, em molduras finas, sem cartões flutuantes.

Princípios:

1. **A tipografia carrega a hierarquia.** Títulos em Fraunces, corpo em Outfit.
   Tamanho e espaço fazem a separação; não é preciso enfeitar.
2. **Um acento.** O latão (`--brass`) marca números, links e pequenos detalhes.
   Não usar latão em grandes áreas.
3. **Papel, não branco.** O fundo é `--paper`. O branco puro não existe na
   interface; imagens e superfícies claras usam `--cream`.
4. **Linhas finas no lugar de cartões.** Seções, listas e imagens são separadas
   por regras de 1px. Evitar sombras em blocos de conteúdo.
5. **Imagem é prova.** Capturas do programa e do app aparecem em molduras
   discretas, com legendas. Nada de ilustração decorativa.
6. **Calma.** Sem gradientes, sem glassmorphism, sem animações de entrada. O
   único movimento é feedback de interação.

## 2. Verdade do produto

- **Graphe desktop:** estudo bíblico para Windows, Linux e macOS. Gratuito, código
  aberto, com painéis divididos, números de Strong, dicionário, comentários e
  conversão de módulos theWord/MySword.
- **Graphe Play:** app Android para flashcards, quiz e memorização de versículos.
  Offline, gratuito, sem anúncios e sem conta.
- **Ações principais:** baixar o programa para Windows/macOS, escolher o pacote
  Linux, conhecer o Graphe Play e ler o blog.
- **Público:** leitores de português do Brasil que estudam a Bíblia, no desktop
  e no celular. A página deve ser rápida, legível e funcionar bem em conexões
  simples.

## 3. Cores

| Token           | Hex                  | Uso                                                     |
| --------------- | -------------------- | ------------------------------------------------------- |
| `--paper`       | `#EFE8DA`            | Fundo do site. O papel.                                 |
| `--paper-deep`  | `#E4DAC6`            | Estados sutis, fundos de apoio.                         |
| `--ink`         | `#10182C`            | Texto principal, botões primários, superfícies escuras. |
| `--ink-soft`    | `#4D586A`            | Texto secundário, legendas, metas.                      |
| `--brass`       | `#85551F`            | Números de seção, links, ícones de ação.                |
| `--cream`       | `#F4EFE4`            | Texto sobre tinta, fundo de molduras de imagem.         |
| `--navy`        | `#1B2744`            | Hover de botões primários e detalhes escuros.           |
| `--mist`        | `#D5DCEA`            | Texto secundário sobre superfícies escuras.             |
| `--peach`       | `#F3C3B0`            | Acento quente do app, usado com parcimônia.             |
| `--mint`        | `#B7EBD8`            | Sucesso/estado correto do app, quando necessário.       |
| `--line`        | `rgba(16,24,44,.18)` | Regras de 1px.                                          |
| `--line-strong` | `rgba(16,24,44,.34)` | Regras de cabeçalho e fechamento de seção.              |

Contraste medido:

- Texto principal `#10182C` sobre papel `#EFE8DA`: **14.49:1**.
- Texto secundário `#4D586A` sobre papel: **5.90:1**.
- Latão `#85551F` sobre papel: **5.19:1**.
- Creme `#F4EFE4` sobre tinta `#10182C`: **15.40:1**.
- Mist `#D5DCEA` sobre tinta: **12.83:1**.

Regras:

- Não usar preto puro nem branco puro.
- Não usar gradiente em texto, botão ou fundo.
- O latão é um acento de leitura, não uma cor de grande superfície.
- Superfícies escuras ficam reservadas às molduras do app e ao lightbox das
  imagens. A página é clara.

## 4. Tipografia

### Famílias

- **Fraunces** (serifa de display). Pesos 500 e 600 no app; 400–600 na web.
  Usada em títulos, números editoriais, citações e no wordmark. Carrega via
  `next/font/google` com a variável `--font-fraunces`. Fallback: Georgia, serif.
- **Outfit** (sans geométrica). Pesos 400–600. Usada no corpo, navegação, metas,
  botões, legendas e formulários. Carrega via `next/font/google` com a variável
  `--font-outfit`. Fallback: system-ui, sans-serif.
- **Geist Mono** apenas para código inline e blocos de código. Variável
  `--font-geist-mono`. Não usar monoespaçada como decoração.

### Escala

As classes vivem em `app/globals.css`.

| Classe / papel                           | Tamanho                          | Entrelinha | Tracking   | Peso |
| ---------------------------------------- | -------------------------------- | ---------- | ---------- | ---- |
| `.display` — wordmark do herói           | `clamp(4.5rem, 22vw, 12rem)`     | `0.82`     | `-0.04em`  | 600  |
| `.page-title` — título de página         | `clamp(3.25rem, 7vw, 5.5rem)`    | `0.98`     | `-0.035em` | 600  |
| `.section-title` — título de seção       | `clamp(2.25rem, 4.5vw, 4rem)`    | `1.02`     | `-0.03em`  | 600  |
| `.item-title` — título de item/post      | `clamp(1.5rem, 2.6vw, 2.125rem)` | `1.12`     | `-0.02em`  | 600  |
| Herói do Play                            | `clamp(3.75rem, 9.5vw, 7rem)`    | `0.90`     | `-0.04em`  | 600  |
| `.lede` — introdução e corpo de destaque | `1.125rem` (18px)                | `1.65`     | `0`        | 500  |
| `.body-large` — corpo de artigo          | `1.125rem` (18px)                | `1.75`     | `0`        | 500  |
| Corpo de feature                         | `1.125rem` (18px)                | `1.65`     | `0`        | 500  |
| Resumo de blog                           | `1rem` (16px)                    | `1.6`      | `0`        | 500  |
| `.meta` — rótulos e navegação            | `0.6875rem` (11px)               | `1.4`      | `0.16em`   | 600  |
| Legenda de imagem                        | `0.875rem` (14px)                | `1.5`      | `0`        | 400  |
| Botão                                    | `0.875rem` (14px)                | `1.2`      | `0.01em`   | 600  |
| Wordmark da nav                          | `1.6rem` (25.6px)                | `1`        | `-0.02em`  | 600  |
| Subtítulo da nav                         | `0.5625rem` (9px)                | `1.4`      | `0.18em`   | 600  |

Regras:

- Um `.display` por página, no herói.
- Textos de apoio e navegação usam `.meta` em caixa alta; o resto usa caixa de
  frase.
- Corpo de leitura nunca passa de `70ch`. O texto de features fica em `46ch` a
  `50ch`.
- Não usar negrito no corpo inteiro. Negrito só para ênfase curta.
- Itálico fica para citações bíblicas, grego e títulos de obras.
- Títulos usam `text-wrap: balance`; parágrafos usam `text-wrap: pretty`.
- Não descer abaixo de 11px em texto de interface. A única exceção é o
  subtítulo de 9px da palavra Graphe na nav, que é decorativo e redundante.

## 5. Layout e espaço

- Largura máxima: `1240px`.
- Gutter: `24px` no mobile, `40px` no desktop.
- Grid de 12 colunas no desktop. Herói do site e do Play: 7/5, a partir de
  `xl` (1280px). Entre 768px e 1279px o herói empilha, para o wordmark não
  invadir a introdução. Features: 5/7, alternando o lado da imagem, a partir de
  `md` (768px). Listas de blog: linha única.
- Padding vertical do `main`: `48px` no mobile, `64px` no desktop.
- Separação de seção: `80px` de margem superior + `48px` de padding após a
  regra. No mobile, a mesma proporção funciona; não comprimir para menos de
  `64px`.
- Linhas: `1px`; a regra entre seções usa `--line-strong`, as internas usam
  `--line`.
- Raio: `2px` em botões; `0` em molduras, imagens, listas e cartões; `2.5rem`
  apenas nas molduras de celular.
- Sombras: só em imagens grandes e molduras de celular. Receita:
  `0 32px 64px -46px rgba(16,24,44,.55)` para imagens e
  `0 42px 80px -40px rgba(16,24,44,.6)` para o celular.
- Não usar cards de conteúdo com borda + sombra. Molduras de imagem e de
  celular podem ter as duas coisas; são a exceção.
- Não usar cantos arredondados em blocos de conteúdo. A assimetria entre a
  página reta e o celular arredondado é intencional.

## 6. Componentes

### Botões

- `.btn-primary`: fundo `--ink`, texto `--cream`, borda `--ink`. Hover: fundo
  `--navy`. Usado em downloads, "Ver o Graphe Play", CTA final.
- `.btn-secondary`: fundo transparente, texto `--ink`, borda
  `--line-strong`. Hover: borda `--ink`. Usado em ações alternativas e no link
  "Baixar" da nav.
- Ambos: `padding: .9rem 1.5rem`, raio `2px`, Outfit 600 14px, ícone de 15px.
- Nunca usar botão pill. O CTA interno do app usa raio de `18dp`, não um pill.

### Links

- `.text-link`: tinta, sublinhado de 1px em `--line-strong`, offset 4px. Hover:
  latão. É o link padrão dentro de texto.
- Links de navegação usam `.meta` e uma borda inferior de 1px quando ativos.
- Não usar azul de link. O latão é o acento.

### Molduras

- `.frame`: fundo `--cream`, borda 1px `--line`, `overflow: hidden`, raio 0.
  Usada para screenshots.
- `.image-shadow`: sombra suave para a imagem principal e features.
- `.phone-frame`: fundo `--ink`, borda 1px clara, raio `2.5rem`, sombra e um
  inset superior de `2rem`. As capturas e o vídeo são recortados no topo para
  remover a barra de status do Android; o inset dá espaço para o cabeçalho do
  app sem que o canto arredondado corte o ícone de informação.
- Legendas de imagem: 14px, `--ink-soft`, `mt-3`.

### Navegação

- Sticky no topo, fundo `--paper` sólido (sem blur), borda inferior `--line`.
- Altura de conteúdo: `56px` a `72px`, com `14px` de padding vertical.
- Wordmark "Graphe" em Fraunces 600 25.6px; subtítulo "Vivendo as Escrituras"
  em meta 9px, escondido no mobile.
- Links: Blog, Play, Sobre. Ativo: borda inferior de 1px `--brass`.
- Ação de download contextual: em `/play`, o botão diz "Baixar o app" e aponta
  para a Google Play; nas outras páginas, diz "Baixar" e aponta para `/#baixar`
  (downloads do desktop). O CTA do herói do Play também aponta para a Google
  Play. A URL canônica fica em `lib/links.ts`.
- A página Sobre usa "Baixar o aplicativo desktop" e leva para `/#baixar`.
- Ação "Baixar": `.btn-secondary` compacto, escondida abaixo de `sm`.
- O logo-imagem não aparece na nav; o wordmark é a marca. O favicon continua.

### Cabeçalho de página

- Título `.page-title`, introdução `.lede`, borda inferior `--line-strong`,
  `padding-bottom: 2rem`.
- Não usar kicker/eyebrow decorativo acima do título. A home e o Play começam
  direto no título; a linha de meta que existia nesses cabeçalhos foi removida.

### Lista de posts

- Linha com borda superior `--line`, `padding: 1.75rem 0`.
- Data e autor em 12px `--ink-soft`; título `.item-title`; resumo `.lede` 16px.
- Ícone `ArrowUpRight` de 22px em `--brass` no canto.
- O link do título cobre a linha inteira com `after:absolute after:inset-0`.
- Hover: título em latão, seta se desloca 2px.

### Artigo / Markdown

- `h1`: `.page-title`.
- `h2`: Fraunces 600, `clamp(1.75rem, 3.2vw, 2.5rem)`, margem superior `3.5rem`.
- `h3`: Fraunces 600, `1.5rem`.
- Parágrafos: `.body-large`, máximo `70ch`, margem inferior `1.5rem`.
- Listas: 18px, marcadores, recuo `1.5rem`.
- Blockquote: Fraunces 600 22px itálico, borda esquerda de 1px, sem fundo.
- Código inline: fundo `rgba(16,24,44,.06)`, Geist Mono, `0.9em`.
- Notas de rodapé: 14px, `--ink-soft`, seção com borda superior.
- Links usam `.text-link`.

### Features

- Artigo em grid 5/7, alternando texto e imagem; borda superior `--line`.
- Número em Fraunces 500 30px, latão; título `.item-title`; corpo 18px.
- Imagem em `.frame`; largura total para capturas largas, `340px` para capturas
  estreitas.
- Não usar ícones genéricos. O número é a marca da sequência.

### Celular / Graphe Play

- Bloco 7/5 com texto e `.phone-frame` de até `260px`.
- Título `.section-title`; corpo `.lede`; botão primário.
- O celular é a única superfície escura grande da página.

## 7. Movimento

- O site não tem animação de entrada. O conteúdo já está visível.
- Transições de cor, borda e opacidade: `160ms` a `200ms`, ease-out.
- Hover de setas: deslocamento de `2px`.
- Lightbox de imagem: fade de `200ms` e escala de `95%` para `100%`, fundo
  `--ink` a 95%.
- `prefers-reduced-motion: reduce` desliga transições e animações.
- Não usar parallax, contadores animados, confete ou vídeo de fundo.

## 8. Conteúdo e voz

- Português do Brasil, tratamento por "você".
- Frases curtas, diretas, sem exclamação e sem hipérbole.
- Preferir "Dá para..." a "Você pode..." quando o tom for de ferramenta.
- Manter os termos técnicos do produto: Strong, módulos, theWord, MySword,
  AppImage, .deb, .dmg, .exe.
- Títulos em caixa de frase. Metas em caixa alta.
- Não prometer o que não existe: o Google Play aparece como "em breve" até o
  app ser publicado.
- A frase de marca é **Vivendo as Escrituras.**
- Exemplos aprovados: "Um programa simples para estudar a Bíblia no computador.",
  "É de graça, e o código é aberto.", "Coisas simples, para o estudo de todo dia."

## 9. Acessibilidade

- Contraste mínimo: 4.5:1 para texto normal; 3:1 para texto grande. As combinações
  acima passam.
- Foco visível: contorno de 2px `--brass`, offset 3px, em todos os links e
  botões.
- Navegação por teclado: a nav sticky, os links de download e os títulos das
  listas precisam funcionar sem mouse.
- Imagens com `alt` descritivo; imagens decorativas com `alt=""`.
- Áreas de toque de no mínimo 44px de altura nos botões e links principais.
- A nav tem `aria-current="page"` no link ativo.
- Não depender só de cor para estado: links têm sublinhado; o botão ativo tem
  borda inferior.
- O vídeo do app é `muted`, `loop`, `playsInline` e tem `aria-label`.
- O lightbox tem `role="dialog"`, `aria-modal`, fecha com Escape e clique fora.

## 10. Implementação

- Tokens e classes: `app/globals.css`.
- Fontes: `app/layout.tsx` (`Fraunces`, `Outfit`, `Geist_Mono` via
  `next/font/google`; variáveis `--font-fraunces`, `--font-outfit`,
  `--font-geist-mono`).
- Layout e footer: `components/layout.tsx`.
- Nav: `components/navbar.tsx`.
- Home: `components/home.tsx`.
- Play: `app/play/page.tsx`.
- Lista de posts: `components/post-list-item.tsx`.
- Artigo: `components/post-static.tsx`, `components/post.tsx`,
  `components/markdown-renderer.tsx`.
- Downloads: `components/software-downloads.tsx`.
- Links externos do app: `lib/links.ts` (Google Play, GitHub e Telegram). A
  listagem da Google Play ainda não está pública; o link canônico já está no
  arquivo e passa a funcionar quando o app for publicado.
- Lightbox: `components/zoom-image.tsx`.
- Não usar cores hex diretamente em componentes novos. Usar as variáveis do
  tema (`text-ink`, `bg-paper`, `border-line`, `text-brass`, etc.).
- Tailwind 4: as cores estão em `@theme inline`; as classes de tipografia estão
  em `@layer components`.

## 11. Decisões

- **Fraunces + Outfit** em vez de Geist: continuidade direta com o app Graphe
  Play e com o estudo de design aprovado. Geist continua só no código.
- **Papel #EFE8DA** em vez do antigo #F7F2EC: mais quente, mais próximo do
  papel do estudo e do app.
- **Latão #85551F** como acento: contraste de 5.19:1 no papel, sem competir com
  a tinta. O pêssego do app é claro demais para texto pequeno no site.
- **Título gigante** no herói: o site é pequeno; a marca pode ocupar a tela.
  É o mesmo gesto do "5 de 5" do app.
- **Sem cards**: listas e imagens com regras de 1px deixam o conteúdo respirar.
- **Botões retos, celulares redondos**: a página é editorial; o app é físico.
  O contraste é intencional.
- **Download contextual**: em `/play`, a ação baixa o app; em qualquer outra
  página, baixa o desktop. A pessoa nunca é levada ao produto errado.
- **Sem anúncios antes de sem conta**: a promessa principal do Graphe Play é ser
  grátis e não exibir anúncios. "Sem conta" continua verdadeiro, mas é
  secundário na hierarquia da mensagem.
- **Corpo de 18px**: leitura confortável em desktop e mobile; a referência é o
  corpo do estudo de design.
- **Imagens sem arredondamento**: capturas de software são documentos, não
  cartões de marketing.
- **Blog em linhas**: dois ou três textos não precisam de cards; a lista
  funciona em qualquer quantidade.

## 12. Superfícies irmãs

O Graphe Play tem seu próprio `DESIGN.md` no repositório do app. As duas
superfícies compartilham:

- Fraunces e Outfit.
- Tinta `#10182C`, creme `#F4EFE4` e mist `#D5DCEA`.
- A ideia de que a tipografia é a interface.

Elas divergem de propósito:

- O site é papel (`#EFE8DA`) com tinta escura; o app é tinta com creme.
- O site usa latão para números e links; o app usa pêssego e menta para estados
  de resposta.
- O site não tem animação de entrada; o app tem o troféu do resultado perfeito.

| Papel            | Site                                               | App                                      |
| ---------------- | -------------------------------------------------- | ---------------------------------------- |
| Display          | Fraunces 600, `4.5rem`–`12rem`, tracking `-0.04em` | Fraunces 600, `208sp` no placar perfeito |
| Título de página | Fraunces 600, `3.25rem`–`5.5rem`                   | Fraunces 600, `34sp` (`headlineLarge`)   |
| Corpo            | Outfit 500, `18px`/`1.65`                          | Outfit 500, `16sp`/`22sp`                |
| Labels           | Outfit 600, `11px`, tracking `0.16em`, caixa alta  | Outfit 500, `14sp`/`18sp`                |
| Fundo            | Papel `#EFE8DA`                                    | Tinta `#10182C`                          |
| Acento           | Latão `#85551F`                                    | Pêssego `#F3C3B0` e menta `#B7EBD8`      |
| Superfície       | Papel com molduras de `1px`                        | `Navy`/`Sheet` com raios `16dp`–`28dp`   |
| Movimento        | Feedback de `160ms`–`200ms`                        | Troféu em loops de `6s`, `9s` e `4.6s`   |

A diferença de escala é intencional: a web lê à distância e precisa de títulos
maiores; o app cabe na mão e usa `16sp` para a UI. As famílias, os papéis e a
hierarquia são os mesmos.
