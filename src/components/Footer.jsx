import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1f2b42] via-[#26344e] to-[#38b7a6] text-gray-300 py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-4">
            Tareque <span className="text-[#007867]">Mahmud</span>
          </h2>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            Passionate Digital Marketer with expertise in SEO and Social Media. I create strategies that boost brand visibility and engagement.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm sm:text-base">📍 45 Grand Central Terminal, New York NY, 1245</p>
          <p className="text-sm sm:text-base">📞 +12 345 678 90</p>
          <p className="text-sm sm:text-base">✉️ Support@parko.com</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-200 text-xl sm:text-2xl">
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
      <div className="mt-12 text-center text-gray-200 text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Tareque_ <span className="text-[#007867]">Mahmud</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
