import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME, type Service, type Location } from './constants'

export function buildMetadata(opts: {
  title: string
  description: string
  path: string
  noIndex?: boolean
}): Metadata {
  const fullTitle = `${opts.title} | ${COMPANY_NAME}`
  const url = `${SITE_URL}${opts.path}`

  return {
    title: fullTitle,
    description: opts.description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    robots: opts.noIndex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      title: fullTitle,
      description: opts.description,
      url,
      siteName: COMPANY_NAME,
      type: 'website',
      locale: 'en_CA',
      images: [
        {
          url: `${SITE_URL}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: COMPANY_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: opts.description,
      images: [`${SITE_URL}/images/og-image.jpg`],
    },
  }
}

export function buildServiceMetadata(service: Service): Metadata {
  return buildMetadata({
    title: service.name,
    description: `${service.shortDesc} Licensed ECRA/ESA electricians serving the GTA. Free estimates. Call (647) 466-1986.`,
    path: `/services/${service.slug}/`,
  })
}

export function buildLpMetadata(service: Service, location: Location): Metadata {
  const title = `${service.name} in ${location.name}, Ontario`
  const description = `Looking for a certified ${service.name.toLowerCase()} contractor in ${location.name}? Golden Spark Electrical Contractors serves ${location.name} and surrounding areas. Licensed, insured, and ESA-certified. Call (647) 466-1986 for a free quote.`
  return buildMetadata({
    title,
    description,
    path: `/lp/${service.lpSlugPrefix}-${location.slug}/`,
  })
}
