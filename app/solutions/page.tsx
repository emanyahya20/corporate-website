import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      id: "trust-management",
      title: "Trust Management",
      description:
        "Our trust management solutions provide secure and efficient ways to manage assets and transactions. With advanced encryption and multi-layer security protocols, we ensure that your trust operations are protected against unauthorized access and fraud.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/solutions/trust-management",
      reverse: false,
    },
    {
      id: "digital-certification",
      title: "Digital Certification",
      description:
        "Secure digital certificates to authenticate identities and protect sensitive information. Our digital certification services comply with international standards and provide a reliable way to verify identities in the digital space.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/solutions/digital-certification",
      reverse: true,
    },
    {
      id: "secure-transactions",
      title: "Secure Transactions",
      description:
        "End-to-end encrypted transaction services for businesses and individuals. Our secure transaction platform ensures that all your financial and data exchanges are protected with the highest level of encryption and security protocols.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/solutions/secure-transactions",
      reverse: false,
    },
    {
      id: "compliance",
      title: "Compliance Solutions",
      description:
        "Stay compliant with regulatory requirements with our comprehensive compliance solutions. We help businesses navigate complex regulatory landscapes and ensure compliance with industry standards and government regulations.",
      image: "/placeholder.svg?height=600&width=800",
      link: "/solutions/compliance",
      reverse: true,
    },
  ]

  const features = [
    {
      id: "security",
      title: "Advanced Security",
      description: "Multi-layer security protocols to protect your data and transactions.",
      icon: "Shield",
    },
    {
      id: "encryption",
      title: "End-to-End Encryption",
      description: "All data is encrypted from source to destination for maximum protection.",
      icon: "Lock",
    },
    {
      id: "compliance",
      title: "Compliance Ready",
      description: "Built to meet international regulatory standards and requirements.",
      icon: "FileCheck",
    },
    {
      id: "support",
      title: "Global Support",
      description: "24/7 support from our team of experts located around the world.",
      icon: "Globe",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-black py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Solutions</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Comprehensive trust services designed to meet your specific needs and challenges
          </p>
        </div>
      </section>

      {/* Featured Solutions Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Featured Solutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Top row - two equal cards */}
            {solutions.slice(0, 2).map((solution) => (
              <Link href={solution.link} key={solution.id} className="group relative block overflow-hidden">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-white/80 mb-4 max-w-md opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {solution.description.split(".")[0] + "."}
                    </p>
                    <div className="flex items-center text-amber-400 font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
            {/* Bottom row - two cards with different widths */}
            {solutions.slice(2, 4).map((solution, index) => (
              <Link
                href={solution.link}
                key={solution.id}
                className={`group relative block overflow-hidden ${index === 0 ? "md:col-span-7" : "md:col-span-5"}`}
              >
                <div className="relative h-[300px] w-full">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-white/80 mb-4 max-w-md opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {solution.description.split(".")[0] + "."}
                    </p>
                    <div className="flex items-center text-amber-400 font-medium">
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

      {/* Solutions Detail */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`grid md:grid-cols-2 gap-20 items-center ${index !== solutions.length - 1 ? "mb-32" : ""}`}
            >
              <div className={solution.reverse ? "order-2" : "order-1"}>
                <h2 className="text-4xl font-bold mb-8">{solution.title}</h2>
                <p className="text-lg mb-8">{solution.description}</p>
                <Link href={solution.link}>
                  <Button className="bg-black text-white hover:bg-black/90 rounded-none">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className={`relative h-[500px] ${solution.reverse ? "order-1" : "order-2"}`}>
                <Image src={solution.image || "/placeholder.svg"} alt={solution.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All our solutions come with these essential features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to secure your business?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Contact our team today to learn how our trust solutions can help your business grow securely.
          </p>
          <Button className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 text-lg">
            Request a Demo
          </Button>
        </div>
      </section>
    </div>
  )
}
