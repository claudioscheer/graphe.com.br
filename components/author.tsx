import Link from "next/link"
import Layout from "./layout"
import PostListItem from "./post-list-item"
import { authors } from "@/lib/data"
import postsData from "@/lib/posts.json"

interface AuthorProps {
  id: string
}

interface Post {
  id: string
  title: string
  subtitle?: string
  date: string
  author: {
    id: string
    name: string
  }
}

interface AuthorData {
  id: string
  name: string
  bio: string
}

export default function Author({ id }: AuthorProps) {
  const authorData = authors.find((a: AuthorData) => a.id === id) || null
  const authorPosts = postsData.posts.filter((p: Post) => p.author.id === id)

  if (!authorData || authorPosts.length === 0) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="mb-4 text-2xl font-medium text-[#222222]">
            Autor não encontrado
          </h1>
          <Link href="/" className="text-[#2E6BE6] hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="mx-auto max-w-2xl">
        <header className="mb-12 border-b border-[#E5E5E5] pb-8">
          <h1 className="mb-4 text-4xl font-medium text-[#222222]">
            {authorData.name}
          </h1>
          {authorData.bio && (
            <p className="leading-relaxed text-[#555555]">{authorData.bio}</p>
          )}
        </header>

        <section>
          <h2 className="mb-6 text-2xl font-medium text-[#222222]">
            Artigos publicados
          </h2>

          <div className="space-y-6">
            {authorPosts.map((post: Post) => (
              <PostListItem
                key={post.id}
                post={{
                  id: post.id,
                  title: post.title,
                  subtitle: post.subtitle,
                  date: post.date,
                  authorId: post.author.id,
                  authorName: post.author.name,
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
