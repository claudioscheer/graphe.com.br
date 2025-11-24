import Link from "next/link"
import Layout from "./layout"
import MarkdownRenderer from "./markdown-renderer"

interface PostStaticProps {
  title: string
  subtitle?: string
  date: string
  authorId: string
  authorName: string
  content: string
}

export default function PostStatic({
  title,
  subtitle,
  date,
  authorId,
  authorName,
  content,
}: PostStaticProps) {
  return (
    <Layout>
      <article className="mx-auto max-w-2xl">
        <header className="mb-12 border-b border-[#E5E5E5] pb-8">
          <h1 className="mb-4 text-4xl font-medium text-[#222222]">{title}</h1>

          {subtitle && (
            <p className="mb-4 text-xl text-[#555555]">{subtitle}</p>
          )}

          <div className="flex items-center gap-4 text-sm text-[#555555]">
            <time>{date}</time>
            <span>·</span>
            <Link
              href={`/autor/${authorId}`}
              className="text-[#2E6BE6] hover:underline"
            >
              {authorName}
            </Link>
          </div>
        </header>

        <MarkdownRenderer content={content} />
      </article>
    </Layout>
  )
}
