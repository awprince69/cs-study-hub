import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Career({ items = [] }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount =
      direction === "left" ? -clientWidth / 1.2 : clientWidth / 1.2;
    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="career"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-neutralText">
          Career Paths & Guidance
        </h2>
      </div>

      {/* Left Scroll Button */}
      {items.length > 3 && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-cape-palliser-400 text-white rounded-full p-2 shadow-md hover:bg-cape-palliser-500 z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Right Scroll Button */}
      {items.length > 3 && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cape-palliser-400 text-white rounded-full p-2 shadow-md hover:bg-cape-palliser-500 z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Horizontal Scroll Area */}
      <div
        ref={scrollRef}
        className="overflow-x-auto flex gap-4 py-2 scroll-smooth hide-scrollbar"
      >
        {items.map((c) => (
          <div
            key={c.id}
            className="min-w-[280px] sm:min-w-[320px] bg-cardLight rounded-xl p-5 shadow-soft flex-shrink-0"
          >
            <h3 className="font-semibold text-lg text-neutralText leading-snug line-clamp-2 break-words">
              {c.role}
            </h3>

            <div className="text-sm text-mutedText mt-1 line-clamp-2">
              Skills: {c.skills.join(", ")}
            </div>

            <div className="mt-3">
              <div className="text-sm font-medium text-mutedText">
                Starter Projects
              </div>
              <ul className="list-disc ml-5 mt-1 text-sm text-mutedText space-y-1">
                {c.projects.map((p, i) => (
                  <li key={i} className="break-words line-clamp-1">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
