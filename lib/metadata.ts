import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://graphe.com.br"

interface PostMetadataParams {
  title: string
  description?: string
  postId: string
  authorName: string
  publishedTime?: string
}

export function generatePostMetadata({
  title,
  description,
  postId,
  authorName,
  publishedTime,
}: PostMetadataParams): Metadata {
  const fullTitle = `${title} | Graphe`
  const metaDescription = description || "Graphe - Vivendo as Escrituras"

  return {
    title: fullTitle,
    description: metaDescription,
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      type: "article",
      url: `${siteUrl}/post/${postId}`,
      siteName: "Graphe",
      authors: [authorName],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description: metaDescription,
    },
  }
}

interface AuthorMetadataParams {
  authorName: string
  authorId: string
  authorBio?: string
}

export function generateAuthorMetadata({
  authorName,
  authorId,
  authorBio,
}: AuthorMetadataParams): Metadata {
  const fullTitle = `${authorName} | Graphe`
  const metaDescription =
    authorBio ||
    `Artigos e reflexões de ${authorName} sobre temas relevantes da fé cristã.`

  return {
    title: fullTitle,
    description: metaDescription,
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      type: "profile",
      url: `${siteUrl}/autor/${authorId}`,
      siteName: "Graphe",
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description: metaDescription,
    },
  }
}

interface PageMetadataParams {
  title: string
  description: string
  path: string
}

export function generatePageMetadata({
  title,
  description,
  path,
}: PageMetadataParams): Metadata {
  const fullTitle = title === "Graphe" ? title : `${title} | Graphe`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      url: `${siteUrl}${path}`,
      siteName: "Graphe",
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  }
}
