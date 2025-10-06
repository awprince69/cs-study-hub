import React from "react";

export default function Contribute() {
  return (
    <section
      id="contribute"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <h2 className="text-2xl font-bold text-primary mb-4">
        Contribute a Resource
      </h2>
      <div className="card">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.title.value.trim();
            const url = e.target.url.value.trim();
            if (!title) return alert("Title required");
            const subs = JSON.parse(
              localStorage.getItem("cs_hub_submissions") || "[]"
            );
            subs.unshift({
              id: `s-${Date.now()}`,
              title,
              url,
              date: new Date().toISOString(),
            });
            localStorage.setItem("cs_hub_submissions", JSON.stringify(subs));
            e.target.reset();
            alert("Thank you — resource submitted!");
          }}
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <input
              name="title"
              placeholder="Title"
              className="px-3 py-2 rounded border"
              required
            />
            <input
              name="url"
              placeholder="URL"
              className="px-3 py-2 rounded border"
            />
            <select name="type" className="px-3 py-2 rounded border">
              <option value="book">Book</option>
              <option value="course">Course</option>
              <option value="tool">Tool</option>
              <option value="video">Video</option>
            </select>
          </div>
          <div className="mt-3 flex gap-3">
            <button className="px-4 py-2 rounded bg-primary text-white">
              Submit
            </button>
            <button type="reset" className="px-4 py-2 rounded border">
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
