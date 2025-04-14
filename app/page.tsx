import { Button } from "@/components/ui/button";
import MissionVision from "@/components/mission-vision";
import CompanyProfile from "@/components/company-profile";
import { BrandShowcase } from "@/components/BrandShowcase";
import PodcastSection from "@/components/podcast-section";
import HistoryTimeline from "@/components/HistoryTimeline";
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
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/videos/homepage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered Text Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
              Welcome to Trustmore Group
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10">
              Connecting the World’s Money Flows with Trust, Transparency, and
              Technology. Trustmore. Do More.
            </p>
            {/* Play Button */}
            <a
              href="https://youtu.be/FOvvUkejbIg?si=B4yeO0atrRfpna8e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 transition duration-300"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
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
            <a
              href="#HistoryTimeline"
              className="text-lg text-grey hover:text-black"
            >
              History Timeline
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

      {/*  HistoryTimeline */}
      <section id="HistoryTimeline">
        <HistoryTimeline />
      </section>

      {/* Awards Section */}
      <div className="bg-gray-100 py-10 mt-10" id="awards-section">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Setting The Benchmark With Industry Awards
          </h2>
          <div className="flex justify-center flex-wrap items-center gap-4">
            <div className="h-28 w-auto">
              <img
                src="/award1.png"
                alt="Award 1"
                className="h-full w-auto object-contain max-w-[200px]"
              />
            </div>
            <div className="h-28 w-auto">
              <img
                src="/award2.png"
                alt="Award 2"
                className="h-full w-auto object-contain max-w-[200px]"
              />
            </div>
            <div className="h-28 w-auto">
              <img
                src="/award3.png"
                alt="Award 3"
                className="h-full w-auto object-contain max-w-[200px]"
              />
            </div>
            <div className="h-28 w-auto">
              <img
                src="/award4.png"
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
