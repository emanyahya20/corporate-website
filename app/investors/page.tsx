import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  FileCheck,
  Globe,
  Clock,
  Building,
  Lock,
  CheckCircle,
  Award,
  Landmark,
  Network,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

export default function InvestorsPage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero video section */}
      <section className="relative h-screen md:h-[110vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/ir.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-center px-4 sm:px-0">
              <h1 className="text-3xl sm:text-5xl md:text-5xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                <span className="block whitespace-normal">
                  Investor Relations
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10">
                Partners in Building Global Financial Trust
              </p>
              {/* Removed "Learn More" button as requested */}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              About Investors
            </h2>
            <div className="text-center mb-8">
              <p className="text-gray-800 mb-6 max-w-4xl mx-auto">
                At Trustmore Group, we are proud to be a forward-thinking,
                trust-driven institution, backed by some of the most respected
                names in global finance, private capital, and wealth management.
                As a group, we’re built on a legacy of transparency, integrity,
                and responsible growth — values shared by our distinguished
                investors and strategic partners.s
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <div className="bg-gray-100 py-6 mt-6" id="awards-section">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Investors
          </h2>
          <div className="flex justify-center items-center flex-wrap">
            {/* First three logos - stretched */}
            {[6, 7, 8].map((awardNum) => (
              <img
                key={awardNum}
                src={`/award${awardNum}.png`}
                alt={`Award ${awardNum}`}
                className="h-32 w-[180px] object-contain px-6"
              />
            ))}
            {/* Middle logos - regular size */}
            {[9, 10].map((awardNum) => (
              <img
                key={awardNum}
                src={`/award${awardNum}.png`}
                alt={`Award ${awardNum}`}
                className="h-24 w-[150px] object-contain px-6"
              />
            ))}
            {/* Last logo - stretched */}
            <img
              src="/award11.png"
              alt="Award 11"
              className="h-32 w-[180px] object-contain px-6"
            />
          </div>
        </div>
      </div>

      {/* Mission Statement Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Backed by Visionaries, Powered by Trust
            </h2>
            <p className="text-gray-800 text-lg mb-8 max-w-3xl mx-auto">
              Our investor community includes leading financial institutions,
              venture capital firms, private equity houses, and sovereign family
              offices that recognize the immense potential of technology-led
              financial infrastructure and cross-border wealth ecosystems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-lg bg-gray-100 flex flex-col items-center">
                <Shield className="h-10 w-10 text-black mb-4" />
                <h3 className="font-medium text-gray-800 text-lg mb-2">
                  Transparency
                </h3>
                <p className="text-gray-700 text-sm">
                  Clear, honest communication with our partners and stakeholders
                </p>
              </div>
              <div className="p-5 rounded-lg bg-gray-100 flex flex-col items-center">
                <FileCheck className="h-10 w-10 text-black mb-4" />
                <h3 className="font-medium text-gray-800 text-lg mb-2">
                  Integrity
                </h3>
                <p className="text-gray-700 text-sm">
                  Unwavering commitment to ethical business practices
                </p>
              </div>
              <div className="p-5 rounded-lg bg-gray-100 flex flex-col items-center">
                <TrendingUp className="h-10 w-10 text-black mb-4" />
                <h3 className="font-medium text-gray-800 text-lg mb-2">
                  Responsible Growth
                </h3>
                <p className="text-gray-700 text-sm">
                  Sustainable expansion that creates lasting value
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Investors Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Our Esteemed Investor & Strategic Network
            </h2>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <Briefcase className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-800">
                    Top-Tier Global Venture Capital Firms
                  </p>
                </div>
                <div className="flex items-start">
                  <Building className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-800">
                    Private Equity Leaders Specializing in Financial Services &
                    Technology
                  </p>
                </div>
                <div className="flex items-start">
                  <Landmark className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-800">
                    Private Wealth Management Houses from the UAE, Singapore,
                    and London
                  </p>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-800">
                    Institutional Investors and Sovereign Wealth Entities
                  </p>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-800">
                    Family Offices Backing Impactful, Long-Term Financial Growth
                    Stories
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center text-sm text-gray-600 italic">
                (Names disclosed in compliance with governance and
                confidentiality agreements)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why They Trust Us Section - Made containers smaller and consistent */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Why They Trust Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-gray-100 rounded-lg">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">
                      Proven Track Record
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Excellence across Payments, Private Wealth, and Global
                      Experiences
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gray-100 rounded-lg">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">
                      25-Year Operational Legacy
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Delivering resilience, innovation, and consistent value
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gray-100 rounded-lg">
                <div className="flex items-start">
                  <Lock className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">
                      Compliance-Led Infrastructure
                    </h3>
                    <p className="text-gray-700 text-sm">
                      End-to-end technology-backed financial infrastructure
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gray-100 rounded-lg">
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">
                      Global Access
                    </h3>
                    <p className="text-gray-700 text-sm">
                      To rapidly growing, future-ready financial ecosystems in
                      India, UAE, Singapore, and London
                    </p>
                  </div>
                </div>
              </div>

              {/* Fixed this container to match others perfectly */}
              <div className="p-5 bg-gray-100 rounded-lg">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">
                      Built on a Strong Foundation
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Secure, scalable, and ethical financial services that
                      stand the test of time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Growth Story Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Join Our Growth Story
            </h2>
            <p className="text-gray-800 mb-8 text-lg">
              We invite discerning global investors, visionary financial houses,
              and long-term strategic partners to be part of our journey. At
              Trustmore Group, we are not just managing funds — we are shaping
              the future of trust in financial ecosystems worldwide.
            </p>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                For strategic investor enquiries, please write to:
              </h3>
              {/* Changed to email link */}
              <p className="text-lg font-semibold text-gray-900 mb-6">
                <a
                  href="mailto:iprive@itrustmore.com"
                  className="text-blue-600 hover:underline"
                >
                  iprive@itrustmore.com
                </a>
              </p>
              <Link href="/contact" passHref>
                <Button className="bg-black hover:bg-gray-800 text-white rounded-lg px-5 py-2 font-medium">
                  Contact our Investors Relations Teams{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
