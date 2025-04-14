"use client";

import { useState, useEffect, useRef } from "react";

type HistoryItem = {
  year: number;
  date: string;
  image: string;
  text: string;
};

const historyData: HistoryItem[] = [
  {
    year: 2001,
    date: "2001.06",
    image: "/history1.png",
    text: "Ashwin Chawwla founded an independent investment advisory firm Outsourcing Xperts, focused on wealth management for individuals and businesses. Core values: Trust, Transparency, and Integrity.",
  },
  {
    year: 2004,
    date: "2004.09",
    image: "/history2.png",
    text: "Gained recognition as a trusted advisor for high-net-worth individuals (HNWIs), family offices, and corporates for individual and corporate investments.",
  },
  {
    year: 2005,
    date: "2005.03",
    image: "/history3.png",
    text: "He managed to sell over 1000 apartments to his wealth clients in one single project in NCR. ",
  },
  {
    year: 2007,
    date: "2007.11",
    image: "/history4.png",
    text: "Ventured into international real estate advisory and launched global investments for his clients, delivering exclusive opportunities with superior ROIs.",
  },
  {
    year: 2010,
    date: "2010.04",
    image: "/history5.png",
    text: "Coldwell banker over 100 years brand selects Trustmore as master franchisee for India region.",
  },
  {
    year: 2012,
    date: "2012.07",
    image: "/history6.png",
    text: "Exclusively advised DLF & Lodha Group on the Mumbai land sale. ",
  },
  {
    year: 2015,
    date: "2015.01",
    image: "/history7.png",
    text: "Trustmore is incorporated. Participates in PM Modi’s trade delegation to Germany. Wins CII Innovation Awards recognition.",
  },
  {
    year: 2016,
    date: "2016.12",
    image: "/history8.png",
    text: "Angel investors back Trustmore vision of building a superior technology platform. Wins Tech30 at Tech Sparks. ",
  },
  {
    year: 2017,
    date: "2017.05",
    image: "/history9.png",
    text: "Trustmore completes US Embassy leadership incubation. Releases first white paper on real estate with FICCI & Grant Thornton.",
  },
  {
    year: 2018,
    date: "2018.08",
    image: "/history10.png",
    text: "Achieves recognition for its wealth management services. Wins CNBC TV18 Young Turks recognition.",
  },
  {
    year: 2019,
    date: "2019.10",
    image: "/history11.png",
    text: "Launched India's first digital escrow technology platform, Escrowpay, addressing business trust gaps in transactions across industries.",
  },
  {
    year: 2020,
    date: "2020.06",
    image: "/history12.png",
    text: "Expands wealth management services in EU. Wins prestigious Technoviti Award. ",
  },
  {
    year: 2021,
    date: "2021.03",
    image: "/history13.png",
    text: "Expands advisory services in Dubai ",
  },
  {
    year: 2022,
    date: "2022.09",
    image: "/history14.png",
    text: "Expands global investment portfolio offerings",
  },
  {
    year: 2023,
    date: "2023.02",
    image: "/history15.png",
    text: "IFSCA recognises Trustmore as India’s first digital escrow payments provider for cross border transactions. ",
  },
  {
    year: 2024,
    date: "2024.01",
    image: "/history16.png",
    text: `• Payments: EscrowPay, REVCO, SettleX\n• IPRIVE: Wealth, Advisory, Global Investments\n• Experiences: ViaJets, bespoke luxury services`,
  },
  {
    year: 2025,
    date: "2025.04",
    image: "/history17.png",
    text: "Trustmore celebrates 25 years of trust-led growth, serving thousands of clients globally, delivering market-leading ROIs, managing money flows worth billions, and expanding our global presence.",
  },
];

const selectedYears = historyData.map((item) => item.year);

export default function HistoryTimeline() {
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState(selectedYears[0]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const visibleYears = selectedYears.slice(
    visibleStartIndex,
    visibleStartIndex + 3
  );
  const visibleItems = historyData.filter((item) =>
    visibleYears.includes(item.year)
  );

  const scrollLeft = () => {
    if (visibleStartIndex >= 3) {
      setVisibleStartIndex((prev) => prev - 3);
    }
  };

  const scrollRight = () => {
    if (visibleStartIndex + 3 < selectedYears.length) {
      setVisibleStartIndex((prev) => prev + 3);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our History</h2>
        <p className="text-gray-500">Explore major events by year</p>
      </div>

      {/* Cards Layout */}
      <div className="container mx-auto px-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 border rounded-lg p-4 shadow-sm w-[348px] h-[370px] mx-auto flex flex-col items-center"
            >
              <div className="w-full h-[200px] flex justify-center items-center mb-2">
                <img
                  src={item.image}
                  alt={item.date}
                  className="object-contain h-full w-full max-h-[200px]"
                />
              </div>
              <p className="text-xs text-gray-500 mb-1 text-center">
                {item.date}
              </p>

              <p
                className={`text-sm text-gray-700 text-center whitespace-pre-line ${
                  expandedIndex === index ? "" : "line-clamp-3"
                }`}
              >
                {item.text}
              </p>

              {item.text.length > 100 && (
                <button
                  onClick={() =>
                    setExpandedIndex((prev) => (prev === index ? null : index))
                  }
                  className="text-blue-600 text-xs mt-1 hover:underline"
                >
                  {expandedIndex === index ? "Read less" : "Read more"}
                </button>
              )}
            </div>
          ))}

          {/* Placeholder cards to maintain layout consistency */}
          {Array.from({ length: 3 - visibleItems.length }).map((_, index) => (
            <div
              key={`placeholder-${index}`}
              className="invisible bg-white border rounded-lg p-4 shadow-sm w-[348px] h-[370px] mx-auto"
            ></div>
          ))}
        </div>
      </div>

      {/* Year Pagination */}
      <div className="mt-10 flex items-center justify-center gap-4 px-4">
        <button
          onClick={scrollLeft}
          disabled={visibleStartIndex === 0}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-30"
        >
          ←
        </button>

        <div className="flex gap-2">
          {visibleYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border ${
                selectedYear === year
                  ? "bg-black text-white border-white"
                  : "bg-black text-white border-white"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <button
          onClick={scrollRight}
          disabled={visibleStartIndex + 3 >= selectedYears.length}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-30"
        >
          →
        </button>
      </div>
    </section>
  );
}
