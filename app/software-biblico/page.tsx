import type { ReactNode } from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Software de Estudo Bíblico",
  description:
    "Graphe é um aplicativo desktop gratuito e de código aberto para estudo bíblico: painéis divididos, números de Strong, referências cruzadas, comentários e conversão de módulos theWord e MySword. Windows, Linux e macOS.",
  path: "/software-biblico",
});

const GITHUB_URL = "https://github.com/claudioscheer/graphe";
const RELEASES_URL = "https://github.com/claudioscheer/graphe/releases/latest";
const TELEGRAM_URL = "https://t.me/graphebiblesoftware";

const features = [
  {
    title: "Painéis como no seu editor de código",
    description:
      "Abra várias traduções e comentários ao mesmo tempo. Divida a tela na horizontal ou na vertical, crie abas de estudo independentes e pinte o layout do jeito que você estuda de verdade.",
  },
  {
    title: "Strong's, morfologia e interlinear",
    description:
      "Números de Strong no texto, dicionário com um clique, lema, morfologia e anotações interlineares quando o módulo traz esses dados. Do hebraico e do grego para a aplicação, sem sair da passagem.",
  },
  {
    title: "Referências cruzadas e comentários",
    description:
      "Treasury of Scripture Knowledge e outros módulos de referências. Comentários sincronizados com o texto, visão agregada de todos os comentários no versículo e prévia em modal quando preferir.",
  },
  {
    title: "Pesquisa que vai além do texto",
    description:
      "Busca textual, frases entre aspas e Strong com strong:H1234 ou strong:G5678. Resultados destacados; abra um resultado em um novo estudo com um clique.",
  },
  {
    title: "Conversão de módulos embutida",
    description:
      "Traga sua biblioteca. Converta no próprio app módulos do theWord (.ont, .nt, .ot, .twm e variantes) e do MySword (.bbl.mybible, .dct.mybible) para o formato MyBible SQLite3 que o Graphe usa.",
  },
  {
    title: "MyBible, instalação e comunidade",
    description:
      "Instale bíblias, dicionários, comentários e referências em SQLite3. Detectamos o tipo automaticamente. No grupo do Telegram compartilhamos módulos e dicas de uso.",
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

export default function SoftwarePage() {
  return (
    <Layout>
      <article className="mx-auto max-w-2xl">
        <header className="mb-10 border-b border-[#E5E5E5] pb-8">
          <p className="mb-3 text-sm tracking-wide text-[#888888] uppercase">
            Aplicativo desktop
          </p>
          <h1 className="mb-4 text-4xl font-medium text-[#222222]">
            Graphe: software de estudo bíblico
          </h1>
          <p className="text-xl leading-relaxed text-[#555555]">
            Leitura, comparação e pesquisa profunda das Escrituras em Windows,
            Linux e macOS. Gratuito, de código aberto (MIT) e feito para quem
            leva o texto a sério.
          </p>
        </header>

        <div className="mb-10 overflow-hidden border border-[#E5E5E5]">
          <Image
            src="/graphe-software.jpg"
            alt="Interface do Graphe com texto bíblico, números de Strong e dicionário"
            width={1925}
            height={1250}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ExternalLink href={RELEASES_URL} primary>
            Baixar última versão
          </ExternalLink>
          <ExternalLink href={GITHUB_URL}>Ver no GitHub</ExternalLink>
          <ExternalLink href={TELEGRAM_URL}>Grupo no Telegram</ExternalLink>
        </div>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-medium text-[#222222]">
            Por que o Graphe
          </h2>
          <div className="space-y-4 leading-relaxed text-[#222222]">
            <p>
              Muitos apps de Bíblia param na leitura. O Graphe foi pensado para
              o estudo: vários painéis, Strong&apos;s no texto, dicionário ao
              lado, comentários sincronizados e referências cruzadas sem perder
              o contexto da passagem.
            </p>
            <p>
              Você monta o layout do seu estudo, salva workspaces, troca
              traduções favoritas e converte módulos que já tem de outras
              ferramentas. Sem assinatura, sem conta obrigatória, sem trancar
              seus dados em um formato fechado.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-medium text-[#222222]">
            O que você consegue fazer
          </h2>
          <ul className="space-y-6">
            {features.map(feature => (
              <li
                key={feature.title}
                className="border border-[#E5E5E5] p-6 transition-colors hover:border-[#333333]"
              >
                <h3 className="mb-2 text-lg font-medium text-[#222222]">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-[#555555]">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-medium text-[#222222]">
            Módulos e conversão
          </h2>
          <div className="space-y-4 leading-relaxed text-[#222222]">
            <p>
              O Graphe usa o formato{" "}
              <strong className="font-medium">MyBible SQLite3</strong> e
              reconhece sozinho bíblias, dicionários, comentários e referências
              cruzadas. Instale pelo menu{" "}
              <em>File → Install Modules...</em> e os arquivos vão para a pasta
              de módulos do sistema.
            </p>
            <p>
              Já tem biblioteca no theWord ou no MySword? Use{" "}
              <em>File → Convert Modules...</em> no app: converta bíblias e
              dicionários/comentários e continue estudando sem recomeçar do
              zero.
            </p>
            <div className="border border-[#E5E5E5] bg-white/40 p-6 text-sm text-[#555555]">
              <p className="mb-3 font-medium text-[#222222]">
                Formatos de entrada suportados na conversão
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong className="font-medium text-[#222222]">
                    theWord:
                  </strong>{" "}
                  .ont, .ontx, .nt, .ntx, .ot, .otx e comentários/dicionários
                  .twm
                </li>
                <li>
                  <strong className="font-medium text-[#222222]">
                    MySword:
                  </strong>{" "}
                  .bbl.mybible e .dct.mybible
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-medium text-[#222222]">
            Plataformas e licença
          </h2>
          <p className="leading-relaxed text-[#222222]">
            Disponível para <strong className="font-medium">Windows</strong>,{" "}
            <strong className="font-medium">Linux</strong> e{" "}
            <strong className="font-medium">macOS</strong>. Interface em
            português, inglês e espanhol. Código aberto sob licença MIT: você
            pode auditar, contribuir e confiar no que roda na sua máquina.
          </p>
        </section>

        <section className="mb-12 border border-[#E5E5E5] p-8">
          <h2 className="mb-3 text-2xl font-medium text-[#222222]">
            Módulos na comunidade
          </h2>
          <p className="mb-6 leading-relaxed text-[#555555]">
            No grupo do Telegram compartilhamos módulos, conversões e dicas de
            estudo com o Graphe. Entre, baixe o que precisa e ajude outros
            leitores das Escrituras.
          </p>
          <ExternalLink href={TELEGRAM_URL} primary>
            Entrar no Telegram
          </ExternalLink>
        </section>

        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-medium text-[#222222]">
            Comece agora
          </h2>
          <p className="mb-6 leading-relaxed text-[#555555]">
            Baixe a última release no GitHub, instale seus módulos e monte o
            primeiro estudo. O código e o histórico de versões estão públicos
            no repositório.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ExternalLink href={RELEASES_URL} primary>
              Baixar última versão
            </ExternalLink>
            <ExternalLink href={GITHUB_URL}>
              github.com/claudioscheer/graphe
            </ExternalLink>
          </div>
        </section>
      </article>
    </Layout>
  );
}
