import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/lib/data';
import { Button } from '@/components/ui/button';

type HeroSectionProps = {
  article: Article & { imageUrl: string, imageHint: string, imageDescription: string };
};

export default function HeroSection({ article }: HeroSectionProps) {
  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center text-center text-white">
      <Image
        src={article.imageUrl}
        alt={article.imageDescription}
        fill
        className="object-cover"
        priority
        data-ai-hint={article.imageHint}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold !leading-tight tracking-tight">
          {article.title}
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-foreground/80">
          {article.excerpt}
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg">
          <Link href={`/articles/${article.slug}`}>Read The Mystery</Link>
        </Button>
      </div>
    </section>
  );
}
