'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Map, Brain, Eye, Compass, BookOpen, Lock } from 'lucide-react'
import Link from 'next/link'

export default function ClaritySystemsPage() {
  const systems = [
    {
      icon: Map,
      name: 'V-MAP™',
      title: 'Vision Mapping & Alignment Protocol',
      description: 'Strategic clarity architecture that aligns institutional vision with authentic purpose and sustainable execution pathways.'
    },
    {
      icon: Brain,
      name: 'Emotional DNA™ Matrix',
      title: 'Behavioral pattern + trauma imprint diagnosis',
      description: 'Deep psychological mapping of inherited behavioral patterns and trauma imprints affecting leadership and decision-making.'
    },
    {
      icon: Eye,
      name: 'Succession Mirror™',
      title: 'Ethical recalibration for legacy transitions',
      description: 'Sacred process for honorable power transitions, ensuring ethical continuity and karmic integrity across generations.'
    },
    {
      icon: Compass,
      name: 'Strategic Dharma Ledger',
      title: 'Karmic alignment + clarity architecture',
      description: 'Comprehensive system for aligning strategic decisions with dharmic principles and karmic responsibility.'
    },
    {
      icon: BookOpen,
      name: 'VSOLVE Codex™',
      title: 'Final soul-book of your engagement',
      description: 'Sacred documentation of your transformation journey, serving as a living guide for continued ethical leadership.'
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
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20">
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-vsolve-gold tracking-wide leading-tight">
              Our Signature Systems
            </h1>
            
            <div className="space-y-6 text-lg lg:text-xl text-vsolve-ivory/70 leading-relaxed max-w-4xl mx-auto">
              <p className="font-medium">
                Sacred technologies designed for institutional transformation and ethical leadership recalibration. 
                Each system operates as both a diagnostic tool and a transformative process.
              </p>
              <p className="text-vsolve-gold font-semibold">
                Bespoke. Confidential. Transformative.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-8"
            >
              <Link 
                href="/sanctuary"
                className="inline-flex items-center space-x-3 bg-vsolve-gold text-black px-8 py-4 rounded-sm font-semibold text-lg hover:bg-vsolve-gold/90 transition-all duration-300 shadow-lg hover:shadow-vsolve-gold/20"
              >
                <span>Begin Your Process</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="relative py-20">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="relative border border-vsolve-gold/20 rounded-lg bg-black/40 backdrop-blur-sm hover:border-vsolve-gold/40 transition-all duration-300 hover:bg-vsolve-gold/5 cursor-not-allowed group-hover:shadow-lg group-hover:shadow-vsolve-gold/10">
                  {/* Lock Badge */}
                  <div className="absolute top-6 right-6 flex items-center space-x-2 bg-vsolve-gold/10 border border-vsolve-gold/30 rounded-full px-3 py-1">
                    <Lock className="w-4 h-4 text-vsolve-gold/80" />
                    <span className="text-xs font-medium text-vsolve-gold/80 uppercase tracking-wide">Locked</span>
                  </div>
                  
                  <div className="p-8 lg:p-10">
                    {/* Header with Icon and System Name */}
                    <div className="flex items-center space-x-6 mb-8">
                      <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-vsolve-gold/10 border border-vsolve-gold/30 group-hover:border-vsolve-gold/50 transition-colors">
                        <system.icon className="w-8 h-8 text-vsolve-gold" />
                      </div>
                      <div>
                        <div className="text-2xl font-serif font-bold text-vsolve-gold tracking-wide mb-1">
                          {system.name}
                        </div>
                        <div className="w-12 h-0.5 bg-vsolve-gold/40"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl lg:text-2xl font-semibold text-vsolve-ivory leading-tight">
                        {system.title}
                      </h3>
                      <p className="text-base lg:text-lg text-vsolve-ivory/70 leading-relaxed">
                        {system.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Technology Section */}
      <section className="relative py-20">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="border border-vsolve-gold/30 rounded-lg p-12 bg-vsolve-gold/5 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="w-16 h-px bg-vsolve-gold mx-auto"></div>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-vsolve-gold">
                  Sacred Technology
                </h3>
                <p className="text-xl lg:text-2xl text-vsolve-ivory font-medium leading-relaxed">
                  These systems do not operate as consultancy tools. They function as sacred technologies 
                  for institutional DNA repair, ethical recalibration, and karmic alignment.
                </p>
                <div className="w-16 h-px bg-vsolve-gold mx-auto"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 