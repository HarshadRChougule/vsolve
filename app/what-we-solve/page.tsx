'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Heart, Brain, Crown } from 'lucide-react'
import Link from 'next/link'

export default function WhatWeSolvePage() {
  const solutions = [
    {
      icon: Crown,
      title: 'Legacy friction in families and institutions',
      description: 'Deep structural realignment of generational patterns and institutional dynamics'
    },
    {
      icon: Heart,
      title: 'Unresolved grief in leadership transitions',
      description: 'Sacred processing of loss, change, and emotional inheritance in leadership'
    },
    {
      icon: Brain,
      title: 'Emotional stagnation blocking vision execution',
      description: 'Clearing internal barriers that prevent authentic strategic implementation'
    },
    {
      icon: Target,
      title: 'Karmic misalignment in strategic decisions',
      description: 'Restoring ethical coherence and spiritual integrity to decision-making processes'
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
              We Solve What Others Cannot See
            </h1>
            
            <div className="space-y-6 text-lg lg:text-xl text-vsolve-ivory/70 leading-relaxed max-w-4xl mx-auto">
              <p className="font-medium">
                VSOLVE India is a clarity architecture firm guiding leaders, institutions, 
                and legacy families through emotional intelligence, karmic alignment, and strategic repair.
              </p>
              <p className="text-vsolve-gold font-semibold">
                Our work is sacred, bespoke, and confidential.
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

      {/* What We Solve Section */}
      <section className="relative py-20">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-vsolve-gold mb-8">
              What We Solve
            </h2>
            <div className="w-24 h-px bg-vsolve-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="border border-vsolve-gold/20 rounded-lg p-8 h-full bg-black/30 backdrop-blur-sm hover:border-vsolve-gold/40 transition-all duration-300 hover:bg-vsolve-gold/5">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full border-2 border-vsolve-gold/30 flex items-center justify-center group-hover:border-vsolve-gold/60 transition-colors">
                        <solution.icon className="w-8 h-8 text-vsolve-gold" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-vsolve-ivory mb-4 leading-tight">
                        {solution.title}
                      </h3>
                      <p className="text-vsolve-ivory/60 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="border border-vsolve-gold/30 rounded-lg p-12 bg-vsolve-gold/5 backdrop-blur-sm">
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-vsolve-gold mb-6">
                Our Philosophy
              </h3>
              <p className="text-xl lg:text-2xl text-vsolve-ivory font-medium leading-relaxed">
                We do not treat symptoms. We rewrite root systems—internally, ethically, and spiritually.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 