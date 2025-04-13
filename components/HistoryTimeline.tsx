"use client";

import { useState } from "react";

type HistoryItem = {
  year: number;
  date: string;
  image: string;
  text: string;
};

const historyData: HistoryItem[] = Array.from(
  { length: 26 },
  (_, i) => 2000 + i
).flatMap((year) => [
  {
    year,
    date: `${year}.01`,
    image: "/history1.jpg",
    text: `Milestone achieved early ${year} with significant progress.`,
  },
  {
    year,
    date: `${year}.06`,
    image: "/history2.jpg",
    text: `Mid-year developments shaped strategic direction in ${year}.`,
  },
  {
    year,
    date: `${year}.11`,
    image: "/history3.jpg",
    text: `Year-end accomplishments defined growth in ${year}.`,
  },
]);

export default function HistoryTimeline() {
  const [selectedYear, setSelectedYear] = useState(2023);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);

  const allYears = Array.from({ length: 26 }, (_, i) => 2000 + i); // 2000 to 2025
  const visibleYears = allYears.slice(visibleStartIndex, visibleStartIndex + 5);

  const filteredItems = historyData
    .filter((item) => item.year === selectedYear)
    .slice(0, 3);

  const scrollLeft = () => {
    if (visibleStartIndex > 0) {
      setVisibleStartIndex((prev) => prev - 1);
    }
  };

  const scrollRight = () => {
    if (visibleStartIndex < allYears.length - 5) {
      setVisibleStartIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our History</h2>
        <p className="text-gray-500">Explore major events by year</p>
      </div>

      {/* Compact Cards */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-white border rounded-lg p-3 shadow-sm">
            <img
              src={item.image}
              alt={item.date}
              className="w-full h-36 object-cover rounded-md mb-2"
            />
            <p className="text-xs text-gray-500 mb-1">{item.date}</p>
            <p className="text-sm text-gray-700 line-clamp-3">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Year Selector */}
      <div className="mt-10 flex items-center justify-center gap-4 px-4">
        <button
          onClick={scrollLeft}
          disabled={visibleStartIndex === 0}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-30"
        >
          ←
        </button>

        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {visibleYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedYear === year
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <button
          onClick={scrollRight}
          disabled={visibleStartIndex >= allYears.length - 5}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-30"
        >
          →
        </button>
      </div>
    </section>
  );
}
