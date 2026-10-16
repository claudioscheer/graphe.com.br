import Layout from "@/components/layout";
import PostListItem from "@/components/post-list-item";
import postsData from "@/lib/posts.json";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Blog",
  description:
    "Alguns textos sobre as Escrituras.",
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
      <header className="mb-10 border-b border-[#E5E5E5] pb-8">
        <h1 className="mb-4 text-4xl font-medium text-[#222222]">Blog</h1>
        <p className="text-xl leading-relaxed text-[#555555]">
          Alguns textos sobre as Escrituras.
        </p>
      </header>
      <div className="space-y-6">
        {posts.map(post => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
}
