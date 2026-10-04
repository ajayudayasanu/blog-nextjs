/**
 * Data-access layer for blog posts.
 *
 * Currently reads from a local JSON file. When you're ready to switch to
 * Strapi, replace the body of each function with a fetch() call to the
 * Strapi REST or GraphQL API. The function signatures stay the same so
 * the rest of the app doesn't need to change.
 *
 * TODO: Swap to Strapi CMS — use STRAPI_API_URL from env
 */

import postsData from "@/data/posts.json";

/**
 * Return all posts, sorted newest-first.
 */
export function getPosts() {
  // TODO: Replace with fetch(`${process.env.STRAPI_API_URL}/api/posts`)
  return [...postsData].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
}

/**
 * Return a single post by its URL slug, or null if not found.
 */
export function getPostBySlug(slug) {
  // TODO: Replace with fetch(`${process.env.STRAPI_API_URL}/api/posts?filters[slug][$eq]=${slug}`)
  return postsData.find((post) => post.slug === slug) ?? null;
}

/**
 * Return the featured post (used for the hero section).
 * Falls back to the most recent post if none is marked featured.
 */
export function getFeaturedPost() {
  // TODO: Replace with fetch(`${process.env.STRAPI_API_URL}/api/posts?filters[featured][$eq]=true`)
  const featured = postsData.find((post) => post.featured);
  if (featured) return featured;

  // Fallback: most recent post
  return getPosts()[0] ?? null;
}

/**
 * Return all posts that belong to a given topic slug, sorted newest-first.
 */
export function getPostsByTopic(topic) {
  // TODO: Replace with fetch(`${process.env.STRAPI_API_URL}/api/posts?filters[topic][$eq]=${topic}`)
  return postsData
    .filter((post) => post.topic === topic)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}
