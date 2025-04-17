"use client";

import { useState, useEffect } from "react";

export default function PodcastSection() {
  const spotifyEpisodeId = "7wbGdOOrZZKSlKHmAEVAN5";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Featured Podcast
          </h2>
          <p className="text-sm text-gray-700 max-w-3xl mx-auto">
            Listen to our latest podcast episode where we discuss strategies and
            financial insights.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Video Thumbnail - Centered and clickable with original dimensions */}
          <div
            className="relative w-full h-[450px] rounded-lg overflow-hidden cursor-pointer md:w-1/2"
            onClick={() => setIsModalOpen(true)}
          >
            {/* Loading indicator shown until video loads */}
            {!videoLoaded && !videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-500 border-t-blue-500 mb-2"></div>
                  <p className="text-gray-600">Loading video...</p>
                </div>
              </div>
            )}

            {/* Fallback when video fails to load */}
            {videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center p-4">
                  <svg
                    className="w-12 h-12 mx-auto text-gray-500 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <p className="text-gray-700">Tap to listen to the podcast</p>
                </div>
              </div>
            )}

            <video
              className="w-full h-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
              poster="/placeholder.svg?height=1080&width=1920"
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => setVideoError(true)}
            >
              {/* Provide multiple source formats for better compatibility */}
              <source src="/videos/podcast1.mp4" type="video/mp4" />
              <source src="/videos/podcast1.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
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
