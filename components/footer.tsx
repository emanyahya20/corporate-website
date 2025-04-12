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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            {/* Logo Stack - Vertical Layout with proper spacing */}
            <div className="flex flex-col gap-6 mb-8">
              {/* First Row - First and Second Logos */}
              <div className="flex items-center gap-6">
                {/* First Logo */}
                <div className="h-12 w-auto">
                  <img
                    src="/footerlogo/trustmore.png"
                    alt="Trustmore Logo"
                    className="h-full w-auto object-contain max-w-[180px]"
                  />
                </div>

                {/* Second Logo */}
                <div className="h-10 w-auto">
                  <img
                    src="/footerlogo/ft1.png"
                    alt="Partner Logo"
                    className="h-full w-auto object-contain max-w-[120px]"
                  />
                </div>
              </div>

              {/* Second Row - Third and Fourth Logos */}
              <div className="flex items-center gap-6">
                {/* Third Logo - Clickable */}
                <a
                  href="http://iTrustmore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-auto block"
                >
                  <img
                    src="/footerlogo/golden.png"
                    alt="iTrustmore Logo"
                    className="h-full w-auto object-contain max-w-[120px]"
                  />
                </a>

                {/* Fourth Logo */}
                <div className="h-10 w-auto">
                  <img
                    src="/footerlogo/25years.png"
                    alt="Another Logo"
                    className="h-full w-auto object-contain max-w-[120px]"
                  />
                </div>
              </div>
            </div>

            <p className="text-gray-600">
              We combine the power of financial technology with world-class
              private wealth expertise to create an ecosystem where money moves
              intelligently, wealth grows strategically, and luxury is
              experienced effortlessly.
            </p>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-gray-900 mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/trustmoretech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2Ftrustmorehq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="h-5 w-5" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/Trustmorehq?mibextid=ZbWK4v1648226618021!5m2!1sen!2sin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/trustmoregroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/channel/UCcwBLC05uEbmuFPkNCcDOuw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:ml-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className={`font-medium ${
                    pathname === "/"
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/payments"
                  className={`font-medium ${
                    pathname === "/payments"
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  Payments
                </Link>
              </li>
              <li>
                <Link
                  href="/wealth-management"
                  className={`font-medium ${
                    pathname === "/wealth-management"
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences"
                  className={`font-medium ${
                    pathname === "/experiences"
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`font-medium ${
                    pathname === "/about"
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="font-medium text-gray-700 hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="font-medium text-gray-700 hover:text-blue-600"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscription Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Subscribe</h3>
            <p className="text-gray-600 mb-4">
              Stay updated with our latest news and offers
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-50 border-2 border-gray-800 text-gray-800 placeholder-gray-400 rounded-none focus:ring-0 focus:border-gray-800 focus:outline-none"
              />
              <Button
                type="submit"
                variant="outline"
                className="rounded-none border-2 font-semibold border-gray-800 text-gray-800 bg-transparent hover:bg-gray-100 hover:text-gray-800 active:bg-gray-200 active:text-gray-800 focus:ring-0 focus:ring-offset-0 focus:outline-none active:scale-[0.98] transition-all"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-gray-500 text-xs mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

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
