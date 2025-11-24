"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"

interface Post {
  id: string
  title: string
  subtitle?: string
  date: string
  authorId: string
  authorName: string
}

interface PostListItemProps {
  post: Post
}

export default function PostListItem({ post }: PostListItemProps) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/post/${post.id}`)
  }

  return (
    <article
      onClick={handleCardClick}
      className="cursor-pointer border border-[#E5E5E5] p-6 transition-colors hover:border-[#2E6BE6]"
    >
      <h2 className="mb-2 text-xl font-medium text-[#222222]">{post.title}</h2>

      {post.subtitle && <p className="mb-4 text-[#555555]">{post.subtitle}</p>}

      <div className="flex items-center gap-4 text-sm text-[#555555]">
        <time>{post.date}</time>
        <span>·</span>
        <Link
          href={`/autor/${post.authorId}`}
          className="text-[#2E6BE6] hover:underline"
          onClick={e => e.stopPropagation()}
        >
          {post.authorName}
        </Link>
      </div>
    </article>
  )
}
