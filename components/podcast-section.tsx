"use client";

export default function PodcastSection() {
  const spotifyPodcastLink =
    "https://open.spotify.com/episode/1LQPuJJquEsAWLItl8sbHd";

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
          {/* Video Thumbnail with Link */}
          <div className="relative w-full h-[450px]">
            <a
              href={spotifyPodcastLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-full rounded-lg shadow-md overflow-hidden"
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/placeholder.svg?height=1080&width=1920"
              >
                <source src="/podcast1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-opacity duration-300" />
            </a>
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
              <a
                href={spotifyPodcastLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-sm hover:bg-green-700 transition-colors text-sm"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Listen on Spotify
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
