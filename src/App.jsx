import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import ResourceSection from "./components/ResourceSection";
import Courses from "./components/Courses";
import Videos from "./components/Videos";
import Platforms from "./components/Platforms";
import Tools from "./components/Tools";
import Career from "./components/Career";
import Community from "./components/Community";
import Updates from "./components/Updates";
import Contribute from "./components/Contribute";

import resources from "./data/resources.json";
import Faq from "./components/faq";

export default function App() {
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(
    () => localStorage.getItem("cs_hub_dark") === "1"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("cs_hub_dark", dark ? "1" : "0");
  }, [dark]);

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cs_hub_bookmarks") || "[]");
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("cs_hub_bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);
  const toggleBookmark = (id) =>
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const flattened = useMemo(() => {
    const out = [];
    [
      "books",
      "courses",
      "youtube",
      "platforms",
      "tools",
      "aiPlatforms",
    ].forEach((key) => {
      (resources[key] || []).forEach((item) =>
        out.push({ ...item, kind: key })
      );
    });
    return out;
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return flattened;
    return flattened.filter((item) => {
      return (
        (item.title || item.name || "") +
        " " +
        (item.desc || "") +
        " " +
        (item.author || "") +
        " " +
        (item.platform || "") +
        " " +
        (item.channel || "")
      )
        .toLowerCase()
        .includes(q);
    });
  }, [query, flattened]);

  return (
    <div className="min-h-screen bg-heroLight text-white">
      <Header
        dark={dark}
        setDark={setDark}
        onSearch={setQuery}
        bookmarks={bookmarks}
      />

      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Roadmap />

        <section id="books" className="mt-12">
          <ResourceSection
            id="books"
            title="Books & Textbooks"
            items={resources.books}
          />
        </section>

        <section id="courses" className="mt-12">
          <Courses
            courses={resources.courses}
            onToggleBookmark={toggleBookmark}
            bookmarks={bookmarks}
            searchQuery={query}
          />
        </section>

        <section id="videos" className="mt-12">
          <Videos videos={resources.youtube} searchQuery={query} />
        </section>

        <section id="platforms" className="mt-12">
          <Platforms platforms={resources.platforms} searchQuery={query} />
        </section>

        <section id="ai" className="mt-12">
          <Tools
            items={resources.aiPlatforms}
            title="AI Platforms & Tools"
            searchQuery={query}
          />
        </section>

        <section id="tools" className="mt-12">
          <Tools
            items={resources.tools}
            title="Developer Tools & Utilities"
            searchQuery={query}
          />
        </section>

        {/* <section id="career" className="mt-12">
          <Career items={resources.career} />
        </section> */}
        <section>
          <Faq />
        </section>

        <section id="community" className="mt-12">
          <Community />
        </section>

        {/* <section id="updates" className="mt-12">
          <Updates items={resources.updates} />
        </section> */}

        {/* <section id="contribute" className="mt-12 mb-12">
          <Contribute />
        </section> */}
      </main>

      <footer className="bg-cape-palliser-500 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <div className="font-semibold">
              CS Study Hub — Chongqing University of Technology
            </div>
            <div className="text-sm opacity-90">
              Maintained by Abdul Wadud Prince
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a className="text-white/90 hover:underline" href="#contact">
              Contact
            </a>
            <div className="text-sm">© {new Date().getFullYear()}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
