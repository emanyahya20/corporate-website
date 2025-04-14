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
      </div>
    </section>
  );
}
