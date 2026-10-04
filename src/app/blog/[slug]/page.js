import { getPostBySlug, getPosts } from "@/lib/api";

/**
 * Generate metadata for the blog post page.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

/**
 * Pre-generate static paths for all known posts.
 * TODO: When switching to Strapi, fetch slugs from the API here.
 */
export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

/**
 * Blog post page — stub.
 * Full markdown rendering and post layout will be built in a later step.
 */
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground">Post not found</h1>
        <p className="text-muted mt-2">The post you&apos;re looking for doesn&apos;t exist.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      {/* TODO: Build full post layout with markdown rendering, ToC, author info */}
      <article>
        <h1 className="text-3xl font-bold text-foreground mb-4">{post.title}</h1>
        <p className="text-muted mb-8">{post.excerpt}</p>
        <div className="prose prose-invert max-w-none text-muted">
          <p className="italic">Full markdown rendering coming soon…</p>
        </div>
      </article>
    </main>
  );
}
