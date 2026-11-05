"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Headphones,
  Calculator,
  Briefcase,
  Sliders,
  Calendar,
  Search,
  LineChart,
  Database,
  Mail,
  Megaphone,
  FileText,
  FileCheck,
  Building,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Smart Hide on Scroll Down, Show on Scroll Up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (mobileMenuOpen) return;

      if (currentScrollY > 70) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          setVisible(false);
          setActiveDropdown(null);
        } else if (lastScrollY - currentScrollY > 5) {
          setVisible(true);
        }
      } else {
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
      headerTitle: "Business Support Services",
      headerDesc: "Keep your business organised, efficient, and responsive.",
      href: "#services",
      submenu: [
        {
          name: "Customer Support",
          desc: "Responsive, reliable customer care",
          icon: Headphones,
        },
        {
          name: "Bookkeeping",
          desc: "Accurate daily ledger management",
          icon: Calculator,
        },
        {
          name: "Back-Office Support",
          desc: "Streamline day-to-day admin tasks",
          icon: Briefcase,
        },
        {
          name: "Operational Support",
          desc: "Process optimization & tracking",
          icon: Sliders,
        },
        {
          name: "Administrative Support",
          desc: "Executive & office coordination",
          icon: Calendar,
        },
      ],
    },
    {
      name: "MARKETING SUPPORT",
      headerTitle: "Marketing Support Services",
      headerDesc: "Practical support to plan, execute, and keep marketing moving.",
      href: "#services",
      submenu: [
        {
          name: "Lead Generation",
          desc: "Targeted outreach and prospecting",
          icon: Search,
        },
        {
          name: "Market Research",
          desc: "Industry analysis and benchmarking",
          icon: LineChart,
        },
        {
          name: "CRM Management",
          desc: "HubSpot, Salesforce data hygiene",
          icon: Database,
        },
        {
          name: "Campaign Coordination",
          desc: "Cross-channel asset execution",
          icon: Megaphone,
        },
        {
          name: "Email Marketing Support",
          desc: "Newsletters & drip automations",
          icon: Mail,
        },
      ],
    },
    {
      name: "VENDOR & CONTRACT MANAGEMENT",
      headerTitle: "Vendor & Contract Services",
      headerDesc: "Manage vendor relationships and contracts with control.",
      href: "#services",
      submenu: [
        {
          name: "Vendor Research & Coordination",
          desc: "Source & vet partners",
          icon: Building,
        },
        {
          name: "Vendor Database Management",
          desc: "Centralized vendor contacts",
          icon: Database,
        },
        {
          name: "Contract Documentation",
          desc: "Terms, scopes & filings",
          icon: FileText,
        },
        {
          name: "Contract Renewal Tracking",
          desc: "Never miss critical deadlines",
          icon: RefreshCw,
        },
        {
          name: "Purchase Order Coordination",
          desc: "PO generation & approvals",
          icon: ShoppingCart,
        },
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

  const handleMenuClick = (e: React.MouseEvent, item: (typeof navItems)[0]) => {
    if (item.submenu) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === item.name ? null : item.name);
    } else {
      setActiveDropdown(null);
    }
  };

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
      <div
        ref={navRef}
        className="max-w-6xl mx-auto bg-white rounded-full shadow-lg shadow-black/10 px-5 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between border border-slate-100 pointer-events-auto transition-shadow hover:shadow-xl"
      >
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
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={(e) => handleMenuClick(e, item)}
                className={`flex items-center gap-1 text-[11px] font-bold tracking-wider transition-colors py-2 uppercase cursor-pointer ${
                  activeDropdown === item.name
                    ? "text-[#1a66ff]"
                    : "text-slate-800 hover:text-[#1a66ff]"
                }`}
              >
                <span>{item.name}</span>
                {item.submenu && (
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 stroke-[2.5] ${
                      activeDropdown === item.name
                        ? "rotate-180 text-[#1a66ff]"
                        : "text-slate-700"
                    }`}
                  />
                )}
              </button>

              {/* Dropdown Menu - Positioned Directly Under with Invisible Bridge */}
              <AnimatePresence>
                {item.submenu && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute -left-4 top-full pt-2 w-80 z-50"
                  >
                    {/* Floating Menu Card */}
                    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl p-3 text-slate-900">
                      {/* Submenu Header */}
                      <div className="px-3 pt-2 pb-2.5 border-b border-slate-100 mb-1.5">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#1a66ff]">
                          {item.headerTitle}
                        </p>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {item.headerDesc}
                        </p>
                      </div>

                      {/* Submenu Items List */}
                      <div className="space-y-1">
                        {item.submenu.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <Link
                              key={sub.name}
                              href="#services"
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-2.5 px-2.5 py-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                            >
                              <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1a66ff] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#1a66ff] group-hover/item:text-white transition-colors">
                                <SubIcon size={14} className="stroke-[2]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-semibold text-slate-900 group-hover/item:text-[#1a66ff] transition-colors">
                                  {sub.name}
                                </div>
                                <div className="text-[10px] text-slate-500 line-clamp-1">
                                  {sub.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Menu Footer */}
                      <div className="mt-2 pt-2 border-t border-slate-100 px-2.5 pb-1">
                        <Link
                          href="#services"
                          onClick={() => setActiveDropdown(null)}
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#1a66ff] hover:text-blue-700 transition-colors"
                        >
                          <span>Explore all {item.name.toLowerCase()}</span>
                          <ArrowRight size={12} className="stroke-[2.5]" />
                        </Link>
                      </div>
                    </div>
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

      {/* Mobile Drawer */}
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
                <button
                  type="button"
                  onClick={() =>
                    item.submenu
                      ? setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      : (setMobileMenuOpen(false),
                        (window.location.hash = item.href))
                  }
                  className="w-full flex items-center justify-between text-left text-xs font-bold tracking-wider text-slate-800 hover:text-blue-600 uppercase py-1"
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {item.submenu && activeDropdown === item.name && (
                  <div className="pl-3 border-l border-slate-100 space-y-2 pt-1 pb-1">
                    <p className="text-[10px] font-bold text-[#1a66ff] uppercase">
                      {item.headerTitle}
                    </p>
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href="#services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-[11px] text-slate-600 hover:text-blue-600 py-0.5"
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
