import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { ServiceCard } from '@/components/ServiceCard'
import { FAQSection } from '@/components/FAQSection'
import { CTASection } from '@/components/CTASection'
import { SERVICES, COMPANY_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Licensed GTA Electricians | ${COMPANY_NAME}`,
  description:
    'Golden Spark Electrical Contractors — licensed, insured electricians serving the Greater Toronto Area. Industrial, commercial & residential electrical services. ECRA/ESA #7018316. Free estimates.',
  alternates: { canonical: SITE_URL + '/' },
}

const HOME_FAQS = [
  {
    q: 'What areas does Golden Spark serve?',
    a: 'We serve the entire Greater Toronto Area including Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, North York, Scarborough, and Etobicoke, as well as Barrie, Hamilton, St. Catharines, and surrounding communities.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Golden Spark holds ECRA/ESA licence #7018316 and carries full liability insurance and WSIB coverage. All our electricians are certified and trained to Ontario Electrical Safety Code standards.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Absolutely. We provide free, no-obligation estimates for all residential, commercial, and industrial electrical projects. Contact us by phone or online to schedule your assessment.',
  },
  {
    q: 'Do you handle emergency electrical calls?',
    a: 'Yes. We offer 24/7 emergency electrical service across the GTA. For power outages, burning smells, sparking outlets, or any electrical emergency, call us immediately at (647) 466-1986.',
  },
  {
    q: 'What types of electrical work do you specialize in?',
    a: 'Golden Spark specializes in industrial, commercial, and residential electrical services, including spray booth electrical systems, panel upgrades, EV charger installation, troubleshooting, and preventive maintenance programs.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Services Section */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 700,
              color: 'rgb(255, 192, 56)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase' as const,
              marginBottom: '12px',
            }}>
              What We Do
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 900,
              color: '#1a1a1a',
              letterSpacing: '-0.5px',
              marginBottom: '16px',
            }}>
              Electrical Services for Every Need
            </h2>
            <p style={{ fontSize: '16px', color: '#666666', maxWidth: '560px', margin: '0 auto' }}>
              From industrial facilities to family homes, Golden Spark delivers code-compliant,
              reliable electrical work across the GTA.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link
              href="/services/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '15px',
                fontWeight: 600,
                color: '#1a1a1a',
                border: '1.5px solid #e5e5e5',
                padding: '12px 24px',
                borderRadius: '8px',
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '80px 0', background: '#f8f8f8' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 700,
              color: 'rgb(255, 192, 56)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase' as const,
              marginBottom: '12px',
            }}>
              Why Golden Spark
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 900,
              color: '#1a1a1a',
              letterSpacing: '-0.5px',
              marginBottom: '24px',
            }}>
              The GTA&apos;s Trusted Electrical Contractors
            </h2>
            <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.7, marginBottom: '32px' }}>
              Golden Spark has built its reputation on quality workmanship, honest pricing, and
              reliable service. We show up on time, work clean, and stand behind every job we do.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: '⚡', title: 'Licensed & Certified', desc: 'ECRA/ESA #7018316 — all work meets Ontario Electrical Safety Code' },
                { icon: '📋', title: 'Permit-Ready', desc: 'We handle all permits and ESA inspections end-to-end — no paperwork headaches for you' },
                { icon: '💰', title: 'Transparent Pricing', desc: 'Upfront quotes with no hidden fees — the price we quote is the price you pay' },
                { icon: '🏆', title: 'Workmanship Guarantee', desc: 'We stand behind every job. If it\'s not right, we\'ll make it right at no charge' },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    background: 'rgba(255, 192, 56, 0.12)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ fontSize: '14px', color: '#666666' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section style={{ padding: '64px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 700,
              color: 'rgb(255, 192, 56)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase' as const,
              marginBottom: '12px',
            }}>
              Service Area
            </span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.3px' }}>
              Serving the GTA and Beyond
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {[
              'Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Markham',
              'Richmond Hill', 'North York', 'Scarborough', 'Etobicoke',
              'Bolton', 'Barrie', 'Alliston', 'Bradford', 'Newmarket',
              'Hamilton', 'St. Catharines',
            ].map((city) => (
              <span key={city} style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#555555',
                background: '#f5f5f5',
                border: '1px solid #e5e5e5',
                padding: '8px 16px',
                borderRadius: '100px',
              }}>
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={HOME_FAQS} title="Common Questions" />
      <CTASection />
    </>
  )
}
