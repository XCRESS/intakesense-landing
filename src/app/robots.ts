import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://intakesense.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/favicon.ico',
          '/favicon.png',
          '/logo.png',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}