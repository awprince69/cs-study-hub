import React from "react";
import ResourceSection from "./ResourceSection";

export default function Tools({
  items = [],
  title = "Tools & Utilities",
  searchQuery = "",
}) {
  const filtered = items.filter(
    (i) =>
      !searchQuery ||
      (i.name + " " + (i.desc || ""))
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );
  return <ResourceSection id="tools" title={title} items={filtered} />;
}
