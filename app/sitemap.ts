import type { MetadataRoute } from 'next'
import { SITE_URL, SERVICES, LOCATIONS, getLpSlug } from '@/lib/constants'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL + '/', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: SITE_URL + '/about/', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: SITE_URL + '/contact/', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: SITE_URL + '/services/', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const lpPages: MetadataRoute.Sitemap = []
  for (const service of SERVICES) {
    for (const location of LOCATIONS) {
      lpPages.push({
        url: `${SITE_URL}/lp/${getLpSlug(service, location)}/`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
      })
    }
  }

  return [...staticPages, ...servicePages, ...lpPages]
}
