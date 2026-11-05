"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Layers, Megaphone, Handshake } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Business Support",
    description: "Keep your business organised, efficient, and responsive.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    icon: Layers,
    items: [
      "Customer Support",
      "Bookkeeping",
      "Back-Office Support",
      "Operational Support",
      "Administrative Support",
    ],
    linkText: "Explore Business Support",
    href: "#contact",
  },
  {
    title: "Marketing Support",
    description: "Get practical support to plan, execute, and keep your marketing moving.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    icon: Megaphone,
    items: [
      "Lead Generation",
      "Market Research",
      "CRM Management",
      "Campaign Coordination",
      "Email Marketing Support",
    ],
    linkText: "Explore Marketing Support",
    href: "#contact",
  },
  {
    title: "Vendor & Contract Management",
    description:
      "Manage vendor relationships and contractual processes with greater clarity and control.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    icon: Handshake,
    items: [
      "Vendor Research & Coordination",
      "Vendor Database Management",
      "Contract Documentation",
      "Contract Renewal Tracking",
      "Purchase Order Coordination",
    ],
    linkText: "Explore Vendor Support",
    href: "#contact",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-10 sm:py-14 bg-white relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-800">
            OUR SERVICES
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 tracking-tight leading-tight">
            Support Across the Functions That Keep Your Business Moving
          </h2>
          <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
            From everyday operations to marketing and vendor coordination, we bring
            the support you need — reliably and flexibly.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
              >
                {/* Image Banner */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute bottom-3 left-4 bg-[#e8f1ff] text-[#1a66ff] p-2 rounded-xl shadow-sm border border-blue-100">
                    <IconComponent size={20} className="stroke-[2.2]" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3.5">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1a66ff] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Checkmark List */}
                    <ul className="space-y-2 pt-1">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-xs text-slate-700 font-medium"
                        >
                          <Check
                            size={14}
                            className="text-[#1a66ff] flex-shrink-0 stroke-[2.8]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Link */}
                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#1a66ff] hover:text-blue-700 transition-colors group/link"
                    >
                      <span>{service.linkText}</span>
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform duration-200 stroke-[2.2]"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
