import {
  SITE_URL,
  COMPANY_NAME,
  PHONE,
  EMAIL,
  LICENSE,
  ADDRESS_CITY,
  ADDRESS_PROVINCE,
  ADDRESS_COUNTRY,
  type Service,
  type Location,
  type ServiceFAQ,
} from './constants'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ElectricalContractor',
    name: COMPANY_NAME,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    description: `Licensed electrical contractor serving the Greater Toronto Area. ${LICENSE}. Industrial, commercial, and residential electrical services.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: ADDRESS_CITY,
      addressRegion: ADDRESS_PROVINCE,
      addressCountry: ADDRESS_COUNTRY,
    },
    areaServed: [
      'Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Markham',
      'Richmond Hill', 'North York', 'Scarborough', 'Etobicoke',
      'Bolton', 'Barrie', 'Alliston', 'Bradford', 'Newmarket',
      'Hamilton', 'St. Catharines',
    ],
    openingHours: 'Mo-Fr 07:00-19:00',
    priceRange: '$$',
    hasCredential: LICENSE,
    sameAs: [],
    image: `${SITE_URL}/images/logo-dark.svg`,
  }
}

export function serviceSchema(service: Service, location?: Location) {
  const locationName = location ? ` in ${location.name}, Ontario` : ' in Greater Toronto Area'
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name}${locationName}`,
    description: service.shortDesc,
    provider: {
      '@type': 'ElectricalContractor',
      name: COMPANY_NAME,
      url: SITE_URL,
      telephone: PHONE,
    },
    areaServed: location
      ? { '@type': 'City', name: location.name, containedInPlace: { '@type': 'State', name: 'Ontario' } }
      : { '@type': 'State', name: 'Ontario' },
    url: location
      ? `${SITE_URL}/lp/${service.lpSlugPrefix}-${location.slug}/`
      : `${SITE_URL}/services/${service.slug}/`,
  }
}

export function faqSchema(faqs: ServiceFAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
