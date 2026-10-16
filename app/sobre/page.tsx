import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import MarkdownRenderer from "@/components/markdown-renderer";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Sobre Graphe",
  description:
    "O Graphe é um programa simples para estudar a Bíblia. O nome vem do grego γραφὴ (graphē), Escrituras.",
  path: "/sobre",
});

const sobreContent = `# Sobre Graphe

Graphe vem da palavra grega *γραφὴ* (graphē), que significa "Escrituras" ou "aquilo que foi escrito". Paulo usa a palavra em 2 Timóteo 3:16, quando afirma que "toda Escritura é inspirada por Deus".

Esse também é o nome do programa. Ele é simples, para estudar a Bíblia no Windows, no Linux e no macOS. É de graça, e o código é aberto. Dá para comparar traduções, ver Strong e dicionário, ler comentários e trazer módulos de outros programas.

**Vivendo as Escrituras** é o que a gente quer, no programa e nos textos deste site.

Cremos no Deus Trino — Pai, Filho e Espírito Santo — revelado nas Escrituras. Cremos que a Bíblia é a Palavra de Deus, inerrante e suficiente para nos guiar em toda verdade. Por isso, buscamos tratar cada tema com reverência e fidelidade ao texto sagrado, crendo que somente as Escrituras são nossa regra de fé e prática.

Que o Senhor use este espaço para glorificar o nome de Cristo, edificar a Igreja e fortalecer nossa fé.

> Toda Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça.
>
> 2 Timóteo 3:16
`;

export default function SobrePage() {
  return (
    <Layout>
      <article className="prose prose-lg max-w-none">
        <MarkdownRenderer content={sobreContent} />

        <div className="mt-12 flex justify-center">
          <Image
            src="/graphe.png"
            alt="Graphe"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="border border-[#E5E5E5] px-8 py-4 text-[#222222] transition-colors hover:border-[#333333]"
          >
            Ver o programa
          </Link>
          <Link
            href="/blog"
            className="border border-[#E5E5E5] px-8 py-4 text-[#222222] transition-colors hover:border-[#333333]"
          >
            Ler o blog
          </Link>
        </div>
      </article>
    </Layout>
  );
}
