import Link from 'next/link';
import { BookMarked } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b border-border">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold text-foreground transition-colors hover:text-primary">
          <BookMarked className="h-6 w-6" />
          Shadow Scroll
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Home
          </Link>
          <Link href="/blog" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Blog
          </Link>
          <Link href="/about" className="text-foreground/60 transition-colors hover:text-foreground/80">
            About
          </Link>
          <Link href="/contact" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
