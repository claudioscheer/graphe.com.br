import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Post {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  authorId: string;
  authorName: string;
}

interface PostListItemProps {
  post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <article className="group border-line hover:border-line-strong relative grid grid-cols-[1fr_auto] gap-5 border-t py-7 transition-colors">
      <div className="min-w-0">
        <div className="text-ink-soft flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] font-medium tracking-[0.02em]">
          <time>{post.date}</time>
          <span aria-hidden="true">·</span>
          <span>{post.authorName}</span>
        </div>
        <h2 className="item-title mt-3 max-w-3xl">
          <Link
            href={`/post/${post.id}`}
            className="group-hover:text-brass after:absolute after:inset-0 after:content-['']"
          >
            {post.title}
          </Link>
        </h2>
        {post.subtitle && (
          <p className="lede mt-2 max-w-2xl text-base">{post.subtitle}</p>
        )}
      </div>
      <ArrowUpRight
        size={22}
        aria-hidden="true"
        className="text-brass mt-1 self-start transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </article>
  );
}
