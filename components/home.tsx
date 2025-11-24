"use client"

import { useEffect, useState } from "react"
import Layout from "./layout"
import PostListItem from "./post-list-item"

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
  const [posts, setPosts] = useState<
    Array<{
      id: string
      title: string
      subtitle?: string
      date: string
      authorId: string
      authorName: string
    }>
  >([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/posts.json")
      .then(res => res.json())
      .then(data => {
        const mappedPosts = data.posts.map((post: Post) => ({
          id: post.id,
          title: post.title,
          subtitle: post.subtitle,
          date: post.date,
          authorId: post.author.id,
          authorName: post.author.name,
        }))
        setPosts(mappedPosts)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <p className="text-[#555555]">Carregando...</p>
        </div>
      </Layout>
    )
  }

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
