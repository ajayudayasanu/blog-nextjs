/**
 * PostCard — stub component.
 * Will be styled as a card with cover image, title, excerpt,
 * topic badge, and publish date.
 */
import Link from "next/link";

export default function PostCard({ post }) {
  // TODO: Build full card UI with cover image and hover effects
  return (
    <article className="rounded-xl border border-border bg-surface p-6 hover:border-accent transition-colors">
      <Link href={`/blog/${post.slug}`} className="block space-y-3">
        <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
        <p className="text-sm text-muted line-clamp-2">{post.excerpt}</p>
        <span className="inline-block text-xs font-medium text-accent">
          {post.topic}
        </span>
      </Link>
    </article>
  );
}
