'use client'

import { useState } from 'react'
import { PHONE, PHONE_DISPLAY } from '@/lib/constants'
import styles from './ContactForm.module.css'

const MAIL_ENDPOINT = '/forms/mail.php'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<React.ReactNode>(null)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(MAIL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
      } else {
        setError(data.error ?? <>Something went wrong. Please call us directly at <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.</>)
      }
    } catch {
      setError(<>Unable to send message. Please call us directly at <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.</>)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className={`${styles.form} ${styles.success}`}>
        <div className={styles.successIcon}>✅</div>
        <div className={styles.successTitle}>Message Sent!</div>
        <p className={styles.successText}>
          Thanks, we&apos;ve received your request and will be in touch shortly.
          For urgent matters, call us at <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.
        </p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Send Us a Message</h2>
      <div className={styles.grid}>
        <div>
          <label className={styles.label} htmlFor="name">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={styles.input}
            placeholder="John Smith"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className={styles.label} htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={styles.input}
            placeholder="(647) 555-0100"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.fullWidth}>
          <label className={styles.label} htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className={styles.input}
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.fullWidth}>
          <label className={styles.label} htmlFor="service">Service Required</label>
          <select
            id="service"
            name="service"
            className={styles.select}
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Select a service...</option>
            <option value="Industrial Electrical">Industrial Electrical</option>
            <option value="Commercial Electrical">Commercial Electrical</option>
            <option value="Residential Electrical">Residential Electrical</option>
            <option value="Spray Booth Systems">Spray Booth Systems</option>
            <option value="Electrical Troubleshooting">Electrical Troubleshooting</option>
            <option value="Maintenance & Repair">Maintenance & Repair</option>
            <option value="Other">Other / Not Sure</option>
          </select>
        </div>

        <div className={styles.fullWidth}>
          <label className={styles.label} htmlFor="message">Message / Project Details *</label>
          <textarea
            id="message"
            name="message"
            required
            className={styles.textarea}
            placeholder="Describe your project or electrical issue..."
            value={form.message}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Honeypot — hidden from real users, catches bots */}
      <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" className={styles.submit} disabled={loading}>
        {loading ? 'Sending...' : 'Send Message →'}
      </button>
      <p className={styles.note}>We typically respond within a few hours during business hours.</p>
    </form>
  )
}
