import Link from "next/link";

export default function Header() {
  // TODO: Build out full navigation with logo, links, search, and theme toggle
  return (
    <header className="border-b border-border bg-surface sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
          Ajay&apos;s Tech Blog
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
