import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [routerPath, setRouterPath] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setRouterPath(window.location.pathname);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transparentPages = [
    "/",
    "/payments",
    "/wealth-management",
    "/experiences",
    "/about",
    "/contact",
  ];

  const isTransparent =
    transparentPages.some((page) => routerPath?.startsWith(page)) &&
    !scrolled &&
    mounted;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent || !scrolled
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logos */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/footerlogo/trustmore.png"
                alt="Logo"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </Link>

            <Image
              src="/footerlogo/ft2.png"
              alt="25 Years of Trustmore"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${
                isTransparent ? "text-white" : "text-gray-700"
              } text-lg font-medium`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${
                isTransparent ? "text-white" : "text-gray-700"
              } text-lg font-medium `}
            >
              About
            </Link>
            <Link
              href="/payments"
              className={`${
                isTransparent ? "text-white" : "text-gray-700"
              } text-lg font-medium `}
            >
              Payments
            </Link>
            <Link
              href="/wealth-management"
              className={`${
                isTransparent ? "text-white" : "text-gray-700"
              } text-lg font-medium `}
            >
              Wealth Management
            </Link>
            <Link
              href="/experiences"
              className={`${
                isTransparent ? "text-white" : "text-gray-700"
              } text-lg font-medium `}
            >
              Experiences
            </Link>
            <Link
              href="/contact"
              className={`${
                isTransparent ? "text-white" : "text-gray-700"
              } text-lg font-medium `}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              className={`${
                isTransparent
                  ? "bg-white text-gray-800 hover:bg-white/90"
                  : "bg-black text-white hover:bg-black/80"
              } rounded-none transition-all duration-200 hover:shadow-md hover:scale-105`}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className={isTransparent ? "text-white" : "text-gray-700"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="text-white"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col items-center space-y-4 bg-white p-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/payments"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Payments
            </Link>
            <Link
              href="/wealth-management"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wealth Management
            </Link>
            <Link
              href="/experiences"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experiences
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
