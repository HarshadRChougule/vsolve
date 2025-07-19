'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Heart } from 'lucide-react'
import Image from 'next/image'

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle Background Pattern - consistent with other pages */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-vsolve-gold via-transparent to-vsolve-gold" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vsolve-gold rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vsolve-gold rounded-full blur-3xl opacity-5" />
      </div>

      {/* Hero Section with Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Founder Image
            <div className="w-48 h-48 mx-auto rounded-sm overflow-hidden relative shadow-2xl">
              <Image
                src={`/founder.jpeg?v=${Date.now()}`}
                alt="Dr. George Varghese - Founder & Strategic Architect"
                fill
                className="object-contain"
                sizes="192px"
                priority
              />
            </div> */}
            
            {/* Name and Title */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-vsolve-gold tracking-wide leading-tight">
                Dr. George Varghese
              </h1>
              <p className="text-xl lg:text-2xl text-vsolve-gold/80 font-medium tracking-wide">
                Founder, Strategic Architect, Psychologist, Legacy Designer
              </p>
              
              {/* Decorative Divider */}
              <div className="text-vsolve-gold/60 text-2xl font-light tracking-[0.5em]">
                ⸻
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A Message from Dr. George */}
      <section className="relative py-8">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-2xl text-vsolve-gold/90 font-medium tracking-wide">
              A Message from Dr. George
            </h2>
            
            <div className="space-y-6 text-lg text-vsolve-ivory/70 leading-relaxed max-w-3xl mx-auto">
              <blockquote className="text-xl lg:text-2xl text-vsolve-ivory/80 font-light leading-relaxed italic">
                "Clarity isn't a luxury. It's the soul's requirement for right action.<br/>
                My work isn't consulting — it's restoring alignment where karma, leadership, and destiny meet."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-8">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-center"
          >
            <div className="space-y-6 text-lg text-vsolve-ivory/70 leading-relaxed max-w-3xl mx-auto">
              <p>
                After 25 years in psychology, spiritual science, leadership crises, and institutional change, I created V SOLVE — a system for restoring clarity where it's most needed.
              </p>
              
              <p>
                I've seen it everywhere — hospitals, war zones, boardrooms, ashrams — most breakdowns are not intelligence failures, but clarity failures.
              </p>
              
              <p className="text-vsolve-gold/80 font-medium text-xl">
                V SOLVE is my response.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why V SOLVE Exists */}
      <section className="relative py-8">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-2xl text-vsolve-gold/90 font-medium tracking-wide">
              Why V SOLVE Exists
            </h2>
            
            <div className="space-y-6 text-lg text-vsolve-ivory/70 leading-relaxed max-w-3xl mx-auto">
              <p>Because today's leaders succeed externally but suffer internally
              Because spiritual alignment and business clarity were never meant to be separate.
              Because when your inner system is clear, your outer world holds.</p>
              
              <p className="text-vsolve-gold/80 font-medium text-xl pt-4">
                V SOLVE is for those chosen to lead — but burdened by confusion, betrayal, or legacy fatigue.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Clarity System */}
      <section className="relative py-8">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-2xl text-vsolve-gold/90 font-medium tracking-wide">
              The Clarity System™️
            </h2>
            
            <blockquote className="text-xl lg:text-2xl text-vsolve-ivory/80 font-light leading-relaxed italic max-w-2xl mx-auto">
              "No system should move forward until the soul behind it is clear."
            </blockquote>

            <div className="space-y-6 text-lg text-vsolve-ivory/70 leading-relaxed max-w-3xl mx-auto">
              <p>This proprietary method has helped:</p>
              <div className="space-y-3">
                <p>• Royal houses navigate succession crises</p>
                <p>• Founders rebuild after betrayal or burnout</p>
                <p>• Spiritual institutions codify teachings into lasting legacies</p>
                <p>• CXOs reset after years of unconscious dysfunction</p>
              </div>
              
              <p className="text-vsolve-gold/80 font-medium text-xl pt-4">
                You can't scale what's spiritually scrambled.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Words Section */}
      <section className="relative py-8">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-2xl text-vsolve-gold/90 font-medium tracking-wide">
              Final Words
            </h2>
            
            <blockquote className="text-2xl lg:text-3xl text-vsolve-ivory/80 font-light leading-relaxed italic max-w-3xl mx-auto">
              "If your mind is your empire, clarity is your crown.<br/>
              V SOLVE isn't for everyone.<br/>
              But if you're chosen to lead — I'll help you remember why."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="relative z-10 text-center py-12"
      >
        <p className="text-vsolve-ivory/40 text-xs tracking-widest">
          VSOLVE INDIA PVT LTD
        </p>
        <p className="text-vsolve-ivory/20 text-xs mt-1">
          Strategic clarity for Earth's next spiritual leaders
        </p>
      </motion.div>
    </div>
  )
} 