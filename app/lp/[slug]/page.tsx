import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FAQSection } from '@/components/FAQSection'
import { CTASection } from '@/components/CTASection'
import { SERVICES, LOCATIONS, getLpSlug, getLpPageData, SITE_URL, PHONE_DISPLAY, COMPANY_NAME } from '@/lib/constants'
import { buildLpMetadata } from '@/lib/seo'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const params: Array<{ slug: string }> = []
  for (const service of SERVICES) {
    for (const location of LOCATIONS) {
      params.push({ slug: getLpSlug(service, location) })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = getLpPageData(slug)
  if (!data) return {}
  return buildLpMetadata(data.service, data.location)
}

export default async function LpPage({ params }: Props) {
  const { slug } = await params
  const data = getLpPageData(slug)
  if (!data) notFound()

  const { service, location } = data
  const pageUrl = `${SITE_URL}/lp/${slug}/`
  const h1 = `${service.name} in ${location.name}, Ontario`

  const intro = `Looking for a certified ${service.name.toLowerCase()} contractor in ${location.name}? ${COMPANY_NAME} provides expert ${service.name.toLowerCase()} services throughout ${location.name} and the surrounding ${location.region} area. Our licensed, insured electricians bring the expertise and professionalism your project deserves — from initial assessment to final ESA inspection.`

  const locationContent = `${location.name} is ${location.description}. Our team regularly serves clients in ${location.neighborhoods.join(', ')}, and throughout the broader ${location.name} area. Whether you're in a commercial district, industrial park, or residential neighbourhood, Golden Spark has you covered.`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service, location)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(service.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: SITE_URL + '/' },
        { name: service.name, url: SITE_URL + '/services/' + service.slug + '/' },
        { name: `${service.name} in ${location.name}`, url: pageUrl },
      ])) }} />

      {/* Hero */}
      <section style={{
        background: '#0d0d0d',
        backgroundImage: 'radial-gradient(ellipse at 60% 0%, rgba(255, 192, 56, 0.07) 0%, transparent 60%)',
        padding: '80px 0',
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <nav aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
              <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', alignItems: 'center', listStyle: 'none' }}>
                <li><Link href="/" style={{ fontSize: '13px', color: '#888' }}>Home</Link></li>
                <li style={{ fontSize: '13px', color: '#444' }}> › </li>
                <li><Link href={`/services/${service.slug}/`} style={{ fontSize: '13px', color: '#888' }}>{service.name}</Link></li>
                <li style={{ fontSize: '13px', color: '#444' }}> › </li>
                <li><span style={{ fontSize: '13px', color: '#666' }}>{location.name}</span></li>
              </ol>
            </nav>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 192, 56, 0.1)',
              border: '1px solid rgba(255, 192, 56, 0.25)',
              color: 'rgb(255, 192, 56)',
              fontSize: '13px',
              fontWeight: 600,
              padding: '6px 14px',
              borderRadius: '100px',
              marginBottom: '20px',
            }}>
              <span>{service.icon}</span>
              {service.name} · {location.name}, Ontario
            </div>

            <h1 style={{
              fontSize: 'clamp(30px, 4.5vw, 56px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-1px',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}>
              {h1}
            </h1>

            <p style={{ fontSize: '17px', color: '#aaaaaa', lineHeight: 1.7, marginBottom: '36px' }}>
              {intro}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a
                href="tel:+16474661986"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgb(255, 192, 56)',
                  color: '#000',
                  fontSize: '15px',
                  fontWeight: 700,
                  padding: '13px 26px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                }}
              >
                📞 Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact/#contact-form"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1.5px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  fontSize: '15px',
                  fontWeight: 600,
                  padding: '13px 26px',
                  borderRadius: '8px',
                }}
              >
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ padding: '72px 0', background: '#ffffff' }}>
        <div className="container">
          <span style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgb(255, 192, 56)', letterSpacing: '1.5px', textTransform: 'uppercase' as const, marginBottom: '12px' }}>
            Services in {location.name}
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.3px', marginBottom: '20px' }}>
            {service.name} Services We Provide in {location.name}
          </h2>
          <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.75, maxWidth: '680px', marginBottom: '32px' }}>
            Our licensed electricians serve {location.name} with the same high standards we apply across all our GTA service areas.
            Every job is permitted, inspected, and completed to Ontario Electrical Safety Code.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '12px',
          }}>
            {service.features.map((feature) => (
              <div key={feature} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '14px 16px',
                background: '#f8f8f8',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
                fontSize: '14px',
                fontWeight: 500,
                color: '#1a1a1a',
              }}>
                <span style={{ color: 'rgb(255, 192, 56)', flexShrink: 0 }}>✓</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serving Location */}
      <section style={{ padding: '72px 0', background: '#f8f8f8' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <span style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgb(255, 192, 56)', letterSpacing: '1.5px', textTransform: 'uppercase' as const, marginBottom: '12px' }}>
              Serving {location.name}
            </span>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#1a1a1a', marginBottom: '20px' }}>
              Your Local {service.name} Experts in {location.name}
            </h2>
            <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.8, marginBottom: '20px' }}>
              {locationContent}
            </p>
            <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.8 }}>
              When you hire Golden Spark for {service.name.toLowerCase()} work in {location.name},
              you get a team that&apos;s familiar with local building codes, permit requirements, and utility standards.
              We coordinate with the Electrical Safety Authority (ESA) and local authorities to ensure your project
              passes inspection the first time.
            </p>

            <div style={{ marginTop: '28px' }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a', marginBottom: '12px' }}>
                Areas We Serve in {location.name}:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {location.neighborhoods.map((n) => (
                  <span key={n} style={{
                    fontSize: '13px',
                    color: '#555555',
                    background: '#ffffff',
                    border: '1px solid #e0e0e0',
                    padding: '6px 12px',
                    borderRadius: '100px',
                  }}>
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '64px 0', background: '#ffffff' }}>
        <div className="container">
          <span style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'rgb(255, 192, 56)', letterSpacing: '1.5px', textTransform: 'uppercase' as const, marginBottom: '12px' }}>
            Why Golden Spark
          </span>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#1a1a1a', marginBottom: '28px' }}>
            The Right Choice for {service.name} in {location.name}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '20px',
          }}>
            {[
              { icon: '🏅', title: 'ESA Licensed', desc: 'ECRA/ESA #7018316 — certified to work on any electrical system in Ontario' },
              { icon: '🛡️', title: 'Fully Insured', desc: 'Comprehensive liability insurance and WSIB on every job' },
              { icon: '🆓', title: 'Free Estimates', desc: 'No-obligation quotes for all projects in ' + location.name },
              { icon: '⚡', title: 'Fast Response', desc: '24/7 emergency service available throughout ' + location.region },
            ].map((item) => (
              <div key={item.title} style={{
                background: '#f8f8f8',
                border: '1.5px solid #e5e5e5',
                borderRadius: '12px',
                padding: '24px',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>{item.title}</div>
                <div style={{ fontSize: '14px', color: '#666666', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={service.faqs} title={`${service.name} FAQs`} />

      <CTASection
        title={`Need ${service.name} in ${location.name}?`}
        subtitle={`Call Golden Spark for a free estimate on your ${location.name} project. We respond fast.`}
      />
    </>
  )
}
