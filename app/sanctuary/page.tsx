'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, ArrowLeft, Shield, Users, Target, BookOpen, Crown, Check } from 'lucide-react'

export default function SanctuaryPage() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    selfReflection: '',
    emotionalCapacity: '',
    emotionalCapacityExplanation: '',
    legacyIntention: '',
    confidentiality: '',
    referralOrigin: '',
    timing: '',
    financialReadiness: '',
    authority: '',
    authorityExplanation: ''
  })
  
  const router = useRouter()

  useEffect(() => {
    // Check if user has access
    const access = sessionStorage.getItem('vsolve_access')
    if (access === 'granted') {
      setIsAuthorized(true)
    } else {
      router.push('/')
    }
  }, [router])

  const steps = [
    {
      id: 'self-reflection',
      title: 'SELF-REFLECTION',
      subtitle: 'Understanding your inner compass',
      question: 'What part of your current leadership journey feels misaligned or unclear?',
      description: 'Please describe without framing it as a professional problem only.',
      type: 'textarea',
      key: 'selfReflection'
    },
    {
      id: 'emotional-capacity',
      title: 'EMOTIONAL CAPACITY',
      subtitle: 'Your readiness for difficult truths',
      question: 'Are you open to receiving difficult truths without defending them?',
      type: 'radio',
      key: 'emotionalCapacity',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'unsure', label: 'Unsure' }
      ]
    },
    {
      id: 'emotional-explanation',
      title: 'EMOTIONAL CAPACITY',
      subtitle: 'Your readiness for difficult truths',
      question: 'Please explain your choice:',
      type: 'text',
      key: 'emotionalCapacityExplanation'
    },
    {
      id: 'legacy',
      title: 'LEGACY INTENTION',
      subtitle: 'What you wish to preserve or redeem',
      question: 'What do you want to leave behind—and who is that truly for?',
      description: 'Legacy is not about wealth or power. What is your soul asking to preserve or redeem?',
      type: 'textarea',
      key: 'legacyIntention'
    },
    {
      id: 'confidentiality',
      title: 'CONFIDENTIALITY',
      subtitle: 'Sacred commitment to privacy',
      question: 'Can you commit to keeping all VSOLVE engagements private, unrecorded, and sacred?',
      type: 'radio',
      key: 'confidentiality',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'clarity-first', label: 'I seek clarity first' }
      ]
    },
    {
      id: 'referral',
      title: 'REFERRAL ORIGIN',
      subtitle: 'How you discovered this path',
      question: 'Who referred you to VSOLVE? Why do you think they believed you were ready for this process?',
      description: 'If self-initiated, please explain how you discovered us and what moved you to write.',
      type: 'textarea',
      key: 'referralOrigin'
    },
    {
      id: 'timing',
      title: 'TIMING',
      subtitle: 'Why this moment calls you',
      question: 'Why now? What has shifted in your life that calls you to clarity at this moment?',
      description: 'We do not rush timing. But we honor when the moment becomes true.',
      type: 'textarea',
      key: 'timing'
    },
    {
      id: 'financial',
      title: 'FINANCIAL READINESS',
      subtitle: 'Investment in depth and privacy',
      question: 'Are you prepared to engage with premium, bespoke pricing that honors depth, privacy, and founder energy?',
      type: 'radio',
      key: 'financialReadiness',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'open', label: 'Open to understanding the value structure' }
      ]
    },
    {
      id: 'authority',
      title: 'AUTHORITY TO ACT',
      subtitle: 'Your decision-making capacity',
      question: 'Do you currently hold decision-making capacity in your institution, family, or legacy circle?',
      type: 'radio',
      key: 'authority',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'partial', label: 'Partial / In transition' }
      ]
    },
    {
      id: 'authority-explanation',
      title: 'AUTHORITY TO ACT',
      subtitle: 'Your decision-making capacity',
      question: 'Please explain your situation:',
      type: 'text',
      key: 'authorityExplanation'
    }
  ]

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-vsolve-gold">Verifying access...</div>
      </div>
    )
  }

  const isLastStep = currentStep === steps.length
  const currentStepData = steps[currentStep]
  const progress = ((currentStep + 1) / (steps.length + 1)) * 100

  return (
    <div className="min-h-screen bg-black">
      {/* Elite Access Reminder - Top Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {isAuthorized && (
              <>
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-vsolve-gold/30 mb-8">
                  <Crown className="w-12 h-12 text-vsolve-gold" />
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-vsolve-ivory mb-6">
                  You Are Among the Few
                </h1>
              </>
            )}
            
            <p className="text-xl text-vsolve-ivory/80 leading-relaxed max-w-3xl mx-auto mb-12">
              This sacred system operates on invitation only. You have demonstrated 
              the readiness for strategic clarity that serves beyond profit and ego. 
              Welcome to the inner sanctuary of institutional transformation.
            </p>

            {/* Elegant separator */}
            <div className="flex items-center justify-center space-x-4 mb-16">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-vsolve-gold/50"></div>
              <div className="w-2 h-2 bg-vsolve-gold rounded-full"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-vsolve-gold/50"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-vsolve-gold/20 rounded-lg p-8 lg:p-12 bg-black/50 backdrop-blur-sm"
          >
            {/* Form Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-vsolve-gold/30 mb-6">
                <Shield className="w-8 h-8 text-vsolve-gold" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-vsolve-gold mb-4">
                VSOLVE KARMIC ELIGIBILITY FORM
              </h2>
              
              <div className="flex items-center justify-center space-x-2 mb-8">
                <div className="h-px w-8 bg-vsolve-gold/50"></div>
                <span className="text-vsolve-ivory/60 text-sm font-medium tracking-wider">
                  FOR PRIVATE USE ONLY | PRE-ENGAGEMENT SCREENING
                </span>
                <div className="h-px w-8 bg-vsolve-gold/50"></div>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-6 text-vsolve-ivory/70 leading-relaxed">
                <p>
                  Dear [Client Name], Before we begin any engagement, we ask you to reflect and respond 
                  to the following questions with honesty and intention. These responses will be reviewed 
                  in silence by our internal council to determine your readiness to engage with the 
                  VSOLVE Clarity System.
                </p>
                <p className="text-vsolve-gold font-medium text-lg">
                  This is not an application. It is a mirror.
                </p>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-vsolve-ivory/60 text-sm">
                  {isLastStep ? 'Review' : `Question ${currentStep + 1} of ${steps.length}`}
                </span>
                <span className="text-vsolve-ivory/60 text-sm">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <div className="w-full bg-vsolve-gold/10 rounded-full h-2">
                <motion.div 
                  className="bg-vsolve-gold h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
              <div className="flex justify-between mt-2">
                {steps.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs ${
                      index < currentStep 
                        ? 'bg-vsolve-gold border-vsolve-gold text-black' 
                        : index === currentStep
                        ? 'border-vsolve-gold text-vsolve-gold'
                        : 'border-vsolve-gold/30 text-vsolve-ivory/30'
                    }`}
                  >
                    {index < currentStep ? <Check size={12} /> : index + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <AnimatePresence mode="wait">
              {!isLastStep ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[400px] flex flex-col justify-center"
                >
                  {/* Step Header */}
                  <div className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-6 mb-8">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-vsolve-gold/10 border border-vsolve-gold/30">
                        <span className="text-vsolve-gold font-serif font-bold text-lg">
                          {['I', 'II', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'VIII'][currentStep]}
                        </span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-serif font-semibold text-vsolve-gold">
                          {currentStepData.title}
                        </h3>
                        <p className="text-vsolve-ivory/50 text-sm mt-1">
                          {currentStepData.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Question */}
                  <div className="space-y-8">
                    <div className="text-center">
                      <h4 className="text-2xl font-serif text-vsolve-ivory mb-4 leading-relaxed">
                        {currentStepData.question}
                      </h4>
                      {currentStepData.description && (
                        <p className="text-vsolve-ivory/60 leading-relaxed max-w-2xl mx-auto">
                          {currentStepData.description}
                        </p>
                      )}
                    </div>

                    {/* Input Field */}
                    <div className="max-w-2xl mx-auto">
                      {currentStepData.type === 'textarea' && (
                        <textarea
                          value={formData[currentStepData.key as keyof typeof formData]}
                          onChange={(e) => handleInputChange(currentStepData.key, e.target.value)}
                          className="w-full h-40 bg-black border border-vsolve-gold/30 rounded-sm p-6 text-vsolve-ivory placeholder-vsolve-ivory/40 focus:border-vsolve-gold focus:outline-none resize-none transition-colors duration-300 text-lg"
                          placeholder="Share your thoughts..."
                        />
                      )}

                      {currentStepData.type === 'text' && (
                        <input
                          type="text"
                          value={formData[currentStepData.key as keyof typeof formData]}
                          onChange={(e) => handleInputChange(currentStepData.key, e.target.value)}
                          className="w-full bg-black border border-vsolve-gold/30 rounded-sm p-6 text-vsolve-ivory placeholder-vsolve-ivory/40 focus:border-vsolve-gold focus:outline-none transition-colors duration-300 text-lg"
                          placeholder="Your explanation..."
                        />
                      )}

                      {currentStepData.type === 'radio' && (
                        <div className="space-y-6">
                          {currentStepData.options?.map((option) => (
                            <label
                              key={option.value}
                              className="flex items-center space-x-4 text-vsolve-ivory/80 cursor-pointer hover:text-vsolve-ivory transition-colors p-4 rounded-sm hover:bg-vsolve-gold/5"
                            >
                              <input
                                type="radio"
                                name={currentStepData.key}
                                value={option.value}
                                checked={formData[currentStepData.key as keyof typeof formData] === option.value}
                                onChange={(e) => handleInputChange(currentStepData.key, e.target.value)}
                                className="w-5 h-5 text-vsolve-gold focus:ring-vsolve-gold"
                              />
                              <span className="text-lg">{option.label}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                // Final Review Step
                <motion.div
                  key="review"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center space-y-12"
                >
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-vsolve-gold mb-6">
                      Final Note
                    </h3>
                    <div className="w-16 h-px bg-vsolve-gold/50 mx-auto mb-8"></div>
                  </div>

                  <div className="max-w-3xl mx-auto space-y-8 text-vsolve-ivory/70 leading-relaxed">
                    <p className="text-lg">
                      Your answers will not be judged. They are only reviewed for alignment, timing, and sacred readiness. 
                      If you are not yet a fit, we will close the loop gently and respectfully. If the path is open, 
                      we will invite you into a clarity circle with Dr. George Varghese or an appointed guide.
                    </p>
                    
                    <div className="pt-6">
                      <p className="text-vsolve-gold font-medium text-lg">
                        With care and stillness,
                      </p>
                      <p className="text-vsolve-gold font-medium text-xl">
                        VSOLVE Admissions Council
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-16">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-sm transition-all duration-300 ${
                  currentStep === 0
                    ? 'text-vsolve-ivory/30 cursor-not-allowed'
                    : 'text-vsolve-ivory border border-vsolve-gold/30 hover:border-vsolve-gold hover:bg-vsolve-gold/10'
                }`}
              >
                <ArrowLeft size={20} />
                <span>Previous</span>
              </button>

              {!isLastStep ? (
                <button
                  onClick={nextStep}
                  className="flex items-center space-x-2 bg-vsolve-gold text-black px-8 py-3 rounded-sm font-medium hover:bg-vsolve-gold/90 transition-all duration-300"
                >
                  <span>Next</span>
                  <ArrowRight size={20} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-vsolve-gold text-black px-12 py-3 rounded-sm font-medium text-lg hover:bg-vsolve-gold/90 transition-all duration-300 shadow-lg hover:shadow-vsolve-gold/20"
                >
                  Submit Sacred Reflection
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Message */}
      {/* <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-black to-vsolve-navy">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vsolve-gold rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vsolve-gold rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 section-padding text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Crown className="w-12 h-12 text-vsolve-gold" />
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-vsolve-ivory leading-tight">
                Welcome to the
                <span className="text-vsolve-gold block mt-2">Sacred System</span>
              </h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl lg:text-2xl text-vsolve-ivory/80 max-w-3xl mx-auto leading-relaxed"
            >
              You have entered the sanctuary. VSOLVE operates here—serving institutions, 
              governments, and leaders who cannot afford misalignment.
            </motion.p>
          </motion.div>
        </div>
      </section> */}

      {/* What We Are Section */}
      {/* <section className="section-spacing bg-vsolve-navy-light">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-vsolve-ivory mb-8">
                A Confidential Clarity Firm
              </h2>
              <p className="text-xl text-vsolve-ivory/80 leading-relaxed">
                Founded by Dr. George Varghese and co-led by Jenny Joy, VSOLVE India Pvt Ltd 
                delivers strategic clarity for institutions, governments, family businesses, 
                and leaders navigating complex transitions and ethical decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Core Areas Section */}
      {/* <section className="section-spacing bg-vsolve-navy">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-vsolve-ivory mb-6">
                What We Solve
              </h2>
              <p className="text-xl text-vsolve-ivory/80 max-w-3xl mx-auto">
                Strategic crises that demand precision, ethics, and karmic alignment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Governance & Vision Repair",
                  description: "Leadership diagnostics, succession planning, and institutional memory systems for family businesses and legacy organizations."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Ethical Advisory",
                  description: "Strategic guidance for ministries, academic boards, and national bodies requiring karmically neutral counsel."
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Vision-to-Execution Frameworks",
                  description: "Precision systems that transform institutional vision into aligned, sustainable execution strategies."
                },
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: "Clarity Systems & IP",
                  description: "Proprietary methodologies including V-MAP™, Emotional DNA™, and Succession Mirror™ frameworks."
                },
              ].map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group glass-effect p-8 rounded-lg hover:border-vsolve-gold/30 transition-all duration-300"
                >
                  <div className="text-vsolve-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-vsolve-ivory mb-4">
                    {area.title}
                  </h3>
                  <p className="text-vsolve-ivory/70 leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Philosophy Section */}
      {/* <section className="section-spacing bg-vsolve-navy-light">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-vsolve-ivory mb-8">
                The Sacred Operating System
              </h2>
              <div className="space-y-6 text-lg text-vsolve-ivory/80 leading-relaxed">
                <p>
                  VSOLVE is the executional lighthouse of your dharma. We solve, not sell. 
                  Guide, not grow for vanity. Influence power, without being consumed by it.
                </p>
                <p>
                  This is not a company. This is an ethical operating system for Earth's 
                  next spiritual leaders—strategic, quiet, elegant, never transactional.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/invite-us"
                className="group bg-vsolve-gold text-vsolve-navy px-8 py-4 rounded-sm font-medium text-lg hover:bg-vsolve-gold-light transition-all duration-300 glow-gold flex items-center gap-3"
              >
                Let's Solve What Matters
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/about"
                className="text-vsolve-ivory border border-vsolve-gold/30 px-8 py-4 rounded-sm font-medium text-lg hover:border-vsolve-gold hover:bg-vsolve-gold/10 transition-all duration-300"
              >
                Explore Our Philosophy
              </Link>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  )
} 