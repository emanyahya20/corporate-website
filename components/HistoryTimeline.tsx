"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HistoryItem = {
  year: number;
  date: string;
  image: string;
  text: string;
};

const historyData: HistoryItem[] = [
  {
    year: 2001,
    date: "The Beginning",
    image: "/history1.png",
    text: "Ashwin Chawwla founded an independent investment advisory firm Outsourcing Xperts, focused on wealth management for individuals and businesses. Core values: Trust, Transparency, and Integrity.",
  },
  {
    year: 2004,
    date: "Expanding Wealth Advisory",
    image: "/history2.png",
    text: "Gained recognition as a trusted advisor for high-net-worth individuals (HNWIs), family offices, and corporates for individual and corporate investments.",
  },
  {
    year: 2005,
    date: "Creating Record",
    image: "/history3.png",
    text: "He managed to sell over 1000 apartments to his wealth clients in one single project in NCR. ",
  },
  {
    year: 2007,
    date: "Global Real Estate & Investment Platforms",
    image: "/history4.png",
    text: "Ventured into international real estate advisory and launched global investments for his clients, delivering exclusive opportunities with superior ROIs.",
  },
  {
    year: 2010,
    date: "Coldwell Banker USA selects Trustmore ",
    image: "/history5.png",
    text: "Coldwell banker over 100 years brand selects Trustmore as master franchisee for India region.",
  },
  {
    year: 2012,
    date: "Closes largest land deal worth $500 million",
    image: "/history6.png",
    text: "Exclusively advised DLF & Lodha Group on the Mumbai land sale. ",
  },
  {
    year: 2015,
    date: "Merges all independent businesses into Trustmore",
    image: "/history7.png",
    text: "Trustmore is incorporated. Participates in PM Modi's trade delegation to Germany. Wins CII Innovation Awards recognition.",
  },
  {
    year: 2016,
    date: "Raises friends and family round ",
    image: "/history8.png",
    text: "Angel investors back Trustmore vision of building a superior technology platform. Wins Tech30 at Tech Sparks. ",
  },
  {
    year: 2017,
    date: "Trustmore wins entry into US State Department cohort ",
    image: "/history9.png",
    text: "Trustmore completes US Embassy leadership incubation. Releases first white paper on real estate with FICCI & Grant Thornton.",
  },
  {
    year: 2018,
    date: "Trustmore wins award from Donald Trump Jr. ",
    image: "/history10.png",
    text: "Achieves recognition for its wealth management services. Wins CNBC TV18 Young Turks recognition.",
  },
  {
    year: 2019,
    date: "Escrowpay formally launched by Minister",
    image: "/history11.png",
    text: "Launched India's first digital escrow technology platform, Escrowpay, addressing business trust gaps in transactions across industries.",
  },
  {
    year: 2019, // Second entry for 2019
    date: "Trustmore & AXIS Bank Partnership signed",
    image: "/history11b.png",
    text: "The 2nd largest bank onboards on Trustmore Technology for offering various payment rails to businesses ",
  },
  {
    year: 2020,
    date: "Sets up subsidiary Trustmore BV in Netherlands",
    image: "/history12.png",
    text: "Expands wealth management services in EU. Wins prestigious Technoviti Award. ",
  },
  {
    year: 2021,
    date: "Sets up business in Dubai",
    image: "/history13.png",
    text: "Expands advisory services in Dubai ",
  },
  {
    year: 2022,
    date: "Receives RERA authorisation  ",
    image: "/history14.png",
    text: "Expands global investment portfolio offerings",
  },
  {
    year: 2023,
    date: "Receives IFSCA authorisation ",
    image: "/history15.png",
    text: "IFSCA recognises Trustmore as India's first digital escrow payments provider for cross border transactions. ",
  },
  {
    year: 2024,
    date: "Trustmore Group expands",
    image: "/history16.png",
    text: `• Payments: EscrowPay, REVCO, SettleX\n• IPRIVE: Wealth, Advisory, Global Investments\n• Experiences: ViaJets, bespoke luxury services`,
  },
  {
    year: 2025,
    date: "Years Strong",
    image: "/history17.png",
    text: "Trustmore celebrates 25 years of trust-led growth, serving thousands of clients globally, delivering market-leading ROIs, managing money flows worth billions, and expanding our global presence.",
  },
];

