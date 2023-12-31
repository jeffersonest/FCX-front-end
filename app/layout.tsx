import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Providers from "@/app/providers/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Users Manager',
  description: 'The users manager App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"/>
        <link rel="manifest" href="/assets/site.webmanifest"/>
        <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
