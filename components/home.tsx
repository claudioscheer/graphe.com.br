import Link from "next/link";
import Layout from "./layout";
import PostListItem from "./post-list-item";
import { SoftwareDownloads } from "./software-downloads";
import { ZoomImage } from "./zoom-image";
import postsData from "@/lib/posts.json";

const TELEGRAM_URL = "https://t.me/graphebiblesoftware";

interface Post {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  author: {
    id: string;
    name: string;
  };
}

const features = [
  {
    title: "Tela dividida",
    body: "Dá para abrir duas traduções lado a lado, ou a Bíblia e um comentário. A tela divide na horizontal ou na vertical.",
    src: "/home/divisao.jpg",
    alt: "Dois painéis da NAA lado a lado, em Hebreus, com estudos em abas",
    width: 1400,
    height: 332,
    frame: "wide" as const,
  },
  {
    title: "Números de Strong",
    body: "Dá para buscar um número de Strong, como strong:H8150. A palavra fica marcada no versículo. Se o texto tiver o número, um clique abre o dicionário.",
    src: "/home/strong.png",
    alt: "Pesquisa strong:H8150 com as ocorrências destacadas no versículo",
    width: 350,
    height: 388,
    frame: "short" as const,
  },
  {
    title: "Dicionário",
    body: "O dicionário fica do lado da Bíblia. Dá para ver a palavra, a morfologia e o significado.",
    src: "/home/dicionario.png",
    alt: "Dicionário Strong aberto em G3326, a preposição grega μετά, com a morfologia",
    width: 350,
    height: 496,
    frame: "short" as const,
  },
  {
    title: "Comentários",
    body: "O comentário abre do lado, no versículo que você está lendo. Se tiver mais de um, dá para ver juntos.",
    src: "/home/comentario.jpg",
    alt: "Comentário de Gênesis 1.21 em português, sobre a criação dos animais",
    width: 783,
    height: 584,
    frame: "wide" as const,
  },
  {
    title: "Módulos",
    body: (
      <>
        Dá para instalar bíblias, dicionários e comentários. Se você usa theWord
        ou MySword, dá para converter esses arquivos aqui. Também dá para editar
        um módulo que já está instalado. Para ver os módulos juntos, entra no{" "}
        <Link
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#222222] underline"
        >
          grupo do Telegram
        </Link>
        .
      </>
    ),
    src: "/home/modulos.png",
    alt: "Painel de módulos com Instalar Módulos, Converter Módulos e a biblioteca instalada",
    width: 345,
    height: 340,
    frame: "short" as const,
  },
];

export default function Home() {
  const posts = (postsData.posts as Post[]).map(post => ({
    id: post.id,
    title: post.title,
    subtitle: post.subtitle,
    date: post.date,
    authorId: post.author.id,
    authorName: post.author.name,
  }));

  return (
    <Layout>
      <header className="max-w-2xl">
        <h1 className="mb-4 max-w-full text-3xl font-medium tracking-tight text-[#222222] sm:text-5xl">
          Graphe
        </h1>
        <p className="text-xl leading-relaxed text-[#555555]">
          Um programa simples para estudar a Bíblia no computador. Funciona no
          Windows, no Linux e no macOS. É de graça, e o código é aberto.
        </p>
      </header>

      <div className="mt-8">
        <SoftwareDownloads />
      </div>

      <figure className="mt-10 overflow-hidden border border-[#E5E5E5] bg-white">
        <ZoomImage
          src="/home/app.jpg"
          alt="Graphe com Marcos 3 em duas traduções, o dicionário de Strong e o comentário aberto"
          width={1919}
          height={1031}
          priority
          className="h-auto w-full max-w-full"
        />
      </figure>
      <p className="mt-3 text-sm text-[#888888]">
        A tela do programa, com a Bíblia, o dicionário e um comentário abertos.
      </p>

      <section className="mt-16">
        <h2 className="mb-2 text-2xl font-medium text-[#222222]">
          O que dá para fazer
        </h2>
        <p className="max-w-2xl text-[#555555]">
          Coisas simples, para o estudo de todo dia.
        </p>

        <div className="mt-8">
          {features.map((feature, index) => {
            const flipped = index % 2 === 1;
            const text = (
              <div className={flipped ? "max-md:order-1" : undefined}>
                <h3 className="mb-2 text-xl font-medium text-[#222222]">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-[#555555]">{feature.body}</p>
              </div>
            );
            const shot = (
              <figure
                className={`max-w-full min-w-0 overflow-hidden border border-[#E5E5E5] bg-[#fefdf9] ${
                  flipped ? "max-md:order-2" : ""
                } ${
                  feature.frame === "wide"
                    ? "w-full"
                    : `w-fit max-w-full ${flipped ? "md:justify-self-end" : "md:justify-self-start"}`
                }`}
              >
                <ZoomImage
                  src={feature.src}
                  alt={feature.alt}
                  width={feature.width}
                  height={feature.height}
                  className={
                    feature.frame === "panel"
                      ? "h-[520px] w-full max-w-[350px] object-cover object-top"
                      : feature.frame === "short"
                        ? "h-auto w-full max-w-[350px]"
                        : "h-auto w-full max-w-full"
                  }
                />
              </figure>
            );

            return (
              <article
                key={feature.title}
                className={`grid min-w-0 items-center gap-8 border-t border-[#E5E5E5] py-10 ${
                  flipped
                    ? "md:grid-cols-[1fr_minmax(240px,340px)]"
                    : "md:grid-cols-[minmax(240px,340px)_1fr]"
                }`}
              >
                {flipped ? shot : text}
                {flipped ? text : shot}
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-8 border-t border-[#E5E5E5] pt-12">
        <p className="mb-3 text-sm tracking-wide text-[#888888] uppercase">
          No celular
        </p>
        <div className="grid items-center gap-8 md:grid-cols-[1fr_220px]">
          <div>
            <h2 className="mb-3 text-2xl font-medium text-[#222222]">
              Graphe Play
            </h2>
            <p className="mb-6 max-w-xl leading-relaxed text-[#555555]">
              Também tem um aplicativo para estudar a Bíblia no celular, com
              flashcards, quiz e memorização de versículos. Funciona sem
              internet.
            </p>
            <Link
              href="/play"
              className="inline-flex items-center justify-center bg-[#222222] px-8 py-4 text-sm text-white transition-colors hover:bg-[#333333]"
            >
              Ver o Graphe Play
            </Link>
          </div>
          <figure className="mx-auto w-full max-w-[220px] overflow-hidden rounded-[24px] border border-[#E5E5E5] bg-[#10182C]">
            <video
              src="/play/app.mp4"
              poster="/play/inicio.png"
              autoPlay
              muted
              loop
              playsInline
              className="h-auto w-full"
              aria-label="O Graphe Play em uso no celular"
            />
          </figure>
        </div>
      </section>

      <section className="mt-16 border-t border-[#E5E5E5] pt-12">
        <p className="mb-3 text-sm tracking-wide text-[#888888] uppercase">
          Blog
        </p>
        <h2 className="mb-2 text-2xl font-medium text-[#222222]">Estudos</h2>
        <p className="mb-8 max-w-2xl text-[#555555]">
          Também tem alguns textos aqui no site.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map(post => (
            <PostListItem key={post.id} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
