"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { Linkedin, X, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* Logo Stack - Only Trustmore logo and the golden logo (ft2.png) */}
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex items-center">
                {/* Trustmore logo clickable */}
                <div className="h-12 w-auto">
                  <Link href="/">
                    <img
                      src="/footerlogo/trustmore.png"
                      alt="Trustmore Logo"
                      className="h-full w-auto object-contain max-w-[180px]"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex items-center">
                {/* Golden logo - non-clickable */}
                <div className="h-10 w-auto">
                  <img
                    src="/footerlogo/ft2.png"
                    alt="Golden Logo"
                    className="h-full w-auto object-contain max-w-[120px]"
                  />
                </div>
              </div>
            </div>

            {/* Company Description - Keep this text */}

            <div className="mb-4">
              <p className="text-xs text-gray-700 leading-tight text-justify">
                Trustmore Group is a global, technology-led financial
                powerhouse, managing wealth, payments, and exclusive
                experiences. Built on a foundation of trust, transparency, and
                innovation since 2001. Trustmore empowers you to do more, grow
                more, and live more.
              </p>
            </div>
            {/* Contact Us Section (after company description) */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Contact Us
              </h3>
              <p className="text-gray-800 font-semibold text-xs mb-3">
                Phone: +91 98 10 33 66 44
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
                    {/* Custom X Logo SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        d="M16.99 2H20.298L14.061 9.233L21.573 19H16.27L11.719 13.105L6.489 19H3.179L9.816 11.33L2.612 2H8.04L12.147 7.402L16.99 2ZM17.046 17.317H18.693L7.17 3.597H5.406L17.046 17.317Z"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
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
          </div>

          {/* Trustmore Group Sites Section (Before Quick Links) */}
          <div className="md:ml-4">
            <h3 className="text-base font-bold text-gray-900 mb-2">
              Trustmore Group Sites
            </h3>
            <ul className="space-y-1 text-gray-700 font-medium">
              <li>
                <a
                  href="https://www.escrowpay.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black text-sm"
                >
                  ESCROWPAY
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
              <li>
                <a
                  href="https://www.revco.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black text-sm"
                >
                  REVCO
                </a>
              </li>
              <li>
                <a
                  href="https://www.flyviajets.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black text-sm"
                >
                  VIAJETS
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section (First Half) */}
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
                { href: "/luxejoy", label: "Luxejoys" },
                { href: "/investors", label: "Investor Relations" },
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

          {/* Quick Links Section (Second Half) */}
          <div className="md:ml-4">
            <h3 className="text-base font-bold text-gray-900 mb-2">
              Helpful Links
            </h3>
            <ul className="space-y-1">
              {[
                { href: "/trustcircle", label: "Trust Circle" },
                { href: "/careers", label: "Careers" },
                { href: "/knowledge-center", label: "Knowledge Center" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-of-service", label: "Terms of Service" },
                { href: "/cookies", label: "Cookies Policy" },
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
        </div>

        {/* Extended Legal Information */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-600">
          <div className="mb-4">
            <p>
              Trustmore Group is the parent company of IPRIVE, Escrowpay, REVCO,
              SettleX, ViaJets, and LuxeJoys, offering a comprehensive suite of
              regulated and non-regulated financial, investment, and lifestyle
              services through its global network of affiliates. Not all
              products and services are available in all jurisdictions or
              through all affiliated entities. Investment advisory and wealth
              planning services may be offered through licensed entities, as
              permitted by local regulations. Certain services are delivered
              through select partners and affiliates, subject to jurisdictional
              requirements. Trustmore Group and its affiliates do not provide
              tax, legal, or accounting advice. Clients should consult their own
              professional advisors before making financial decisions.
            </p>
          </div>
          <div className="mb-4">
            <p>
              Trustmore Group is committed to empowering visionary individuals,
              families, and their enterprises to preserve, grow, and seamlessly
              transfer their wealth. Our clients include global entrepreneurs,
              corporate leaders, family offices, and high-net-worth investors.
              We deliver tailored solutions—combining wealth management, fintech
              innovation, and luxury lifestyle services.Investments in
              alternative investment strategies is speculative, often involves a
              greater degree of risk than traditional investments including
              limited liquidity and limited transparency, among other factors
              and should only be considered by sophisticated investors with the
              financial capability to accept the loss of all or part of the
              assets devoted to such strategies. Borrowing with securities as
              collateral involves certain risks, including the possibility that
              you may need to deposit additional securities and/or cash in the
              account to meet a maintenance call, and that securities in the
              account may be sold to meet the maintenance call. Proper
              management of your account and a thorough understanding of the
              conditions that may affect your investments will assist you in
              effectively using the margin lending program.
            </p>
          </div>

          <div className="mb-4 font-bold text-gray-800 bg-gray-100 p-3 text-center">
            <p>
              INVESTMENT AND INSURANCE PRODUCTS ARE: • NOT FDIC INSURED • NOT
              INSURED BY ANY FEDERAL GOVERNMENT AGENCY • NOT A DEPOSIT OR OTHER
              OBLIGATION OF, OR GUARANTEED BY, TRUSTMORE GROUP OR ANY OF ITS
              AFFILIATES • SUBJECT TO INVESTMENT RISKS, INCLUDING POSSIBLE LOSS
              OF THE PRINCIPAL AMOUNT INVESTED
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 mb-4">
            <h4 className="font-bold mb-2">Disclaimer:</h4>
            <p>
              It is important to note that the capital value of, and income
              from, any investment may go down as well as up and you may not get
              back the full amount invested. For some investments this can also
              happen as a result of exchange rate fluctuations as shares and
              funds may have an exposure to overseas markets. The information
              provided on this website is for informational purposes only and
              does not constitute an offer, solicitation, or recommendation to
              invest in any products or services. All investments involve risk,
              including the potential loss of principal. Trustmore Group does
              not provide tax, legal, or accounting advice. Please consult your
              professional advisors before making financial decisions. Products
              and services may be subject to regulatory restrictions and may not
              be available in all jurisdictions.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-6 pt-4 text-center text-gray-500 text-xs">
          <p>
            © 2025 Trustmore Group and its affiliates. All rights reserved.
            Trustmore, Escrowpay, REVCO, SettleX, IPRIVE, ViaJets, and LuxeJoys
            are trademarks or registered trademarks of Trustmore Group.
            <br />
            Registered office: Ground Floor, 7A, Standard Chartered Tower, DLF
            Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana 122001, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
