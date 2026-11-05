"use client";

import React from "react";
import { motion } from "motion/react";
import { Clock, Layers, TrendingUp, Users, Target } from "lucide-react";

const features = [
  {
    icon: Clock,
    lines: ["Free Up", "Your Time"],
  },
  {
    icon: Layers,
    lines: ["Bring", "Structure &", "Consistency"],
  },
  {
    icon: TrendingUp,
    lines: ["Keep Your", "Marketing", "Moving"],
  },
  {
    icon: Users,
    lines: ["Manage", "Multiple", "Functions"],
  },
  {
    icon: Target,
    lines: ["Focus on", "Growth"],
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="py-8 sm:py-10 bg-[#f8fafc]/90 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Heading with Right Divider */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-4 lg:border-r lg:border-slate-200 lg:pr-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
              Why Businesses
              <span className="block">Work with Zero Marcom</span>
            </h2>
          </motion.div>

          {/* Right 5 Features */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-3 items-start text-center">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    className="flex flex-col items-center group cursor-default"
                  >
                    <div className="w-9 h-9 flex items-center justify-center text-[#1a66ff] mb-2 group-hover:scale-110 transition-transform">
                      <IconComponent size={24} className="stroke-[1.8]" />
                    </div>
                    <div className="text-[11px] sm:text-[12px] font-bold text-slate-900 leading-tight">
                      {item.lines.map((line, lIdx) => (
                        <span key={lIdx} className="block">
                          {line}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
