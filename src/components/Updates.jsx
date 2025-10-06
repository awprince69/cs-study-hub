import React from "react";

export default function Updates({ items = [] }) {
  return (
    <section
      id="updates"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-neutralText">
          Updates & Trends
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((u) => (
          <div key={u.id} className="card">
            <div className="font-semibold text-neutralText">{u.title}</div>
            <div className="text-xs text-mutedText">{u.date}</div>
            <div className="mt-2">
              <a className="text-accent" href={u.link} target="_blank">
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
