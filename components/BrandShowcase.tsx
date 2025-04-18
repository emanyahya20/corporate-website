import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BrandShowcase() {
  const brands = [
    {
      id: "payments",
      title: "Digital Payments",
      description:
        "Escrowpay is India's first and largest digital escrow services platform, built to enable secure, transparent, and efficient transactions for businesses of all sizes.We digitise trust by holding funds safely until both parties meet their agreed conditions. Our platform streamlines complex transactions from equity deals to vendor payments and ESOP liquidity events. With API integrations and a seamless user interface, Escrowpay integrates easily into any business workflow. Trusted by over 100,000+ businesses, we help reduce risk, cost, and disputes in business dealings. Escrowpay is where Digital Trust Meets Business Efficiency.",
      image: "/escrowpay1.png",
      link: "https://escrowpay.co.in",
      imageOnLeft: true,
      isExternal: true,
    },
    {
      id: "wealth",
      title: "Digital Wealth Management",
      description:
        "IPRIVE is a global private wealth advisory platform, dedicated to serving high-net-worth individuals, families, and corporations with discretion and expertise. We curate exclusive investment opportunities across global real estate, private equity, alternative assets, and bespoke financial instruments. Our services extend to high-value insurance solutions, family office structuring, and global mobility through residency and citizenship programs. Every IPRIVE relationship is built on absolute trust, confidentiality, and tailored financial strategies. With a presence in India and Dubai, we bridge wealth, opportunity, and legacy planning across jurisdictions. IPRIVE, Where Global Wealth Meets Timeless Vision.",
      image: "/iprive1.png",
      imageOnLeft: false,
      link: "/wealth-management",
      isExternal: false,
    },
    {
      id: "experiences",
      title: "Luxury Experiences",
      description:
        "LuxeJoys curates exclusive luxury experiences for the world's most discerning clients. From private jet charters to bespoke vacation retreats, we specialize in creating unparalleled journeys. Our offerings extend to access to elite events, tailored concierge services, and unforgettable adventures. With a focus on exceeding expectations, we turn dreams into realities for high-net-worth individuals. Operating globally, LuxeJoys connects you to the finest luxury experiences wherever you are. LuxeJoys, Luxury Redefined. Experiences Elevated.",
      image: "/luxejoy1.png",
      imageOnLeft: true,
      link: "/luxejoy",
      isExternal: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* New title */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-16">
          Explore Our Brands
        </h2>

        <div className="space-y-16">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-8 md:items-center"
            >
              {/* For mobile: Content always first, image always second */}
              {/* For desktop: Use the imageOnLeft prop to determine order */}
              <div
                className={`${
                  brand.imageOnLeft ? "md:order-1" : "md:order-2"
                } order-2`}
              >
                <div className="relative h-[350px] w-full">
                  <Image
                    src={brand.image || "/placeholder.svg"}
                    alt={brand.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div
                className={`${
                  brand.imageOnLeft ? "md:order-2" : "md:order-1"
                } order-1`}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {brand.title}
                </h3>
                <p className="text-base text-gray-700 mb-6">
                  {brand.description}
                </p>
                <Link
                  href={brand.link}
                  target={brand.isExternal ? "_blank" : "_self"}
                  rel={brand.isExternal ? "noopener noreferrer" : ""}
                  className="inline-flex items-center bg-black text-white px-4 py-2 rounded-sm transition-all duration-200 hover:bg-white hover:text-black hover:border hover:border-black hover:shadow-lg hover:scale-105"
                >
                  <span>More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
