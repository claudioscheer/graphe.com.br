import Layout from "@/components/layout"
import Image from "next/image"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata = generatePageMetadata({
  title: "Sobre o Graphe",
  description:
    "Graphe vem da palavra grega γραφὴ (graphē), que significa Escrituras. Este blog foi criado para refletirmos juntos sobre a doutrina cristã e os ensinamentos bíblicos.",
  path: "/sobre",
})

export default function SobrePage() {
  return (
    <Layout>
      <article className="prose prose-lg max-w-none">
        <h1 className="mb-6 text-3xl font-medium text-[#222222]">
          Sobre o Graphe
        </h1>

        <div className="space-y-4 leading-relaxed text-[#555555]">
          <p>
            Graphe vem da palavra grega <span className="italic">γραφὴ</span>{" "}
            (graphē), que significa &quot;Escrituras&quot; ou &quot;aquilo que
            foi escrito&quot;. Este termo é usado pelo apóstolo Paulo em 2
            Timóteo 3:16, quando afirma que &quot;toda Escritura é inspirada por
            Deus&quot;.
          </p>

          <p>
            <strong>Vivendo as Escrituras</strong> — este é o nosso propósito.
            Este blog foi criado para refletirmos juntos sobre a doutrina cristã
            e os ensinamentos bíblicos. Nosso desejo é compartilhar estudos,
            reflexões sobre a vida cristã e descobrir como aplicar a Palavra de
            Deus no nosso dia a dia.
          </p>

          <p>
            Cremos no Deus Trino — Pai, Filho e Espírito Santo — revelado nas
            Escrituras. Cremos que a Bíblia é a Palavra de Deus, inerrante e
            suficiente para nos guiar em toda verdade. Por isso, buscamos tratar
            cada tema com reverência e fidelidade ao texto sagrado, crendo que
            somente as Escrituras são nossa regra de fé e prática.
          </p>

          <p>
            Que o Senhor use este espaço para glorificar o nome de Cristo,
            edificar a Igreja e fortalecer nossa fé.
          </p>

          <p className="pt-4 text-[#555555] italic">
            &quot;Toda Escritura é inspirada por Deus e útil para o ensino, para
            a repreensão, para a correção e para a instrução na justiça.&quot; —
            2 Timóteo 3:16
          </p>
        </div>

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
            className="border border-[#E5E5E5] px-6 py-3 text-[#222222] transition-colors hover:border-[#333333]"
          >
            Ver artigos
          </Link>
        </div>
      </article>
    </Layout>
  )
}
