import Layout from "@/components/layout"
import Image from "next/image"
import Link from "next/link"
import MarkdownRenderer from "@/components/markdown-renderer"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata = generatePageMetadata({
  title: "Sobre Graphe",
  description:
    "Graphe vem da palavra grega γραφὴ (graphē), que significa Escrituras. Este blog foi criado para refletirmos juntos sobre a doutrina cristã e os ensinamentos bíblicos.",
  path: "/sobre",
})

const sobreContent = `# Sobre Graphe

Graphe vem da palavra grega *γραφὴ* (graphē), que significa "Escrituras" ou "aquilo que foi escrito". Este termo é usado pelo apóstolo Paulo em *2 Timóteo 3:16*, quando afirma que "toda Escritura é inspirada por Deus".

**Vivendo as Escrituras** — este é o nosso propósito. Este blog foi criado para refletirmos juntos sobre a doutrina cristã e os ensinamentos bíblicos. Nosso desejo é compartilhar estudos, reflexões sobre a vida cristã e descobrir como aplicar a Palavra de Deus no nosso dia a dia.

Cremos no Deus Trino — Pai, Filho e Espírito Santo — revelado nas Escrituras. Cremos que a Bíblia é a Palavra de Deus, inerrante e suficiente para nos guiar em toda verdade. Por isso, buscamos tratar cada tema com reverência e fidelidade ao texto sagrado, crendo que somente as Escrituras são nossa regra de fé e prática.

Que o Senhor use este espaço para glorificar o nome de Cristo, edificar a Igreja e fortalecer nossa fé.

> Toda Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção e para a instrução na justiça.
>
> 2 Timóteo 3:16
`

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

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="border border-[#E5E5E5] px-8 py-4 text-[#222222] transition-colors hover:border-[#333333]"
          >
            Ver artigos
          </Link>
        </div>
      </article>
    </Layout>
  )
}
