import Link from "next/link";
import Layout from "./layout";
import PostListItem from "./post-list-item";
import postsData from "@/lib/posts.json";
import MarkdownRenderer from "./markdown-renderer";

interface Post {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  author: {
    id: string;
    name: string;
  };
}

interface AuthorStaticProps {
  authorId: string;
  authorName: string;
  authorBio: string;
}

export default function AuthorStatic({
  authorId,
  authorName,
  authorBio,
}: AuthorStaticProps) {
  const authorPosts = postsData.posts.filter(
    (p: Post) => p.author.id === authorId,
  );

  if (authorPosts.length === 0) {
    return (
      <Layout>
        <div className="border-line-strong max-w-2xl border-t pt-10">
          <h1 className="page-title text-ink">Autor não encontrado</h1>
          <Link href="/" className="text-link mt-6 inline-block">
            Voltar para a página inicial
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <header className="border-line-strong max-w-[900px] border-b pb-10">
        <h1 className="page-title text-ink">{authorName}</h1>
        {authorBio && (
          <div className="mt-6 max-w-[70ch]">
            <MarkdownRenderer content={authorBio} />
          </div>
        )}
      </header>

      <section className="mt-12">
        <h2 className="meta text-ink">Artigos publicados</h2>
        <div className="mt-2">
          {authorPosts.map((post: Post) => (
            <PostListItem
              key={post.id}
              post={{
                id: post.id,
                title: post.title,
                subtitle: post.subtitle,
                date: post.date,
                authorId: post.author.id,
                authorName: post.author.name,
              }}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
