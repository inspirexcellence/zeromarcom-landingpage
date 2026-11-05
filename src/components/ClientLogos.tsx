"use client";

import React from "react";
import { motion } from "motion/react";

export default function ClientLogos() {
  return (
    <div className="bg-white border-y border-slate-100 py-4 sm:py-5 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-y-3"
        >
          {/* Logo 1: nirastate (skyscrapers) */}
          <div className="flex items-center gap-2 text-slate-900 font-medium px-2 sm:px-4">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M3 21h18v1H3v-1zm2-1V9l4-3v14H5zm5 0V3l5 4v13h-5zm6 0v-8l3-2v10h-3z" />
            </svg>
            <span className="text-sm sm:text-base font-semibold tracking-tight text-slate-900 lowercase">
              nirastate
            </span>
          </div>

          <div className="hidden sm:block h-5 w-px bg-slate-200" />

          {/* Logo 2: ASGARDIA (columns) */}
          <div className="flex items-center gap-2 text-slate-900 px-2 sm:px-4">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M4 19h16v2H4v-2zm1-2h2V7H5v10zm4 0h2V7H9v10zm4 0h2V7h-2v10zm4 0h2V7h-2v10zM3 5h18v2H3V5zm9-3L3 5h18l-9-3z" />
            </svg>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
              ASGARDIA
            </span>
          </div>

          <div className="hidden sm:block h-5 w-px bg-slate-200" />

          {/* Logo 3: stari (sparkle star) */}
          <div className="flex items-center gap-1.5 text-slate-900 px-2 sm:px-4">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C12 7.5 7.5 12 2 12c5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10z" />
            </svg>
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 lowercase">
              stari
            </span>
          </div>

          <div className="hidden sm:block h-5 w-px bg-slate-200" />

          {/* Logo 4: kanba (infinity loops) */}
          <div className="flex items-center gap-2 text-slate-900 px-2 sm:px-4">
            <svg
              className="w-5 h-5 text-slate-900"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.356-8C.726 8 .726 16 5.822 16c5.095 0 7.133-8 12.356-8z" />
            </svg>
            <span className="text-sm sm:text-base font-semibold tracking-tight text-slate-900 lowercase">
              kanba
            </span>
          </div>

          <div className="hidden sm:block h-5 w-px bg-slate-200" />

          {/* Logo 5: HOOKS (radiating floral star) */}
          <div className="flex items-center gap-2 text-slate-900 px-2 sm:px-4">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="12" cy="12" r="3" fill="currentColor" />
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
            </svg>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-900">
              HOOKS
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
