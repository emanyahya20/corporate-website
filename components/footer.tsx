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
            {/* Logo Stack - Trustmore logo and the golden logo (ft2.png) side by side */}
            <div className="flex flex-row gap-3 mb-4 items-center">
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

              {/* Golden logo - non-clickable */}
              <div className="h-10 w-auto">
                <img
                  src="/footerlogo/ft2.png"
                  alt="Golden Logo"
                  className="h-full w-auto object-contain max-w-[120px]"
                />
              </div>
            </div>

            {/* Company Description - Keep this text */}
            <div className="mb-4">
              <p className="text-xs text-gray-700 leading-tight">
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
                    className="text-gray-600 hover:text-[oklch(0.257_0.09_281.288)]"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com/Trustmorehq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[oklch(0.257_0.09_281.288)]"
                    aria-label="X (Twitter)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/Trustmorehq?mibextid=ZbWK4v1648226618021!5m2!1sen!2sin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[oklch(0.257_0.09_281.288)]"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/trustmoregroup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[oklch(0.257_0.09_281.288)]"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/channel/UCcwBLC05uEbmuFPkNCcDOuw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[oklch(0.257_0.09_281.288)]"
                    aria-label="YouTube"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
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
              innovation, and luxury lifestyle services. Investments in
              alternative investment strategies are speculative, often involve a
              greater degree of risk than traditional investments including
              limited liquidity and limited transparency, among other factors
              and should only be considered by sophisticated investors with the
              financial capability to accept the loss of all or part of the
              assets devoted to such strategies.
            </p>
          </div>

          <div className="mb-4 font-bold text-gray-800 bg-gray-100 p-3 text-center">
            <p>
              INVESTMENTS AND INSURANCE PRODUCTS ARE: • NOT INSURED OR
              GUARANTEED BY TRUSTMORE • NOT INSURED BY ANY GOVERNMENT AGENCY •
              NOT A DEPOSIT OR OTHER OBLIGATION OF, OR GUARANTEED BY, TRUSTMORE
              GROUP OR ANY OF ITS AFFILIATES • SUBJECT TO INVESTMENT RISKS,
              INCLUDING POSSIBLE LOSS OF THE PRINCIPAL AMOUNT INVESTED
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
