import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingCallButton } from '@/components/FloatingCallButton'
import { COMPANY_NAME, SITE_URL } from '@/lib/constants'
import { localBusinessSchema } from '@/lib/schema'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'optional' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | Licensed GTA Electricians`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    'Licensed electrical contractors serving the Greater Toronto Area. Industrial, commercial & residential electrical services. ECRA/ESA #7018316. Call (647) 466-1986.',
  keywords: [
    'electrician Toronto',
    'electrical contractor GTA',
    'commercial electrician',
    'industrial electrician',
    'residential electrician',
    'panel upgrade',
    'ECRA ESA licensed',
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: SITE_URL,
    siteName: COMPANY_NAME,
    images: [{ url: `${SITE_URL}/images/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = localBusinessSchema()
  return (
    <html lang="en-CA" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="GoldenSpark Electrical Contractors" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  )
}
