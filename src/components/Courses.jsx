import React, { useRef, useState } from "react";

export default function Courses({
  courses = [],
  onToggleBookmark,
  bookmarks = [],
  searchQuery = "",
}) {
  const [tab, setTab] = useState("all");
  const scrollRef = useRef(null);

  const filtered = courses.filter((c) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (c.title + " " + (c.platform || "") + " " + (c.difficulty || ""))
        .toLowerCase()
        .includes(q);
    }
    if (tab === "free") return (c.price || "").toLowerCase().includes("free");
    if (tab === "paid") return (c.price || "").toLowerCase().includes("paid");
    return true;
  });

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-neutralText">Courses</h2>
        <div className="flex gap-2">
          {["all", "free", "paid"].map((type) => (
            <button
              key={type}
              onClick={() => setTab(type)}
              className={`px-3 py-1 rounded ${
                tab === type
                  ? "bg-cape-palliser-500 text-white"
                  : "text-mutedText hover:bg-cape-palliser-100"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Buttons */}
      {filtered.length > 3 && (
        <>
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-cape-palliser-400 hover:bg-white rounded-full shadow-lg p-2 transition"
          >
            ❮
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-cape-palliser-400 hover:bg-white rounded-full shadow-lg p-2 transition"
          >
            ❯
          </button>
        </>
      )}

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden gap-6 pb-4 scrollbar-hide scroll-smooth hide-scrollbar"
      >
        {filtered.map((c) => (
          <article
            key={c.id}
            className="w-96 flex-shrink-0 rounded-2xl shadow-soft bg-cardLight p-5 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.03]"
          >
            {/* Top content */}
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg text-neutralText leading-snug line-clamp-2 break-words">
                    {c.title}
                  </h3>
                  <div className="text-xs text-mutedText mt-1 ">
                    {c.platform} • {c.duration} • {c.difficulty}
                  </div>
                </div>
                <div className="text-sm text-cape-palliser-400 whitespace-nowrap flex-shrink-0">
                  {c.price}
                </div>
              </div>
            </div>

            {/* Bottom actions */}
            <div className="mt-6 flex items-center justify-between">
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="text-accent font-medium hover:underline"
              >
                Open Course →
              </a>
              {/* <button
                onClick={() => onToggleBookmark && onToggleBookmark(c.id)}
                className={`px-3 py-1 rounded-md border text-sm font-medium transition-all ${
                  bookmarks.includes(c.id)
                    ? "bg-yellow-400 text-white border-yellow-400 hover:bg-yellow-500"
                    : "border-cape-palliser-300 text-neutralText hover:bg-cape-palliser-100"
                }`}
              >
                {bookmarks.includes(c.id) ? "Saved" : "Save"}
              </button> */}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
