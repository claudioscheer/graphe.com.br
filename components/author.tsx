"use client"

import Link from "next/link"
import Layout from "./layout"
import { authors, posts } from "@/lib/data"

interface AuthorProps {
  id: string
}

export default function Author({ id }: AuthorProps) {
  const author = authors.find(a => a.id === id)
  const authorPosts = posts.filter(p => p.authorId === id)

  if (!author) {
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
            {author.name}
          </h1>
          <p className="leading-relaxed text-[#555555]">{author.bio}</p>
        </header>

        <section>
          <h2 className="mb-6 text-2xl font-medium text-[#222222]">
            Artigos publicados
          </h2>

          <div className="space-y-6">
            {authorPosts.map(post => (
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
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
