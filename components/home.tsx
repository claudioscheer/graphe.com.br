import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
          className="text-link"
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
      <header>
        <div className="grid gap-10 pt-10 lg:pt-14 xl:grid-cols-12 xl:gap-12">
          <div className="xl:col-span-7">
            <h1 className="display text-ink">Graphe</h1>
            <p className="text-ink-soft mt-5 font-serif text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
              Vivendo as Escrituras.
            </p>
          </div>

          <div className="xl:col-span-5 xl:pb-2">
            <p className="lede max-w-[42ch]">
              Um programa simples para estudar a Bíblia no computador. Funciona
              no Windows, no Linux e no macOS. É de graça, e o código é aberto.
            </p>
            <div id="baixar" className="mt-8 scroll-mt-28">
              <SoftwareDownloads />
            </div>
            <p className="meta mt-5 text-[10px]">
              Grátis · Código aberto · Sem conta
            </p>
          </div>
        </div>
      </header>

      <figure className="frame image-shadow mt-12 lg:mt-16">
        <ZoomImage
          src="/home/app.jpg"
          alt="Graphe com Marcos 3 em duas traduções, o dicionário de Strong e o comentário aberto"
          width={1919}
          height={1031}
          priority
          className="h-auto w-full max-w-full"
        />
      </figure>
      <p className="text-ink-soft mt-3 text-sm leading-[1.5]">
        A tela do programa, com a Bíblia, o dicionário e um comentário abertos.
      </p>

      <section className="border-line-strong mt-20 border-t pt-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="section-title lg:col-span-7">O que dá para fazer</h2>
          <p className="lede max-w-md lg:col-span-5">
            Coisas simples, para o estudo de todo dia.
          </p>
        </div>

        <div className="mt-10">
          {features.map((feature, index) => {
            const flipped = index % 2 === 1;
            const text = (
              <div className={`md:col-span-5 ${flipped ? "md:order-2" : ""}`}>
                <div className="flex items-baseline gap-4">
                  <span className="text-brass font-serif text-3xl font-medium tracking-[-0.03em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="item-title">{feature.title}</h3>
                </div>
                <div className="lede mt-4 max-w-[46ch]">{feature.body}</div>
              </div>
            );
            const shot = (
              <figure
                className={`frame image-shadow md:col-span-7 ${
                  flipped ? "md:order-1" : ""
                } ${
                  feature.frame === "wide"
                    ? "w-full"
                    : `w-full max-w-[340px] ${
                        flipped ? "md:mr-0 md:ml-auto" : "md:mr-auto md:ml-0"
                      }`
                }`}
              >
                <ZoomImage
                  src={feature.src}
                  alt={feature.alt}
                  width={feature.width}
                  height={feature.height}
                  className="h-auto w-full"
                />
              </figure>
            );

            return (
              <article
                key={feature.title}
                className="border-line grid min-w-0 gap-8 border-t py-12 md:grid-cols-12 md:items-center md:gap-12"
              >
                {flipped ? shot : text}
                {flipped ? text : shot}
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-line-strong mt-20 grid gap-10 border-t pt-12 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-7">
          <p className="meta text-brass">No celular</p>
          <h2 className="section-title mt-3">Graphe Play</h2>
          <p className="lede mt-5 max-w-xl">
            Também tem um aplicativo para estudar a Bíblia no celular, com
            flashcards, quiz e memorização de versículos. É grátis, sem anúncios
            e funciona sem internet.
          </p>
          <div className="mt-8">
            <Link href="/play" className="btn btn-primary">
              Ver o Graphe Play
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <figure className="phone-frame mx-auto w-full max-w-[260px] lg:col-span-5">
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
      </section>

      <section className="border-line-strong mt-20 border-t pt-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="section-title">Blog</h2>
            <p className="lede mt-4 max-w-2xl">
              Também tem alguns textos aqui no site.
            </p>
          </div>
          <Link
            href="/blog"
            className="meta text-ink hover:text-brass inline-flex items-center gap-2 transition-colors"
          >
            Todos os textos
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8">
          {posts.map(post => (
            <PostListItem key={post.id} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
