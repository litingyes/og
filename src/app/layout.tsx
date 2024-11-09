import type { Metadata } from 'next'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata: Metadata = {
  title: 'OG (Open Graph)',
  description: 'Configure, preview, and generate the Open Graph protocol.',
  openGraph: {
    title: 'OG (Open Graph)',
    description: 'Configure, preview, and generate the Open Graph protocol.',
    type: 'website',
    url: 'https://og.litingyes.top/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main className="h-screen w-screen overflow-auto pb-16 pt-14">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
