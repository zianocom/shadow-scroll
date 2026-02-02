import { getArticles, getArticleBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | Shadow Scroll`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article>
      <header className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src={article.imageUrl}
          alt={article.imageDescription}
          fill
          className="object-cover"
          priority
          data-ai-hint={article.imageHint}
        />
        <div className="absolute inset-0 bg-black/50" />
      </header>

      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="py-12 md:py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold !leading-tight tracking-tight mb-4">
              {article.title}
            </h1>
            <p className="text-muted-foreground text-lg">
              By {article.author} &bull; {article.publishedDate}
            </p>
          </div>

          <div
            className="prose prose-invert prose-lg max-w-3xl mx-auto prose-headings:font-headline prose-headings:text-primary prose-h2:mt-12 prose-h2:mb-6 prose-a:text-accent hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:bg-muted/20 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/80"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </article>
  );
}
