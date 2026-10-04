/**
 * YouTubeEmbed — stub component.
 * Embeds a YouTube video via iframe given a video ID.
 */
export default function YouTubeEmbed({ videoId, title = "YouTube video" }) {
  // TODO: Add lazy loading, aspect-ratio container, and privacy-friendly embed
  if (!videoId) return null;

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden my-6">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
