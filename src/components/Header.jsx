import React, { useState } from "react";

export default function Header({ dark, setDark, onSearch }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full z-50 bg-navbar-bg backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-accent to-indigo-500 flex items-center justify-center text-white font-bold">
            CS
          </div>
          <div>
            <div className="text-2xl font-semibold">CS Study Hub</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a className="hover:underline" href="#getting-started">
            Getting Started
          </a>
          <a className="hover:underline" href="#books">
            Books
          </a>
          <a className="hover:underline" href="#courses">
            Courses
          </a>
          <a className="hover:underline" href="#videos">
            Videos
          </a>
          <a className="hover:underline" href="#platforms">
            Platforms
          </a>
          <a className="hover:underline" href="#ai">
            AI
          </a>
          <a className="hover:underline" href="#tools">
            Tools
          </a>
          {/* <a className="hover:underline" href="#career">
            Career
          </a> */}
          <a className="hover:underline" href="#community">
            Community
          </a>
          {/* <a className="hover:underline" href="#updates">
            Updates
          </a> */}
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/** mobile menu */}
      <div className={`md:hidden ${open ? "block" : "hidden"} px-4 pb-4`}>
        <div className="flex flex-col gap-2">
          <a
            className="py-2 border-b border-gray-100 dark:border-gray-800"
            href="#getting-started"
          >
            Getting Started
          </a>
          <a
            className="py-2 border-b border-gray-100 dark:border-gray-800"
            href="#books"
          >
            Books
          </a>
          <a
            className="py-2 border-b border-gray-100 dark:border-gray-800"
            href="#courses"
          >
            Courses
          </a>
          <a
            className="py-2 border-b border-gray-100 dark:border-gray-800"
            href="#videos"
          >
            Videos
          </a>
          <a
            className="py-2 border-b border-gray-100 dark:border-gray-800"
            href="#platforms"
          >
            Platforms
          </a>
          <a
            className="py-2 border-b border-gray-100 dark:border-gray-800"
            href="#ai"
          >
            AI
          </a>
          <a
            className="py-2 border-b border-gray-100 dark:border-gray-800"
            href="#tools"
          >
            Tools
          </a>
          {/* <a
            className="py-2 border-b border-gray-100 dark:border-gray-800"
            href="#career"
          >
            Career
          </a> */}
          <a className="py-2" href="#community">
            Community
          </a>
        </div>
      </div>
    </header>
  );
}
