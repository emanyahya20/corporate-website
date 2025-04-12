import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TrustCircle() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">TRUST CIRCLE – Affiliate Program</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our exclusive network and leverage your connections to create passive income from wealth services.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">The Philosophy of Networking</h3>
            <p className="text-lg text-gray-600 mb-6">
              Trust Circle is built on the power of meaningful connections. By leveraging your network and introducing
              high-value individuals to our premium wealth services, you can create a sustainable passive income stream
              while helping others achieve their financial goals.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our soft-sell approach focuses on authentic relationships and genuine value. As a Trust Circle member,
              you'll have access to exclusive resources, training, and support to help you effectively communicate the
              benefits of our services to your network.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">Benefits</h3>
            <ul className="list-disc pl-6 text-lg text-gray-600 mb-8">
              <li className="mb-2">Generous commission structure on all referred services</li>
              <li className="mb-2">Exclusive access to wealth management insights</li>
              <li className="mb-2">Priority invitations to high-profile networking events</li>
              <li className="mb-2">Dedicated relationship manager</li>
              <li>Comprehensive marketing and presentation materials</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/trust-circle">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">Read More</Button>
              </Link>
              <Link href="/trust-circle/login">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8">
                  Login to Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
