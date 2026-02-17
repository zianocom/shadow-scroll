import { getArticles } from '@/lib/data';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery | Shadow Scroll',
  description: 'A visual gallery of all the mysteries from Shadow Scroll.',
};

export default async function GalleryPage() {
  const articles = await getArticles();

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold !leading-tight tracking-tight">
            Mystery Gallery
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            A visual journey into the heart of darkness.
          </p>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {articles.map((article) => (
            <Link key={article.id} href={`/articles/${article.slug}`} className="group block relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={article.imageUrl}
                alt={article.imageDescription}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                data-ai-hint={article.imageHint}
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-headline text-lg line-clamp-2">{article.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
