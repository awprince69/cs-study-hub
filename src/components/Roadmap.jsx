// src/components/Roadmap.jsx
import React, { useState } from "react";
import resources from "../data/roadmap_data.json";

export default function Roadmap() {
  // Use roadmaps from resources.json
  const tracks = (resources.roadmaps || []).map((r) => ({
    id: r.id,
    title: r.title,
    tag: r.tag,
    description: r.description,
    steps: r.steps || [],
    thumbnail: r.thumbnail,
  }));

  // Only one open card at a time
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="getting-started"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-cape-palliser-900 ">
          Guided Computer Science Learning Paths
        </h2>
        <p className="text-cape-palliser-600 ">
          Choose a track and expand steps to view recommended resources.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
        {tracks.map((track) => (
          <article
            key={track.id}
            className="card flex flex-col justify-between bg-cape-palliser-100"
          >
            <img
              src={track.thumbnail}
              alt={track.title}
              className="w-full h-52 object-cover rounded-xl mb-4"
              onError={(e) => {
                e.currentTarget.src = "/images/placeholder.jpg";
              }}
            />

            <div className="flex-1">
              <h3 className="font-semibold text-lg text-cape-palliser-900 ">
                {track.title}
              </h3>
              <span className="flex items-center gap-1  text-neutralText text-xs px-1 border border-border rounded-full py-1 w-24 shadow-soft">
                {track.tag === "Trending" && "🔥"}
                {track.tag === "Popular" && "⭐"}
                {track.tag === "Hot Trend" && "🚀"}
                {track.tag === "In-Demand" && "💡"}
                {track.tag}
              </span>
            </div>

            {/* bottom row */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-cape-palliser-600 ">
                {track.steps.length} steps
              </p>

              <button
                onClick={() => toggle(track.id)}
                aria-expanded={openId === track.id}
                className="px-3 py-1 rounded-md bg-cape-palliser-800 text-white text-sm hover:bg-cape-palliser-700 transition"
              >
                {openId === track.id ? "Hide" : "View"}
              </button>
            </div>

            {openId === track.id && (
              <div className="mt-4 text-left">
                <p className="text-sm text-cape-palliser-700 mb-3">
                  {track.description}
                </p>

                <ol className="list-decimal ml-5 space-y-2 text-sm text-cape-palliser-950 ">
                  {track.steps.map((s, idx) => (
                    <li key={idx}>
                      <div className="font-medium text-cape-palliser-900 ">
                        {s}
                      </div>
                      <div className="text-xs text-cape-palliser-600 ">
                        Recommended: books • courses • videos
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://roadmap.sh/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full bg-cape-palliser-700 text-white font-medium shadow hover:bg-cape-palliser-600 transition"
        >
          See All Roadmaps →
        </a>
      </div>

      {/* FAQ section */}
      {/* <div className="mt-8 card bg-cape-palliser-100 mx-auto flex max-w-3xl ">
        <h1 className="font-semibold mb-1 text-cape-palliser-900 text-center text-3xl">
          FAQ
        </h1>
        <details className="mb-2">
          <summary className="cursor-pointer text-cape-palliser-900 ">
            How to start programming?
          </summary>
          <p className="mt-2 text-sm text-cape-palliser-700 ">
            Start with Python and a small project (automation or simple web
            app).
          </p>
        </details>

        <details>
          <summary className="cursor-pointer text-cape-palliser-900 ">
            What should I study first?
          </summary>
          <p className="mt-2 text-sm text-cape-palliser-700 ">
            Fundamentals: data structures and algorithms plus a programming
            language.
          </p>
        </details>
      </div> */}
    </section>
  );
}
