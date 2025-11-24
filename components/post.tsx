"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Layout from "./layout"
import MarkdownRenderer from "./markdown-renderer"
import { posts } from "@/lib/data"

interface PostProps {
  id: string
}

interface PostMetadata {
  id: string
  title: string
  subtitle?: string
  date: string
  author: {
    id: string
    name: string
  }
}

export default function Post({ id }: PostProps) {
  const [postMetadata, setPostMetadata] = useState<PostMetadata | null>(null)
  const [loading, setLoading] = useState(true)
  const postContent = posts.find(p => p.id === id)

  useEffect(() => {
    fetch("/posts.json")
      .then(res => res.json())
      .then(data => {
        const found = data.posts.find((p: PostMetadata) => p.id === id)
        setPostMetadata(found || null)
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

  if (!postMetadata || !postContent) {
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

  return (
    <Layout>
      <article className="mx-auto max-w-2xl">
        <header className="mb-12 border-b border-[#E5E5E5] pb-8">
          <h1 className="mb-4 text-4xl font-medium text-[#222222]">
            {postMetadata.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-[#555555]">
            <time>{postMetadata.date}</time>
            <span>·</span>
            <Link
              href={`/autor/${postMetadata.author.id}`}
              className="text-[#2E6BE6] hover:underline"
            >
              {postMetadata.author.name}
            </Link>
          </div>
        </header>

        <MarkdownRenderer content={postContent.content} />
      </article>
    </Layout>
  )
}
