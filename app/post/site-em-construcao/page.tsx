import PostStatic from "@/components/post-static"
import { generatePostMetadata } from "@/lib/metadata"

export const metadata = generatePostMetadata({
  title: "Site em construção",
  description: "Estamos trabalhando para trazer conteúdo de qualidade em breve",
  postId: "site-em-construcao",
  authorName: "Claudio Scheer",
  publishedTime: "2025-01-20",
})

export default function SiteEmConstrucaoPage() {
  return (
    <PostStatic
      title="Site em construção"
      subtitle="Estamos trabalhando para trazer conteúdo de qualidade em breve"
      date="20 de Janeiro, 2025"
      authorId="claudio-scheer"
      authorName="Claudio Scheer"
      content={`
Estamos trabalhando para trazer conteúdo de qualidade em breve. Obrigado pela sua paciência!

Em breve, este site trará artigos e reflexões sobre temas relevantes da fé cristã.
      `}
    />
  )
}

