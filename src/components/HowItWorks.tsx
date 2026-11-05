"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    step: "01",
    title: "Understand",
    description: "Learn about your business and support requirements.",
  },
  {
    step: "02",
    title: "Align",
    description: "Define the scope, responsibilities, and process.",
  },
  {
    step: "03",
    title: "Execute",
    description: "Get dedicated support across the agreed functions.",
  },
  {
    step: "04",
    title: "Evolve",
    description: "Review, optimise, and adapt as you grow.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-10 sm:py-14 bg-white relative w-full">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-800">
            HOW IT WORKS
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 tracking-tight leading-tight">
            A Simple, Flexible Process
          </h2>
          <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
            A structured approach that adapts to your business needs.
          </p>
        </div>

        {/* 4 Steps Centered with Equal Margins on Both Sides */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-start justify-between gap-8 lg:gap-3 w-full">
          {steps.map((item, index) => (
            <React.Fragment key={item.step}>
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex-1 lg:max-w-[200px] flex flex-col items-start group"
              >
                {/* Step Circle Badge */}
                <div className="w-8 h-8 rounded-full bg-[#1a66ff] text-white font-bold text-xs flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  {item.step}
                </div>

                {/* Title & Description */}
                <h3 className="text-sm font-bold text-slate-900 mt-3 group-hover:text-[#1a66ff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>

              {/* Arrow Connector Centered Between Steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center pt-2 text-slate-400 flex-shrink-0 self-start">
                  <ArrowRight size={16} className="stroke-[1.75]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
