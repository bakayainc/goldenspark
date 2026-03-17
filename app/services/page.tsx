import type { Metadata } from 'next'
import { ServiceCard } from '@/components/ServiceCard'
import { CTASection } from '@/components/CTASection'
import { Breadcrumb } from '@/components/Breadcrumb'
import { SERVICES, COMPANY_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Electrical Services | ${COMPANY_NAME}`,
  description:
    'Explore Golden Spark\'s full range of electrical services — industrial, commercial, residential, spray booth systems, troubleshooting, and maintenance. Serving the GTA.',
  alternates: { canonical: SITE_URL + '/services/' },
}

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Services' }]} />

      <section style={{ background: '#0d0d0d', padding: '72px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '640px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 700,
              color: 'rgb(255, 192, 56)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase' as const,
              marginBottom: '16px',
            }}>
              Our Services
            </span>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-1px',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}>
              Electrical Solutions for Every Application
            </h1>
            <p style={{ fontSize: '17px', color: '#aaaaaa', lineHeight: 1.6 }}>
              From high-voltage industrial systems to residential EV chargers, Golden Spark
              delivers expert electrical work across all sectors. Licensed, insured, and ready to help.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '28px',
          }}>
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
