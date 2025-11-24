import Post from "@/components/post"

export default function PostPage({ params }: { params: { id: string } }) {
  return <Post id={params.id} />
}
