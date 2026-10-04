import { getPostsByTopic, getPosts } from "@/lib/api";
import PostCard from "@/components/PostCard";

/**
 * Generate metadata for the topic page.
 */
export async function generateMetadata({ params }) {
  const { topic } = await params;
  return {
    title: `${topic.charAt(0).toUpperCase() + topic.slice(1)} Posts`,
    description: `Browse all blog posts about ${topic}.`,
  };
}

/**
 * Pre-generate static paths for all known topics.
 * TODO: When switching to Strapi, fetch topics from the API here.
 */
export async function generateStaticParams() {
  const posts = getPosts();
  const topics = [...new Set(posts.map((p) => p.topic))];
  return topics.map((topic) => ({ topic }));
}

/**
 * Topic page — stub.
 * Shows all posts for a given topic. Full design coming later.
 */
export default async function TopicPage({ params }) {
  const { topic } = await params;
  const posts = getPostsByTopic(topic);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-foreground mb-8 capitalize">{topic}</h1>
      {posts.length === 0 ? (
        <p className="text-muted">No posts found for this topic.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
