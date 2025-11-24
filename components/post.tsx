"use client"

import Link from "next/link"
import Layout from "./layout"
import MarkdownRenderer from "./markdown-renderer"
import { posts, authors } from "@/lib/data"

interface PostProps {
  id: string
}

export default function Post({ id }: PostProps) {
  const post = posts.find(p => p.id === id)

  if (!post) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="mb-4 text-2xl font-medium text-[#222222]">
            Post não encontrado
          </h1>
          <Link href="/" className="text-[#2E6BE6] hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
      </Layout>
    )
  }

  const author = authors.find(a => a.id === post.authorId)

  return (
    <Layout>
      <article className="mx-auto max-w-2xl">
        <header className="mb-12 border-b border-[#E5E5E5] pb-8">
          <h1 className="mb-4 text-4xl font-medium text-[#222222]">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-[#555555]">
            <time>{post.date}</time>
            <span>·</span>
            <Link
              href={`/autor/${post.authorId}`}
              className="text-[#2E6BE6] hover:underline"
            >
              {author?.name}
            </Link>
          </div>
        </header>

        <MarkdownRenderer content={post.content} />
      </article>
    </Layout>
  )
}
