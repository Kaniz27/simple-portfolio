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
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#1f2b42] via-[#26344e] to-[#38b7a6] shadow-md">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-20 ">
        {/* Logo / Name */}
        <div className="text-2xl font-bold uppercase text-white">
          TAREQUE <span className="text-[#00ffc2]">MAHMUD</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-bold uppercase">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white hover:text-[#00ffc2] transition-colors"
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
            className="text-2xl text-white hover:text-[#00ffc2] transition-colors"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-gradient-to-r from-[#1f2b42] via-[#26344e] to-[#38b7a6] shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-6 p-6 font-bold uppercase">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white hover:text-[#00ffc2] transition-colors"
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
