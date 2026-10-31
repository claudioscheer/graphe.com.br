import Layout from "@/components/layout";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import MarkdownRenderer from "@/components/markdown-renderer";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Sobre Graphe",
  description:
    "O Graphe é um aplicativo simples para estudar a Bíblia. O nome vem do grego γραφὴ (graphē), Escrituras.",
  path: "/sobre",
});

const sobreContent = `# Sobre Graphe

Graphe vem da palavra grega *γραφὴ* (graphē), que significa "Escrituras" ou "aquilo que foi escrito". Paulo usa a palavra em 2 Timóteo 3:16, quando afirma que "toda Escritura é inspirada por Deus".

Esse também é o nome do aplicativo. Ele é simples, para estudar a Bíblia no Windows, no Linux e no macOS. É de graça, e o código é aberto. Dá para comparar traduções, ver Strong e dicionário, ler comentários e trazer módulos de outros programas.

**Vivendo as Escrituras** é o que a gente quer, no aplicativo e nos textos deste site.

Cremos no Deus Trino — Pai, Filho e Espírito Santo — revelado nas Escrituras. Cremos que a Bíblia é a Palavra de Deus, inerrante e suficiente para nos guiar em toda verdade. Por isso, buscamos tratar cada tema com reverência e fidelidade ao texto sagrado, crendo que somente as Escrituras são nossa regra de fé e prática.

Que o Senhor use este espaço para glorificar o nome de Cristo, edificar a Igreja e fortalecer nossa fé.

> Toda Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça.
>
> 2 Timóteo 3:16
`;

export default function SobrePage() {
  return (
    <Layout>
      <article>
        <MarkdownRenderer content={sobreContent} />

        <div className="border-line mt-12 flex flex-wrap gap-3 border-t pt-8">
          <Link href="/#baixar" className="btn btn-primary">
            Baixar o aplicativo desktop
            <ArrowDown size={15} aria-hidden="true" />
          </Link>
          <Link href="/blog" className="btn btn-secondary">
            Ler o blog
          </Link>
        </div>
      </article>
    </Layout>
  );
}
