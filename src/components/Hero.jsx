import React from "react";

export default function Hero() {
  return (
    <section className="pt-20 sm:pt-28 pb-20 relative overflow-hidden bg-heroLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutralText  mb-4">
          Computer Science Resources
        </h1>
        <p className="text-mutedText max-w-3xl mx-auto">
          Learn smarter with roadmaps, tools, and interactive guidance
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="#getting-started"
            className="px-6 py-3 rounded-full bg-cape-palliser-700 text-white font-medium shadow hover:bg-cape-500 transition"
          >
            Start Learning
          </a>
          <a
            href="#books"
            className="px-4 py-2 rounded-md border border-cape-palliser-400  text-cape-palliser-950 shadow-soft"
          >
            Explore Books
          </a>
        </div>
      </div>

      {/* Wave positioned below hero */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full pointer-events-none">
        <div className="wave h-[11.25vw] min-h-[60px]"></div>
      </div>
    </section>
  );
}
