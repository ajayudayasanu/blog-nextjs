export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted">
        <p>&copy; {currentYear} Ajay Unnikuttan. All rights reserved.</p>
      </div>
    </footer>
  );
}
