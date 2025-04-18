"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PaymentPage() {
  // State for each podcast modal
  const [openPodcast, setOpenPodcast] = useState<string | null>(null);

  const podcasts = {
    revco: {
      id: "4Kqf2rBnEUNquRqAvGJxIG",
      title: "REVCO",
      description:
        "Listen to our latest podcast episode where we discuss wealth management strategies and financial insights.",
    },
    settlex: {
      id: "1f3X6njJsDyZ1zzo5h2FD6",
      title: "SETTLEX",
      description:
        "Tune in to explore the digital shift in legal and business settlements through intelligent platforms.",
    },
    escrowpay: {
      id: "1LQPuJJquEsAWLItl8sbHd",
      title: "ESCROWPAY",
      description:
        "Dive into the future of secure financial transactions through smart escrow systems.",
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section with Video */}
      <section className="relative h-screen md:h-[110vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/payments.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="w-full max-w-4xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                <span className="block whitespace-normal">
                  Welcome to Escrowpay
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  India's First & Largest Digital Escrow <br />
                  Technology Services Provider
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
                We pioneered and built a transformative change in the way
                businesses manage and secure their collection transactions.
              </p>

              <div className="flex justify-center lg:justify-start">
                <a
                  href="https://escrowpay.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-lg px-4 sm:px-6 md:px-8 backdrop-blur-sm text-sm sm:text-base [text-shadow:_0_1px_1px_rgba(0,0,0,0.3)]"
                  >
                    Visit Escrowpay <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Podcast Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl text-gray-800 font-semibold mb-2">
              Featured Podcasts
            </h2>
            <p className="text-sm text-gray-700 max-w-3xl mx-auto">
              Listen to our podcast episodes where we discuss financial insights
              and strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ESCROWPAY */}
            <div
              className="relative w-full h-[350px] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setOpenPodcast("escrowpay")}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/placeholder.svg?height=1080&width=1920"
              >
                <source src="/videos/podcast1.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-4 left-4 right-4 z-20 text-black">
                <h3 className="text-xl font-semibold mb-1">
                  {podcasts.escrowpay.title}
                </h3>
              </div>
            </div>

            {/* REVCO */}
            <div
              className="relative w-full h-[350px] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setOpenPodcast("revco")}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/placeholder.svg?height=1080&width=1920"
              >
                <source src="/videos/podcast1.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-4 left-4 right-4 z-20 text-black">
                <h3 className="text-xl font-semibold mb-1">
                  {podcasts.revco.title}
                </h3>
              </div>
            </div>

            {/* SETTLEX */}
            <div
              className="relative w-full h-[350px] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setOpenPodcast("settlex")}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/placeholder.svg?height=1080&width=1920"
              >
                <source src="/videos/podcast1.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-4 left-4 right-4 z-20 text-black">
                <h3 className="text-xl font-semibold mb-1">
                  {podcasts.settlex.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Podcast Player */}
      {openPodcast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="relative bg-white rounded-lg w-full max-w-2xl p-4">
            {/* Close button */}
            <button
              onClick={() => setOpenPodcast(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 z-10"
            >
              &times;
            </button>

            {/* Spotify iframe */}
            <iframe
              src={`https://open.spotify.com/embed/episode/${podcasts[openPodcast].id}`}
              width="100%"
              height="232"
              frameBorder="0"
              allow="encrypted-media"
              className="rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
