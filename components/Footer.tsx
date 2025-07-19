'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-vsolve-navy-light border-t border-vsolve-gold/20">
      <div className="section-padding section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-serif font-bold text-vsolve-ivory">
                VSOLVE
              </h3>
              <p className="text-vsolve-ivory/80 max-w-md leading-relaxed">
                A sacred system. A precision consultancy serving global institutions, 
                legacy businesses, and national bodies with emotionally ethical, 
                karmically aligned strategic systems.
              </p>
              <div className="text-sm text-vsolve-ivory/60">
                <p>VSOLVE India Pvt Ltd</p>
                <p className="mt-1">Founded by Dr. George Varghese</p>
                <p>Co-led by Jenny Joy</p>
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-serif font-semibold text-vsolve-gold">
                Navigation
              </h4>
              <nav className="space-y-4">
                {[
                  { href: '/about', label: 'About' },
                  { href: '/what-we-solve', label: 'What We Solve' },
                  { href: '/founder', label: 'Founder' },
                  { href: '/clarity-systems', label: 'Clarity Systems' },
                  { href: '/journal', label: 'Journal' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-vsolve-ivory/80 hover:text-vsolve-gold transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-serif font-semibold text-vsolve-gold">
                Connect
              </h4>
              <div className="space-y-4">
                <Link
                  href="/invite-us"
                  className="block text-vsolve-ivory/80 hover:text-vsolve-gold transition-colors duration-300"
                >
                  Let's Solve What Matters
                </Link>
                <div className="text-sm text-vsolve-ivory/60">
                  <p>Confidential clarity firm</p>
                  <p className="mt-1">Gated access by invitation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-vsolve-gold/20"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-vsolve-ivory/60 text-center lg:text-left">
              <p>© {currentYear} VSOLVE India Pvt Ltd. Strategic clarity for Earth's next spiritual leaders.</p>
            </div>
            <div className="flex space-x-8 text-sm">
              <Link 
                href="/privacy" 
                className="text-vsolve-ivory/60 hover:text-vsolve-gold transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="text-vsolve-ivory/60 hover:text-vsolve-gold transition-colors duration-300"
              >
                Terms
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 