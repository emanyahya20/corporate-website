import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function CompanyProfile() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Company Profile
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-base text-gray-700 mb-4">
            Trustmore traces its roots back to a vision established in 1998 to
            create trust between wealth managers and clients. Over the years,
            Trustmore has grown to become one of the world's leading private
            wealth management platforms.
          </p>
          <p className="text-base text-gray-700">
            Through technological innovation, we support our partners in
            providing inclusive, convenient digital life and digital financial
            services to consumers and SMEs. In addition, we have been
            introducing new technologies and products to support the digital
            transformation of industries and facilitate collaboration. Working
            together with global partners, we enable merchants and consumers to
            make and receive payments and build wealth around the world.
          </p>
        </div>
      </div>
    </section>
  );
}

export function BrandShowcase() {
  const brands = [
    {
      id: "payments",
      title: "Digital Payment",
      description:
        "We are committed to the creation and development of a digital payment open platform. We developed Quick Pay, barcode payment, smile-to-pay and QR code payment solutions through computers, mobile phones, and IoT smart devices to serve the digital payment needs across a vast array of use cases, including commercial operations, public services, and transportation.",
      image: "/escrowpay1.png",
      link: "https://escrowpay.co.in",
      imageOnLeft: true,
    },
    {
      id: "wealth",
      title: "Digital Wealth Management",
      description:
        "We are committed to facilitating the digital transformation of wealth management services, assisting businesses in reducing costs, enhancing efficiency and growing sustainably. Through introducing digital products, application programming interfaces (APIs) and platform resources, Trustmore collaborates with financial institutions to support millions of clients worldwide.",
      image: "/iprive1.png",
      link: "https://iprivewealth.com",
      imageOnLeft: false,
    },
    {
      id: "experiences",
      title: "Luxury Experiences",
      description:
        "We are committed to providing exclusive travel and unforgettable moments curated for the discerning elite. From private island takeovers to red-carpet access at global events, we curate rare, invitation-only experiences that transcend luxury and become legacy.",
      image: "/luxejoy1.png",
      link: "https://luxejoys.com",
      imageOnLeft: true,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <h2 className="text-3xl font-semibold text-center mb-16">Our Brands</h2>

        <div className="space-y-16">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div className={`${brand.imageOnLeft ? "order-1" : "order-2"}`}>
                <div className="relative h-[350px] w-full">
                  <Zoom>
                    <Image
                      src={brand.image || "/placeholder.svg"}
                      alt={brand.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </Zoom>
                </div>
              </div>

              {/* Content */}
              <div className={`${brand.imageOnLeft ? "order-2" : "order-1"}`}>
                <h3 className="text-2xl font-semibold mb-4">{brand.title}</h3>
                <p className="text-base text-gray-700 mb-6">
                  {brand.description}
                </p>
                <Link
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition-colors"
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
