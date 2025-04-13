import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Video Banner */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/videos/aboutus.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
              About Trustmore
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-10">
              Built on trust. Focused on legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation for Leadership Sections */}
      <section className="bg-white py-6">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <div className="flex justify-center space-x-6 flex-wrap">
            <a
              href="#leadership"
              className="text-lg text-grey hover:text-black"
            >
              Leadership
            </a>
            <a
              href="#board-members"
              className="text-lg text-grey hover:text-black"
            >
              Board Members
            </a>
            <a
              href="#executive-team"
              className="text-lg text-grey hover:text-black"
            >
              Executive Team
            </a>
            <a
              href="#advisory-council"
              className="text-lg text-grey hover:text-black"
            >
              Advisory Council
            </a>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-16 text-center">
            Leadership
          </h2>

          {/* Ashwin Section */}
          <div className="flex flex-col md:flex-row items-start gap-12 mb-24">
            <div className="w-full md:w-[40%]">
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/ashwinc.jpg"
                  alt="Ashwin - Founder & CEO"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Ashwin Chawwla
              </h3>
              <p className="text-blue-600 text-xl mb-6">Founder & CEO</p>
              <p className="text-gray-600 text-lg mb-4">
                Ashwin Chawwla is the visionary Chairman and Founder of
                Trustmore Group, a trusted name in private wealth, payments, and
                bespoke experiences with a proud legacy spanning over 25 years.
              </p>
              <p className="text-gray-600 text-lg">
                Starting his journey in 2001 with investment advisory services
                for individuals and businesses, Ashwin built Trustmore on an
                enduring foundation of trust, transparency, and
                relationship-driven values. His vision is to reshape the private
                wealth space by integrating innovation, reliability, and
                integrity ensuring Trustmore’s clients not only grow their
                wealth but protect their legacies for future generations. Ashwin
                continues to lead Trustmore Group as a future-ready institution,
                one that stays ahead by managing complex financial ecosystems
                for wealthy families, entrepreneurs, and institutions worldwide
                all while upholding the group’s core promise of “Trust,
                Transparency, and Timeless Relationships”.
              </p>
            </div>
          </div>

          {/* Board Members Section */}
          <div id="board-members" className="mb-24">
            <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
              Board Member
            </h3>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="relative overflow-hidden rounded-lg w-80">
                <div className="relative h-80">
                  <Image
                    src="/boardmember2.png"
                    alt="Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold">
                      Ashwin Chawwla
                    </h3>
                    <p className="text-blue-300">
                      Chairman & Managing Director
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg w-80">
                <div className="relative h-80">
                  <Image
                    src="/boardmember1.png"
                    alt="Team Member"
                    fill
                    className="object-contain scale-[0.97]" // zoomed out
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold">
                      Brijesh Thakkar
                    </h3>
                    <p className="text-blue-300">Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Team Section */}
          <div id="executive-team">
            <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
              Executive Team
            </h3>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="relative overflow-hidden rounded-lg w-80">
                <div className="relative h-80">
                  <Image
                    src="/ExecutiveDirector.png"
                    alt="Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold">
                      Sanjoy Paul
                    </h3>
                    <p className="text-blue-300">
                      Executive Director - TCG Group
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg w-80">
                <div className="relative h-80">
                  <Image
                    src="/ExecutiveDirector2.jpeg"
                    alt="Team Member"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold">
                      Saurabh Chawla
                    </h3>
                    <p className="text-blue-300">
                      Executive Director - GMR Group
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory Council Section */}
          <div id="advisory-council" className="mt-24">
            <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
              Advisory Council
            </h3>
            <div className="flex justify-center">
              <div className="relative overflow-hidden rounded-lg w-80">
                <div className="relative h-80">
                  <Image
                    src="/advisor.jpeg"
                    alt="Advisor Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold">
                      Subhrangshu Neogi
                    </h3>
                    <p className="text-blue-300">Strategic Advisor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
