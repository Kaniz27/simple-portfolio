import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f2b42] text-gray-300 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Tareque Mahmud</h2>
          <p className="text-gray-400">
            Expert Digital Marketing Solutions for your business growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p>📍 45 Grand Central Terminal, New York NY, 1245</p>
          <p>📞 +12 345 678 90</p>
          <p>✉️ Support@parko.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <a
              href="https://www.facebook.com/profile.php?id=61579989263581"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Tareque_Mahmud. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
