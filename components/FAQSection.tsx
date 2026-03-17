'use client'

import { useState } from 'react'
import type { ServiceFAQ } from '@/lib/constants'
import styles from './FAQSection.module.css'

interface FAQSectionProps {
  faqs: ServiceFAQ[]
  title?: string
}

export function FAQSection({ faqs, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>FAQ</span>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <dl className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.item}>
              <dt>
                <button
                  className={`${styles.question} ${openIndex === i ? styles.questionOpen : ''}`}
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{faq.q}</span>
                  <span className={`${styles.icon} ${openIndex === i ? styles.iconOpen : ''}`} aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </dt>
              {openIndex === i && (
                <dd className={styles.answer}>{faq.a}</dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
