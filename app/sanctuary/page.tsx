'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, ArrowLeft, Shield, Users, Target, BookOpen, Crown, Check, X, Info, Mail, Save } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function SanctuaryPage() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [showWelcomeModal, setShowWelcomeModal] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle')
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

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_4v6c312'
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_9hw8287' 
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '084x3_9KyEngMn8Nm'

  useEffect(() => {
    // Check if user has access
    const access = sessionStorage.getItem('vsolve_access')
    if (access === 'granted') {
      setIsAuthorized(true)
      
      // Load saved form data from localStorage
      const savedData = localStorage.getItem('vsolve_form_draft')
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData)
          setFormData(parsedData)
          console.log('Loaded saved form data')
        } catch (error) {
          console.error('Error loading saved form data:', error)
        }
      }
      
      // Show welcome modal after a brief delay
      setTimeout(() => setShowWelcomeModal(true), 500)
    } else {
      router.push('/')
    }
  }, [router])

  // Auto-save form data to localStorage whenever it changes
  useEffect(() => {
    if (isAuthorized) {
      localStorage.setItem('vsolve_form_draft', JSON.stringify(formData))
    }
  }, [formData, isAuthorized])

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

  const handleSubmit = async () => {
    if (isSubmitting) return
    
    setIsSubmitting(true)
    setSubmissionStatus('idle')
    
    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY)

      // Prepare email template parameters
      const templateParams = {
        to_name: 'VSOLVE Admissions Council',
        to_email: 'ndarekar.13@gmail.com', // Update this with your actual receiving email
        from_name: 'VSOLVE Sanctuary Form',
        reply_to: 'noreply@vsolve.com',
        subject: 'New VSOLVE Karmic Eligibility Form Submission',
        submission_date: new Date().toLocaleString(),
        self_reflection: formData.selfReflection,
        emotional_capacity: formData.emotionalCapacity,
        emotional_capacity_explanation: formData.emotionalCapacityExplanation,
        legacy_intention: formData.legacyIntention,
        confidentiality: formData.confidentiality,
        referral_origin: formData.referralOrigin,
        timing: formData.timing,
        financial_readiness: formData.financialReadiness,
        authority: formData.authority,
        authority_explanation: formData.authorityExplanation,
        // Create a formatted summary
        form_summary: `
═══════════════════════════════════════════════════
VSOLVE KARMIC ELIGIBILITY FORM SUBMISSION
═══════════════════════════════════════════════════

Submission Date: ${new Date().toLocaleString()}

───────────────────────────────────────────────────
I. SELF-REFLECTION
───────────────────────────────────────────────────
${formData.selfReflection || 'No response provided'}

───────────────────────────────────────────────────
II. EMOTIONAL CAPACITY
───────────────────────────────────────────────────
Response: ${formData.emotionalCapacity || 'No response selected'}
${formData.emotionalCapacityExplanation ? `
Explanation: ${formData.emotionalCapacityExplanation}` : ''}

───────────────────────────────────────────────────
III. LEGACY INTENTION
───────────────────────────────────────────────────
${formData.legacyIntention || 'No response provided'}

───────────────────────────────────────────────────
IV. CONFIDENTIALITY
───────────────────────────────────────────────────
Response: ${formData.confidentiality || 'No response selected'}

───────────────────────────────────────────────────
V. REFERRAL ORIGIN
───────────────────────────────────────────────────
${formData.referralOrigin || 'No response provided'}

───────────────────────────────────────────────────
VI. TIMING
───────────────────────────────────────────────────
${formData.timing || 'No response provided'}

───────────────────────────────────────────────────
VII. FINANCIAL READINESS
───────────────────────────────────────────────────
Response: ${formData.financialReadiness || 'No response selected'}

───────────────────────────────────────────────────
VIII. AUTHORITY TO ACT
───────────────────────────────────────────────────
Response: ${formData.authority || 'No response selected'}
${formData.authorityExplanation ? `
Explanation: ${formData.authorityExplanation}` : ''}

═══════════════════════════════════════════════════
END OF SUBMISSION
═══════════════════════════════════════════════════
        `.trim()
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      console.log('Email sent successfully:', result)
      setSubmissionStatus('success')
      
      // Clear the draft from localStorage on successful submission
      localStorage.removeItem('vsolve_form_draft')
      
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmissionStatus('error')
      
      // Keep form data in localStorage as backup if email fails
      localStorage.setItem('vsolve_form_backup', JSON.stringify({
        ...formData,
        submissionAttempt: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      }))
    } finally {
      setIsSubmitting(false)
    }
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
    <div className="min-h-screen bg-black pt-20">
      {/* Welcome Modal */}
      <AnimatePresence>
        {showWelcomeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowWelcomeModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-black border border-vsolve-gold/30 rounded-lg p-8 lg:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Content */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-vsolve-gold/30 mb-8">
                  <Crown className="w-12 h-12 text-vsolve-gold" />
                </div>
                
                                                <h1 className="text-4xl lg:text-5xl font-sans font-bold text-vsolve-ivory mb-6 tracking-tight">
                  You Are Among the Few
                </h1>
                 
                 <p className="text-xl text-vsolve-ivory/85 leading-relaxed max-w-3xl mx-auto mb-6 font-medium">
                   This sacred system operates on invitation only. You have demonstrated 
                   the readiness for strategic clarity that serves beyond profit and ego. 
                   Welcome to the inner sanctuary of institutional transformation.
                 </p>

                 {/* Elegant separator */}
                 <div className="flex items-center justify-center space-x-4 mb-6">
                   <div className="h-px w-16 bg-gradient-to-r from-transparent to-vsolve-gold/50"></div>
                   <div className="w-2 h-2 bg-vsolve-gold rounded-full"></div>
                   <div className="h-px w-16 bg-gradient-to-l from-transparent to-vsolve-gold/50"></div>
                 </div>

                 <div className="max-w-2xl mx-auto mb-8 p-6 bg-vsolve-gold/5 border border-vsolve-gold/20 rounded-lg">
                   <p className="text-vsolve-ivory/80 leading-relaxed font-medium mb-4">
                     The following reflection questions will be reviewed in silence by our internal council 
                     to determine alignment and readiness for the VSOLVE Clarity System.
                   </p>
                   <p className="text-vsolve-gold font-semibold text-lg">
                     This is not an application. It is a mirror.
                   </p>
                 </div>

                                 <button
                   onClick={() => setShowWelcomeModal(false)}
                   className="bg-vsolve-gold text-black px-8 py-3 rounded-sm font-semibold text-lg hover:bg-vsolve-gold/90 transition-all duration-300"
                 >
                   Begin Sacred Reflection
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header with Progress */}
      <div className="sticky top-20 bg-black/95 backdrop-blur-sm border-b border-vsolve-gold/20 z-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6">
          {/* Top Row - Title and Info */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-vsolve-gold/30">
                <Shield className="w-6 h-6 text-vsolve-gold" />
              </div>
                             <div>
                 <h1 className="text-2xl lg:text-3xl font-sans font-bold text-vsolve-gold tracking-wide">
                   VSOLVE KARMIC ELIGIBILITY
                 </h1>
                 <p className="text-vsolve-ivory/60 text-sm font-medium">
                   Sacred Reflection Form
                 </p>
               </div>
            </div>
            
                         <div className="flex items-center space-x-4">
               <div className="flex items-center space-x-2 text-vsolve-ivory/40 text-sm">
                 <Save size={14} />
                 <span>Auto-saved</span>
               </div>
               <button
                 onClick={() => setShowWelcomeModal(true)}
                 className="flex items-center space-x-2 text-vsolve-ivory/60 hover:text-vsolve-gold transition-colors text-sm"
               >
                 <Info size={16} />
                 <span>About This Process</span>
               </button>
             </div>
          </div>

          {/* Progress Indicator */}
          <div className="space-y-4">
                         <div className="flex items-center justify-between">
               <span className="text-vsolve-ivory/90 font-semibold text-base">
                 {isLastStep ? 'Final Review' : `Question ${currentStep + 1} of ${steps.length}`}
               </span>
               <span className="text-vsolve-ivory/70 font-medium">
                 {Math.round(progress)}% Complete
               </span>
             </div>
            
            <div className="w-full bg-vsolve-gold/10 rounded-full h-3">
              <motion.div 
                className="bg-gradient-to-r from-vsolve-gold to-vsolve-gold/80 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
            
            {/* Step Indicators */}
            <div className="flex justify-between">
              {steps.map((_, index) => (
                <div 
                  key={index}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                    index < currentStep 
                      ? 'bg-vsolve-gold border-vsolve-gold text-black' 
                      : index === currentStep
                      ? 'border-vsolve-gold text-vsolve-gold bg-vsolve-gold/10'
                      : 'border-vsolve-gold/30 text-vsolve-ivory/30'
                  }`}
                >
                  {index < currentStep ? <Check size={14} /> : index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Form Content */}
      <div className="pt-12 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="border border-vsolve-gold/20 rounded-lg p-8 lg:p-12 bg-black/50 backdrop-blur-sm"
          >
            

            {/* Submission Status */}
            {submissionStatus !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-8 p-6 rounded-lg border ${
                  submissionStatus === 'success' 
                    ? 'bg-green-900/20 border-green-500/30 text-green-400' 
                    : 'bg-red-900/20 border-red-500/30 text-red-400'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {submissionStatus === 'success' ? (
                    <>
                      <Check className="w-6 h-6" />
                      <div>
                        <h4 className="font-semibold text-lg">Sacred Reflection Submitted</h4>
                        <p className="text-sm opacity-90">Your responses have been sent to our council for review. We will contact you within 7-10 days.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <X className="w-6 h-6" />
                      <div>
                        <h4 className="font-semibold text-lg">Submission Error</h4>
                        <p className="text-sm opacity-90">There was an issue sending your reflection. Your responses are saved locally. Please try again or contact us directly.</p>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            )}

            {/* Form Content */}
            <AnimatePresence mode="wait">
              {!isLastStep ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="min-h-[500px] flex flex-col justify-center"
                >
                  {/* Step Header */}
                  <div className="text-center mb-12">
                                         <div className="flex items-center justify-center space-x-6 mb-8">
                       <div className="flex items-center justify-center w-16 h-16 rounded-full bg-vsolve-gold/10 border-2 border-vsolve-gold/30">
                         <span className="text-vsolve-gold font-sans font-bold text-xl">
                           {['I', 'II', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'VIII'][currentStep]}
                         </span>
                       </div>
                       <div className="text-left">
                         <h3 className="text-2xl font-sans font-bold text-vsolve-gold tracking-wide">
                           {currentStepData.title}
                         </h3>
                         <p className="text-vsolve-ivory/75 text-lg mt-1 font-medium">
                           {currentStepData.subtitle}
                         </p>
                       </div>
                     </div>
                  </div>

                  {/* Question */}
                                     <div className="space-y-8">
                     <div className="text-center">
                       <h4 className="text-2xl lg:text-3xl font-sans font-semibold text-vsolve-ivory mb-6 leading-relaxed">
                         {currentStepData.question}
                       </h4>
                       {currentStepData.description && (
                         <p className="text-vsolve-ivory/75 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
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
                           className="w-full h-48 bg-black border border-vsolve-gold/30 rounded-sm p-6 text-vsolve-ivory placeholder-vsolve-ivory/50 focus:border-vsolve-gold focus:outline-none resize-none transition-colors duration-300 text-lg leading-relaxed font-medium"
                           placeholder="Share your thoughts..."
                         />
                       )}

                       {currentStepData.type === 'text' && (
                         <input
                           type="text"
                           value={formData[currentStepData.key as keyof typeof formData]}
                           onChange={(e) => handleInputChange(currentStepData.key, e.target.value)}
                           className="w-full bg-black border border-vsolve-gold/30 rounded-sm p-6 text-vsolve-ivory placeholder-vsolve-ivory/50 focus:border-vsolve-gold focus:outline-none transition-colors duration-300 text-lg font-medium"
                           placeholder="Your explanation..."
                         />
                       )}

                                             {currentStepData.type === 'radio' && (
                         <div className="space-y-4">
                           {currentStepData.options?.map((option) => (
                             <label
                               key={option.value}
                               className="flex items-center space-x-4 text-vsolve-ivory/85 cursor-pointer hover:text-vsolve-ivory transition-colors p-6 rounded-sm hover:bg-vsolve-gold/5 border border-transparent hover:border-vsolve-gold/20"
                             >
                               <div className="relative">
                                 <input
                                   type="radio"
                                   name={currentStepData.key}
                                   value={option.value}
                                   checked={formData[currentStepData.key as keyof typeof formData] === option.value}
                                   onChange={(e) => handleInputChange(currentStepData.key, e.target.value)}
                                   className="w-5 h-5 text-vsolve-gold focus:ring-vsolve-gold accent-vsolve-gold"
                                 />
                               </div>
                               <span className="text-lg font-medium">{option.label}</span>
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
                  className="text-center space-y-12 min-h-[500px] flex flex-col justify-center"
                >
                                     <div>
                     <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-vsolve-gold/30 mb-8">
                       <Crown className="w-10 h-10 text-vsolve-gold" />
                     </div>
                     <h3 className="text-3xl lg:text-4xl font-sans font-bold text-vsolve-gold mb-6 tracking-tight">
                       Final Note
                     </h3>
                     <div className="w-20 h-px bg-vsolve-gold/50 mx-auto mb-8"></div>
                   </div>

                   <div className="max-w-3xl mx-auto space-y-8 text-vsolve-ivory/80 leading-relaxed">
                     <p className="text-lg lg:text-xl font-medium">
                       Your answers will not be judged. They are only reviewed for alignment, timing, and sacred readiness. 
                       If you are not yet a fit, we will close the loop gently and respectfully. If the path is open, 
                       we will invite you into a clarity circle with Dr. George Varghese or an appointed guide.
                     </p>
                     
                     <div className="pt-8">
                       <p className="text-vsolve-gold font-semibold text-lg">
                         With care and stillness,
                       </p>
                       <p className="text-vsolve-gold font-bold text-xl lg:text-2xl tracking-wide">
                         VSOLVE Admissions Council
                       </p>
                     </div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-vsolve-gold/20">
                             <button
                 onClick={prevStep}
                 disabled={currentStep === 0}
                 className={`flex items-center space-x-2 px-6 py-3 rounded-sm transition-all duration-300 font-medium ${
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
                   className="flex items-center space-x-2 bg-vsolve-gold text-black px-8 py-3 rounded-sm font-semibold hover:bg-vsolve-gold/90 transition-all duration-300 shadow-lg hover:shadow-vsolve-gold/20"
                 >
                   <span>Next</span>
                   <ArrowRight size={20} />
                 </button>
                             ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`flex items-center space-x-2 px-12 py-4 rounded-sm font-semibold text-lg transition-all duration-300 shadow-lg ${
                    isSubmitting 
                      ? 'bg-vsolve-gold/50 text-black/70 cursor-not-allowed' 
                      : 'bg-vsolve-gold text-black hover:bg-vsolve-gold/90 hover:shadow-vsolve-gold/20'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Mail size={20} />
                      <span>Submit Sacred Reflection</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 