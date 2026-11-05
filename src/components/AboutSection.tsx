"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="py-10 sm:py-14 bg-white relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-start">
          {/* Left Column: Eyebrow + Dual Tone Heading */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 lg:pr-12 space-y-3"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
              ABOUT ZERO MARCOM
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight leading-[1.18]">
              <span className="text-slate-900 block">Less operational friction.</span>
              <span className="text-[#96742b] block mt-1">More business momentum.</span>
            </h2>
          </motion.div>

          {/* Right Column: Copy + Link with Vertical Left Divider */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-6 lg:border-l lg:border-slate-200 lg:pl-12 space-y-4 pt-1"
          >
            <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">
              Zero Marcom works alongside your team to manage the essential work
              behind your business — from daily operations and marketing execution to
              vendor coordination and contract support.
            </p>
            <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">
              We bring structure, consistency, and execution to the functions that keep
              your business moving, giving your team more room to focus on growth.
            </p>
            <div className="pt-1">
              <Link
                href="#services"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1a66ff] hover:text-blue-700 transition-colors group"
              >
                <span>More About Us</span>
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200 stroke-[2.2]"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
