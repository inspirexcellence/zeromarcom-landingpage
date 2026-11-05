import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Zero Marcom | Everyday Operations, Marketing & Vendor Management",
  description:
    "Zero Marcom helps growing businesses manage everyday operations, marketing execution, and vendor coordination, so your team can focus on growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
