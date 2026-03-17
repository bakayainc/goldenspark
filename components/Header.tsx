'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { PHONE_DISPLAY, SERVICES } from '@/lib/constants'
import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logoLink} onClick={() => setMenuOpen(false)}>
            <Logo variant="light" height={44} />
            <div className={styles.logoText}>
              <span className={styles.logoName}>Golden Spark</span>
              <span className={styles.logoSub}>Electrical Contractors</span>
            </div>
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
            <div className={styles.servicesDropdown}>
              <button className={styles.servicesBtn}>
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className={styles.dropdown}>
                <div className={styles.dropdownInner}>
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}/`}
                      className={styles.dropdownItem}
                    >
                      <span className={styles.dropdownIcon}>{service.icon}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className={styles.actions}>
            <a href={`tel:+16474661986`} className={styles.phoneLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
            <Link href="/contact/#contact-form" className={styles.ctaBtn}>
              Get a Free Quote
            </Link>
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMenuOpen(false)}>
          <nav
            className={styles.mobileMenu}
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile navigation"
          >
            <div className={styles.mobileMenuHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Logo variant="light" height={36} />
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#1a1a1a' }}>Golden Spark</span>
                  <span style={{ fontSize: '10px', fontWeight: 600, color: 'rgb(255, 192, 56)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Electrical Contractors</span>
                </div>
              </div>
              <button className={styles.closeBtn} onClick={() => setMenuOpen(false)} aria-label="Close menu">
                ✕
              </button>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <p className={styles.mobileSectionTitle}>Services</p>
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}/`}
                className={styles.mobileServiceLink}
                onClick={() => setMenuOpen(false)}
              >
                <span>{service.icon}</span>
                {service.name}
              </Link>
            ))}

            <a
              href="tel:+16474661986"
              className={styles.mobileCtaBtn}
              onClick={() => setMenuOpen(false)}
            >
              Call (647) 466-1986
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
