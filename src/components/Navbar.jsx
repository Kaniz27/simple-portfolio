"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Previous Record", href: "record" },
    { name: "Blog", href: "blog" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav className="w-full bg-white  shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-20">
        {/* Logo / Name */}
        <div className="text-2xl font-bold uppercase">
          TAREQUE <span className="text-[#26344e]">MAHMUD</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-bold text-black uppercase">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-[#26344e] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-black hover:text-gray-700 transition-colors"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-6 p-6 font-bold text-black uppercase">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#26344e] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
