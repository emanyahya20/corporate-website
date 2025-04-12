import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Banknote,
  Sparkles,
  Globe,
  BarChart3,
  Lock,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Video Banner */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="#" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6">
              About Trustmore
            </h1>
            <p className="text-xl text-white/90 mb-10">
              Built on trust. Focused on legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="story" className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a next-generation private wealth & lifestyle powerhouse,
                integrating AI-driven investment strategies, digital escrow
                solutions, and private wealth banking technology to deliver a
                seamless financial and luxury experience for the world's elite.
              </p>
              <p className="text-lg text-gray-600">
                With over 25 years of experience in helping clients with wealth
                management, we offer a secure, tech-driven ecosystem for
                high-net-worth individuals, family offices, and businesses to
                manage, grow, and experience their wealth like never before.
              </p>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/placeholder.svg?height=1200&width=800"
                alt="Trustmore team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-16 text-center">
            Our Story
          </h2>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative h-[600px] group">
              <Image
                src="/placeholder.svg?height=1200&width=800"
                alt="Ashwin - Founder"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-8">
                Built on trust. Focused on legacy.
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                25 years ago, Ashwin started with a vision to transform how
                wealth is managed, protected, and experienced. What began as a
                small advisory firm has evolved into a comprehensive ecosystem
                of wealth services for the world's elite.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Through economic cycles, technological revolutions, and changing
                global landscapes, our commitment to trust, innovation, and
                excellence has remained unwavering.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to pioneer the integration of cutting-edge
                technology with traditional wealth management principles,
                creating a unique platform where vision meets legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section id="brands" className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-12 text-center">
            Explore Our Brands
          </h2>
          <p className="text-xl text-gray-700 mb-16 text-center max-w-3xl mx-auto">
            Each of our brands reflects a pillar of our mission — trust,
            technology, and transformation.
          </p>

          <div className="grid grid-cols-1 gap-16">
            {/* Payments Brand */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Payments – ECROWPAY
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    India's first and largest digital escrow infrastructure
                    provider. Trusted by over 100,000 businesses to create
                    transaction security, reduce risk, and deliver peace of
                    mind.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    REVCO, SettleX, AssureX & Trustiq
                  </p>
                  <Link
                    href="https://escrowpay.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-none">
                      Visit ECROWPAY
                    </Button>
                  </Link>
                </div>
                <div className="relative h-[300px]">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="ECROWPAY"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Wealth Brand */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative h-[300px]">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="IPRIVE"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Global Private Wealth - IPRIVE
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Global private wealth management, tailored for
                    entrepreneurs, families, and institutions. A discreet,
                    structured approach to preserving, protecting, and growing
                    wealth across generations.
                  </p>
                  <Link
                    href="https://iprivewealth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-none">
                      Visit IPRIVE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Experiences Brand */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Experiences - LUXEJOYS
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Crafting unforgettable moments for the world's most
                    discerning travelers — from private island takeovers to
                    red-carpet access at global events. We curate rare,
                    invitation-only experiences that transcend luxury and become
                    legacy.
                  </p>
                  <Link
                    href="https://luxejoys.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-none">
                      Visit LUXEJOYS
                    </Button>
                  </Link>
                </div>
                <div className="relative h-[300px]">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="LUXEJOYS"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* FlyViaJets Brand */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative h-[300px]">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="FlyViaJets"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    FlyViaJets
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Luxury air mobility and curated lifestyle experiences for
                    elite global travellers — with access to VIP bookings, jet
                    charters, and bespoke moments that money alone can't buy.
                  </p>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-none">
                      Visit FlyViaJets
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8 text-center">
            Services
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto text-center">
            Comprehensive solutions for wealth creation, protection, and
            enjoyment
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Private Wealth Management
              </h3>
              <p className="text-lg text-gray-600 mb-6 flex-grow">
                Intelligent investment advisory, structured financial planning,
                and legacy solutions designed for high-net-worth individuals and
                families.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white self-start mt-auto">
                Learn More
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Banknote className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Digital Escrow & Payments
              </h3>
              <p className="text-lg text-gray-600 mb-6 flex-grow">
                Seamless & secure fiduciary transactions powered by advanced
                technology and banking partnerships.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white self-start mt-auto">
                Learn More
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Asset Advisory
              </h3>
              <p className="text-lg text-gray-600 mb-6 flex-grow">
                Tech-driven real estate advisory & alternative investment
                strategies for optimal portfolio diversification.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white self-start mt-auto">
                Learn More
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Luxury Experiences
              </h3>
              <p className="text-lg text-gray-600 mb-6 flex-grow">
                Personalized travel, private jets, VIP events, and elite
                concierge services for the discerning few.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white self-start mt-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8 text-center">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto text-center">
            What sets Trustmore apart in the world of wealth management
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-blue-600">
              <Zap className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Tech-Enabled Wealth
              </h3>
              <p className="text-gray-600">
                Tech driven investment insights and smart financial solutions
                that leverage AI and data analytics for optimal results.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-blue-600">
              <Lock className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Secure Payments
              </h3>
              <p className="text-gray-600">
                Secure, transparent, and seamless digital escrow & transactions
                backed by established banking institutions.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-blue-600">
              <Sparkles className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Luxury Services
              </h3>
              <p className="text-gray-600">
                Personalized VIP experiences based on predictive analytics and
                deep understanding of client preferences.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-blue-600">
              <Globe className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Global Access
              </h3>
              <p className="text-gray-600">
                24/7 secure digital wealth management from anywhere in the world
                through our integrated platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-16 text-center">
            Leadership
          </h2>
          <p className="text-xl text-gray-700 mb-20 max-w-3xl mx-auto text-center">
            Meet the experts leading Trustmore's mission
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <div className="relative h-[400px] mb-8">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Ashwin
              </h3>
              <p className="text-blue-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600">
                Visionary leader with over 25 years of experience in wealth
                management and financial technology.
              </p>
            </div>

            <div>
              <div className="relative h-[400px] mb-8">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="CTO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Leadership Member
              </h3>
              <p className="text-blue-600 mb-4">Chief Technology Officer</p>
              <p className="text-gray-600">
                Leading our technical innovation and security infrastructure
                development.
              </p>
            </div>

            <div>
              <div className="relative h-[400px] mb-8">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="COO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Leadership Member
              </h3>
              <p className="text-blue-600 mb-4">Chief Operations Officer</p>
              <p className="text-gray-600">
                Ensuring operational excellence and client satisfaction across
                all services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Awards */}
      <section id="awards" className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-16 text-center">
            Awards
          </h2>
          <p className="text-xl text-gray-700 mb-20 max-w-3xl mx-auto text-center">
            Recognition of our excellence and innovation
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="relative h-20 mb-6">
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt="Award 1"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Excellence in Wealth Management
              </h3>
            </div>

            <div className="text-center">
              <div className="relative h-20 mb-6">
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt="Award 2"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Innovation in Financial Technology
              </h3>
            </div>

            <div className="text-center">
              <div className="relative h-20 mb-6">
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt="Award 3"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Best Luxury Experience Provider
              </h3>
            </div>

            <div className="text-center">
              <div className="relative h-20 mb-6">
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt="Award 4"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Top Private Wealth Advisory
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8">
            Ready to Begin Your Wealth Journey?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Schedule a private consultation with our wealth experts and discover
            how we can help you build, protect, and enjoy your legacy.
          </p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-none px-8 py-6 text-lg">
            Request Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