export default function ExactAntGroupStyleTimeline() {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Group history items by year
  const historyByYear = historyData.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {} as Record<number, HistoryItem[]>);

  // Get unique years
  const years = Object.keys(historyByYear)
    .map(Number)
    .sort((a, b) => a - b);
  const currentYear = years[currentYearIndex];
  const currentYearItems = historyByYear[currentYear] || [];

  const handlePrevYear = () => {
    if (currentYearIndex > 0) {
      setCurrentYearIndex(currentYearIndex - 1);
      setCurrentItemIndex(0);
    }
  };

  const handleNextYear = () => {
    if (currentYearIndex < years.length - 1) {
      setCurrentYearIndex(currentYearIndex + 1);
      setCurrentItemIndex(0);
    }
  };

  const handlePrevItem = () => {
    if (currentItemIndex > 0) {
      setCurrentItemIndex(currentItemIndex - 1);
    } else if (currentYearIndex > 0) {
      // Go to previous year, last item
      const prevYear = years[currentYearIndex - 1];
      const prevYearItems = historyByYear[prevYear];
      setCurrentYearIndex(currentYearIndex - 1);
      setCurrentItemIndex(prevYearItems.length - 1);
    }
  };

  const handleNextItem = () => {
    if (currentItemIndex < currentYearItems.length - 1) {
      setCurrentItemIndex(currentItemIndex + 1);
    } else if (currentYearIndex < years.length - 1) {
      // Go to next year, first item
      setCurrentYearIndex(currentYearIndex + 1);
      setCurrentItemIndex(0);
    }
  };

  const handleYearClick = (yearIndex: number) => {
    setCurrentYearIndex(yearIndex);
    setCurrentItemIndex(0);
  };

  const currentItem = currentYearItems[currentItemIndex];
  const hasMultipleItems = currentYearItems.length > 1;

  // Calculate visible years (for responsive view)
  const getVisibleYears = () => {
    const visibleCount = 11; // Show max 11 years at once
    const halfVisible = Math.floor(visibleCount / 2);

    let startIdx = Math.max(0, currentYearIndex - halfVisible);
    const endIdx = Math.min(years.length - 1, startIdx + visibleCount - 1);

    // Adjust start if we don't have enough years after current
    startIdx = Math.max(0, endIdx - visibleCount + 1);

    return years.slice(startIdx, endIdx + 1);
  };

  const visibleYears = getVisibleYears();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our History</h2>
        </div>

        {/* Main Content */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevItem}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={handleNextItem}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            aria-label="Next item"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          {/* Content Slider */}
          <div className="max-w-6xl mx-auto px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Current Item */}
              <div className="col-span-3 flex flex-col md:flex-row items-start gap-8">
                {/* Image */}
                <div className="w-full md:w-1/3">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-md relative">
                    <img
                      src={currentItem.image}
                      alt={`${currentItem.date} event`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Item indicator dots - only show if multiple items for the year */}
                  {hasMultipleItems && (
                    <div className="flex justify-center mt-4 space-x-2">
                      {Array.from({ length: currentYearItems.length }).map(
                        (_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentItemIndex(idx)}
                            className={`w-2 h-2 rounded-full ${
                              idx === currentItemIndex
                                ? "bg-black"
                                : "bg-gray-300"
                            }`}
                            aria-label={`View item ${
                              idx + 1
                            } for year ${currentYear}`}
                          />
                        )
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3">
                  <p className="text-gray-800 font-semibold mb-2">
                    {currentItem.date}
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    {currentItem.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Year Navigation - Exactly like Ant Group */}
        <div className="flex items-center justify-center">
          <button
            onClick={handlePrevYear}
            className="flex items-center justify-center p-2 text-gray-400 hover:text-gray-600"
            aria-label="Previous year"
            disabled={currentYearIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex items-center overflow-x-auto scrollbar-hide mx-4 space-x-8"
          >
            {visibleYears.map((year) => {
              const yearIndex = years.indexOf(year);
              const isActive = yearIndex === currentYearIndex;
              const hasMultiple = historyByYear[year].length > 1;

              return (
                <div
                  key={`year-${year}`}
                  className="flex flex-col items-center"
                >
                  {isActive && (
                    <div className="w-2 h-2 bg-black rounded-full mb-2"></div>
                  )}
                  <button
                    onClick={() => handleYearClick(yearIndex)}
                    className={`px-2 py-1 transition-all ${
                      isActive
                        ? "text-black font-medium"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {year}
                    {hasMultiple ? "*" : ""}
                  </button>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleNextYear}
            className="flex items-center justify-center p-2 text-gray-400 hover:text-gray-600"
            aria-label="Next year"
            disabled={currentYearIndex === years.length - 1}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
