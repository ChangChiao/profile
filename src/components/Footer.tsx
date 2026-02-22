export default function Footer() {
  return (
    <footer className="border-t border-surface-light/50 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} Joe Chang. All rights reserved.
      </div>
    </footer>
  );
}
