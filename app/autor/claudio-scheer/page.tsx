import AuthorStatic from "@/components/author-static"
import { generateAuthorMetadata } from "@/lib/metadata"

export const metadata = generateAuthorMetadata({
  authorName: "Claudio Scheer",
  authorId: "claudio-scheer",
  authorBio:
    "Aprendiz das Escrituras, buscando crescer no conhecimento de Deus e de Sua Palavra.",
})

export default function ClaudioScheerPage() {
  return (
    <AuthorStatic
      authorId="claudio-scheer"
      authorName="Claudio Scheer"
      authorBio="Aprendiz das Escrituras, buscando crescer no conhecimento de Deus e de Sua Palavra."
    />
  )
}
