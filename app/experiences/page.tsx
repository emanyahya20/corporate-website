import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ExperiencesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center">
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
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-20">
          <div className="max-w-3xl">
            <div className="relative h-16 w-40 mb-8">
              <Image
                src="/placeholder.svg?height=60&width=200"
                alt="LuxeJoys Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Bespoke High Value Experiences
            </h1>
            <p className="text-xl text-white/90 mb-10">
              Exclusive travel & unforgettable moments curated for the
              discerning elite.
            </p>
            <Button className="bg-white text-gray-800 hover:bg-white/90 rounded-none px-8 py-6 text-lg">
              Plan Your Experience
            </Button>
          </div>
        </div>
      </section>

      {/* Private Aviation */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Private Aviation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience the ultimate in luxury travel with our exclusive
                private jet services. From on-demand charters to bespoke flight
                experiences, we offer unparalleled comfort, privacy, and
                convenience.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-600">
                    Global access to premium aircraft
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-600">
                    Personalized in-flight experiences
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-600">
                    Seamless ground transportation
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-600">24/7 concierge support</span>
                </li>
              </ul>
              <Link
                href="https://luxejoys.com/aviation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="link"
                  className="text-blue-600 p-0 h-auto font-normal hover:text-blue-700"
                >
                  Explore Private Aviation{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/placeholder.svg?height=1200&width=800"
                alt="Private Jet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Yachting */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative h-[600px]">
              <Image
                src="/placeholder.svg?height=1200&width=800"
                alt="Luxury Yacht"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Luxury Yachting
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Set sail on the world's most prestigious waters with our curated
                yacht charters. From intimate cruises to grand voyages,
                experience the epitome of maritime luxury.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-600">
                    Access to exclusive yacht fleets
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-600">Customized itineraries</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-600">
                    Gourmet dining experiences
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-600">
                    Professional crew and staff
                  </span>
                </li>
              </ul>
              <Link
                href="https://luxejoys.com/yachting"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="link"
                  className="text-blue-600 p-0 h-auto font-normal hover:text-blue-700"
                >
                  Discover Yacht Charters{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Celebrity Experiences */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
            Celebrity Experiences & VIP Events
          </h2>
          <p className="text-xl text-gray-700 mb-20 max-w-3xl">
            Gain exclusive access to the world's most coveted events and
            personalized experiences with global icons
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <div className="relative h-80 mb-8">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Private Concert"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Private Concerts
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Intimate performances by world-renowned artists in exclusive
                venues.
              </p>
              <Link
                href="https://luxejoys.com/concerts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="link"
                  className="text-blue-600 p-0 h-auto font-normal hover:text-blue-700"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div>
              <div className="relative h-80 mb-8">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Celebrity Meet & Greet"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Celebrity Meet & Greet
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Personal interactions with celebrities, athletes, and industry
                leaders.
              </p>
              <Link
                href="https://luxejoys.com/celebrity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="link"
                  className="text-blue-600 p-0 h-auto font-normal hover:text-blue-700"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div>
              <div className="relative h-80 mb-8">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="VIP Event Access"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                VIP Event Access
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Front-row seats and backstage passes to the world's most
                exclusive events.
              </p>
              <Link
                href="https://luxejoys.com/events"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="link"
                  className="text-blue-600 p-0 h-auto font-normal hover:text-blue-700"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
