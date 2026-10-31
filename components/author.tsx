import Link from "next/link";
import Layout from "./layout";
import PostListItem from "./post-list-item";
import postsData from "@/lib/posts.json";

interface AuthorProps {
  id: string;
}

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

export default function Author({ id }: AuthorProps) {
  const authorPosts = postsData.posts.filter((p: Post) => p.author.id === id);

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
        <h1 className="page-title text-ink">
          {authorPosts[0]?.author.name || "Autor"}
        </h1>
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
