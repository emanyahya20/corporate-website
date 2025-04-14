"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CheckCircle,
  Zap as LucideZap,
  BarChart3 as LucideChart,
  DollarSign as LucideDollar,
  Shield as LucideShield,
  User as LucideUser,
} from "lucide-react";
import {
  Users,
  Globe,
  DollarSign,
  Shield,
  Briefcase,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function TrustCirclePage() {
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
          <source src="/videos/tc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
              Trust Circle, Powered by Trustmore Group
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
              Your Network. Your Opportunity. Your Global Advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits section with cards - White background */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
                Why Join Trust Circle?
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Users className="w-6 h-6 " />
                  </div>
                  <div>
                    <strong className="text-lg text-gray-800 block mb-1">
                      Your Network, Your Financial Asset
                    </strong>
                    <p className="text-gray-600">
                      Turn introductions into income by connecting businesses
                      and HNIs to global services.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Globe className="w-6 h-6 " />
                  </div>
                  <div>
                    <strong className="text-lg text-gray-800 block mb-1">
                      Global Reach, Seamless Tech
                    </strong>
                    <p className="text-gray-600">
                      Access premium services in Payments, Wealth, and Luxury —
                      anytime, anywhere.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <DollarSign className="w-6 h-6 " />
                  </div>
                  <div>
                    <strong className="text-lg text-gray-800 block mb-1">
                      Success-Based Earnings
                    </strong>
                    <p className="text-gray-600">
                      Earn unlimited commissions on every successful referral.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Shield className="w-6 h-6 " />
                  </div>
                  <div>
                    <strong className="text-lg text-gray-800 block mb-1">
                      Reliable Income in Uncertain Times
                    </strong>
                    <p className="text-gray-600">
                      Build a stable income stream when it's needed most.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Briefcase className="w-6 h-6 " />
                  </div>
                  <div>
                    <strong className="text-lg text-gray-800 block mb-1">
                      Professional Marketing Support
                    </strong>
                    <p className="text-gray-600">
                      Get brochures, presentations, and digital assets to grow
                      confidently.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
                What's Included in ₹59,000/Year
              </h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                  <CheckCircle className="w-6 h-6 text-black" />
                  <span className="text-gray-700">
                    Account setup, secure login, and KYC
                  </span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                  <CheckCircle className="w-6 h-6 text-black" />
                  <span className="text-gray-700">
                    Access to Trustmore Knowledge Centre
                  </span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                  <CheckCircle className="w-6 h-6 text-black" />
                  <span className="text-gray-700">
                    Monthly 1-hour strategy calls with advisors
                  </span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                  <CheckCircle className="w-6 h-6 text-black" />
                  <span className="text-gray-700">
                    Social growth and distributor rights
                  </span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                  <CheckCircle className="w-6 h-6 text-black" />
                  <span className="text-gray-700">
                    Priority invitations to events and webinars
                  </span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                  <CheckCircle className="w-6 h-6 text-black" />
                  <span className="text-gray-700">
                    Ready-to-use sales and marketing assets
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join/Who Can You Refer section - Gray background */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Membership Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border-l-4 border-black shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Who Should Join?
              </h3>
              <ul className="space-y-2">
                {[
                  "Independent financial advisors",
                  "Corporate consultants & intermediaries",
                  "Real estate & luxury asset brokers",
                  "Wealth managers & private bankers",
                  "HNWIs with strong networks",
                  "Retired professionals & CXOs",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-black" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-black shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Who Can You Refer?
              </h3>
              <ul className="space-y-2">
                {[
                  "Business owners & startups",
                  "Global investors & developers",
                  "High-net-worth families",
                  "Venture capitalists & angels",
                  "Clients seeking luxury or escrow services",
                  "Professionals seeking global wealth",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-black" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section - White background */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-100 p-10 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              Turn Connections Into Global Earnings
            </h3>
            <p className="text-lg mb-8 text-gray-700">
              Refer & Earn. Grow Your Network. Build Resilience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Join Trust Circle <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
