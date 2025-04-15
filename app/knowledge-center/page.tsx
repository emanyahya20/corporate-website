"use client";

import {
  Brain,
  Heart,
  Users,
  Target,
  Download,
  Mail,
  Search,
  Filter,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function KnowledgeCenterPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add subscription logic here
    alert(`Thank you for subscribing with ${email}`);
    setEmail("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Video Banner - Now full viewport height like Careers page */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/videos/kc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Welcome Message */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
              Trustmore Knowledge Center
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
              Intelligence that Inspires Growth
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Search & Filter */}
      <section className="bg-gray-100 py-4 sticky top-0 z-20 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search
                size={18}
                className="absolute left-3 top-2.5 text-gray-400"
              />
            </div>

            {/* Filter Controls - Now More Compact */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activeFilter === "all"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter("escrowpay")}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activeFilter === "escrowpay"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                Escrowpay
              </button>
              <button
                onClick={() => setActiveFilter("iprive")}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activeFilter === "iprive"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                IPRIVE
              </button>
              <button
                onClick={() => setActiveFilter("luxejoys")}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activeFilter === "luxejoys"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                Luxejoys
              </button>
              <button
                onClick={() => setActiveFilter("reports")}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activeFilter === "reports"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                Reports
              </button>
              <button
                onClick={() => setActiveFilter("news")}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activeFilter === "news"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                News
              </button>
            </div>

            {/* Subscribe - More Compact */}
            <form
              onSubmit={handleSubscribe}
              className="flex gap-2 w-full md:w-auto"
            >
              <input
                type="email"
                placeholder="Subscribe"
                className="px-3 py-1 border border-gray-300 rounded-full text-xs w-full md:w-40"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-3 py-1 bg-black text-white rounded-full text-xs flex items-center gap-1 hover:bg-black"
              >
                <Mail size={14} />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Main Content - Grid Layout for Many Articles */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Featured Content Carousel - For Important Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Target className="text-gray-800" size={22} />
              Featured Content
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-gray-50 rounded-xl overflow-hidden shadow-sm relative h-64 md:h-80">
                <img
                  src="/placeholder.svg"
                  alt="Featured article"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6">
                  <span className="text-white/80 text-sm mb-2">
                    Global Markets • April 2, 2025
                  </span>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    2025 Global Investment Outlook: Emerging Markets Recovery
                  </h3>
                  <button className="text-white text-sm font-medium hover:underline flex items-center gap-1 w-fit">
                    Read Report <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm h-38">
                  <div className="p-4">
                    <span className="text-gray-500 text-xs">
                      Digital Trust • March 28, 2025
                    </span>
                    <h3 className="font-semibold text-base mt-1">
                      The Future of Digital Escrow: 2025 Trends
                    </h3>
                    <button className="text-black text-xs font-medium mt-2 hover:underline flex items-center gap-1">
                      Download <ChevronRight size={14} />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm h-38">
                  <div className="p-4">
                    <span className="text-gray-500 text-xs">
                      Luxejoys • March 20, 2025
                    </span>
                    <h3 className="font-semibold text-base mt-1">
                      Asset Tokenization: Luxury Markets Report
                    </h3>
                    <button className="text-black text-xs font-medium mt-2 hover:underline flex items-center gap-1">
                      Download <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Grid - Compact Design for Many Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Brain className="text-gray-800" size={22} />
              Latest Research & Publications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
              {/* Article Card Template - Repeats for all articles */}
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all overflow-hidden flex flex-col"
                >
                  <div className="h-36 bg-gray-100 overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt={`Article ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-gray-500">
                        {i % 4 === 0
                          ? "Escrowpay"
                          : i % 4 === 1
                          ? "IPRIVE"
                          : i % 4 === 2
                          ? "Luxejoys"
                          : "Report"}
                      </span>
                      <span className="text-xs text-gray-400">
                        {`Apr ${i + 1}, 2025`}
                      </span>
                    </div>
                    <h3 className="font-medium text-sm mb-2">
                      {i % 4 === 0
                        ? "Secure Payment Solutions for Digital Economies"
                        : i % 4 === 1
                        ? "Private Investment Strategies for Wealth Management"
                        : i % 4 === 2
                        ? "Luxury Asset Investment Diversification Report"
                        : "Cross-Border Transaction Technology Updates"}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2 flex-grow">
                      Short description of this article or report providing key
                      insights and highlights for readers interested in the
                      topic.
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-xs text-gray-500">
                        {`${(i + 2) * 5} min read`}
                      </span>
                      <button className="text-black text-xs font-medium hover:underline flex items-center gap-1">
                        Read <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-10 text-center">
              <button className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                Load More Articles <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Media & Press Coverage - Now Matching the Research Layout */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Users className="text-gray-800" size={22} />
              Media & Press Coverage
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
              {/* Media Coverage Cards - Using same layout as articles */}
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all overflow-hidden flex flex-col"
                >
                  <div className="h-36 bg-gray-100 overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt={`Media ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-gray-500">
                        {i % 6 === 0
                          ? "Forbes"
                          : i % 6 === 1
                          ? "Bloomberg"
                          : i % 6 === 2
                          ? "Financial Times"
                          : i % 6 === 3
                          ? "Reuters"
                          : i % 6 === 4
                          ? "CNBC"
                          : "Wall Street Journal"}
                      </span>
                      <span className="text-xs text-gray-400">
                        {`Mar ${20 + i}, 2025`}
                      </span>
                    </div>
                    <h3 className="font-medium text-sm mb-2">
                      {i % 4 === 0
                        ? "Trustmore Expands Global Reach with Middle East Partnership"
                        : i % 4 === 1
                        ? "Digital Trust Services Revolutionizing Cross-Border Payments"
                        : i % 4 === 2
                        ? "CEO Interview: The Future of Wealth Management Technology"
                        : "How Trustmore is Reshaping Digital Escrow Services"}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2 flex-grow">
                      {i % 4 === 0
                        ? "Trustmore announces strategic partnership with leading MENA financial institutions, expanding its digital trust footprint."
                        : i % 4 === 1
                        ? "Industry analysis on how Trustmore's technology platforms are transforming secure transactions globally."
                        : i % 4 === 2
                        ? "An exclusive interview with Trustmore's CEO on innovations in wealth technology and market outlook."
                        : "Feature article examining Trustmore's impact on the digital escrow landscape and client security."}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-xs text-gray-500">
                        Press Coverage
                      </span>
                      <button className="text-gray-800 text-xs font-medium hover:underline flex items-center gap-1">
                        Read Article <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-10 text-center">
              <button className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                View More Press Coverage <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simplified */}
      <section className="py-10 bg-gray-100 text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Request Custom Research
          </h2>
          <p className="text-base mb-6">
            Need specific market intelligence? Our research team can prepare
            bespoke reports tailored to your requirements.
          </p>
          <button className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors">
            Contact Our Experts
          </button>
        </div>
      </section>
    </div>
  );
}
