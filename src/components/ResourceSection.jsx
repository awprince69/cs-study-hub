import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Generic ResourceSection used for Books, Platforms, Tools etc.
 * props:
 *  - id
 *  - title
 *  - items (array)
 *  - render (optional) custom renderer
 */
export default function ResourceSection({ id, title, items = [], render }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount =
      direction === "left" ? -clientWidth * 0.9 : clientWidth * 0.9;
    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id={id}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-neutralText">{title}</h2>
      </div>

      {/* Scroll Buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-cape-palliser-400 text-white rounded-full p-2 shadow-md hover:bg-cape-palliser-500 z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-cape-palliser-400 text-white rounded-full p-2 shadow-md hover:bg-cape-palliser-500 z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Horizontal Scroll Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 py-2 overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar"
      >
        {items.map((item) => (
          <article
            key={item.id || item.name || item.title}
            className="card min-w-[260px] sm:min-w-[300px] md:min-w-[320px] flex-shrink-0"
          >
            {render ? (
              render(item)
            ) : (
              <>
                <h3 className="font-semibold text-lg text-neutralText line-clamp-1">
                  {item.title || item.name}
                </h3>
                {item.author && (
                  <div className="text-sm text-mutedText line-clamp-1">
                    By {item.author}
                  </div>
                )}
                {item.desc && (
                  <p className="mt-2 text-sm text-mutedText line-clamp-2">
                    {item.desc}
                  </p>
                )}
                <div className="mt-3 flex items-center justify-between">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent font-medium hover:underline"
                    >
                      Open →
                    </a>
                  ) : (
                    <span className="text-xs text-gray-400">No link</span>
                  )}
                </div>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
