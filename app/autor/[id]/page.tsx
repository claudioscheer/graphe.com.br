import Author from "@/components/author"

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <Author id={id} />
}
