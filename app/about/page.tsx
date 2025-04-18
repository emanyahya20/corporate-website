"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutPage() {
  const executiveScrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1); // Start at 1 to account for prepended items
  const [totalPages, setTotalPages] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  // Original executive team data
  const originalExecutiveTeam = [
    {
      name: "Gajendra Arya",
      position: "Chief Technology Officer",
      image: "/m1.png",
    },
    {
      name: "Mohit Sahgal",
      position: "Chief of Staff",
      image: "/m2.png",
    },
    {
      name: "Vinod kanojia",
      position: "Payment Processing and Operations",
      image: "/m3.png",
    },
    {
      name: "Madhvi Mehandiratta",
      position: "Payment Processing and Operations",
      image: "/m4.png",
    },
    {
      name: "Prag Bansal",
      position: "Growth",
      image: "/m5.png",
    },
    {
      name: "Priyam Arya",
      position: "Product",
      image: "/m6.png",
    },
    {
      name: "Asha Yadav",
      position: "Finance and Accounts",
      image: "/m7.png",
    },
  ];

  // Create infinite loop by cloning items
  const executiveTeam = [
    ...originalExecutiveTeam.slice(-cardsPerPage), // Clone last items to prepend
    ...originalExecutiveTeam, // Original items
    ...originalExecutiveTeam.slice(0, cardsPerPage), // Clone first items to append
  ];

  // Advisory council data
  const advisoryCouncil = [
    {
      name: "Subhrangshu Neogi",
      position: "Strategic Advisor",
      image: "/ExecutiveDirector.png",
    },
    {
      name: "Sanjoy Paul",
      position: "Executive Director - TCG Group",
      image: "/advisor.jpeg",
    },
    {
      name: "Saurabh Chawla",
      position: "Executive Director - GMR Group",
      image: "/ExecutiveDirector2.jpeg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      if (width < 640) {
        setCardsPerPage(1);
      } else if (width < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Calculate total pages based on original team length plus cloned items
    setTotalPages(Math.ceil(originalExecutiveTeam.length / cardsPerPage) + 2);
  }, [originalExecutiveTeam.length, cardsPerPage]);

  const goToPage = (pageIndex) => {
    if (pageIndex === 0) {
      // If going to first page (prepended clone), jump to real last page
      setCurrentPage(totalPages - 2);
    } else if (pageIndex >= totalPages - 1) {
      // If going to last page (appended clone), jump to real first page
      setCurrentPage(1);
    } else {
      setCurrentPage(pageIndex);
    }
  };

  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  const prevPage = () => {
    goToPage(currentPage - 1);
  };

  // Team member card component
  const MemberCard = ({ name, position, image }) => (
    <div className="relative overflow-hidden rounded-lg w-64 sm:w-64 group flex-shrink-0 mx-2 sm:mx-4">
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-4">
        <div>
          <h3 className="text-white text-lg font-bold">{name}</h3>
          <p className="text-blue-300 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );

  // Helper to get the current page items
  const getTeamByPage = (page) => {
    const start = page * cardsPerPage;
    return executiveTeam.slice(start, start + cardsPerPage);
  };

  // Calculate the real page index for pagination dots
  const realPageIndex =
    ((currentPage - 1 + (totalPages - 2)) % (totalPages - 2)) + 1;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Video Banner */}
      <section className="relative h-screen md:h-[110vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
        <video
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/aboutus.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-5xl md:text-5xl font-semibold text-white mb-3 sm:mb-4 leading-tight">
                About Trustmore
              </h1>
              <p className="text-lg md:text-2xl text-white/90 mb-10">
                Built on trust. Focused on legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation for Leadership Sections */}
      <section className="bg-white py-6">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-3xl font-semibold text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <div className="flex justify-center space-x-4 md:space-x-6 flex-wrap px-2">
            <a
              href="#leadership"
              className="text-base md:text-lg text-grey hover:text-black"
            >
              Leadership
            </a>
            <a
              href="#board-members"
              className="text-base md:text-lg text-grey hover:text-black"
            >
              Board Members
            </a>
            <a
              href="#executive-team"
              className="text-base md:text-lg text-grey hover:text-black"
            >
              Executive Team
            </a>
            <a
              href="#advisory-council"
              className="text-base md:text-lg text-grey hover:text-black"
            >
              Advisory Council
            </a>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12 md:mb-16 text-center">
            Leadership
          </h2>

          {/* Ashwin Section */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="w-full md:w-[40%]">
              <div className="relative w-full h-[450px] md:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/ashwinc.jpg"
                  alt="Ashwin - Founder & CEO"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 mt-6 md:mt-0">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">
                Ashwin Chawwla
              </h3>
              <p className="text-blue-600 text-lg md:text-xl mb-4 md:mb-6">
                Founder & CEO
              </p>
              <p className="text-gray-600 text-base md:text-lg mb-4">
                Ashwin Chawwla is the visionary Chairman and Founder of
                Trustmore Group, a trusted name in private wealth, payments, and
                bespoke experiences with a proud legacy spanning over 25 years.
              </p>
              <p className="text-gray-600 text-base md:text-lg">
                Starting his journey in 2001 with investment advisory services
                for individuals and businesses, Ashwin built Trustmore on an
                enduring foundation of trust, transparency, and
                relationship-driven values. His vision is to reshape the private
                wealth space by integrating innovation, reliability, and
                integrity ensuring Trustmore's clients not only grow their
                wealth but protect their legacies for future generations. Ashwin
                continues to lead Trustmore Group as a future-ready institution,
                one that stays ahead by managing complex financial ecosystems
                for wealthy families, entrepreneurs, and institutions worldwide
                all while upholding the group's core promise of "Trust,
                Transparency, and Timeless Relationships".
              </p>
            </div>
          </div>

          {/* Board Members Section */}
          <div id="board-members" className="mb-16 md:mb-24">
            <h3 className="text-3xl md:text-3xl font-semibold text-gray-800 mb-8 md:mb-12 text-center">
              Board Members
            </h3>
            <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
              <div className="relative overflow-hidden rounded-lg w-full sm:w-64 md:w-80 group mb-6 sm:mb-0">
                <div className="relative w-full h-[400px] sm:h-80">
                  <Image
                    src="/boardmember2.png"
                    alt="Ashwin Chawwla"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
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

              <div className="relative overflow-hidden rounded-lg w-full sm:w-64 md:w-80 group">
                <div className="relative w-full h-[400px] sm:h-80">
                  <Image
                    src="/boardmember1.png"
                    alt="Brijesh Thakkar"
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
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

          {/* Executive Team Section - Infinite Carousel */}
          <div id="executive-team" className="mb-16 md:mb-24">
            <h3 className="text-3xl md:text-3xl font-semibold text-gray-800 mb-8 md:mb-12 text-center">
              Executive Team
            </h3>

            <div className="relative px-4 md:px-8">
              {/* Navigation buttons */}
              <button
                onClick={prevPage}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md ${
                  isMobile ? "ml-0" : "-ml-10"
                }`}
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextPage}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md ${
                  isMobile ? "mr-0" : "-mr-10"
                }`}
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>

              {/* Carousel container */}
              <div className="overflow-hidden">
                <div
                  ref={executiveScrollRef}
                  className="flex transition-all duration-500"
                  style={{
                    transform: `translateX(-${currentPage * 100}%)`,
                  }}
                >
                  {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <div
                      key={pageIndex}
                      className="w-full flex-shrink-0 flex justify-center sm:justify-center gap-4 md:gap-8"
                    >
                      {getTeamByPage(pageIndex).map((member, index) => (
                        <MemberCard key={`${pageIndex}-${index}`} {...member} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: totalPages - 2 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index + 1)}
                    className={`h-2 rounded-full transition-all ${
                      realPageIndex === index + 1
                        ? "w-6 bg-black"
                        : "w-2 bg-gray-800"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Advisory Council Section */}
          <div id="advisory-council" className="mt-16 md:mt-24">
            <h3 className="text-3xl md:text-3xl font-semibold text-gray-800 mb-8 md:mb-12 text-center">
              Advisory Council
            </h3>

            <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-6 md:gap-8">
              {advisoryCouncil.map((advisor, index) => (
                <div
                  key={index}
                  className="w-full sm:w-auto flex justify-center"
                >
                  <MemberCard {...advisor} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
