import type { ReactNode } from "react";
import Link from "next/link";
import Layout from "@/components/layout";
import { ZoomImage } from "@/components/zoom-image";
import { generatePageMetadata } from "@/lib/metadata";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  PLAY_GITHUB_URL,
  PLAY_STORE_URL,
  PLAY_TELEGRAM_URL,
} from "@/lib/links";

export const metadata = generatePageMetadata({
  title: "Graphe Play",
  description:
    "Graphe Play é o app gratuito e sem anúncios para estudar a Bíblia no celular, com flashcards, quiz e memorização de versículos.",
  path: "/play",
});

const features = [
  {
    title: "Flashcards",
    body: "A carta mostra a pergunta. Você vira, responde e marca se acertou ou errou. A próxima carta sai do mesmo estudo que você escolheu.",
    src: "/play/flashcards.png",
    alt: "Carta de flashcard com uma pergunta de Êxodo 1",
  },
  {
    title: "A resposta",
    body: "No verso está a resposta e a referência do versículo. Toque na referência para ler o texto.",
    src: "/play/resposta.png",
    alt: "Verso da carta com a resposta e a referência do versículo",
  },
  {
    title: "Quiz",
    body: "Você escolhe quantas perguntas quer fazer. No fim, dá para ver quantas acertou e quais errou, com a resposta certa, para continuar estudando. Quando acerta tudo, o placar ganha um troféu. Dá para fazer o mesmo quiz com os amigos e comparar quem saiu melhor.",
    src: "/play/perfeito.png",
    alt: "Tela de resultado 20 de 20 com um troféu desenhado em linha",
  },
  {
    title: "Memorizar",
    body: "A carta mostra o versículo. Você tenta lembrar e confere o texto, até guardar a passagem. Dá para escolher só os versículos que você quer memorizar, por exemplo para o fim de semana ou para uma pregação. O app fica naquele conjunto.",
    src: "/play/memorizar.png",
    alt: "Carta de memorização com a referência de um versículo de Gênesis",
  },
  {
    title: "O que você estuda",
    body: "Dá para estudar a Bíblia toda, um testamento, um livro, um capítulo ou um conjunto de versículos. Essa escolha vale para os flashcards, para o quiz e para a memorização.",
    src: "/play/contexto.png",
    alt: "Escolha de contexto, com os testamentos e os livros da Bíblia",
  },
];

function ExternalLink({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${primary ? "btn-primary" : "btn-secondary"}`}
    >
      {children}
      <ArrowUpRight size={15} aria-hidden="true" />
    </Link>
  );
}

export default function PlayPage() {
  return (
    <Layout>
      <header>
        <div className="grid gap-10 pt-10 lg:pt-12 xl:grid-cols-12 xl:items-center xl:gap-12">
          <div className="xl:col-span-7">
            <h1 className="text-ink font-serif text-[clamp(3.75rem,9.5vw,7rem)] leading-[0.9] font-semibold tracking-[-0.04em]">
              Graphe Play
            </h1>
            <p className="lede mt-6 max-w-[40ch]">
              Um aplicativo para estudar a Bíblia no celular. Tem flashcards,
              quiz e memorização de versículos. É grátis, não tem anúncios e
              funciona sem internet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Baixar o app
                <ArrowDown size={15} aria-hidden="true" />
              </Link>
              <ExternalLink href={PLAY_TELEGRAM_URL}>
                Canal no Telegram
              </ExternalLink>
              <ExternalLink href={PLAY_GITHUB_URL}>GitHub</ExternalLink>
            </div>
            <p className="meta mt-5 text-[10px]">
              Google Play em breve · Grátis · Sem anúncios
            </p>
          </div>

          <figure className="phone-frame mx-auto w-full max-w-[260px] xl:col-span-5">
            <video
              src="/play/app.mp4"
              poster="/play/inicio.png"
              autoPlay
              muted
              loop
              playsInline
              className="h-auto w-full"
              aria-label="O Graphe Play em uso: flashcards, quiz, memorização e escolha do contexto"
            />
          </figure>
        </div>
      </header>

      <section className="border-line-strong mt-20 border-t pt-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="section-title lg:col-span-7">Como o app é</h2>
          <p className="lede max-w-md lg:col-span-5">
            Cinco telas, um só estudo. Tudo fica no aparelho.
          </p>
        </div>

        <div className="mt-10">
          {features.map((feature, index) => {
            const flipped = index % 2 === 1;
            const text = (
              <div className={`md:col-span-7 ${flipped ? "md:order-2" : ""}`}>
                <div className="flex items-baseline gap-4">
                  <span className="text-brass font-serif text-3xl font-medium tracking-[-0.03em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="item-title">{feature.title}</h3>
                </div>
                <p className="lede mt-4 max-w-[50ch]">{feature.body}</p>
              </div>
            );
            const shot = (
              <figure
                className={`phone-frame mx-auto w-full max-w-[220px] md:col-span-5 ${
                  flipped ? "md:order-1" : ""
                }`}
              >
                <ZoomImage
                  src={feature.src}
                  alt={feature.alt}
                  width={540}
                  height={1140}
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

      <section className="border-line-strong mt-8 grid gap-6 border-t pt-12 lg:grid-cols-12">
        <h2 className="section-title lg:col-span-5">Dúvidas</h2>
        <div className="lg:col-span-7">
          <p className="lede max-w-2xl">
            Se você tiver alguma dúvida, entre no canal do Telegram e pergunte.
            O aplicativo entra na Google Play quando estiver publicado. A
            política de privacidade está em{" "}
            <Link href="/privacidade" className="text-link">
              graphe.com.br/privacidade
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ExternalLink href={PLAY_TELEGRAM_URL} primary>
              Canal no Telegram
            </ExternalLink>
            <ExternalLink href={PLAY_GITHUB_URL}>GitHub</ExternalLink>
          </div>
        </div>
      </section>
    </Layout>
  );
}
