import Link from 'next/link'
import styles from './Breadcrumb.module.css'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className={styles.nav} aria-label="Breadcrumb">
      <div className={styles.inner}>
        <ol className={styles.list}>
          <li className={styles.item}>
            <Link href="/" className={styles.link}>Home</Link>
            <span className={styles.sep} aria-hidden="true">›</span>
          </li>
          {items.map((item, i) => (
            <li key={i} className={styles.item}>
              {item.href ? (
                <>
                  <Link href={item.href} className={styles.link}>{item.label}</Link>
                  {i < items.length - 1 && <span className={styles.sep} aria-hidden="true">›</span>}
                </>
              ) : (
                <span className={styles.current} aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
