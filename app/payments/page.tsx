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
      episodeTitle: "Wealth Management Insights",
      content:
        "In this episode, we explore advanced strategies for wealth preservation and growth in uncertain economic times.",
      host: "Ashwin, Founder & CEO",
      guests: "Industry experts",
      duration: "13:54 minutes",
    },
    settlex: {
      id: "1f3X6njJsDyZ1zzo5h2FD6",
      title: "SETTLEX",
      description:
        "Tune in to explore the digital shift in legal and business settlements through intelligent platforms.",
      episodeTitle: "Digital Settlements Uncovered",
      content:
        "Discover how SETTLEX is revolutionizing dispute resolution and contract settlements in the digital age.",
      host: "Ashwin, Founder & CEO",
      guests: "Tech & Legal Experts",
      duration: "5:34 minutes",
    },
    escrowpay: {
      id: "1LQPuJJquEsAWLItl8sbHd",
      title: "ESCROWPAY",
      description:
        "Dive into the future of secure financial transactions through smart escrow systems.",
      episodeTitle: "Secure Payments Demystified",
      content:
        "Learn how ESCROWPAY ensures trust and transparency in high-value transactions with innovative escrow models.",
      host: "Ashwin, Founder & CEO",
      guests: "Finance & Tech Leaders",
      duration: "9:07 minutes",
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section with Video */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/videos/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="w-full max-w-4xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left px-4 sm:px-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
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
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVCO Podcast Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Featured Podcast – {podcasts.revco.title}
            </h2>
            <p className="text-sm text-gray-700 max-w-3xl mx-auto">
              {podcasts.revco.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div
              className="relative w-full h-[450px] rounded-lg overflow-hidden cursor-pointer"
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
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                {podcasts.revco.episodeTitle}
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                {podcasts.revco.content}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <span className="font-medium text-gray-800 mr-2">Host:</span>
                  <span className="text-gray-700">{podcasts.revco.host}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-800 mr-2">
                    Guests:
                  </span>
                  <span className="text-gray-700">{podcasts.revco.guests}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-800 mr-2">
                    Duration:
                  </span>
                  <span className="text-gray-700">
                    {podcasts.revco.duration}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => setOpenPodcast("revco")}
                  className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-sm hover:bg-green-700 transition-colors text-sm"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  Play Podcast
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SETTLEX Podcast Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Featured Podcast – {podcasts.settlex.title}
            </h2>
            <p className="text-sm text-gray-700 max-w-3xl mx-auto">
              {podcasts.settlex.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div
              className="relative w-full h-[450px] rounded-lg overflow-hidden cursor-pointer"
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
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                {podcasts.settlex.episodeTitle}
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                {podcasts.settlex.content}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <span className="font-medium text-gray-800 mr-2">Host:</span>
                  <span className="text-gray-700">{podcasts.settlex.host}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-800 mr-2">
                    Guests:
                  </span>
                  <span className="text-gray-700">
                    {podcasts.settlex.guests}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-800 mr-2">
                    Duration:
                  </span>
                  <span className="text-gray-700">
                    {podcasts.settlex.duration}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => setOpenPodcast("settlex")}
                  className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-sm hover:bg-green-700 transition-colors text-sm"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="..." />
                  </svg>
                  Play Podcast
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESCROWPAY Podcast Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Featured Podcast – {podcasts.escrowpay.title}
            </h2>
            <p className="text-sm text-gray-700 max-w-3xl mx-auto">
              {podcasts.escrowpay.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div
              className="relative w-full h-[450px] rounded-lg overflow-hidden cursor-pointer"
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
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                {podcasts.escrowpay.episodeTitle}
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                {podcasts.escrowpay.content}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <span className="font-medium text-gray-800 mr-2">Host:</span>
                  <span className="text-gray-700">
                    {podcasts.escrowpay.host}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-800 mr-2">
                    Guests:
                  </span>
                  <span className="text-gray-700">
                    {podcasts.escrowpay.guests}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-800 mr-2">
                    Duration:
                  </span>
                  <span className="text-gray-700">
                    {podcasts.escrowpay.duration}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => setOpenPodcast("escrowpay")}
                  className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-sm hover:bg-green-700 transition-colors text-sm"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="..." />
                  </svg>
                  Play Podcast
                </button>
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
