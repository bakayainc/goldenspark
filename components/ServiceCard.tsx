import Link from 'next/link'
import type { Service } from '@/lib/constants'
import styles from './ServiceCard.module.css'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrap} aria-hidden="true">{service.icon}</div>
      <h3 className={styles.name}>{service.name}</h3>
      <p className={styles.desc}>{service.shortDesc}</p>
      <Link href={`/services/${service.slug}/`} className={styles.link}>
        Learn More
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  )
}
