import Author from "@/components/author"

export default function AuthorPage({ params }: { params: { id: string } }) {
  return <Author id={params.id} />
}
