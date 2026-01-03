// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reelgrab.site';
  const currentDate = new Date();

  return [
    // Homepage - Highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    
    // Main content pages - High priority
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // All Blog posts - Medium-high priority
    {
      url: `${baseUrl}/blog/how-to-download-instagram-reels`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/instagram-reels-video-quality`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/instagram-reels-trends-2025`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/best-time-to-post-reels`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/instagram-algorithm-explained`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/instagram-reels-vs-tiktok`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-to-go-viral-on-instagram`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/instagram-content-strategy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/instagram-analytics-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/instagram-reels-monetization`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
{
  url: `${baseUrl}/blog/brand-partnerships-instagram`,
  lastModified: '2024-12-18',
  changeFrequency: 'monthly',
  priority: 0.8,
},
{
  url: `${baseUrl}/blog/content-creation-tools`,
  lastModified: '2024-12-17',
  changeFrequency: 'monthly',
  priority: 0.8,
},
{
  url: `${baseUrl}/blog/copyright-law-instagram-creators`,
  lastModified: '2025-01-03',
  changeFrequency: 'monthly',
  priority: 0.9,
},
{
  url: `${baseUrl}/blog/grow-instagram-following`,
  lastModified: '2024-12-22',
  changeFrequency: 'monthly',
  priority: 0.9,
},
{
  url: `${baseUrl}/blog/instagram-analytics-guide`,
  lastModified: '2024-12-23',
  changeFrequency: 'monthly',
  priority: 0.8,
},
{
  url: `${baseUrl}/blog/instagram-business-account`,
  lastModified: '2024-12-16',
  changeFrequency: 'monthly',
  priority: 0.8,
},
{
  url: `${baseUrl}/blog/instagram-content-calendar`,
  lastModified: '2024-12-21',
  changeFrequency: 'monthly',
  priority: 0.8,
},
{
  url: `${baseUrl}/blog/instagram-reels-hooks`,
  lastModified: '2025-01-02',
  changeFrequency: 'monthly',
  priority: 0.9,
},
{
  url: `${baseUrl}/blog/instagram-reels-mistakes`,
  lastModified: '2024-12-19',
  changeFrequency: 'monthly',
  priority: 0.8,
},
{
  url: `${baseUrl}/blog/instagram-reels-monetization-guide`,
  lastModified: '2025-01-02',
  changeFrequency: 'monthly',
  priority: 0.9,
},
{
  url: `${baseUrl}/blog/instagram-seo-guide`,
  lastModified: '2024-12-20',
  changeFrequency: 'monthly',
  priority: 0.8,
},
{
  url: `${baseUrl}/blog/use-instagram-reels-legally`,
  lastModified: '2025-01-03',
  changeFrequency: 'monthly',
  priority: 0.9,
},

    // All Guide pages - Medium-high priority
    {
      url: `${baseUrl}/guides/instagram-marketing-strategy-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/video-content-creation-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/instagram-reels-editing-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/social-media-growth-strategies`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides//instagram-reels-guide-beginners`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/content-creation-tools`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/instagram-business-account-setup`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/influencer-marketing-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/instagram-ads-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/brand-building-on-instagram`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // About page - Medium priority
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Legal pages - Lower priority
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
