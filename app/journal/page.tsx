'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Lock, Eye, BookOpen, Feather } from 'lucide-react'
import Link from 'next/link'

export default function JournalPage() {
  const journalEntries = [
    {
      title: "On Sacred Leadership",
      date: "October 2024",
      preview: "The weight of ethical responsibility cannot be measured in conventional metrics. True leadership emerges not from..."
    },
    {
      title: "Letters from the Silence",
      date: "September 2024",
      preview: "In the spaces between decisions, we find the architecture of authentic transformation. These fragments emerge from..."
    },
    {
      title: "Institutional DNA Repair",
      date: "August 2024",
      preview: "Organizations carry inherited patterns deeper than most leaders recognize. The work of ethical recalibration requires..."
    },
    {
      title: "The Dharma of Power",
      date: "July 2024",
      preview: "Power without dharmic alignment becomes a destructive force. In our sacred work with institutional leaders, we witness..."
    },
    {
      title: "Karmic Architecture",
      date: "June 2024",
      preview: "Every decision creates karmic imprints that echo through generations. The responsibility of ethical leadership extends..."
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-vsolve-gold via-transparent to-vsolve-gold" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vsolve-gold rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vsolve-gold rounded-full blur-3xl opacity-5" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <BookOpen className="w-8 h-8 text-vsolve-gold" />
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-vsolve-gold tracking-wide">
                The Journal
              </h1>
              <Feather className="w-8 h-8 text-vsolve-gold" />
            </div>
            
            <div className="space-y-6 text-lg lg:text-xl text-vsolve-ivory/70 leading-relaxed max-w-3xl mx-auto">
              <p className="font-medium">
                Essays, letters, and thought pieces from within the silence of our work. 
                These are not blog posts. They are doctrine fragments offered to those aligned.
              </p>
              <p className="text-vsolve-gold font-semibold">
                Access available after your initial circle session.
              </p>
            </div>

            {/* Lock Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center space-x-3 bg-vsolve-gold/10 border border-vsolve-gold/30 rounded-full px-6 py-3 mt-8"
            >
              <Lock className="w-5 h-5 text-vsolve-gold/80" />
              <span className="text-sm font-medium text-vsolve-gold/80 uppercase tracking-wide">
                Sacred Archive • Invite Only
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blurred Journal Entries */}
      <section className="relative py-20">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {journalEntries.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                className="relative group"
              >
                {/* Blur Overlay */}
                <div className="absolute inset-0 backdrop-blur-sm bg-black/20 rounded-lg z-10 flex items-center justify-center cursor-not-allowed">
                  <div className="flex items-center space-x-3 bg-black/80 border border-vsolve-gold/30 rounded-full px-6 py-3">
                    <Lock className="w-4 h-4 text-vsolve-gold/80" />
                    <span className="text-sm font-medium text-vsolve-gold/80">Locked Content</span>
                  </div>
                </div>

                {/* Entry Content (Blurred) */}
                <div className="border border-vsolve-gold/20 rounded-lg p-8 bg-black/30 backdrop-blur-sm filter blur-[2px] select-none">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-serif font-bold text-vsolve-gold">
                        {entry.title}
                      </h3>
                      <span className="text-sm text-vsolve-ivory/50 font-medium">
                        {entry.date}
                      </span>
                    </div>
                    <div className="w-16 h-0.5 bg-vsolve-gold/40"></div>
                    <p className="text-lg text-vsolve-ivory/70 leading-relaxed">
                      {entry.preview}
                    </p>
                    <div className="flex items-center space-x-4 pt-4">
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-vsolve-gold/60" />
                        <span className="text-sm text-vsolve-ivory/50">Sacred Reading</span>
                      </div>
                      <div className="w-1 h-1 bg-vsolve-gold/40 rounded-full"></div>
                      <span className="text-sm text-vsolve-ivory/50">Doctrine Fragment</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Instructions */}
      <section className="relative py-20">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="border border-vsolve-gold/30 rounded-lg p-8 lg:p-12 bg-vsolve-gold/5 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="w-16 h-px bg-vsolve-gold mx-auto"></div>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-vsolve-gold">
                  Access Protocol
                </h3>
                <p className="text-xl text-vsolve-ivory font-medium leading-relaxed">
                  These sacred writings are released only to those who have entered our circle. 
                  Complete your initial session to unlock the doctrine archive.
                </p>
                <div className="pt-4">
                  <Link 
                    href="/sanctuary"
                    className="inline-flex items-center space-x-3 bg-vsolve-gold text-black px-8 py-4 rounded-sm font-semibold text-lg hover:bg-vsolve-gold/90 transition-all duration-300 shadow-lg hover:shadow-vsolve-gold/20"
                  >
                    <span>Begin Sacred Process</span>
                    <Lock className="w-5 h-5" />
                  </Link>
                </div>
                <div className="w-16 h-px bg-vsolve-gold mx-auto"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 