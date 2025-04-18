import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const offices = [
    {
      name: "India Office",
      icon: <MapPin className="w-5 h-5 text-black mt-1" />,
      details: [
        "1617 & 1618, Level 16, Emaar Digital Greens",
        "Sector 61, Gurugram 122002, Haryana",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.073981346786!2d77.0918133150786!3d28.44985898248704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f5f5e5e5e5%3A0x5e5e5e5e5e5e5e5!2sEmaar%20Digital%20Greens%2C%20Sector%2061%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin",
      phone: "+919810336644",
      email: "care@itrustmore.com",
    },
    {
      name: "Dubai Office",
      icon: <MapPin className="w-5 h-5 text-black mt-1" />,
      details: ["Level 41, Emirates Towers", "Sheikh Zayed Road, Dubai"],
      mapUrl:
        "https://maps.google.com/maps?q=Emirates+Towers+Dubai&output=embed",
      email: "care@itrustmore.com",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Video Banner */}
      <section className="relative h-screen md:h-[110vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/videos/contact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-5xl md:text-5xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                Get in Touch with us
              </h1>
              <p className="text-lg md:text-2xl text-white/90 mb-10">
                We'd love to hear from you.
                <br />
                Reach out to our team with any questions or inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-12">
                Get in Touch
              </h2>

              <form className="space-y-8 bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium text-gray-700"
                    >
                      First Name *
                    </label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      required
                      className="rounded-none h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Last Name *
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      required
                      className="rounded-none h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                    className="rounded-none h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    placeholder="+1 (234) 567-890"
                    required
                    className="rounded-none h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Private Wealth Consultation"
                    className="rounded-none h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry..."
                    rows={5}
                    required
                    className="rounded-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-black text-white hover:bg-black hover:text-white rounded-xl px-8 py-6 text-lg transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-bblack/30"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-12">
                Our Offices
              </h2>

              <div className="space-y-16">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-8 rounded-lg shadow-sm"
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      {office.name}
                    </h3>
                    <div className="w-full h-80 mb-6 border border-gray-200 rounded-lg overflow-hidden">
                      <iframe
                        src={office.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${office.name}`}
                      ></iframe>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        {office.icon}
                        <div>
                          {office.details.map((detail, i) => (
                            <p key={i} className="text-lg text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                      {office.phone && (
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-black mt-1" />
                          <p className="text-lg text-gray-600">
                            {office.phone}
                          </p>
                        </div>
                      )}
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-black mt-1" />
                        <p className="text-lg text-gray-600">{office.email}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
            Ready to Connect?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Schedule a private consultation with our wealth experts and discover
            how we can help you build, protect, and enjoy your legacy.
          </p>
          <Button className="bg-black text-white hover:bg-black hover:text-white rounded-xl px-8 py-6 text-lg transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-black/30">
            Request Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
