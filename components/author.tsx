"use client"

import Link from "next/link"
import Layout from "./layout"
import { authors, posts } from "@/lib/data"

interface AuthorProps {
  id: string
}

export default function Author({ id }: AuthorProps) {
  const author = authors.find((a) => a.id === id)
  const authorPosts = posts.filter((p) => p.authorId === id)

  if (!author) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-2xl font-medium text-[#222222] mb-4">Autor não encontrado</h1>
          <Link href="/" className="text-[#2E6BE6] hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <header className="mb-12 pb-8 border-b border-[#E5E5E5]">
          <h1 className="text-4xl font-medium text-[#222222] mb-4">{author.name}</h1>
          <p className="text-[#555555] leading-relaxed">{author.bio}</p>
        </header>

        <section>
          <h2 className="text-2xl font-medium text-[#222222] mb-6">Artigos publicados</h2>

          <div className="space-y-6">
            {authorPosts.map((post) => (
              <article
                key={post.id}
                className="border-l-2 border-[#E5E5E5] pl-6 hover:border-[#2E6BE6] transition-colors"
              >
                <Link href={`/post/${post.id}`}>
                  <h3 className="text-xl font-medium text-[#222222] mb-2 hover:text-[#2E6BE6] transition-colors">
                    {post.title}
                  </h3>
                </Link>
                {post.subtitle && <p className="text-[#555555] mb-2">{post.subtitle}</p>}
                <time className="text-sm text-[#555555]">{post.date}</time>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
