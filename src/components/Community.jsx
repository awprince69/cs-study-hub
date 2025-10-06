import React from "react";

export default function Community() {
  return (
    <section
      id="community"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-neutralText">
          Community & Forums
        </h2>
        <p className="text-mutedText">
          Join WeChat / Discord groups and local Chinese developer communities.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="card">
          <h3 className="font-semibold text-neutralText">Local (Chinese)</h3>
          <ul className="mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              <a
                className="text-accent"
                href="https://www.csdn.net"
                target="_blank"
              >
                CSDN
              </a>
            </li>
            <li>
              <a
                className="text-accent"
                href="https://juejin.cn"
                target="_blank"
              >
                掘金
              </a>
            </li>
            <li>
              <a
                className="text-accent"
                href="https://www.bilibili.com"
                target="_blank"
              >
                Bilibili (Tech)
              </a>
            </li>
          </ul>
        </div>
        <div className="card">
          <h3 className="font-semibold text-neutralText">International</h3>
          <ul className="mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              <a
                className="text-accent"
                href="https://stackoverflow.com"
                target="_blank"
              >
                Stack Overflow
              </a>
            </li>
            <li>
              <a
                className="text-accent"
                href="https://www.reddit.com/r/learnprogramming"
                target="_blank"
              >
                r/learnprogramming
              </a>
            </li>
            <li>
              <a
                className="text-accent"
                href="https://github.com"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
