import { getArticles } from '@/lib/data';
import PostCard from '@/components/post-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Shadow Scroll',
  description: 'Explore all the chilling mysteries from Shadow Scroll.',
};

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold !leading-tight tracking-tight">
                All Mysteries
            </h1>
            <p className="text-muted-foreground text-lg mt-2">
                Dive into the archives of the unknown.
            </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <PostCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
