"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-center justify-start bg-slate-950 overflow-hidden pt-32 sm:pt-36 pb-16 sm:pb-24">
      {/* Background Photography Matching User's Design - hero.png */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-[center_top] bg-no-repeat"
        style={{
          backgroundImage: `url('/hero.png')`,
        }}
      >
        {/* Balanced Dark Tone-Down Gradient for High Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Soft local contrast booster behind the text block */}
      <div className="absolute -left-10 top-1/4 w-[620px] h-[480px] bg-black/35 blur-3xl rounded-full pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="max-w-xl sm:max-w-2xl space-y-4 sm:space-y-5">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight text-white leading-[1.14] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
          >
            Growth stalls when your team is buried in operations. We can fix that.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-[15px] text-white font-medium leading-relaxed max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] opacity-95"
          >
            Zero Marcom helps growing businesses manage everyday operations, marketing
            execution, and vendor coordination, so your team can focus on growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pt-1.5"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-[#1a66ff] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-full shadow-xl shadow-blue-600/35 hover:shadow-blue-600/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
