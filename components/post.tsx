import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Layout from "./layout";
import MarkdownRenderer from "./markdown-renderer";
import { posts } from "@/lib/data";
import postsData from "@/lib/posts.json";

interface PostProps {
  id: string;
}

interface PostMetadata {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  author: {
    id: string;
    name: string;
  };
}

export default function Post({ id }: PostProps) {
  const postContent = posts.find(p => p.id === id);
  const postMetadata =
    postsData.posts.find((p: PostMetadata) => p.id === id) || null;

  if (!postMetadata || !postContent) {
    return (
      <Layout>
        <div className="border-line-strong max-w-2xl border-t pt-10">
          <h1 className="page-title text-ink">Post não encontrado</h1>
          <Link href="/" className="text-link mt-6 inline-block">
            Voltar para a página inicial
          </Link>
        </div>
      </Layout>
    );
  }

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
            <time>{postMetadata.date}</time>
            <span aria-hidden="true">·</span>
            <Link
              href={`/autor/${postMetadata.author.id}`}
              className="hover:text-ink transition-colors"
            >
              {postMetadata.author.name}
            </Link>
          </div>

          <h1 className="page-title text-ink mt-4">{postMetadata.title}</h1>

          {postMetadata.subtitle && (
            <p className="lede mt-5 max-w-2xl text-xl">
              {postMetadata.subtitle}
            </p>
          )}
        </header>

        <div className="mt-10">
          <MarkdownRenderer content={postContent.content} />
        </div>
      </article>
    </Layout>
  );
}
