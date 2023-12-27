import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "CollabCanvas",
  description: "Collaboration multimedia tool",
  icons: [
    {
      url: "/collab-logo.svg",
      href: "/collab-logo.svg",
    },
  ],
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
