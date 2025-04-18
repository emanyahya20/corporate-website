"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CheckCircle,
  Zap,
  BarChart3,
  DollarSign,
  Shield,
  User,
  Users,
  Globe,
  Briefcase,
  ArrowRight,
  ChevronRight,
  Star,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function TrustCirclePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Video Banner */}
      <section className="relative h-screen md:h-[110vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/tc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Welcome Message */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40 flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative z-10">
            <div className="w-full max-w-4xl">
              <div className="text-center px-2 sm:px-0">
                <h1 className="text-3xl sm:text-5xl md:text-5xl font-semibold text-white mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  Trust Circle, Powered by Trustmore
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-10">
                  Your Network. Your Opportunity. Your Global Advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-white text-gray-800 py-6 px-6 md:px-24">
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Header with logo instead of text heading */}
          <div className="text-center space-y-3">
            <div className="flex justify-center mb-0">
              <img
                src="/footerlogo/tclogo.png"
                alt="Trust Circle Logo"
                className="h-96 w-auto"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Why Join Trust Circle?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how becoming a member of Trust Circle unlocks unique
              financial opportunities and professional tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Your Network, Your Financial Asset
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Turn introductions into income by connecting businesses and
                    HNIs to global services.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Global Reach, Seamless Tech
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Access premium services in Payments, Wealth, and Luxury —
                    anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Success-Based Earnings
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Earn unlimited commissions on every successful referral.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Reliable Income in Uncertain Times
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Build a stable income stream when it's needed most.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Professional Marketing Support
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get brochures, presentations, and digital assets to grow
                    confidently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-5 text-center">
              What’s Included in ₹59,000/Year
            </h3>

            <div className="bg-black text-white p-3 rounded-lg mb-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white" />
                  <span className="font-medium">Annual Membership</span>
                </div>
                <span className="text-xl font-bold">₹59,000</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                "Account setup, secure login, and KYC",
                "Access to Trustmore Knowledge Centre",
                "Monthly 1-hour strategy calls with advisors",
                "Social growth and distributor rights",
                "Priority invitations to events and webinars",
                "Ready-to-use sales and marketing assets",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center w-full">
              <Button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-black hover:text-white transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-black/30 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-base font-medium">
                Become a Member <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Improved Membership Details with separate sections */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Membership Details
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our exclusive network and leverage your connections for
              mutual growth
            </p>
          </div>

          {/* Who Should Join Section */}
          <div className="mb-16">
            <div className="bg-black text-white py-3 px-5 rounded-t-lg max-w-xs mx-auto text-center mb-8">
              <h3 className="text-xl font-bold flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Who Should Join?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Independent financial advisors",
                "Corporate consultants & intermediaries",
                "Real estate & luxury asset brokers",
                "Wealth managers & private bankers",
                "HNWIs with strong networks",
                "Retired professionals & CXOs",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex items-center gap-3"
                >
                  <div className="bg-gray-100 p-1.5 rounded-full">
                    <ChevronRight className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who Can You Refer Section */}
          <div>
            <div className="bg-black text-white py-3 px-5 rounded-t-lg max-w-xs mx-auto text-center mb-8">
              <h3 className="text-xl font-bold flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Who Can You Refer?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Business owners & startups",
                "Global investors & developers",
                "High-net-worth families",
                "Venture capitalists & angels",
                "Clients seeking luxury or escrow services",
                "Professionals seeking global wealth",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex items-center gap-3"
                >
                  <div className="bg-gray-100 p-1.5 rounded-full">
                    <ChevronRight className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sleek CTA Section */}
      <section className="bg-gray-100 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-5">
            Turn Connections Into Global Earnings
          </h3>
          <p className="text-lg mb-6 text-gray-700">
            Refer & Earn. Grow Your Network. Build Resilience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2">
            <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-black hover:text-white transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-black/30 shadow-lg hover:shadow-xl flex items-center gap-2">
              Join Trust Circle Now
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-xl border-2 border-black hover:bg-gray-200 transition active:scale-95 focus:outline-none focus:ring-0 text-base font-semibold shadow-sm">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
