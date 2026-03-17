import type { Metadata } from 'next'
import { ServicePageContent } from '@/components/ServicePageContent'
import { SERVICES, SITE_URL } from '@/lib/constants'
import { buildServiceMetadata } from '@/lib/seo'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const service = SERVICES.find((s) => s.id === 'troubleshooting')!

export const metadata: Metadata = buildServiceMetadata(service)

export default function TroubleshootingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(service.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: SITE_URL + '/' },
        { name: 'Services', url: SITE_URL + '/services/' },
        { name: service.name, url: SITE_URL + '/services/' + service.slug + '/' },
      ])) }} />
      <ServicePageContent service={service} />
    </>
  )
}
