"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* Logo Stack - Made more compact */}
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex items-center gap-4">
                {/* Trustmore logo - non-clickable */}
                <div className="h-12 w-auto">
                  <img
                    src="/footerlogo/trustmore.png"
                    alt="Trustmore Logo"
                    className="h-full w-auto object-contain max-w-[180px]"
                  />
                </div>
                {/* FT1 logo - non-clickable */}
                <div className="h-10 w-auto">
                  <img
                    src="/footerlogo/ft1.png"
                    alt="Partner Logo"
                    className="h-full w-auto object-contain max-w-[120px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Golden logo - non-clickable */}
                <div className="h-10 w-auto">
                  <img
                    src="/footerlogo/golden.png"
                    alt="Golden Logo"
                    className="h-full w-auto object-contain max-w-[120px]"
                  />
                </div>

                {/* 25 Years logo - clickable to about page */}
                <Link href="/about" className="h-10 w-auto block">
                  <img
                    src="/footerlogo/25years.png"
                    alt="25 Years of Trustmore"
                    className="h-full w-auto object-contain max-w-[120px] hover:opacity-80 transition-opacity"
                  />
                </Link>
              </div>
            </div>

            {/* Company Description - Reduced margin */}
            <div className="mb-4">
              <p className="text-xs text-gray-700 leading-tight">
                Trustmore Group is a global, technology-led financial
                powerhouse, managing wealth, payments, and exclusive
                experiences. Built on a foundation of trust, transparency, and
                innovation since 2001. Trustmore empowers you to do more, grow
                more, and live more.
              </p>
            </div>

            {/* Office Addresses - Made more compact */}
            <div>
              <h4 className="text-xs font-bold text-gray-900 mb-1">
                Head Office Address
              </h4>
              <div className="flex flex-wrap gap-4">
                <p className="text-gray-700 text-xs">
                  <strong>India:</strong> One World Center, Lower Parel, Mumbai
                </p>
                <p className="text-gray-700 text-xs">
                  <strong>UAE:</strong> Level 41, Emirates Towers, Sheikh Zayed
                  Road, Dubai
                </p>
              </div>
            </div>
          </div>

          {/* Contact Us Section (Before Quick Links) */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3">
              Contact Us
            </h3>
            <p className="text-gray-800 font-semibold text-xs mb-3">
              Hotline: +919810336644
            </p>
            {/* Social Media */}
            <div>
              <h4 className="text-xs font-bold text-gray-900 mb-1">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/company/trustmoretech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2Ftrustmorehq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/Trustmorehq?mibextid=ZbWK4v1648226618021!5m2!1sen!2sin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/trustmoregroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCcwBLC05uEbmuFPkNCcDOuw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="md:ml-4">
            <h3 className="text-base font-bold text-gray-900 mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/payments", label: "Payments" },
                { href: "/wealth-management", label: "Wealth Management" },
                { href: "/experiences", label: "Experiences" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-of-service", label: "Terms of Service" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-medium text-sm ${
                      pathname === href ? "text-black" : "text-gray-700"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Affiliated Platforms Section */}
          <div className="md:ml-4">
            <h3 className="text-base font-bold text-gray-900 mb-2">
              Affiliated Platforms
            </h3>
            <ul className="space-y-1 text-gray-700 font-medium">
              <li>
                <a
                  href="https://www.escrowpay.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black text-sm"
                >
                  Escrowpay
                </a>
              </li>
              <li>
                <a
                  href="https://www.iprivewealth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black text-sm"
                >
                  IPRIVEWEALTH
                </a>
              </li>
              <li>
                <a
                  href="https://www.luxejoys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black text-sm"
                >
                  LUXEJOYS
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Note - Made more compact */}
        <div className="mt-4 p-2 bg-gray-50 rounded-lg mx-auto text-center">
          <p className="text-xs text-gray-600">
            Your Trustmore digital services are provided through licensed
            financial institutions. We follow necessary security standards and
            best practices. Trustmore itself is not a bank and doesn't hold or
            claim to hold a banking license.
          </p>
        </div>

        {/* Copyright - Reduced padding */}
        <div className="border-t border-gray-200 mt-6 pt-4 text-center text-gray-500 text-xs">
          <p>
            © {new Date().getFullYear()} Trustmore Technologies Private Limited.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
