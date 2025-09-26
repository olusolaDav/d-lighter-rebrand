import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'D-lighter Tutor - Find Your Perfect Tutoring Match',
  description: 'Connect with qualified tutors for personalized learning. Expert tutoring services for all subjects and skill levels.',
  keywords: 'tutoring, online learning, education, personalized learning, qualified tutors',
  authors: [{ name: 'D-lighter Tutor Team' }],
  creator: 'D-lighter Tutor',
  publisher: 'D-lighter Tutor',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dlighter-tutor.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dlighter-tutor.com',
    title: 'D-lighter Tutor - Find Your Perfect Tutoring Match',
    description: 'Connect with qualified tutors for personalized learning. Expert tutoring services for all subjects and skill levels.',
    siteName: 'D-lighter Tutor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D-lighter Tutor - Find Your Perfect Tutoring Match',
    description: 'Connect with qualified tutors for personalized learning. Expert tutoring services for all subjects and skill levels.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}