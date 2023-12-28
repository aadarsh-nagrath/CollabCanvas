// app/layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ConvexClientProvider } from '@/components/providers/convex-provider';

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
      <body className={inter.className}>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  )
}
