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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            {/* Logo Stack */}
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-center gap-6">
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

            {/* Office Addresses */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                Head Office Address
              </h4>
              <p className="text-gray-700 text-sm">
                <strong>India:</strong>
                <br />
                One World Center, Lower Parel
                <br />
                Mumbai, India
              </p>
              <p className="text-gray-700 text-sm mt-2">
                <strong>UAE:</strong>
                <br />
                Level 41, Emirates Towers
                <br />
                Sheikh Zayed Road, Dubai
              </p>
            </div>
          </div>

          {/* Contact Us Section (Before Quick Links) */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Contact Us</h3>
            <p className="text-gray-800 font-semibold text-sm">
              Hotline: +919810336644
            </p>
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-4">
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
          <div className="md:ml-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" }, // About is now placed after Home
                { href: "/payments", label: "Payments" },
                { href: "/wealth-management", label: "Wealth Management" },
                { href: "/experiences", label: "Experiences" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-of-service", label: "Terms of Service" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-medium ${
                      pathname === href
                        ? "text-black" // No blue color when active
                        : "text-gray-700 "
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Affiliated Platforms Section */}
          <div className="md:ml-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Affiliated Platforms
            </h3>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>
                <a
                  href="https://www.escrowpay.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  Escrowpay
                </a>
              </li>
              <li>
                <a
                  href="https://www.iprivewealth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  IPRIVEWEALTH
                </a>
              </li>
              <li>
                <a
                  href="https://www.luxejoys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  LUXEJOYS
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Note */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg mx-auto text-center">
          <p className="text-xs text-gray-600">
            Your Trustmore digital services are provided through licensed
            financial institutions. We follow necessary security standards and
            best practices.
            <span className="block">
              Trustmore itself is not a bank and doesn't hold or claim to hold a
              banking license.
            </span>
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Trustmore Technologies Private Limited.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
