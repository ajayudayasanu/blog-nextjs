/**
 * Hero section — stub component.
 * Will be built out in a later step with the featured post,
 * gradient background, and call-to-action.
 */
export default function Hero({ post }) {
  // TODO: Build full hero UI with featured post
  return (
    <section className="py-16 text-center">
      <h1 className="text-4xl font-bold text-foreground mb-4">
        {post?.title ?? "Welcome to the Blog"}
      </h1>
      <p className="text-lg text-muted max-w-2xl mx-auto">
        {post?.excerpt ?? "Technical tutorials and insights on web development."}
      </p>
    </section>
  );
}
