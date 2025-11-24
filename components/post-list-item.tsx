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
  return (
    <article className="border border-[#E5E5E5] p-6 hover:border-[#2E6BE6] transition-colors">
      <Link href={`/post/${post.id}`}>
        <h2 className="text-xl font-medium text-[#222222] mb-2 hover:text-[#2E6BE6] transition-colors">{post.title}</h2>
      </Link>

      {post.subtitle && <p className="text-[#555555] mb-4">{post.subtitle}</p>}

      <div className="flex items-center gap-4 text-sm text-[#555555]">
        <time>{post.date}</time>
        <span>·</span>
        <Link href={`/autor/${post.authorId}`} className="text-[#2E6BE6] hover:underline">
          {post.authorName}
        </Link>
      </div>
    </article>
  )
}
