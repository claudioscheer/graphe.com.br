import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import { ZoomImage } from "@/components/zoom-image";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Graphe Play",
  description:
    "Graphe Play é o app para estudar a Bíblia no celular, com flashcards, quiz e memorização de versículos.",
  path: "/play",
});

const TELEGRAM_URL = "https://t.me/graphebiblesoftware";
const GITHUB_URL = "https://github.com/claudioscheer/graphe-play";

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
    body: "Você escolhe quantas perguntas quer fazer. No fim, dá para ver quantas acertou e quais errou, com a resposta certa, para continuar estudando. Dá para fazer o mesmo quiz com os amigos e comparar quem saiu melhor.",
    src: "/play/quiz.png",
    alt: "Preparação do quiz, com o contexto e a quantidade de perguntas",
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
      className={
        primary
          ? "inline-flex items-center justify-center bg-[#222222] px-8 py-4 text-sm text-white transition-colors hover:bg-[#333333]"
          : "inline-flex items-center justify-center border border-[#E5E5E5] px-8 py-4 text-sm text-[#222222] transition-colors hover:border-[#333333]"
      }
    >
      {children}
    </Link>
  );
}

export default function PlayPage() {
  return (
    <Layout>
      <header className="max-w-2xl">
        <p className="mb-3 text-sm tracking-wide text-[#888888] uppercase">
          No celular
        </p>
        <div className="mb-6 flex items-center gap-4">
          <Image
            src="/graphe-play.png"
            alt=""
            width={72}
            height={72}
            priority
          />
          <h1 className="text-4xl font-medium text-[#222222]">Graphe Play</h1>
        </div>
        <p className="text-xl leading-relaxed text-[#555555]">
          Um aplicativo para estudar a Bíblia no celular. Tem flashcards, quiz e
          memorização de versículos. Funciona sem internet.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap gap-3">
        <span className="inline-flex items-center border border-[#E5E5E5] px-8 py-4 text-sm text-[#555555]">
          Google Play em breve
        </span>
        <ExternalLink href={GITHUB_URL}>GitHub</ExternalLink>
        <ExternalLink href={TELEGRAM_URL} primary>
          Canal no Telegram
        </ExternalLink>
      </div>

      <figure className="mx-auto mt-10 w-full max-w-[280px] overflow-hidden rounded-[28px] border border-[#E5E5E5] bg-[#10182C]">
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

      <section className="mt-16">
        <h2 className="mb-8 text-2xl font-medium text-[#222222]">
          Como o app é
        </h2>
        <div>
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
                className={`mx-auto w-full max-w-[240px] overflow-hidden rounded-[24px] border border-[#E5E5E5] bg-[#10182C] ${
                  flipped
                    ? "max-md:order-2 md:justify-self-end"
                    : "md:justify-self-start"
                }`}
              >
                <ZoomImage
                  src={feature.src}
                  alt={feature.alt}
                  width={540}
                  height={1200}
                  className="h-auto w-full"
                />
              </figure>
            );
            return (
              <article
                key={feature.title}
                className={`grid min-w-0 items-center gap-8 border-t border-[#E5E5E5] py-10 ${
                  flipped
                    ? "md:grid-cols-[240px_1fr]"
                    : "md:grid-cols-[1fr_240px]"
                }`}
              >
                {flipped ? shot : text}
                {flipped ? text : shot}
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-4 border-t border-[#E5E5E5] pt-12">
        <h2 className="mb-3 text-2xl font-medium text-[#222222]">Dúvidas</h2>
        <p className="mb-6 max-w-2xl leading-relaxed text-[#555555]">
          Se você tiver alguma dúvida, entre no canal do Telegram e pergunte. O
          aplicativo entra na Google Play quando estiver publicado. A política
          de privacidade está em{" "}
          <Link href="/privacidade" className="underline">
            graphe.com.br/privacidade
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-3">
          <ExternalLink href={TELEGRAM_URL} primary>
            Canal no Telegram
          </ExternalLink>
          <ExternalLink href={GITHUB_URL}>GitHub</ExternalLink>
        </div>
      </section>
    </Layout>
  );
}
