import {
  CheckCircle,
  Users,
  Globe,
  DollarSign,
  Shield,
  Briefcase,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function TrustCircleSection() {
  return (
    <section className="bg-white text-black py-20 px-6 md:px-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header with improved visual hierarchy */}
        <div className="text-center space-y-6">
          <div className="mb-4">
            <span className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium">
              Exclusive Membership
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Trust Circle</h2>
          <p className="text-xl font-medium">
            Your Network. Your Opportunity. Your Global Advantage.
          </p>
          <p className="text-base max-w-2xl mx-auto text-gray-600">
            In an uncertain world, financial resilience isn't optional — it's
            essential. Trust Circle is your gateway to unlock the untapped
            potential of your personal and professional network, transforming
            connections into rewarding, recurring income.
          </p>
          <div className="mt-8 space-y-4">
            <p className="font-semibold text-lg bg-gray-100 inline-block px-6 py-2 rounded-lg">
              Annual Enrolment: <span className="text-black">₹59,000</span>{" "}
              <span className="text-gray-500 text-sm">+ Taxes</span>
            </p>
            <div>
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition shadow-lg hover:shadow-xl flex items-center mx-auto gap-2">
                Join Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Benefits section with cards */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 border-b pb-4">
              Why Join Trust Circle?
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <strong className="text-lg block mb-1">
                    Your Network, Your Financial Asset
                  </strong>
                  <p className="text-gray-600">
                    Turn introductions into income by connecting businesses and
                    HNIs to global services.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <Globe className="w-6 h-6 text-black" />
                </div>
                <div>
                  <strong className="text-lg block mb-1">
                    Global Reach, Seamless Tech
                  </strong>
                  <p className="text-gray-600">
                    Access premium services in Payments, Wealth, and Luxury —
                    anytime, anywhere.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <DollarSign className="w-6 h-6 text-black" />
                </div>
                <div>
                  <strong className="text-lg block mb-1">
                    Success-Based Earnings
                  </strong>
                  <p className="text-gray-600">
                    Earn unlimited commissions on every successful referral.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <div>
                  <strong className="text-lg block mb-1">
                    Reliable Income in Uncertain Times
                  </strong>
                  <p className="text-gray-600">
                    Build a stable income stream when it's needed most.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <Briefcase className="w-6 h-6 text-black" />
                </div>
                <div>
                  <strong className="text-lg block mb-1">
                    Professional Marketing Support
                  </strong>
                  <p className="text-gray-600">
                    Get brochures, presentations, and digital assets to grow
                    confidently.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 border-b pb-4">
              What's Included in ₹59,000/Year
            </h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                <CheckCircle className="w-6 h-6 text-black" />
                <span className="text-gray-700">
                  Account setup, secure login, and KYC
                </span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                <CheckCircle className="w-6 h-6 text-black" />
                <span className="text-gray-700">
                  Access to Trustmore Knowledge Centre
                </span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                <CheckCircle className="w-6 h-6 text-black" />
                <span className="text-gray-700">
                  Monthly 1-hour strategy calls with advisors
                </span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                <CheckCircle className="w-6 h-6 text-black" />
                <span className="text-gray-700">
                  Social growth and distributor rights
                </span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                <CheckCircle className="w-6 h-6 text-black" />
                <span className="text-gray-700">
                  Priority invitations to events and webinars
                </span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                <CheckCircle className="w-6 h-6 text-black" />
                <span className="text-gray-700">
                  Ready-to-use sales and marketing assets
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Who Should Join/Who Can You Refer section */}
        <div className="grid md:grid-cols-2 gap-8 pt-8">
          <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-black">
            <h3 className="text-xl font-bold mb-4">Who Should Join?</h3>
            <ul className="space-y-2">
              {[
                "Independent financial advisors",
                "Corporate consultants & intermediaries",
                "Real estate & luxury asset brokers",
                "Wealth managers & private bankers",
                "HNWIs with strong networks",
                "Retired professionals & CXOs",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-black" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-black">
            <h3 className="text-xl font-bold mb-4">Who Can You Refer?</h3>
            <ul className="space-y-2">
              {[
                "Business owners & startups",
                "Global investors & developers",
                "High-net-worth families",
                "Venture capitalists & angels",
                "Clients seeking luxury or escrow services",
                "Professionals seeking global wealth",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-black" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center pt-12 bg-gray-100 p-10 rounded-2xl">
          <h3 className="text-3xl font-bold mb-3">
            Turn Connections Into Global Earnings
          </h3>
          <p className="text-lg mb-8 text-gray-700">
            Refer & Earn. Grow Your Network. Build Resilience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Join Trust Circle <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2">
              Learn More <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
