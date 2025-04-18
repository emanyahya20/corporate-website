import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Lock,
  Users,
  BarChart4,
  Building,
  Landmark,
  Plane,
  Shield,
  Layers,
  Wine,
  Network,
  Eye,
  Clock,
  Target,
} from "lucide-react";
import Link from "next/link"; // Add this import

export default function WealthManagementPage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Your hero video section */}
      <section className="relative h-screen md:h-[110vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/wealth.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="w-full max-w-4xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <h1 className="text-3xl sm:text-5xl md:text-5xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                <span className="block whitespace-normal">
                  Build & Protect Your Wealth
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  Smart Solutions for Long Term Financial Success
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
                Our wealth management services are tailored to help you achieve
                your financial goals through strategic planning and expert
                guidance.
              </p>

              <div className="flex justify-center lg:justify-start">
                <a
                  href="https://iprive.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-lg px-4 sm:px-6 md:px-8 backdrop-blur-sm text-sm sm:text-base [text-shadow:_0_1px_1px_rgba(0,0,0,0.3)]"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-800 py-0 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header with logo instead of text heading */}
          <div className="text-center">
            <div className="flex justify-center -mb-6">
              <img
                src="/footerlogo/iprive logo.png"
                alt="Trust Circle Logo"
                className="h-96 w-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Highlights Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-4 rounded-lg bg-gray-100">
                <Users className="h-8 w-8 text-black mb-3" />
                <p className="text-gray-800 text-center text-sm">
                  Exclusive wealth advisory for ultra-high-net-worth individuals
                  and families
                </p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-gray-100">
                <Globe className="h-8 w-8 text-black mb-3" />
                <p className="text-gray-800 text-center text-sm">
                  Global investment opportunities, private equity, and
                  alternative asset access
                </p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-gray-100">
                <Clock className="h-8 w-8 text-black mb-3" />
                <p className="text-gray-800 text-center text-sm">
                  Legacy planning, global mobility, and bespoke insurance
                  solutions
                </p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-gray-100">
                <Lock className="h-8 w-8 text-black mb-3" />
                <p className="text-gray-800 text-center text-sm">
                  Private, secure, and technology-driven portfolio management
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-black hover:bg-gray-800 text-white rounded-lg px-5 py-2 font-medium">
                Explore Our Private Advisory{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              About Us
            </h2>
            <div className="mb-8 text-center max-w-3xl mx-auto">
              <p className="text-xl font-medium text-gray-800 mb-3">
                IPRIVE Global Private Wealth Management
              </p>
              <p className="text-gray-800 text-sm">
                stands as a beacon for discerning clients who value trust,
                discretion, and expertise. With decades of collective global
                experience, our advisory ecosystem connects wealth to
                meaningful, strategic outcomes — safeguarding legacies and
                growing wealth across generations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-medium text-gray-800 mb-4 text-center">
                Our Philosophy
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center text-center p-3">
                  <Lock className="h-6 w-6 text-black mb-2" />
                  <p className="font-medium text-gray-800 text-sm">
                    Confidential. Connected. Global.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-3">
                  <Users className="h-6 w-6 text-black mb-2" />
                  <p className="font-medium text-gray-800 text-sm">
                    Relationships over transactions
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-3">
                  <Eye className="h-6 w-6 text-black mb-2" />
                  <p className="font-medium text-gray-800 text-sm">
                    Vision-driven wealth creation
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-3">
                  <Target className="h-6 w-6 text-black mb-2" />
                  <p className="font-medium text-gray-800 text-sm">
                    True alignment with your aspirations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <BarChart4 className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Global Investment Advisory
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Access world-class opportunities in private equity, real
                  estate, venture capital, and bespoke structured products
                  tailored to your appetite and vision.
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Landmark className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Private Banking Relationships
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Global multi-currency accounts, credit lines, bespoke lending,
                  and treasury management through world-class institutions.
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Legacy & Succession Planning
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Multi-jurisdictional trusts, private family offices, offshore
                  structures, and family governance strategies.
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Plane className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Global Mobility & Citizenship
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Residency and citizenship-by-investment programs in the
                  world's most prestigious destinations.
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Shield className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    High-Value Insurance Solutions
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Specialist coverage for estate protection, wealth transfer,
                  and family succession.
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Layers className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Alternative Asset Management
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Rare collectibles, art, wine, aviation, and luxury investments
                  curated for capital preservation and growth.
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Wine className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Lifestyle Advisory (through LuxeJoys)
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Access to curated global experiences, private charters, fine
                  estates, and member-only privileges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why IPRIVE Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Why IPRIVE?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <Network className="h-8 w-8 text-black mb-3" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Global Network
                  </h3>
                  <p className="text-gray-800 text-sm">
                    Access to rare opportunities in markets like India, Dubai,
                    Monaco, London, Singapore, and New York.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <Lock className="h-8 w-8 text-black mb-3" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Discretion First
                  </h3>
                  <p className="text-gray-800 text-sm">
                    Your identity, intent, and assets are protected with utmost
                    confidentiality.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-black mb-3" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Legacy Partners
                  </h3>
                  <p className="text-gray-800 text-sm">
                    We work with you, your heirs, and trusted advisors to shape
                    a legacy beyond wealth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Contact Us
            </h2>
            <p className="text-gray-800 mb-6">
              Discreet consultations by appointment only. Global Offices: Dubai
              | India
            </p>
            <Link href="/contact" passHref>
              <Button className="bg-black hover:bg-gray-800 text-white rounded-lg px-5 py-2 font-medium">
                Book a Private Consultation{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
