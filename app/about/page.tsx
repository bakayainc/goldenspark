import type { Metadata } from 'next'
import { CTASection } from '@/components/CTASection'
import { TrustBar } from '@/components/TrustBar'
import { Breadcrumb } from '@/components/Breadcrumb'
import { COMPANY_NAME, SITE_URL, LICENSE, PHONE_DISPLAY, EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `About Us | ${COMPANY_NAME}`,
  description: `Learn about Golden Spark Electrical Contractors — licensed GTA electricians with expertise in industrial, commercial, and residential electrical services. ${LICENSE}.`,
  alternates: { canonical: SITE_URL + '/about/' },
}

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* Hero */}
      <section style={{ background: '#0d0d0d', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 700,
              color: 'rgb(255, 192, 56)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              Our Story
            </span>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 60px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-1px',
              marginBottom: '24px',
              lineHeight: 1.1,
            }}>
              Powering the GTA with Expertise and Integrity
            </h1>
            <p style={{ fontSize: '18px', color: '#aaaaaa', lineHeight: 1.7 }}>
              Golden Spark Electrical Contractors was founded on a simple principle: deliver
              expert electrical work with honesty, precision, and care. Today, we're one of
              the GTA's most trusted electrical contracting firms — serving industrial facilities,
              commercial properties, and homes across Ontario.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Story Section */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
          }}>
            <div style={{ maxWidth: '700px' }}>
              <h2 style={{
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 800,
                color: '#1a1a1a',
                letterSpacing: '-0.3px',
                marginBottom: '20px',
              }}>
                Who We Are
              </h2>
              <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.8, marginBottom: '20px' }}>
                Golden Spark Electrical Contractors is a full-service electrical contracting company
                based in Toronto, Ontario. We hold ECRA/ESA licence {LICENSE} and carry full liability
                insurance and WSIB coverage. Our team of certified electricians brings decades of
                combined experience across industrial, commercial, and residential sectors.
              </p>
              <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.8, marginBottom: '20px' }}>
                We specialize in complex electrical systems — from 3-phase industrial power and
                motor controls to spray booth electrical and high-capacity commercial fit-outs.
                But we're equally at home upgrading a residential panel or installing a Level 2
                EV charger in a family home.
              </p>
              <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.8 }}>
                What sets us apart is our commitment to doing things right. We pull permits, follow
                code, and take pride in work that lasts. When you hire Golden Spark, you're not just
                hiring an electrician — you're hiring a partner who stands behind every wire, every
                connection, and every job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 0', background: '#f8f8f8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 700,
              color: 'rgb(255, 192, 56)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              Our Values
            </span>
            <h2 style={{
              fontSize: 'clamp(24px, 3vw, 40px)',
              fontWeight: 900,
              color: '#1a1a1a',
              letterSpacing: '-0.3px',
            }}>
              The Golden Spark Difference
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {[
              { icon: '⚡', title: 'Safety First', desc: 'Every job starts with safety. We follow the Ontario Electrical Safety Code on every project, no shortcuts.' },
              { icon: '🎯', title: 'Precision Work', desc: 'Clean installs, tight connections, and code-compliant work that inspectors approve without issues.' },
              { icon: '🤝', title: 'Honest Pricing', desc: 'No hidden fees. We quote accurately upfront and stick to it. What we say is what you pay.' },
              { icon: '⏰', title: 'On Time, Every Time', desc: 'We respect your time. Our team arrives when we say we will and completes work on schedule.' },
              { icon: '📞', title: '24/7 Availability', desc: 'Electrical emergencies don\'t keep office hours. Neither do we. Call us any time.' },
              { icon: '🏆', title: 'Quality Guaranteed', desc: 'We stand behind our work. If something isn\'t right, we make it right — guaranteed.' },
            ].map((item) => (
              <div key={item.title} style={{
                background: '#ffffff',
                border: '1.5px solid #e5e5e5',
                borderRadius: '12px',
                padding: '28px 24px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(255, 192, 56, 0.12)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '16px',
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#666666', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section style={{ padding: '64px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1a1a1a', marginBottom: '32px' }}>
              Get in Touch
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
              <a href="tel:+16474661986" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '18px',
                fontWeight: 600,
                color: '#1a1a1a',
                transition: 'color 0.15s',
              }}>
                📞 {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '16px',
                color: '#555555',
              }}>
                ✉️ {EMAIL}
              </a>
              <p style={{ fontSize: '14px', color: '#888888', marginTop: '8px' }}>
                Toronto, Ontario, Canada · Serving the GTA and surrounding regions
              </p>
              <div style={{
                display: 'inline-block',
                fontSize: '13px',
                fontWeight: 600,
                color: 'rgb(255, 192, 56)',
                background: 'rgba(255, 192, 56, 0.1)',
                padding: '6px 14px',
                borderRadius: '6px',
                border: '1px solid rgba(255, 192, 56, 0.25)',
              }}>
                {LICENSE}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Work With Us?" subtitle="Call or request a quote online — we respond fast and provide free estimates." />
    </>
  )
}
