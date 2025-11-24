"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Layout from "./layout"

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

export default function Author({ id }: AuthorProps) {
  const [authorPosts, setAuthorPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/posts.json")
      .then(res => res.json())
      .then(data => {
        const filtered = data.posts.filter((p: Post) => p.author.id === id)
        setAuthorPosts(filtered)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <p className="text-[#555555]">Carregando...</p>
        </div>
      </Layout>
    )
  }

  if (authorPosts.length === 0) {
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

  const author = authorPosts[0].author

  return (
    <Layout>
      <div className="mx-auto max-w-2xl">
        <header className="mb-12 border-b border-[#E5E5E5] pb-8">
          <h1 className="mb-4 text-4xl font-medium text-[#222222]">
            {author.name}
          </h1>
        </header>

        <section>
          <h2 className="mb-6 text-2xl font-medium text-[#222222]">
            Artigos publicados
          </h2>

          <div className="space-y-6">
            {authorPosts.map(
              (post: {
                id: string
                title: string
                subtitle?: string
                date: string
              }) => (
                <article
                  key={post.id}
                  className="border-l-2 border-[#E5E5E5] pl-6 transition-colors hover:border-[#2E6BE6]"
                >
                  <Link href={`/post/${post.id}`}>
                    <h3 className="mb-2 text-xl font-medium text-[#222222] transition-colors hover:text-[#2E6BE6]">
                      {post.title}
                    </h3>
                  </Link>
                  {post.subtitle && (
                    <p className="mb-2 text-[#555555]">{post.subtitle}</p>
                  )}
                  <time className="text-sm text-[#555555]">{post.date}</time>
                </article>
              )
            )}
          </div>
        </section>
      </div>
    </Layout>
  )
}
