'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Lock, Eye, Heart } from 'lucide-react'

export default function InviteUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    position: '',
    email: '',
    challenge: '',
    introspection: '',
    referral: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-vsolve-navy">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="w-20 h-20 bg-vsolve-gold/20 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-10 h-10 text-vsolve-gold" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-vsolve-ivory">
              Your Invitation is Received
            </h1>
            <p className="text-xl text-vsolve-ivory/80 leading-relaxed">
              We honor your introspection and will respond within 72 hours. 
              VSOLVE operates on sacred timing—when clarity calls, we answer.
            </p>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-vsolve-navy via-vsolve-navy-light to-vsolve-navy" />
        
        <div className="relative z-10 section-padding text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-vsolve-gold" />
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-vsolve-ivory">
                Let's Solve What Matters
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-vsolve-ivory/80 max-w-3xl mx-auto leading-relaxed">
              Entry begins with introspection. This is not a contact form—it is an access invitation 
              for institutions ready for sacred strategic alignment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-spacing bg-vsolve-navy-light">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Access Guidelines */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl font-serif font-bold text-vsolve-ivory">
                    Access Protocol
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-vsolve-gold rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-serif font-semibold text-vsolve-gold mb-2">
                          Confidential Clarity
                        </h3>
                        <p className="text-vsolve-ivory/80">
                          VSOLVE operates as a gated access firm. We serve institutions, 
                          not individuals seeking personal coaching.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-vsolve-gold rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-serif font-semibold text-vsolve-gold mb-2">
                          Strategic Readiness
                        </h3>
                        <p className="text-vsolve-ivory/80">
                          We engage with legacy businesses, national bodies, and global 
                          institutions facing complex strategic transitions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-vsolve-gold rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-serif font-semibold text-vsolve-gold mb-2">
                          Karmic Alignment
                        </h3>
                        <p className="text-vsolve-ivory/80">
                          Every engagement must align with our sacred framework of 
                          ethical precision and sustainable impact.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Access Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="glass-effect p-8 rounded-lg"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-vsolve-gold font-medium mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-vsolve-navy/50 border border-vsolve-gold/30 rounded-sm text-vsolve-ivory placeholder-vsolve-ivory/50 focus:border-vsolve-gold focus:outline-none transition-colors"
                          placeholder="Full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-vsolve-gold font-medium mb-2">
                          Organization *
                        </label>
                        <input
                          type="text"
                          name="organization"
                          required
                          value={formData.organization}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-vsolve-navy/50 border border-vsolve-gold/30 rounded-sm text-vsolve-ivory placeholder-vsolve-ivory/50 focus:border-vsolve-gold focus:outline-none transition-colors"
                          placeholder="Institution / Company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-vsolve-gold font-medium mb-2">
                          Your Position *
                        </label>
                        <input
                          type="text"
                          name="position"
                          required
                          value={formData.position}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-vsolve-navy/50 border border-vsolve-gold/30 rounded-sm text-vsolve-ivory placeholder-vsolve-ivory/50 focus:border-vsolve-gold focus:outline-none transition-colors"
                          placeholder="Title / Role"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-vsolve-gold font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-vsolve-navy/50 border border-vsolve-gold/30 rounded-sm text-vsolve-ivory placeholder-vsolve-ivory/50 focus:border-vsolve-gold focus:outline-none transition-colors"
                          placeholder="Professional email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-vsolve-gold font-medium mb-2">
                        Strategic Challenge *
                      </label>
                      <textarea
                        name="challenge"
                        required
                        rows={4}
                        value={formData.challenge}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-vsolve-navy/50 border border-vsolve-gold/30 rounded-sm text-vsolve-ivory placeholder-vsolve-ivory/50 focus:border-vsolve-gold focus:outline-none transition-colors resize-none"
                        placeholder="Describe the institutional challenge requiring strategic clarity..."
                      />
                    </div>

                    <div>
                      <label className="block text-vsolve-gold font-medium mb-2">
                        Introspection *
                      </label>
                      <textarea
                        name="introspection"
                        required
                        rows={4}
                        value={formData.introspection}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-vsolve-navy/50 border border-vsolve-gold/30 rounded-sm text-vsolve-ivory placeholder-vsolve-ivory/50 focus:border-vsolve-gold focus:outline-none transition-colors resize-none"
                        placeholder="Why is this the right time for strategic intervention? What internal readiness exists for transformation?"
                      />
                    </div>

                    <div>
                      <label className="block text-vsolve-gold font-medium mb-2">
                        How did you learn about VSOLVE?
                      </label>
                      <input
                        type="text"
                        name="referral"
                        value={formData.referral}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-vsolve-navy/50 border border-vsolve-gold/30 rounded-sm text-vsolve-ivory placeholder-vsolve-ivory/50 focus:border-vsolve-gold focus:outline-none transition-colors"
                        placeholder="Referral source or discovery method"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-vsolve-gold text-vsolve-navy px-8 py-4 rounded-sm font-medium text-lg hover:bg-vsolve-gold-light transition-all duration-300 glow-gold flex items-center justify-center gap-3"
                    >
                      Submit Access Request
                      <Send size={20} />
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Timing Section */}
      <section className="section-spacing bg-vsolve-navy">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Eye className="w-12 h-12 text-vsolve-gold mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold text-vsolve-ivory mb-6">
                Sacred Timing
              </h2>
              <p className="text-lg text-vsolve-ivory/80 leading-relaxed">
                VSOLVE operates on sacred timing. We review each access request with the reverence 
                it deserves. Expect our response within 72 hours. When clarity calls, we answer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
} 