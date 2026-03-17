import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/Breadcrumb'
import { CTASection } from '@/components/CTASection'
import { ContactForm } from '@/components/ContactForm'
import { COMPANY_NAME, SITE_URL, PHONE_DISPLAY, EMAIL, LICENSE } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Contact Us | ${COMPANY_NAME}`,
  description: `Contact Golden Spark Electrical Contractors for a free estimate. Call ${PHONE_DISPLAY} or send us a message. Licensed GTA electricians — ${LICENSE}.`,
  alternates: { canonical: SITE_URL + '/contact/' },
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Contact' }]} />

      <section style={{ background: '#0d0d0d', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '600px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 700,
              color: 'rgb(255, 192, 56)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase' as const,
              marginBottom: '16px',
            }}>
              Get in Touch
            </span>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-1px',
              marginBottom: '20px',
              lineHeight: 1.1,
            }}>
              Request a Free Quote
            </h1>
            <p style={{ fontSize: '17px', color: '#aaaaaa', lineHeight: 1.6 }}>
              Ready to get started? Call us directly or fill out the form below.
              We respond within a few hours, usually same day.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
          }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a1a', marginBottom: '28px' }}>
                Contact Information
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px', height: '44px',
                    background: 'rgba(255, 192, 56, 0.12)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', flexShrink: 0,
                  }}>📞</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#888888', marginBottom: '4px', textTransform: 'uppercase' as const, letterSpacing: '0.5px' }}>Phone</div>
                    <a href="tel:+16474661986" style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>{PHONE_DISPLAY}</a>
                    <div style={{ fontSize: '13px', color: '#888888', marginTop: '2px' }}>24/7 Emergency Line</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px', height: '44px',
                    background: 'rgba(255, 192, 56, 0.12)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', flexShrink: 0,
                  }}>✉️</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#888888', marginBottom: '4px', textTransform: 'uppercase' as const, letterSpacing: '0.5px' }}>Email</div>
                    <a href={`mailto:${EMAIL}`} style={{ fontSize: '17px', fontWeight: 600, color: '#1a1a1a' }}>{EMAIL}</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px', height: '44px',
                    background: 'rgba(255, 192, 56, 0.12)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', flexShrink: 0,
                  }}>📍</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#888888', marginBottom: '4px', textTransform: 'uppercase' as const, letterSpacing: '0.5px' }}>Service Area</div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>Greater Toronto Area</div>
                    <div style={{ fontSize: '13px', color: '#888888', marginTop: '2px' }}>Toronto · Mississauga · Brampton · Vaughan · Markham + more</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px', height: '44px',
                    background: 'rgba(255, 192, 56, 0.12)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', flexShrink: 0,
                  }}>🏅</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#888888', marginBottom: '4px', textTransform: 'uppercase' as const, letterSpacing: '0.5px' }}>Licence</div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: 'rgb(255, 192, 56)' }}>{LICENSE}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px', height: '44px',
                    background: 'rgba(255, 192, 56, 0.12)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', flexShrink: 0,
                  }}>🕐</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#888888', marginBottom: '4px', textTransform: 'uppercase' as const, letterSpacing: '0.5px' }}>Hours</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>Mon – Fri: 7:00 AM – 7:00 PM</div>
                    <div style={{ fontSize: '13px', color: '#888888', marginTop: '2px' }}>24/7 Emergency Service Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer to Call?"
        subtitle="Talk to a licensed electrician directly. We're available 24/7 for emergencies."
      />
    </>
  )
}
