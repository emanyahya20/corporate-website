import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ThreePillars() {
  const pillars = [
    {
      id: "digital-fiduciary",
      title: "Digital Fiduciary & Escrows",
      description: "Modernize trust in transactions with our secure digital escrow solutions.",
      image: "/placeholder.svg?height=600&width=800",
      link: "https://escrowpay.co.in",
    },
    {
      id: "wealth-assets",
      title: "Wealth & Assets",
      description: "Build, Preserve, Protect & Grow generational wealth with our expert guidance.",
      image: "/placeholder.svg?height=600&width=800",
      link: "https://iprivewealth.com",
    },
    {
      id: "experiences",
      title: "Bespoke High Value Experiences",
      description: "Exclusive travel & unforgettable moments curated for the discerning elite.",
      image: "/placeholder.svg?height=600&width=800",
      link: "https://luxejoys.com",
    },
  ]

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-20">Our Three Pillars</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.id}>
              <div className="relative h-80 mb-8">
                <Image src={pillar.image || "/placeholder.svg"} alt={pillar.title} fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-lg mb-6">{pillar.description}</p>
              <Link href={pillar.link} target="_blank" rel="noopener noreferrer">
                <Button variant="link" className="text-black p-0 h-auto font-normal hover:text-amber-600">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
