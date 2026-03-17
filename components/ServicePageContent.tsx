import Link from 'next/link'
import { FAQSection } from './FAQSection'
import { CTASection } from './CTASection'
import { Breadcrumb } from './Breadcrumb'
import { PHONE_DISPLAY, type Service } from '@/lib/constants'
import styles from './ServicePageContent.module.css'

interface ServicePageContentProps {
  service: Service
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services/' }, { label: service.name }]} />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>
            <span>{service.icon}</span>
            {service.name}
          </div>
          <h1 className={styles.h1}>{service.name} Services in the Greater Toronto Area</h1>
          <p className={styles.desc}>{service.longDesc}</p>
          <div className={styles.heroCtas}>
            <a href="tel:+16474661986" className={styles.btnPrimary}>
              📞 Call {PHONE_DISPLAY}
            </a>
            <Link href="/contact/#contact-form" className={styles.btnSecondary}>
              Request a Free Quote →
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ background: '#ffffff' }}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>What&apos;s Included</span>
          <h2 className={styles.sectionTitle}>{service.name} Services We Provide</h2>
          <p className={styles.sectionText}>
            Our licensed electricians handle every aspect of {service.name.toLowerCase()} work —
            from initial assessment and design to installation, testing, and ESA inspection.
          </p>
          <div className={styles.featuresGrid}>
            {service.features.map((feature) => (
              <div key={feature} className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ background: '#f8f8f8' }}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionLabel}>Our Commitment</span>
          <h2 className={styles.sectionTitle}>Why Choose Golden Spark?</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}>
            {[
              { icon: '🏅', title: 'ESA Certified', desc: 'ECRA/ESA #7018316 — fully licensed for all electrical work in Ontario' },
              { icon: '📋', title: 'Permit Managed', desc: 'We handle all permits, inspections, and paperwork from start to finish' },
              { icon: '⚡', title: 'Expert Team', desc: 'Certified electricians with deep experience in ' + service.name.toLowerCase() },
              { icon: '📞', title: '24/7 Support', desc: 'Emergency response available around the clock, every day of the year' },
            ].map((item) => (
              <div key={item.title} style={{
                background: '#ffffff',
                border: '1.5px solid #e5e5e5',
                borderRadius: '12px',
                padding: '24px',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>{item.title}</div>
                <div style={{ fontSize: '14px', color: '#666666', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={service.faqs} title={`${service.name} FAQs`} />

      <CTASection
        title={`Need ${service.name} Services?`}
        subtitle="Contact Golden Spark for a free estimate. Licensed, insured, and ready to help across the GTA."
      />
    </>
  )
}
