import Layout from "@/components/layout"

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
            Este blog foi criado com o propósito de refletir sobre a doutrina
            cristã, oferecendo ensinamentos bíblicos fundamentados nas Sagradas
            Escrituras. Nosso objetivo é compartilhar estudos teológicos,
            reflexões sobre a vida cristã e a aplicação prática da Palavra de
            Deus no cotidiano.
          </p>

          <p>
            Acreditamos que a Bíblia é a revelação especial de Deus à
            humanidade, inerrante em seus manuscritos originais e suficiente
            para guiar o crente em toda verdade. Por isso, buscamos tratar cada
            tema com reverência, humildade e fidelidade ao texto sagrado.
          </p>

          <p>
            Que o Senhor use este espaço para edificar a Igreja, fortalecer a fé
            dos santos e glorificar o nome de Cristo em todas as coisas.
          </p>

          <p className="pt-4 text-sm text-[#555555] italic">
            &quot;Toda Escritura é inspirada por Deus e útil para o ensino, para
            a repreensão, para a correção e para a instrução na justiça.&quot; —
            2 Timóteo 3:16
          </p>
        </div>
      </article>
    </Layout>
  )
}
