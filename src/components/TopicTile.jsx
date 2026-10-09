/**
 * TopicTile — stub component.
 * Will be styled as a clickable tile linking to /topics/[topic].
 */
import Link from "next/link";

export default function TopicTile({ topic, count }) {
  // TODO: Build full topic tile UI with icon/color
  return (
    <Link
      href={`/topics/${topic}`}
      className="block rounded-lg border border-border bg-surface p-4 text-center hover:border-accent transition-colors"
    >
      <span className="text-sm font-medium text-foreground capitalize">{topic}</span>
      {count != null && (
        <span className="block text-xs text-muted mt-1">{count} posts</span>
      )}
    </Link>
  );
}
