import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/router"; // Import useRouter

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const [routerPath, setRouterPath] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);

    // Store the current route after mounting
    setRouterPath(window.location.pathname);

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once to check initial position

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target as Node)
      ) {
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Define the pages where the header should be transparent
  const transparentPages = [
    "/",
    "/payments",
    "/wealth-management",
    "/experiences",
    "/about",
    "/contact",
  ];

  // Check if the current route is one of the transparent pages
  const isTransparent =
    transparentPages.some((page) => {
      // Check if the current page matches the base path (e.g., "/experiences")
      if (routerPath && routerPath.startsWith(page)) {
        return true;
      }
      return false;
    }) &&
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

            <div className="flex items-center space-x-2">
              {" "}
              {/* Reduced space between second and third image */}
              <Link href="/">
                <Image
                  src="/footerlogo/golden.png"
                  alt="Logo"
                  width={180}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
              <a
                href="http://iTrustmore.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/footerlogo/25years.png"
                  alt="Trustmore Logo"
                  width={180}
                  height={50}
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${
                isTransparent ? "text-white" : "text-gray-700"
              } text-lg font-medium hover:text-blue-600`}
            >
              Home
            </Link>
            <Link
              href="/payments"
              className={`${
                isTransparent ? "text-white" : "text-gray-700"
              } text-lg font-medium hover:text-blue-600`}
            >
              Payments
            </Link>
            <Link
              href="/wealth-management"
              className={`${
                isTransparent ? "text-white" : "text-gray-700"
              } text-lg font-medium hover:text-blue-600`}
            >
              Wealth Management
            </Link>
            <Link
              href="/experiences"
              className={`${
                isTransparent ? "text-white" : "text-gray-700"
              } text-lg font-medium hover:text-blue-600`}
            >
              Experiences
            </Link>

            {/* About Dropdown */}
            <div className="relative" ref={aboutDropdownRef}>
              <div className="flex items-center">
                <Link
                  href="/about"
                  className={`${
                    isTransparent ? "text-white" : "text-gray-700"
                  } text-lg font-medium hover:text-blue-600`}
                >
                  About
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setAboutDropdownOpen(!aboutDropdownOpen);
                  }}
                  className={`ml-1 inline-flex items-center ${
                    isTransparent ? "text-white" : "text-gray-700"
                  } hover:text-blue-600`}
                  aria-label="Toggle about menu"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link
                    href="/about#mission"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Our Mission
                  </Link>
                  <Link
                    href="/about#vision"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Our Vision
                  </Link>
                  <Link
                    href="/about#brands"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Our Brands
                  </Link>
                  <Link
                    href="/about#story"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/about#services"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/about#why-us"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Why Choose Us
                  </Link>
                  <Link
                    href="/about#leadership"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Leadership
                  </Link>
                  <Link
                    href="/about#awards"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Awards
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`${
                isTransparent ? "text-white" : "text-gray-700"
              } text-lg font-medium hover:text-blue-600`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              className={`${
                isTransparent
                  ? "bg-white text-gray-800 hover:bg-white/90"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              } rounded-none`}
            >
              Request Consultation
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
              href="/about"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
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
