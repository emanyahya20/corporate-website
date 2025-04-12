import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface NewsItem {
  id: string
  title: string
  description: string
  image: string
  link: string
  size?: "large" | "medium" | "small"
}

export default function NewsGrid() {
  const newsItems: NewsItem[] = [
    {
      id: "digital-escrow",
      title: "Digital Fiduciary & Escrow Services",
      description: "Modernize trust in transactions with our secure digital escrow solutions.",
      image: "/placeholder.svg?height=800&width=1200",
      link: "https://escrowpay.co.in",
      size: "large",
    },
    {
      id: "wealth-management",
      title: "Private Wealth Management",
      description: "Build, Preserve, Protect & Grow generational wealth with our expert guidance.",
      image: "/placeholder.svg?height=800&width=1200",
      link: "https://iprivewealth.com",
      size: "large",
    },
    {
      id: "luxury-experiences",
      title: "Bespoke High Value Experiences",
      description: "Exclusive travel & unforgettable moments curated for the discerning elite.",
      image: "/placeholder.svg?height=800&width=1200",
      link: "https://luxejoys.com",
      size: "medium",
    },
    {
      id: "trust-circle",
      title: "Trust Circle Affiliate Program",
      description: "Join our exclusive network and leverage your connections.",
      image: "/placeholder.svg?height=800&width=1200",
      link: "/trust-circle",
      size: "medium",
    },
    {
      id: "global-presence",
      title: "Global Offices in India & UAE",
      description: "Serving elite clients across continents with personalized service.",
      image: "/placeholder.svg?height=800&width=1200",
      link: "/contact",
      size: "medium",
    },
  ]

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Top row - two equal cards */}
          {newsItems.slice(0, 2).map((item) => (
            <Link href={item.link} key={item.id} className="group relative block overflow-hidden">
              <div className="relative h-[400px] w-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 mb-4 max-w-md opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {item.description}
                  </p>
                  <div className="flex items-center text-blue-300 font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
          {/* Bottom row - three cards with different widths */}
          {newsItems.slice(2, 5).map((item, index) => (
            <Link
              href={item.link}
              key={item.id}
              className={`group relative block overflow-hidden ${
                index === 0 ? "md:col-span-4" : index === 1 ? "md:col-span-4" : "md:col-span-4"
              }`}
            >
              <div className="relative h-[300px] w-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 mb-4 max-w-md opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {item.description}
                  </p>
                  <div className="flex items-center text-blue-300 font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
