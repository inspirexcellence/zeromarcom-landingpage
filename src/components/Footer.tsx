"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-amber-400 font-black text-2xl tracking-tighter group-hover:rotate-12 transition-transform duration-200">
              /
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-white font-extrabold text-sm tracking-wider">
                ZERO
              </span>
              <span className="text-white font-extrabold text-sm tracking-wider">
                MARCOM
              </span>
            </div>
          </Link>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <Link href="#services" className="hover:text-white transition-colors">
              Business Support
            </Link>
            <Link href="#services" className="hover:text-white transition-colors">
              Marketing Support
            </Link>
            <Link href="#services" className="hover:text-white transition-colors">
              Vendor &amp; Contract Management
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-500">
            © 2026 Zero Marcom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
