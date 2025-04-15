"use client";

import { useState } from "react";

export default function PodcastSection() {
  const spotifyEpisodeId = "1LQPuJJquEsAWLItl8sbHd";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Featured Podcast
          </h2>
          <p className="text-sm text-gray-700 max-w-3xl mx-auto">
            Listen to our latest podcast episode where we discuss wealth
            management strategies and financial insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Video Thumbnail - Entire video is clickable */}
          <div
            className="relative w-full h-[450px] rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setIsModalOpen(true)}
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
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Podcast Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Wealth Management Insights
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              In this episode, we explore advanced strategies for wealth
              preservation and growth in uncertain economic times. Our experts
              share their insights on market trends, investment opportunities,
              and how to build a resilient financial portfolio.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="font-medium text-gray-800 mr-2">Host:</span>
                <span className="text-gray-700">Ashwin, Founder & CEO</span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-800 mr-2">Guests:</span>
                <span className="text-gray-700">
                  Industry experts and thought leaders
                </span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-800 mr-2">
                  Duration:
                </span>
                <span className="text-gray-700">45 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Spotify Podcast */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="relative bg-white rounded-lg w-full max-w-2xl p-4">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 z-10"
            >
              &times;
            </button>

            {/* Spotify iframe */}
            <iframe
              src={`https://open.spotify.com/embed/episode/${spotifyEpisodeId}`}
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
    </section>
  );
}
