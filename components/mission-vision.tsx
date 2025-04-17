"use client";

import { useState } from "react";

export default function MissionVision() {
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
              Our Mission
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
          </div>

          {/* Vision */}
          <div className="relative pb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              Our Vision
            </h2>
            <div className="overflow-hidden">
              <div>
                <p className="text-base text-gray-700 mb-3">
                  We envision a future where financial trust is universal, a
                  world where wealth isn't just built, but preserved and passed
                  on with clarity, dignity, and ease. We aim to be the world's
                  most trusted partner for wealth, payments, and purpose-driven
                  capital.
                </p>
                <p className="text-base text-gray-700">
                  At Trustmore, we're not just transforming transactions. We're
                  building a relationship-first ecosystem, one where your values
                  shape your value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
