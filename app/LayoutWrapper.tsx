'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navigation } from '../components/Navigation'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname()
  
  // Show only logo on the home page, full navigation on other pages
  const isHomePage = pathname === '/'
  
  return (
    <>
      {isHomePage ? (
        // Minimal navigation with just the VSOLVE logo for the home page
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 w-full z-50 bg-transparent"
        >
          <div className="section-padding">
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="group">
                <motion.div 
                  className="text-2xl font-serif font-bold text-vsolve-ivory group-hover:text-vsolve-gold transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  VSOLVE
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.nav>
      ) : (
        // Full navigation for all other pages
        <Navigation />
      )}
      <main className="flex-1">
        {children}
      </main>
    </>
  )
} 