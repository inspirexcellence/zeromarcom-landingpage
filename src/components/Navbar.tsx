"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Don't hide if mobile menu is open
      if (mobileMenuOpen) return;

      if (currentScrollY > 70) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          // Scrolling down -> hide navbar
          setVisible(false);
          setActiveDropdown(null);
        } else if (lastScrollY - currentScrollY > 5) {
          // Scrolling up -> show navbar
          setVisible(true);
        }
      } else {
        // At or near top -> always show
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const navItems = [
    {
      name: "BUSINESS SUPPORT",
      href: "#services",
      submenu: [
        { name: "Customer Support", desc: "Responsive, reliable customer care" },
        { name: "Bookkeeping", desc: "Accurate daily ledger management" },
        { name: "Back-Office Support", desc: "Streamline day-to-day admin tasks" },
        { name: "Operational Support", desc: "Process optimization & tracking" },
        { name: "Administrative Support", desc: "Executive & office coordination" },
      ],
    },
    {
      name: "MARKETING SUPPORT",
      href: "#services",
      submenu: [
        { name: "Lead Generation", desc: "Targeted outreach and prospecting" },
        { name: "Market Research", desc: "Industry analysis and benchmarking" },
        { name: "CRM Management", desc: "HubSpot, Salesforce data hygiene" },
        { name: "Campaign Coordination", desc: "Cross-channel asset execution" },
        { name: "Email Marketing Support", desc: "Newsletters & drip automations" },
      ],
    },
    {
      name: "VENDOR & CONTRACT MANAGEMENT",
      href: "#services",
      submenu: [
        { name: "Vendor Research & Coordination", desc: "Source & vet partners" },
        { name: "Vendor Database Management", desc: "Centralized vendor contacts" },
        { name: "Contract Documentation", desc: "Terms, scopes & filings" },
        { name: "Contract Renewal Tracking", desc: "Never miss critical deadlines" },
        { name: "Purchase Order Coordination", desc: "PO generation & approvals" },
      ],
    },
    {
      name: "ABOUT US",
      href: "#about",
    },
    {
      name: "CONTACT",
      href: "#contact",
    },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -90, opacity: 0 },
      }}
      animate={visible ? "visible" : "hidden"}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-full shadow-lg shadow-black/10 px-5 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between border border-slate-100 pointer-events-auto transition-shadow hover:shadow-xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <span className="text-[#e5a00d] font-black text-2xl tracking-tighter leading-none select-none">
            /
          </span>
          <div className="flex flex-col leading-[0.85]">
            <span className="text-slate-900 font-extrabold text-[12px] sm:text-[13px] tracking-wider">
              ZERO
            </span>
            <span className="text-slate-900 font-extrabold text-[12px] sm:text-[13px] tracking-wider">
              MARCOM
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-[11px] font-bold tracking-wider text-slate-800 hover:text-blue-600 transition-colors py-2 uppercase"
              >
                <span>{item.name}</span>
                {item.submenu && (
                  <ChevronDown
                    size={13}
                    className={`text-slate-700 transition-transform duration-200 stroke-[2.5] ${
                      activeDropdown === item.name ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.submenu && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-1.5 w-72 rounded-2xl bg-white border border-slate-200 shadow-2xl p-2 z-50 text-slate-900"
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href="#services"
                        className="block px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="text-xs font-semibold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                          {sub.name}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {sub.desc}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <Link
            href="#contact"
            className="bg-[#1a66ff] hover:bg-blue-600 text-white font-medium text-xs tracking-wider px-5 py-2 rounded-full shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-800 hover:text-black p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden mt-2 max-w-6xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl p-5 space-y-4 pointer-events-auto"
          >
            {navItems.map((item) => (
              <div key={item.name} className="space-y-1">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-bold tracking-wider text-slate-800 hover:text-blue-600 uppercase py-1"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-3 border-l border-slate-100 space-y-1">
                    {item.submenu.slice(0, 3).map((sub) => (
                      <Link
                        key={sub.name}
                        href="#services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-[11px] text-slate-500 hover:text-blue-600 py-0.5"
                      >
                        • {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1a66ff] hover:bg-blue-600 text-white font-medium text-xs tracking-wider px-5 py-2.5 rounded-full shadow-md"
              >
                <span>Get Started</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
