import type { Article } from '@/lib/data';
import PostCard from './post-card';

type LatestPostsProps = {
  articles: (Article & { imageUrl: string, imageHint: string, imageDescription: string })[];
};

export default function LatestPosts({ articles }: LatestPostsProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
          Latest Mysteries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <PostCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
