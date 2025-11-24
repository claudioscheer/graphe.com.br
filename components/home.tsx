import Layout from "./layout"
import PostListItem from "./post-list-item"
import { posts } from "@/lib/data"

export default function Home() {
  return (
    <Layout>
      <div className="space-y-6">
        {posts.map(post => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  )
}
