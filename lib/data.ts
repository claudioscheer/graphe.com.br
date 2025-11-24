export interface Author {
  id: string
  name: string
  bio: string
}

export interface Post {
  id: string
  title: string
  subtitle?: string
  date: string
  authorId: string
  authorName: string
  content: string
}

export const authors: Author[] = [
  {
    id: "joao-santos",
    name: "João Santos",
    bio: "Teólogo e estudioso das Escrituras. Dedica-se ao estudo da inspiração bíblica e da doutrina cristã reformada, buscando sempre trazer clareza aos ensinamentos fundamentais da fé.",
  },
  {
    id: "maria-oliveira",
    name: "Maria Oliveira",
    bio: "Escritora e professora de estudos bíblicos. Apaixonada pela aplicação prática da Palavra de Deus na vida diária, enfatiza a santificação e o crescimento espiritual constante.",
  },
]

export const posts: Post[] = [
  {
    id: "inspiracao-escrituras",
    title: "A inspiração das Escrituras e sua autoridade",
    subtitle: "Como Deus nos fala através da Sua Palavra",
    date: "15 de Janeiro, 2025",
    authorId: "joao-santos",
    authorName: "João Santos",
    content: `
Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça (2 Timóteo 3:16). Esta é a base da nossa fé e confiança nas Sagradas Escrituras.

## O significado da inspiração

Quando falamos que a Bíblia é inspirada, não estamos dizendo que é meramente um texto religioso bem escrito. Estamos afirmando que Deus, através do Espírito Santo, guiou os autores humanos de tal forma que suas palavras são as próprias palavras de Deus.

### Inspiração verbal e plenária

A doutrina da inspiração não se aplica apenas aos conceitos gerais, mas às próprias palavras. Cada parte da Escritura, não apenas algumas porções selecionadas, é inspirada por Deus.

### Autoridade divina

Por ser inspirada por Deus, a Escritura carrega Sua autoridade. Não é a autoridade de homens, mas do próprio Deus que fala através dela.

## Implicações práticas

Se cremos que a Bíblia é a Palavra de Deus, devemos:

- Ler e estudar regularmente
- Submeter nossos pensamentos a ela
- Obedecer seus mandamentos
- Confiar em suas promessas

### A suficiência das Escrituras

Deus nos deu tudo o que precisamos para a vida e a piedade através de Sua Palavra. Não precisamos de revelações extras ou novas doutrinas.

## Nossa resposta

Diante desta verdade, nossa única resposta apropriada é reverência, obediência e gratidão. Deus escolheu nos falar, e Suas palavras são preciosas.

> "A tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho." — Salmos 119:105
    `,
  },
  {
    id: "santificacao-diaria",
    title: "Sobre a prática diária da santificação",
    subtitle: "Crescendo em santidade pela graça de Deus",
    date: "10 de Janeiro, 2025",
    authorId: "maria-oliveira",
    authorName: "Maria Oliveira",
    content: `
A santificação é o processo contínuo pelo qual o Espírito Santo nos transforma à imagem de Cristo. Não é um evento único, mas uma jornada diária de crescimento espiritual.

## O que é santificação

Santificação significa "ser separado" ou "tornar-se santo". É tanto um ato instantâneo no momento da conversão quanto um processo gradual ao longo da vida cristã.

### Obra de Deus

Embora sejamos chamados a buscar santidade, a santificação é fundamentalmente obra de Deus em nós. É Ele quem produz em nós tanto o querer quanto o realizar.

## Meios de graça

Deus estabeleceu meios pelos quais Ele opera nossa santificação:

1. A leitura e meditação na Palavra
2. A oração constante
3. A comunhão com outros crentes
4. A participação nos sacramentos
5. O exercício das disciplinas espirituais

### A disciplina da oração

A oração não é apenas pedir coisas a Deus, mas comunhão íntima com Ele. É nesta comunhão que somos transformados.

### A importância da Palavra

Não podemos crescer em santidade sem nos alimentar regularmente da Palavra de Deus. Ela é nosso alimento espiritual.

## Perseverança

A santificação requer perseverança. Haverá lutas, quedas e desânimos. Mas Deus é fiel e completará a boa obra que começou em nós.

A santidade não é perfeição sem pecado nesta vida, mas o crescimento constante em conformidade com Cristo, dependendo sempre de Sua graça.
    `,
  },
  {
    id: "cristo-fundamento",
    title: "Cristo como fundamento da fé cristã",
    subtitle: "A centralidade de Jesus em tudo",
    date: "5 de Janeiro, 2025",
    authorId: "joao-santos",
    authorName: "João Santos",
    content: `
O cristianismo não é apenas um conjunto de regras morais ou uma filosofia de vida. É uma religião centrada em uma pessoa: Jesus Cristo, o Filho de Deus encarnado.

## A pessoa de Cristo

Jesus é totalmente Deus e totalmente homem. Esta verdade, conhecida como a união hipostática, é fundamental para nossa salvação.

### Verdadeiramente Deus

Jesus não é apenas um grande profeta ou mestre moral. Ele é Deus encarnado, a segunda pessoa da Trindade, que existiu eternamente com o Pai.

### Verdadeiramente homem

Jesus também é verdadeiramente humano. Ele experimentou todas as nossas tentações, sofreu, chorou e morreu. Mas Ele o fez sem pecado.

## A obra de Cristo

A obra salvadora de Cristo tem dois aspectos principais:

1. Sua vida de obediência perfeita
2. Sua morte substitutiva na cruz

### Obediência ativa

Cristo obedeceu perfeitamente à Lei de Deus em nosso lugar, conquistando a justiça que nos é creditada pela fé.

### Obediência passiva

Na cruz, Cristo sofreu o castigo que nossos pecados mereciam, satisfazendo a justiça de Deus e nos reconciliando com Ele.

## Nossa resposta

Conhecer Cristo não é apenas ter informação sobre Ele, mas confiar Nele pessoalmente como Salvador e Senhor. É colocar toda nossa esperança e confiança em Sua obra consumada.

Fora de Cristo não há salvação. Nele, porém, temos tudo: perdão, vida eterna, paz com Deus e esperança segura.

> "E não há salvação em nenhum outro, pois debaixo do céu não existe nenhum outro nome dado aos homens pelo qual devamos ser salvos." — Atos 4:12
    `,
  },
]
