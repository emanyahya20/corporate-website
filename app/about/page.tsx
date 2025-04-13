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
          <source src="/aboutus.mp4" type="video/mp4" />
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

      {/* Leadership Team */}
      <section id="leadership" className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-16 text-center">
            Leadership
          </h2>

          {/* Ashwin Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="w-full md:w-1/3">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/ashwin.Jpeg"
                  alt="Ashwin - Founder & CEO"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Ashwin</h3>
              <p className="text-blue-600 text-xl mb-6">Founder & CEO</p>
              <p className="text-gray-600 text-lg mb-4">
                Visionary leader with over 25 years of experience in wealth
                management and financial technology.
              </p>
              <p className="text-gray-600 text-lg">
                Ashwin founded Trustmore with a mission to redefine private
                wealth through innovation and trust. His leadership has guided
                the company's evolution into a comprehensive ecosystem serving
                elite clients worldwide.
              </p>
            </div>
          </div>

          {/* Board Members Section */}
          <div className="mb-24">
            <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
              Board Members
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Board Member 1 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden">
                    <Image
                      src="/boardmember1.png"
                      alt="Board Member 1"
                      fill
                      className="object-contain scale-90"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    Brijesh Thakkar
                  </h4>
                  <p className="text-blue-600 mb-4">Director</p>
                  <p className="text-gray-600">
                    Brief introduction about the board member. Their expertise,
                    background, and contribution to the company. Keep this to
                    2-3 sentences.
                  </p>
                </div>
              </div>

              {/* Board Member 2 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden">
                    <Image
                      src="/boardmember2.png"
                      alt="Board Member 2"
                      fill
                      className="object-contain scale-90"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    Ashwin Chawwla
                  </h4>
                  <p className="text-blue-600 mb-4">
                    Chairman & managing Director
                  </p>
                  <p className="text-gray-600">
                    Brief introduction about the board member. Their expertise,
                    background, and contribution to the company. Keep this to
                    2-3 sentences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Team Section - Ant Group Style */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
              Executive Team
            </h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {/* Team Member 1 */}
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

              {/* Team Member 2 */}
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
          <div className="mt-24">
            <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
              Advisory Council
            </h3>
            <div className="flex justify-center">
              {/* Advisor Member */}
              <div className="relative overflow-hidden rounded-lg w-80">
                <div className="relative h-80">
                  <Image
                    src="/advisor.jpeg" // replace with your actual image path
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
