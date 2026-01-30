import { getArticles, getFeaturedArticle } from '@/lib/data';
import HeroSection from '@/components/hero-section';
import LatestPosts from '@/components/latest-posts';

export default async function Home() {
  const featuredArticle = await getFeaturedArticle();
  const latestArticles = (await getArticles()).filter(
    (article) => !article.featured
  );

  return (
    <div>
      {featuredArticle && <HeroSection article={featuredArticle} />}
      <LatestPosts articles={latestArticles} />
    </div>
  );
}
