'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Lock, Eye, Heart } from 'lucide-react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'

export default function InviteUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referralOrigin: '',
    whyNow: '',
    confidentialityAgreement: false
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Prepare email template parameters
      const emailParams = {
        to_email: 'admissions@vsolve.com', // Replace with your actual email
        from_name: formData.name,
        from_email: formData.email,
        name: formData.name,
        email: formData.email,
        referral_origin: formData.referralOrigin || 'Not provided',
        why_now: formData.whyNow,
        confidentiality_agreement: formData.confidentialityAgreement ? 'Agreed' : 'Not agreed',
        submission_date: new Date().toLocaleString(),
        message: `
Name: ${formData.name}
Email: ${formData.email}
Referral Origin: ${formData.referralOrigin || 'Not provided'}

Why Now?
${formData.whyNow}

Confidentiality Agreement: ${formData.confidentialityAgreement ? 'Agreed' : 'Not agreed'}

Submitted on: ${new Date().toLocaleString()}
        `
      }

      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error sending email:', error)
      // Still show success message to user, but log error for debugging
      setIsSubmitted(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-8 left-8 z-20"
        >
          <Link href="/" className="group">
            <div className="text-2xl font-serif font-bold text-vsolve-ivory group-hover:text-vsolve-gold transition-colors duration-300">
              VSOLVE
            </div>
          </Link>
        </motion.div>

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-vsolve-gold via-transparent to-vsolve-gold" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vsolve-gold rounded-full blur-3xl opacity-5" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vsolve-gold rounded-full blur-3xl opacity-5" />
        </div>

        <div className="relative z-10 section-padding text-center max-w-2xl mx-auto">
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
              Thank you for your interest. We honor your introspection and will get back to you within 3-5 days. 
              VSOLVE operates on sacred timing—when clarity calls, we answer.
            </p>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-8 left-8 z-20"
      >
        <Link href="/" className="group">
          <div className="text-2xl font-serif font-bold text-vsolve-ivory group-hover:text-vsolve-gold transition-colors duration-300">
            VSOLVE
          </div>
        </Link>
      </motion.div>

      {/* Subtle Background Pattern - consistent with other pages */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-vsolve-gold via-transparent to-vsolve-gold" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vsolve-gold rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vsolve-gold rounded-full blur-3xl opacity-5" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20">
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
      <section className="relative section-spacing">
        <div className="relative z-10 section-padding">
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
                    <div>
                      <label className="block text-vsolve-gold font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/80 border border-vsolve-gold/30 rounded-sm text-vsolve-ivory placeholder-vsolve-ivory/50 focus:border-vsolve-gold focus:outline-none transition-colors"
                        placeholder="Full name"
                      />
                    </div>

                    <div>
                      <label className="block text-vsolve-gold font-medium mb-2">
                        Email id *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/80 border border-vsolve-gold/30 rounded-sm text-vsolve-ivory placeholder-vsolve-ivory/50 focus:border-vsolve-gold focus:outline-none transition-colors"
                        placeholder="Your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-vsolve-gold font-medium mb-2">
                        Referral Origin
                      </label>
                      <input
                        type="text"
                        name="referralOrigin"
                        value={formData.referralOrigin}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/80 border border-vsolve-gold/30 rounded-sm text-vsolve-ivory placeholder-vsolve-ivory/50 focus:border-vsolve-gold focus:outline-none transition-colors"
                        placeholder="Enter your referral code"
                      />
                    </div>

                    <div>
                      <label className="block text-vsolve-gold font-medium mb-2">
                        Why Now? *
                      </label>
                      <textarea
                        name="whyNow"
                        required
                        rows={4}
                        value={formData.whyNow}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/80 border border-vsolve-gold/30 rounded-sm text-vsolve-ivory placeholder-vsolve-ivory/50 focus:border-vsolve-gold focus:outline-none transition-colors resize-none"
                        placeholder="Why is this the right time for strategic intervention?"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="confidentialityAgreement"
                        id="confidentialityAgreement"
                        required
                        checked={formData.confidentialityAgreement}
                        onChange={handleInputChange}
                        className="w-5 h-5 mt-0.5 accent-vsolve-gold"
                      />
                      <label htmlFor="confidentialityAgreement" className="text-vsolve-ivory/80 text-sm leading-relaxed">
                        <span className="text-vsolve-gold font-medium">Confidentiality Commitment Agreement *</span>
                        <br />
                        I understand that VSOLVE operates under strict confidentiality protocols and commit to maintaining the sacred nature of all communications and strategic insights shared.
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={!isLoading ? { scale: 1.02 } : {}}
                      whileTap={!isLoading ? { scale: 0.98 } : {}}
                      className={`w-full px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300 glow-gold flex items-center justify-center gap-3 ${
                        isLoading 
                          ? 'bg-vsolve-gold/50 text-vsolve-navy/50 cursor-not-allowed' 
                          : 'bg-vsolve-gold text-vsolve-navy hover:bg-vsolve-gold-light'
                      }`}
                    >
                      {isLoading ? 'Sending...' : 'Submit Access Request'}
                      <Send size={20} className={isLoading ? 'animate-pulse' : ''} />
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Timing Section */}
      <section className="relative section-spacing">
        <div className="relative z-10 section-padding">
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
                it deserves. Expect our response within 3-5 days. When clarity calls, we answer.
              </p>
            </motion.div>
                    </div>
        </div>
      </section>
    </div>
  )
} 