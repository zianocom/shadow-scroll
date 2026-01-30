import { MetadataRoute } from 'next';

// This is a placeholder domain. You should replace it with your actual domain.
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
