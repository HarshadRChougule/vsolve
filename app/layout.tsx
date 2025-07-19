import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { LayoutWrapper } from './LayoutWrapper'

export const metadata: Metadata = {
  title: 'VSOLVE | Strategic Clarity for Global Institutions',
  description: 'VSOLVE India Pvt Ltd delivers strategic clarity for institutions, governments, family businesses, and leaders who cannot afford misalignment.',
  keywords: 'strategic consulting, governance, succession planning, institutional advisory',
  authors: [{ name: 'VSOLVE India Pvt Ltd' }],
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F1B3C',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-vsolve-ivory font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </div>
      </body>
    </html>
  )
} 