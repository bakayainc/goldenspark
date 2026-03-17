'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PHONE_DISPLAY } from '@/lib/constants'
import styles from './CTASection.module.css'

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export function CTASection({
  title = 'Ready to Get Started?',
  subtitle = 'Contact Golden Spark today for a free, no-obligation estimate. We respond fast.',
}: CTASectionProps) {
  const pathname = usePathname()

  const handleQuoteClick = (e: React.MouseEvent) => {
    if (pathname === '/contact' || pathname === '/contact/') {
      e.preventDefault()
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>Get in Touch</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.ctas}>
          <a href="tel:+16474661986" className={styles.ctaPrimary}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call {PHONE_DISPLAY}
          </a>
          <Link href="/contact/#contact-form" className={styles.ctaSecondary} onClick={handleQuoteClick}>
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
