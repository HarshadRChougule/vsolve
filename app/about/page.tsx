'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Heart, Shield, Star } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-vsolve-navy via-vsolve-navy-light to-vsolve-navy" />
        
        <div className="relative z-10 section-padding text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-vsolve-ivory leading-tight">
              The Philosophy
            </h1>
            <p className="text-xl lg:text-2xl text-vsolve-ivory/80 max-w-3xl mx-auto leading-relaxed">
              We are not building a company. We are building an ethical operating system 
              for Earth's next spiritual leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sacred System Section */}
      <section className="section-spacing bg-vsolve-navy-light">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-4xl font-serif font-bold text-vsolve-ivory">
                  A Sacred System
                </h2>
                <div className="space-y-6 text-lg text-vsolve-ivory/80 leading-relaxed">
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

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="glass-effect p-8 rounded-lg">
                  <h3 className="text-2xl font-serif font-semibold text-vsolve-gold mb-6">
                    Our Dharma
                  </h3>
                  <ul className="space-y-4 text-vsolve-ivory/80">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-vsolve-gold mt-1 flex-shrink-0" />
                      <span>Solve, not sell</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-vsolve-gold mt-1 flex-shrink-0" />
                      <span>Guide, not grow for vanity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-vsolve-gold mt-1 flex-shrink-0" />
                      <span>Influence power, without being consumed by it</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className="section-spacing bg-vsolve-navy">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-vsolve-ivory mb-6">
                The People
              </h2>
              <p className="text-xl text-vsolve-ivory/80 max-w-3xl mx-auto">
                Advisory guardians who embody strategic wisdom and ethical precision
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-effect p-8 rounded-lg text-center"
              >
                <div className="w-20 h-20 bg-vsolve-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Compass className="w-10 h-10 text-vsolve-gold" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-vsolve-ivory mb-4">
                  Dr. George Varghese
                </h3>
                <p className="text-vsolve-gold mb-6">Founder & Strategic Architect</p>
                <p className="text-vsolve-ivory/80 leading-relaxed">
                  The visionary behind VSOLVE's sacred framework. Dr. Varghese brings 
                  decades of institutional wisdom and karmic business philosophy to 
                  global strategic challenges.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-effect p-8 rounded-lg text-center"
              >
                <div className="w-20 h-20 bg-vsolve-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-vsolve-gold" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-vsolve-ivory mb-4">
                  Jenny Joy
                </h3>
                <p className="text-vsolve-gold mb-6">Co-Leader & Clarity Guardian</p>
                <p className="text-vsolve-ivory/80 leading-relaxed">
                  The emotional intelligence architect who ensures every strategic 
                  intervention remains aligned with spiritual ethics and sustainable impact.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-vsolve-navy-light">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-vsolve-ivory mb-6">
                Advisory Guardians
              </h2>
              <p className="text-xl text-vsolve-ivory/80 max-w-3xl mx-auto">
                The principles that guide our sacred work
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="text-center space-y-4"
                >
                  <div className="text-vsolve-gold mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-vsolve-ivory">
                    {value.title}
                  </h3>
                  <p className="text-vsolve-ivory/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curated Intelligence Section */}
      <section className="section-spacing bg-vsolve-navy">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-vsolve-ivory mb-8">
                A Curated Intelligence Space
              </h2>
              <div className="space-y-6 text-lg text-vsolve-ivory/80 leading-relaxed">
                <p>
                  VSOLVE's website is a curated intelligence space, not a marketing funnel. 
                  We exist for institutions, governments, family businesses, and leaders 
                  who cannot afford misalignment.
                </p>
                <p>
                  From leadership diagnostics and vision-to-execution frameworks, to ethical 
                  advisory for ministries and academic boards—we operate as the trusted 
                  clarity engine behind impactful decisions.
                </p>
                <p className="text-vsolve-gold font-medium">
                  This tone must feel strategic, not promotional. Ethically precise, not generic. 
                  Karmically neutral, not inflated.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
} 