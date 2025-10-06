import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Videos({ videos = [], searchQuery = "" }) {
  const [active, setActive] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef(null);

  const filtered = videos.filter(
    (v) =>
      !searchQuery ||
      (v.title + " " + (v.channel || ""))
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const getYouTubeId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

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
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-neutralText">
          YouTube Channels & Playlists
        </h2>
      </div>

      {/* Scroll Buttons - only show when scroll is possible */}
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

      {/* Video carousel container */}
      <div
        ref={scrollRef}
        className="flex gap-4 py-2 overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar"
      >
        {filtered.map((v) => {
          const videoId = getYouTubeId(v.link);
          const embed = videoId
            ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
            : v.link;
          const thumbnail = videoId
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : "/default-thumb.jpg";

          return (
            <div
              key={v.id}
              className="video-card bg-cardLight rounded-xl p-4 min-w-[280px] sm:min-w-[340px] md:min-w-[360px] lg:min-w-[380px] shadow-soft flex-shrink-0 transition-transform hover:scale-[1.02]"
            >
              <div
                className="aspect-video rounded overflow-hidden relative w-full h-44"
                onMouseEnter={() => setActive(v.id)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="absolute inset-0 transition-opacity duration-300">
                  {active === v.id && v.link.includes("youtube.com") ? (
                    <iframe
                      className="w-full h-full absolute inset-0"
                      src={embed}
                      title={v.title}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src={thumbnail}
                      alt={v.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <div className="mt-3">
                <div className="font-semibold text-neutralText line-clamp-1">
                  {v.title}
                </div>
                <div className="text-xs text-mutedText line-clamp-1">
                  {v.channel}
                </div>
                <div className="mt-2">
                  <a
                    href={v.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent font-medium hover:underline"
                  >
                    Open →
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
