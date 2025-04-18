"use client";
import { Button } from "@/components/ui/button";
import MissionVision from "@/components/mission-vision";
import CompanyProfile from "@/components/company-profile";
import { BrandShowcase } from "@/components/BrandShowcase";
import PodcastSection from "@/components/podcast-section";
import HistoryTimeline from "@/components/HistoryTimeline";
import Trustcircle from "@/components/Trustcircle";
import Link from "next/link";
import { useState } from "react";
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
import TrustCircle from "@/components/trust-circle";

export default function Home() {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Video Banner */}
      <section className="relative h-screen md:h-[110vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/homepage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered Text Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-full">
            <h1 className="text-center w-full text-[10px] xs:text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl font-semibold text-white mb-0 leading-tight whitespace-nowrap">
              Connecting Global Money Flows With Trust, Transparency &
              Technology
            </h1>
            <p className="text-xl md:text-2xl font-bold text-white mt-0 mb-3">
              TrustMore. Do More.
            </p>
            {/* Play Button - Made thinner */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-black hover:bg-gray-700 backdrop-blur-sm px-6 py-3 transition duration-300"
            >
              <Play className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal for YouTube Video */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 z-10"
            >
              &times;
            </button>

            {/* YouTube iframe container with proper aspect ratio */}
            <div className="relative pt-[56.25%]">
              {" "}
              {/* 16:9 aspect ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/FOvvUkejbIg?autoplay=1"
                title="Trustmore Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Section for Navigation Links */}
      <section className="bg-white py-6">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Explore Our Sections
          </h2>
          <div className="flex overflow-x-auto pb-3 hide-scrollbar">
            <div className="flex space-x-4 md:space-x-6 mx-auto">
              <a
                href="#mission-vision"
                className="text-sm md:text-lg text-grey hover:text-black whitespace-nowrap px-1"
              >
                Mission & Vision
              </a>
              <a
                href="#company-profile"
                className="text-sm md:text-lg text-grey hover:text-black whitespace-nowrap px-1"
              >
                Company Profile
              </a>
              <a
                href="#brand-showcase"
                className="text-sm md:text-lg text-grey hover:text-black whitespace-nowrap px-1"
              >
                Our Brands
              </a>
              <a
                href="#podcast-section"
                className="text-sm md:text-lg text-grey hover:text-black whitespace-nowrap px-1"
              >
                Podcast Section
              </a>
              <a
                href="#awards-section"
                className="text-sm md:text-lg text-grey hover:text-black whitespace-nowrap px-1"
              >
                Awards
              </a>
              <a
                href="#HistoryTimeline"
                className="text-sm md:text-lg text-grey hover:text-black whitespace-nowrap px-1"
              >
                History Timeline
              </a>
              <a
                href="#trust-circle"
                className="text-sm md:text-lg text-grey hover:text-black whitespace-nowrap px-1"
              >
                Trust Circle
              </a>
            </div>
          </div>

          {/* Add this style to hide scrollbar but keep functionality */}
          <style jsx>{`
            .hide-scrollbar {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none; /* Chrome, Safari and Opera */
            }
          `}</style>
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
          <h2 className="text-3xl md:text-3xl font-semibold text-gray-800 mb-8">
            Ready to Elevate Your Journey?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Schedule a private consultation with our experts and discover how we
            can help you build, protect, and enjoy your legacy.
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
      <div className="bg-gray-100 py-6 mt-6" id="awards-section">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Setting The Benchmark With Industry Awards
          </h2>
          <div className="flex justify-center flex-wrap gap-0">
            {[1, 2, 3, 4, 5].map((awardNum) => (
              <div key={awardNum} className="h-24 w-[150px]">
                <img
                  src={`/award${awardNum}.png`}
                  alt={`Award ${awardNum}`}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="trust-circle">
        <Trustcircle />
      </section>
    </div>
  );
}
