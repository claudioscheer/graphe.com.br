import Layout from "@/components/layout";
import PostListItem from "@/components/post-list-item";
import postsData from "@/lib/posts.json";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Blog",
  description: "Alguns textos sobre as Escrituras.",
  path: "/blog",
});

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

export default function BlogPage() {
  const posts = (postsData.posts as Post[]).map(post => ({
    id: post.id,
    title: post.title,
    subtitle: post.subtitle,
    date: post.date,
    authorId: post.author.id,
    authorName: post.author.name,
  }));

  return (
    <Layout>
      <header className="border-line-strong border-b pb-8">
        <h1 className="page-title text-ink">Blog</h1>
        <p className="lede mt-5 max-w-2xl">
          Alguns textos sobre as Escrituras.
        </p>
      </header>
      <div className="mt-2">
        {posts.map(post => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
}
