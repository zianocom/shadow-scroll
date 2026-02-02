import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row h-auto md:h-20 items-center justify-between px-4 md:px-6 py-4 md:py-0 gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {year} Shadow Scroll. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="/blog" className="hover:text-foreground">Blog</Link>
            <Link href="/about" className="hover:text-foreground">About</Link>
            <Link href="/contact" className="hover:text-foreground">Contact</Link>
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
