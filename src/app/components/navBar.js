"use client";

import { useState } from "react";
import HamburgerMenu from "./hamburger";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return ( 
    <nav className="bg-white dark:bg-gray-900/95 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-8" alt="logo" />
          <span className="self-center text-2xl font-semibold">Carlito O. Tingson Jr</span>
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <HamburgerMenu />
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:w-auto font-custom ${isOpen ? "block" : "hidden"}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li>
              <a href="/" className="block px-4 py-2 text-gray-700 dark:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block px-4 py-2 text-gray-700 dark:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="block px-4 py-2 text-gray-700 dark:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="block px-4 py-2 text-gray-700 dark:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
