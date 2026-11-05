"use client";

import React, { useState } from "react";
import { ArrowRight, Layers, Users, TrendingUp, CheckCircle2, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section
      id="contact"
      className="relative bg-slate-950 text-white py-12 sm:py-16 overflow-hidden"
    >
      {/* Vibrant Office Background with Indoor Plant & Warm Lighting - Highly Visible */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-[center_top] opacity-80 transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundImage: `url('/hero.png')`,
        }}
      />
      {/* Soft Vignette Overlay to maintain clear visibility of the office while keeping text crisp */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/65 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Subhead & 3 Badges */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-white leading-[1.18] drop-shadow-sm">
                Ready to Take the Workload Off Your Plate?
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-md drop-shadow-sm">
                Let&apos;s explore how Zero Marcom can support your operations,
                marketing, and vendor management needs.
              </p>
            </div>

            {/* 3 Value Pillars with Vertical Dividers */}
            <div className="flex items-center gap-5 sm:gap-7 pt-4">
              {/* Pillar 1 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5">
                <div className="text-white drop-shadow-sm">
                  <Layers size={22} className="stroke-[1.8]" />
                </div>
                <span className="text-xs font-semibold text-white drop-shadow-sm">
                  Flexible Support
                </span>
              </div>

              <div className="h-7 w-px bg-white/30" />

              {/* Pillar 2 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5">
                <div className="text-white drop-shadow-sm">
                  <Users size={22} className="stroke-[1.8]" />
                </div>
                <span className="text-xs font-semibold text-white drop-shadow-sm">
                  Business-Focused
                </span>
              </div>

              <div className="h-7 w-px bg-white/30" />

              {/* Pillar 3 */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5">
                <div className="text-white drop-shadow-sm">
                  <TrendingUp size={22} className="stroke-[1.8]" />
                </div>
                <span className="text-xs font-semibold text-white drop-shadow-sm">
                  Built for Growth
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-conversion Floating Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 border border-white/40">
              <div className="mb-4 space-y-1">
                <h3 className="text-lg sm:text-[20px] font-bold text-slate-900 tracking-tight">
                  Tell Us What You Need
                </h3>
                <p className="text-slate-500 text-xs">
                  Share a few details and our team will get in touch with the right
                  solution for your business.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    Thank You, {formData.fullName || "Partner"}!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                    We&apos;ve received your inquiry and will reach out with tailor-made options shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        businessName: "",
                        email: "",
                        phone: "",
                        service: "",
                        requirements: "",
                      });
                    }}
                    className="mt-2 text-xs font-semibold text-[#1a66ff] hover:underline cursor-pointer"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Row 1: Full Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Full Name*"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 text-slate-900 placeholder:text-slate-400 bg-white"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({ ...formData, businessName: e.target.value })
                        }
                        placeholder="Business Name*"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 text-slate-900 placeholder:text-slate-400 bg-white"
                      />
                    </div>
                  </div>

                  {/* Row 2: Business Email & Contact Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Business Email*"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 text-slate-900 placeholder:text-slate-400 bg-white"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="Contact Number*"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 text-slate-900 placeholder:text-slate-400 bg-white"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service(s) You're Interested In */}
                  <div className="relative">
                    <select
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 text-slate-900 bg-white appearance-none cursor-pointer pr-10"
                    >
                      <option value="" disabled className="text-slate-400">
                        Service(s) You&apos;re Interested In*
                      </option>
                      <option value="business-support">Business Support</option>
                      <option value="marketing-support">Marketing Support</option>
                      <option value="vendor-contract">
                        Vendor &amp; Contract Management
                      </option>
                      <option value="all-services">
                        Integrated Multi-Function Support
                      </option>
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-3 top-2.5 text-slate-500 pointer-events-none"
                    />
                  </div>

                  {/* Row 4: Requirements */}
                  <div>
                    <textarea
                      required
                      rows={3}
                      value={formData.requirements}
                      onChange={(e) =>
                        setFormData({ ...formData, requirements: e.target.value })
                      }
                      placeholder="Tell Us About Your Requirements*"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 text-slate-900 placeholder:text-slate-400 bg-white resize-none"
                    />
                  </div>

                  {/* Submit Pill Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-[#1a66ff] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm py-2.5 px-6 rounded-full shadow-md shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 cursor-pointer"
                    >
                      <span>{loading ? "Sending..." : "Get in Touch"}</span>
                      <ArrowRight size={15} className="stroke-[2.2]" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
