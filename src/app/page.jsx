import { getPosts, getFeaturedPost } from "@/lib/api";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";

/**
 * Home page.
 * Renders a hero section (featured post) and a grid of recent posts.
 * Full design will be built in a later step.
 */
export default function HomePage() {
  const featuredPost = getFeaturedPost();
  const posts = getPosts();

  return (
    <>
      {/* Hero — featured post */}
      <Hero post={featuredPost} />

      {/* Recent posts */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-bold text-foreground mb-6">Recent Posts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
