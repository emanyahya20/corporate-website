"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MissionVision() {
  const [hoverVision, setHoverVision] = useState(false);

  return (
    <section className="relative w-full py-20 flex items-center justify-center overflow-hidden">
      {/* Background image - fixed, no movement */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/background.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* White overlay card */}
      <div className="relative z-10 bg-white max-w-3xl w-full mx-auto p-12 shadow-lg">
        <div className="text-center space-y-10">
          {/* Mission */}
          <div className="relative pb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              Our mission
            </h2>
            <div className="overflow-hidden">
              <p className="text-base text-gray-700">
                At Trustmore, our mission is to reshape the human relationship
                with money by building intelligent, secure, and trusted
                financial infrastructure. We enable families, businesses, and
                institutions to manage wealth, transact seamlessly, and protect
                their legacy with absolute confidence.
              </p>
            </div>
            {/* No hover arrow for Mission */}
          </div>

          {/* Vision */}
          <div
            className="relative pb-8"
            onMouseEnter={() => setHoverVision(true)}
            onMouseLeave={() => setHoverVision(false)}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              Our vision
            </h2>
            <div className="overflow-hidden">
              {hoverVision ? (
                <div>
                  <p className="text-base text-gray-700 mb-3">
                    We envision a future where financial trust is universal, a
                    world where wealth isn't just built, but preserved and
                    passed on with clarity, dignity, and ease. We aim to be the
                    world's most trusted partner for wealth, payments, and
                    purpose-driven capital.
                  </p>
                  <p className="text-base text-gray-700">
                    At Trustmore, we're not just transforming transactions.
                    We're building a relationship-first ecosystem, one where
                    your values shape your value.
                  </p>
                </div>
              ) : (
                <p className="text-base text-gray-700">
                  We envision a future where financial trust is universal, a
                  world where wealth isn't just built, but preserved and passed
                  on with clarity, dignity, and ease.
                </p>
              )}
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 bg-white transition-transform duration-300 ${
                  hoverVision ? "rotate-180" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
