"use client";

import { useState } from "react";

export default function PodcastSection() {
  const spotifyEpisodeId = "1LQPuJJquEsAWLItl8sbHd";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">Featured Podcast</h2>
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
            <h3 className="text-xl font-semibold mb-3">
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
            <div className="mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
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
