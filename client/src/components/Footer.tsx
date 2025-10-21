export default function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-24">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Music Essays. A platform for thoughtful writing about music.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            All articles are the property of their respective authors.
          </p>
        </div>
      </div>
    </footer>
  );
}

