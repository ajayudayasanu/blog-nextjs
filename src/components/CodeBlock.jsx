/**
 * CodeBlock — stub component.
 * Will be used as a custom renderer for fenced code blocks in markdown.
 * Will integrate rehype-highlight or shiki for syntax highlighting.
 */
export default function CodeBlock({ children, className }) {
  // TODO: Add syntax highlighting with rehype-highlight / shiki
  return (
    <pre className="rounded-lg bg-[var(--code-bg)] p-4 overflow-x-auto text-sm">
      <code className={className}>{children}</code>
    </pre>
  );
}
