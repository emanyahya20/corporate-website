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
  Calendar,
  Star,
  Sailboat,
  Users2,
} from "lucide-react";
import Link from "next/link"; // Add this import

export default function LuxejoysPage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero video section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/videos/luxejoy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="w-full max-w-4xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <h1 className="text-3xl sm:text-5xl md:text-5xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                <span className="block whitespace-normal">
                  Welcome to LuxeJoy
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  Your Wealth, Privately Empowered.
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
                Crafting bespoke, future-focused wealth solutions for global
                visionaries.
              </p>

              <div className="flex justify-center lg:justify-start">
                <a
                  href="https://luxejoys.com/lander"
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

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              About LUXEJOYS
            </h2>
            <div className="text-center mb-8">
              <p className="text-gray-800 mb-6 max-w-4xl mx-auto">
                LUXEJOYS is the exclusive luxury lifestyle and experiences
                division of Trustmore Group, thoughtfully designed for
                discerning individuals, families, and corporate clients seeking
                the extraordinary. Positioned as a gateway to the world's most
                coveted experiences, LUXEJOYS blends privacy, privilege, and
                perfection in every offering. Our services redefine what it
                means to live well, travel beautifully, and celebrate life's
                most memorable moments with unparalleled style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Now matching the Our Services section from Wealth Management */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Our Exclusive Service Portfolio
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Plane className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Via Jets - Private Jet Charters
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Take to the skies with absolute discretion through our global
                  private jet charter services. Whether it's business or
                  leisure, Via Jets offers on-demand access to a world-class
                  fleet.
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Exclusive Invitations & Events
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Join an elite circle at invitation-only gatherings, luxury
                  product launches, global summits, fashion weeks, charity
                  galas, and other high-society affairs.
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Building className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Luxury Getaways & Resorts
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Indulge in curated escapes to the world's finest destinations,
                  where privacy meets luxury. From secluded island retreats to
                  iconic urban penthouses.
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Celebrity Travel & Experiences
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Gain unprecedented access to celebrity-hosted events,
                  backstage passes, private meet-and-greets, and experiences
                  with globally recognized personalities.
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <Sailboat className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Bespoke Yacht Charters
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Set sail on crystal-clear waters aboard private yachts and
                  superyachts with fully crewed charters for Mediterranean
                  summers, Dubai marinas, or the Maldives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Matching the Why IPRIVE design */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Why LUXEJOYS?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <Globe className="h-8 w-8 text-black mb-3" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Global Reach, Local Touch
                  </h3>
                  <p className="text-gray-800 text-sm">
                    Direct access to exclusive partners and providers in over 30
                    countries, backed by the credibility and trust of Trustmore
                    Group.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <Lock className="h-8 w-8 text-black mb-3" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Discreet, Private, and Tailored
                  </h3>
                  <p className="text-gray-800 text-sm">
                    Every experience is crafted around you — your tastes, your
                    privacy, your world.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-black mb-3" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Trusted by High Net-Worth Families
                  </h3>
                  <p className="text-gray-800 text-sm">
                    Our clientele includes celebrated entrepreneurs, investors
                    and celebrities who rely on LUXEJOYS for life's most
                    significant occasions.
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
              | London | Monaco
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
