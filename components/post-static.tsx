import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Layout from "./layout";
import MarkdownRenderer from "./markdown-renderer";

interface PostStaticProps {
  title: string;
  subtitle?: string;
  date: string;
  authorId: string;
  authorName: string;
  content: string;
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
      <article>
        <div className="mb-8">
          <Link
            href="/blog"
            className="meta text-ink-soft hover:text-ink inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Blog
          </Link>
        </div>

        <header className="border-line-strong max-w-[900px] border-b pb-8">
          <div className="text-ink-soft flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] font-medium tracking-[0.02em]">
            <time>{date}</time>
            <span aria-hidden="true">·</span>
            <Link
              href={`/autor/${authorId}`}
              className="hover:text-ink transition-colors"
            >
              {authorName}
            </Link>
          </div>

          <h1 className="page-title text-ink mt-4">{title}</h1>

          {subtitle && (
            <p className="lede mt-5 max-w-2xl text-xl">{subtitle}</p>
          )}
        </header>

        <div className="mt-10">
          <MarkdownRenderer content={content} />
        </div>
      </article>
    </Layout>
  );
}
