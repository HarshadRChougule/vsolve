'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Heart, Shield, Star } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle Background Pattern - consistent with home page */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-vsolve-gold via-transparent to-vsolve-gold" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vsolve-gold rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vsolve-gold rounded-full blur-3xl opacity-5" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-vsolve-gold tracking-wide leading-tight">
              A Sacred System
            </h1>
            
            <div className="space-y-6 text-lg text-vsolve-ivory/60 leading-relaxed max-w-3xl mx-auto">
              <p>
                VSOLVE functions as a precision consultancy designed to serve global 
                institutions, legacy businesses, and national bodies with emotionally 
                ethical, karmically aligned strategic systems.
              </p>
              <p>
                We are the trusted clarity engine behind impactful decisions—strategic, 
                not promotional; ethically precise, not generic; karmically neutral, 
                not inflated.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sacred System Section */}
      <section className="relative py-20">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-vsolve-gold tracking-wide">
              We Solve What Others Cannot See
            </h2>
            <div className="space-y-6 text-lg text-vsolve-ivory/60 leading-relaxed max-w-3xl mx-auto">
              <p>
                VSOLVE India is not a consultancy. We are a charity architecture firm guiding elite clients through karmic realignment, strategic grief repair, and leadership embodiment.
              </p>
              <p>
                We exist for institutions, governments, family businesses, and leaders who cannot afford misalignment.
                From leadership diagnostics and vision-to-execution frameworks, to ethical advisory for ministries and academic boards—we operate as the trusted clarity engine behind impactful decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Values Section */}
      <section className="relative py-20">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-vsolve-gold tracking-wide mb-4">
                Advisory Guardians
              </h2>
              <p className="text-xl text-vsolve-ivory/60 max-w-3xl mx-auto">
                The principles that guide our sacred work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Karmic Neutrality",
                  description: "Every decision maintains ethical balance and sustainable impact"
                },
                {
                  icon: <Compass className="w-8 h-8" />,
                  title: "Strategic Precision",
                  description: "Surgical clarity in complex institutional challenges"
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Emotional Ethics",
                  description: "Honoring the human element in all strategic frameworks"
                },
                {
                  icon: <Star className="w-8 h-8" />,
                  title: "Sacred Systems",
                  description: "Building frameworks that serve beyond profit and ego"
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-vsolve-gold/30 rounded-sm p-8 space-y-4"
                >
                  <div className="text-vsolve-gold mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-vsolve-gold tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-vsolve-ivory/60 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
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