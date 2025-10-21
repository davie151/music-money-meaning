import { Link } from "wouter";

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-tight hover:text-accent transition-colors">
              Music Essays
            </h1>
          </Link>
          <nav className="flex gap-8">
            <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

