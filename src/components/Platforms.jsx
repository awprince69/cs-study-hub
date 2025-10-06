import React from "react";
import ResourceSection from "./ResourceSection";

export default function Platforms({ platforms = [], searchQuery = "" }) {
  const filtered = platforms.filter(
    (p) =>
      !searchQuery ||
      (p.name + " " + (p.type || ""))
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );
  return (
    <ResourceSection
      id="platforms"
      title="Learning Websites & Platforms"
      items={filtered}
    />
  );
}
