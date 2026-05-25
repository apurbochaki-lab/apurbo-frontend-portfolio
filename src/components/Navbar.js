"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [themeActive, setThemeActive] = useState(true);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-nav h-20 flex items-center">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl font-extrabold tracking-tight" data-purpose="logo">
          Apurbo Chaki<span className="text-brand">.</span>
        </div>
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2.5 rounded-full border border-white/10">
          <a className="text-md font-semibold hover:text-brand transition-colors" href="#AboutMeNew">
            About Me
          </a>
          <a className="text-md font-semibold hover:text-brand transition-colors" href="#experience">
            My Projects
          </a>
          <a className="text-md font-semibold hover:text-brand transition-colors" href="#projects">
            Tech Stacks
          </a>
          <a className="text-md font-semibold hover:text-brand transition-colors" href="#contact">
            Education
          </a>
          {/* Theme Toggle Dummy */}
          <div
            onClick={() => setThemeActive(!themeActive)}
            className="w-10 h-5 bg-zinc-800 rounded-full relative cursor-pointer flex items-center px-0.5"
          >
            <div
              className={`w-4 h-4  rounded-full transition-transform duration-300 ${themeActive ? "translate-x-5 bg-brand" : "translate-x-0 bg-white"
                }`}
            ></div>
          </div>
        </nav>
        <div className="flex items-center gap-4">

          <a
            href="/Apurbo's_Resume.pdf"
            download="Apurbo's_Resume.pdf"
            className="px-6 py-2.5 border border-white/20 rounded-full text-md font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            Download CV
          </a>

        </div>
      </div>
    </header>
  );
}
