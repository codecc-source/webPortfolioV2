"use client"; 

import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className={`tham tham-e-squeeze tham-w-6 ${isOpen ? "tham-active" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="tham-box">
        <div className="tham-inner bg-white" />
      </div>
    </button>
  );
}
