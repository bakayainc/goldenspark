import Link from 'next/link'
import { PHONE_DISPLAY, LICENSE } from '@/lib/constants'
import styles from './Hero.module.css'

interface HeroProps {
  heading?: string
  subheading?: string
  showTrust?: boolean
}

export function Hero({
  heading = "Toronto's Trusted Electrical Contractors",
  subheading = "Licensed, insured, and ESA-certified electricians serving the Greater Toronto Area. Industrial, commercial, and residential electrical—done right the first time.",
  showTrust = true,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.pattern} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Licensed & Insured · {LICENSE}
        </div>

        <h1 className={styles.h1}>
          {heading.includes('GTA') || heading.includes('Toronto') ? (
            <>
              {heading.split(' ').slice(0, -2).join(' ')}{' '}
              <span className={styles.accent}>{heading.split(' ').slice(-2).join(' ')}</span>
            </>
          ) : (
            heading
          )}
        </h1>

        <p className={styles.subtitle}>{subheading}</p>

        <div className={styles.ctas}>
          <a href="tel:+16474661986" className={styles.ctaPrimary}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call {PHONE_DISPLAY}
          </a>
          <Link href="/contact/#contact-form" className={styles.ctaSecondary}>
            Request a Free Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {showTrust && (
          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              ESA Licensed
            </div>
            <div className={styles.divider} aria-hidden="true" />
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              Fully Insured
            </div>
            <div className={styles.divider} aria-hidden="true" />
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              GTA-Wide Service
            </div>
            <div className={styles.divider} aria-hidden="true" />
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              Free Estimates
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
