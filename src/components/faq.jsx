import React from "react";
import faqData from "../data/faq.json";

export default function Faq() {
  return (
    <section
      id="faq"
      className="mt-8 card bg-cape-palliser-100 mx-auto flex flex-col max-w-3xl p-6 rounded-2xl shadow-md"
    >
      <h1 className="font-semibold mb-4 text-cape-palliser-900 text-center text-3xl">
        FAQ
      </h1>

      {faqData.map((item, index) => (
        <details key={index} className="mb-3 group">
          <summary className="cursor-pointer text-cape-palliser-900 font-medium text-lg focus:outline-none rounded-md transition-all duration-200 group-open:text-cape-palliser-700">
            {item.question}
          </summary>
          <p className="mt-2 text-sm text-cape-palliser-700 ml-2">
            {item.answer}
          </p>
        </details>
      ))}
    </section>
  );
}
