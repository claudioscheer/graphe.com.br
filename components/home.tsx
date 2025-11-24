import Layout from "./layout"
import PostListItem from "./post-list-item"
import postsData from "@/lib/posts.json"

interface Post {
  id: string
  title: string
  subtitle?: string
  date: string
  author: {
    id: string
    name: string
  }
}

export default function Home() {
  const mappedPosts = postsData.posts.map((post: Post) => ({
    id: post.id,
    title: post.title,
    subtitle: post.subtitle,
    date: post.date,
    authorId: post.author.id,
    authorName: post.author.name,
  }))

  return (
    <Layout>
      <div className="space-y-6">
        {mappedPosts.map(post => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  )
}
