import Link from 'next/link'
import { Logo } from './Logo'
import {
  COMPANY_NAME,
  PHONE_DISPLAY,
  EMAIL,
  LICENSE,
  SERVICES,
} from '@/lib/constants'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <Logo variant="dark" height={40} />
            <div>
              <div className={styles.brandName}>Golden Spark</div>
              <div className={styles.brandSub}>Electrical Contractors</div>
            </div>
          </div>
          <p className={styles.brandText}>
            Licensed electrical contractors serving the Greater Toronto Area and beyond.
            Industrial, commercial, and residential electrical services you can trust.
          </p>
          <span className={styles.license}>{LICENSE}</span>
          <div className={styles.contact}>
            <a href="tel:+16474661986" className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {EMAIL}
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Services</p>
          {SERVICES.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}/`} className={styles.colLink}>
              {service.name}
            </Link>
          ))}
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Company</p>
          <Link href="/" className={styles.colLink}>Home</Link>
          <Link href="/about/" className={styles.colLink}>About Us</Link>
          <Link href="/services/" className={styles.colLink}>All Services</Link>
          <Link href="/contact/" className={styles.colLink}>Contact</Link>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Service Areas</p>
          {['Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Markham', 'Richmond Hill', 'North York', 'Scarborough'].map((city) => (
            <span key={city} className={styles.colLink}>{city}</span>
          ))}
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.bottom}>
          <p className={styles.bottomText}>
            © {year} {COMPANY_NAME}. All rights reserved. {LICENSE}
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/contact/" className={styles.bottomLink}>Contact</Link>
            <Link href="/about/" className={styles.bottomLink}>About</Link>
            <Link href="/services/" className={styles.bottomLink}>Services</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
