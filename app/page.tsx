"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AccessPortal() {
  const [accessCode, setAccessCode] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showError, setShowError] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Valid access codes (in production, this would be server-side)
  const validCodes = ["VSOLVE2024", "SACRED", "DHARMA", "CLARITY"];

  useEffect(() => {
    // Focus input on mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setShowError(false);

    // Simulate authentication delay for gravitas
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (validCodes.includes(accessCode.toUpperCase())) {
      // Store access in session
      sessionStorage.setItem("vsolve_access", "granted");
      router.push("/sanctuary");
    } else {
      setShowError(true);
      setAttempts((prev) => prev + 1);
      setAccessCode("");
    }

    setIsProcessing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    if (value.length <= 12) {
      // Reasonable code length limit
      setAccessCode(value);
      setShowError(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center pt-20">
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

      {/* Let's Solve What Matters Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-8 right-8 z-20"
      >
        <Link
          href="/invite-us"
          className="bg-vsolve-gold text-vsolve-navy px-6 py-3 rounded-sm font-medium hover:bg-vsolve-gold-light transition-all duration-300 glow-gold"
        >
          Let's Solve What Matters
        </Link>
      </motion.div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-vsolve-gold via-transparent to-vsolve-gold" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vsolve-gold rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vsolve-gold rounded-full blur-3xl opacity-5" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Lock Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="w-24 h-24 border border-vsolve-gold/30 rounded-full flex items-center justify-center">
              <Lock className="w-12 h-12 text-vsolve-gold" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-vsolve-gold tracking-wide leading-tight">
              SACRED ARCHITECTURE FOR POWER, LEGACY & SUCCESSION FOR THE ELITES
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-xl text-vsolve-ivory/60 max-w-2xl mx-auto leading-relaxed"
            >
              VSOLVE operates on sacred access. Entry requires the code.
            </motion.p>
          </motion.div>

          {/* Access Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
            className="max-w-md mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={accessCode}
                  onChange={handleInputChange}
                  placeholder="ENTER ACCESS CODE"
                  disabled={isProcessing}
                  className="w-full px-8 py-6 bg-transparent border-2 border-vsolve-gold/30 rounded-sm text-center text-2xl font-mono font-bold text-vsolve-gold placeholder-vsolve-gold/30 focus:border-vsolve-gold focus:outline-none transition-all duration-500 tracking-widest disabled:opacity-50"
                  style={{ letterSpacing: "0.3em" }}
                />

                {/* Processing Indicator */}
                <AnimatePresence>
                  {isProcessing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-sm"
                    >
                      <div className="flex space-x-2">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                            className="w-2 h-2 bg-vsolve-gold rounded-full"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Error Message */}
              <AnimatePresence>
                {showError && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-red-400 text-sm font-medium"
                  >
                    Access denied.{" "}
                    {attempts >= 3
                      ? "Contact your institutional liaison."
                      : "Verify your code."}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button (Hidden - Enter key submits) */}
              <button type="submit" className="sr-only">
                Submit
              </button>
            </form>
          </motion.div>

          {/* Elite Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1.5 }}
            className="flex justify-center items-center space-x-12 text-vsolve-ivory/30"
          >
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide">
                INSTITUTIONAL ACCESS
              </span>
            </div>
            <div className="w-px h-6 bg-vsolve-gold/30" />
            <div className="flex items-center space-x-3">
              <Eye className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide">
                SACRED TIMING
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-vsolve-ivory/40 text-xs tracking-widest">
          VSOLVE INDIA PVT LTD
        </p>
        <p className="text-vsolve-ivory/20 text-xs mt-1">
          Strategic Systems for Custodians of Legacy and Power
        </p>
      </motion.div>
    </div>
  );
}
