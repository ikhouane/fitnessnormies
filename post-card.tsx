import Link from "next/link";
import { formatDate, getCategory, type Post } from "@/lib/posts";

export function PostCard({ post }: { post: Post }) {
  const category = getCategory(post.category);

  return (
    <article className="post-card">
      <span className="post-card__category">{category?.name}</span>
      <h3>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <p className="post-card__meta">
        {post.readingMinutes} min read · {formatDate(post.publishedAt)}
      </p>
      <Link className="post-card__link" href={`/blog/${post.slug}`}>
        Read the guide <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
