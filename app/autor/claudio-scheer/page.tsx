import AuthorStatic from "@/components/author-static"
import { generateAuthorMetadata } from "@/lib/metadata"

const authorBio = `Aprendiz das Escrituras, buscando crescer no conhecimento de Deus e de Sua Palavra. Tem o coração cativado por *1 Pedro 2.11-12*, um lembrete de que somos peregrinos e forasteiros neste mundo, e chamados a viver de forma que glorifique a Deus em nossa breve passagem pela terra.

> ¹¹ Amados, peço a vocês, como peregrinos e forasteiros que são, que se abstenham das paixões carnais, que fazem guerra contra a alma,
> ¹² tendo conduta exemplar no meio dos gentios, para que, quando eles os acusarem de malfeitores, observando as boas obras que vocês praticam, glorifiquem a Deus no dia da visitação.
>
> 1 Pedro 2:11-12`

export const metadata = generateAuthorMetadata({
  authorName: "Claudio Scheer",
  authorId: "claudio-scheer",
  authorBio,
})

export default function ClaudioScheerPage() {
  return (
    <AuthorStatic
      authorId="claudio-scheer"
      authorName="Claudio Scheer"
      authorBio={authorBio}
    />
  )
}
