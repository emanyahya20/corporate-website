import { Button } from "@/components/ui/button";
import MissionVision from "@/components/mission-vision";
import CompanyProfile from "@/components/company-profile";
import PodcastSection from "@/components/podcast-section";
import Link from "next/link"; // Ensure this is imported at the top

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
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight">
              Trusted Private Wealth Management
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10">
              Where Vision Meets Legacy
            </p>
            <Button className="bg-white text-gray-800 hover:bg-white/90 rounded-none px-8 py-6 text-lg">
              Discover Our Services
            </Button>
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
              className="text-lg text-blue-600 hover:text-blue-800"
            >
              Mission & Vision
            </a>
            <a
              href="#company-profile"
              className="text-lg text-blue-600 hover:text-blue-800"
            >
              Company Profile
            </a>
            <a
              href="#podcast-section"
              className="text-lg text-blue-600 hover:text-blue-800"
            >
              Podcast Section
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

      {/* Podcast Section */}
      <section id="podcast-section">
        <PodcastSection />
      </section>

      {/* Awards Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">
          {" "}
          Setting The Benchmark With Industry Awards
        </h2>

        <div className="flex justify-center flex-wrap items-center gap-2">
          {/* Award Logo 1 */}
          <div className="h-52 w-auto">
            <img
              src="/logo1.png"
              alt="Award 1"
              className="h-full w-auto object-contain max-w-[400px]"
            />
          </div>

          {/* Award Logo 2 */}
          <div className="h-52 w-auto">
            <img
              src="logo2.png"
              alt="Award 2"
              className="h-full w-auto object-contain max-w-[400px]"
            />
          </div>

          {/* Award Logo 3 */}
          <div className="h-52 w-auto">
            <img
              src="logo3.png"
              alt="Award 3"
              className="h-full w-auto object-contain max-w-[400px]"
            />
          </div>

          {/* Award Logo 4 */}
          <div className="h-52 w-auto">
            <img
              src="/logo4.png"
              alt="Award 4"
              className="h-full w-auto object-contain max-w-[400px]"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-32 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8">
            Ready to Elevate Your Wealth Journey?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Schedule a private consultation with our wealth experts and discover
            how we can help you build, protect, and enjoy your legacy.
          </p>
          <Link href="/contact" passHref>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8 py-6 text-lg">
              Request Private Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
