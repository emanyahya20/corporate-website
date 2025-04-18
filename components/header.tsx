import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
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
    "/trustcircle",
    "/luxejoy",
    "/about",
    "/contact",
    "/careers",
  ];

  const isTransparent =
    transparentPages.some((page) => pathname?.startsWith(page)) && !scrolled;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/payments", label: "Payments" },
    { href: "/wealth-management", label: "Wealth" },
    { href: "/luxejoy", label: "LuxeJoys" },
    { href: "/trustcircle", label: "Trust Circle" },
    { href: "/careers", label: "Careers" },
    { href: "/knowledge-center", label: "Knowledge Center" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
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
          <nav className="hidden md:flex items-center space-x-5">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  isTransparent ? "text-white" : "text-gray-700"
                } text-sm font-medium`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="/contact">
              {" "}
              {/* Path to your contact page */}
              <Button
                className={`${
                  isTransparent
                    ? "bg-white text-gray-800 hover:bg-white/90"
                    : "bg-black text-white hover:bg-black/80"
                } rounded-full text-sm px-4 py-2 transition-all duration-200 hover:shadow-md hover:scale-105`}
              >
                Get Started
              </Button>
            </Link>
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
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
