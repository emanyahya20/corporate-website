import { Button } from "@/components/ui/button";
import MissionVision from "@/components/mission-vision";
import CompanyProfile from "@/components/company-profile";
import { BrandShowcase } from "@/components/BrandShowcase";
import PodcastSection from "@/components/podcast-section";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Globe,
  TrendingUp,
  CheckCircle,
  MapPin,
  Play,
  Lock,
  ArrowUpRight,
  Zap as LucideZap,
  BarChart3 as LucideChart,
  DollarSign as LucideDollar,
  Shield as LucideShield,
  User as LucideUser,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Video Banner */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/homepage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="w-full max-w-4xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                Trusted Private Wealth Management
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10">
                Where Vision Meets Legacy
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-lg px-4 sm:px-6 md:px-8 backdrop-blur-sm text-sm sm:text-base [text-shadow:_0_1px_1px_rgba(0,0,0,0.3)]"
                  >
                    Discover Our Services{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section for Navigation Links */}
      <section className="bg-white py-6">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Explore Our Sections
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="#mission-vision"
              className="text-lg text-grey hover:text-black"
            >
              Mission & Vision
            </a>
            <a
              href="#company-profile"
              className="text-lg text-grey hover:text-black"
            >
              Company Profile
            </a>
            <a
              href="#brand-showcase"
              className="text-lg text-grey hover:text-black"
            >
              Explore Our Brands
            </a>
            <a
              href="#podcast-section"
              className="text-lg text-grey hover:text-black"
            >
              Podcast Section
            </a>
            <a
              href="#awards-section"
              className="text-lg text-grey hover:text-black"
            >
              Awards
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision">
        <MissionVision />
      </section>

      {/* Company Profile Section */}
      <section id="company-profile">
        <CompanyProfile />
      </section>

      {/* Brand Showcase Section */}
      <section id="brand-showcase" className="bg-gray-50">
        <BrandShowcase />
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
            Ready to Elevate Your Wealth Journey?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Schedule a private consultation with our wealth experts and discover
            how we can help you build, protect, and enjoy your legacy.
          </p>
          <Link href="/contact" passHref>
            <Button className="bg-black text-white border border-black rounded-full px-8 py-6 text-lg transition-all duration-200 hover:bg-white hover:text-black hover:shadow-lg hover:scale-105">
              Request Private Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast-section">
        <PodcastSection />
      </section>

      {/* Awards Section */}
      <div className="bg-white py-10 mt-10" id="awards-section">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Setting The Benchmark With Industry Awards
          </h2>
          <div className="flex justify-center flex-wrap items-center gap-4">
            <div className="h-28 w-auto">
              <img
                src="/logo1.png"
                alt="Award 1"
                className="h-full w-auto object-contain max-w-[200px]"
              />
            </div>
            <div className="h-28 w-auto">
              <img
                src="/logo2.png"
                alt="Award 2"
                className="h-full w-auto object-contain max-w-[200px]"
              />
            </div>
            <div className="h-28 w-auto">
              <img
                src="/logo3.png"
                alt="Award 3"
                className="h-full w-auto object-contain max-w-[200px]"
              />
            </div>
            <div className="h-28 w-auto">
              <img
                src="/logo4.png"
                alt="Award 4"
                className="h-full w-auto object-contain max-w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
