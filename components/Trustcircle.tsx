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
import Link from "next/link"; // Add this import

export default function TrustCircleSection() {
  return (
    <section className="bg-white text-gray-800 py-6 px-6 md:px-24">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Header with logo instead of text heading */}
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src="/footerlogo/tclogo.png"
              alt="Trust Circle Logo"
              className="h-96 w-auto mb-0"
            />
          </div>
          <div className="-mt-16">
            <p className="text-xl font-medium">
              Your Network. Your Opportunity. Your Global Advantage.
            </p>
            <p className="text-base max-w-2xl mx-auto text-gray-600">
              In an uncertain world, financial resilience isn't optional — it's
              essential. Trust Circle is your gateway to unlock the untapped
              potential of your personal and professional network, transforming
              connections into rewarding, recurring income.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <Link href="/trustcircle" passHref>
                  <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-black hover:text-white transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-black/30 shadow-lg hover:shadow-xl flex items-center mx-auto gap-2">
                    Join Now <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
