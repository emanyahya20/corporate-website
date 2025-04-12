"use client";

import { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";

export default function PodcastSection() {
  const [isHovered, setIsHovered] = useState(false);
  const spotifyPodcastLink =
    "https://open.spotify.com/episode/1LQPuJJquEsAWLItl8sbHd";

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Featured Podcast</h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Listen to our latest podcast episode where we discuss wealth
            management strategies and financial insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video Thumbnail with Play Button */}
          <div className="relative w-full h-[500px]">
            {" "}
            {/* Increased height */}
            <Link
              href={spotifyPodcastLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="block relative w-full h-full rounded-lg shadow-lg overflow-hidden"
            >
              {/* Video Thumbnail */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/placeholder.svg?height=1080&width=1920"
              >
                <source src="/podcast.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Dark Overlay */}
              <div
                className="absolute inset-0 bg-black/30 transition-opacity duration-300"
                style={{ opacity: isHovered ? 0.5 : 0.3 }}
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500 flex items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${isHovered ? "transform scale-110 bg-blue-600" : ""}`}
                >
                  <Play
                    className="w-6 h-6 md:w-8 md:h-8 text-white ml-1"
                    fill="white"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Podcast Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Wealth Management Insights
            </h3>
            <p className="text-base text-gray-700 mb-6">
              In this episode, we explore advanced strategies for wealth
              preservation and growth in uncertain economic times. Our experts
              share their insights on market trends, investment opportunities,
              and how to build a resilient financial portfolio.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="font-semibold text-gray-800 mr-2">Host:</span>
                <span className="text-gray-700">Ashwin, Founder & CEO</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold text-gray-800 mr-2">
                  Guests:
                </span>
                <span className="text-gray-700">
                  Industry experts and thought leaders
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold text-gray-800 mr-2">
                  Duration:
                </span>
                <span className="text-gray-700">45 minutes</span>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href={spotifyPodcastLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-sm hover:bg-green-700 transition-colors"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Listen on Spotify
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
