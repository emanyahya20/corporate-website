import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  const offices = [
    {
      name: "Dubai Office",
      icon: <MapPin className="w-5 h-5 text-blue-600 mt-1" />,
      details: ["Level 41, Emirates Towers", "Sheikh Zayed Road, Dubai"],
      mapUrl: "https://maps.google.com/maps?q=Emirates+Towers+Dubai&output=embed",
      phone: "‪+919810336644‬",
      email: "care@itrustmore.com",
    },
    {
      name: "Mumbai Office",
      icon: <MapPin className="w-5 h-5 text-blue-600 mt-1" />,
      details: ["One World Center, Lower Parel", "Mumbai, India"],
      mapUrl: "https://maps.google.com/maps?q=One+World+Center+Mumbai&output=embed",
      phone: "‪+919810336644‬",
      email: "care@itrustmore.com",
    },
  ]

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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 mb-10">
              We'd love to hear from you. Reach out to our team with any questions or inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-12">Get in Touch</h2>

              <form className="space-y-8 bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="John" required className="rounded-none h-12" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Doe" required className="rounded-none h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
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
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <Input id="phone" placeholder="+1 (234) 567-890" className="rounded-none h-12" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Private Wealth Consultation"
                    required
                    className="rounded-none h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
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
                  className="bg-blue-600 text-white hover:bg-blue-700 rounded-none px-8 py-6 h-auto"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-12">Our Offices</h2>

              <div className="space-y-16">
                {offices.map((office, index) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">{office.name}</h3>
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
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-blue-600 mt-1" />
                        <p className="text-lg text-gray-600">{office.phone}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-blue-600 mt-1" />
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
      <section className="py-32 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Ready to Connect?</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Schedule a private consultation with our wealth experts and discover how we can help you build, protect, and
            enjoy your legacy.
          </p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-none px-8 py-6 text-lg">
            Request Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
