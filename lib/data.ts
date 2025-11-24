// Type definitions (kept for potential future use)
export interface Author {
  id: string
  name: string
  bio: string
}

export interface Post {
  id: string
  title: string
  subtitle?: string
  date: string
  authorId: string
  authorName: string
  content: string
}
