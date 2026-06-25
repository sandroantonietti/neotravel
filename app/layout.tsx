import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Neotravel - Transport de groupe sur mesure',
  description: 'Obtenez un devis gratuit pour votre transport de groupe. Reponse sous 24h. Entreprises, collectivites, associations - de 7 a 500 passagers.',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
