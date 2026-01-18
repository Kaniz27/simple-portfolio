import GetConnectedSection from "@/pages/GetConnectedSection";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className=" mt-30  my-16 px-4 md:px-8">
        <GetConnectedSection></GetConnectedSection>
      <div className="flex flex-col mx-auto max-w-6xl lg:flex-row gap-12">
        
        {/* Left: Contact Info */}
        <div className="flex-1  bg-gray-100 rounded-3xl p-8 shadow-lg flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-gray-900">Contact Info</h2>
          <p className="text-gray-700">
            Hey, let's talk. If you have any questions simply use the following contact details.
          </p>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-800">Address:</h3>
            <p className="text-gray-600">45 Grand Central Terminal, New York NY, 1245</p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-800">Get in touch:</h3>
            <p className="text-gray-600">+12 345 678 90</p>
            <p className="text-gray-600">Support@parko.com</p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-800">Social:</h3>
            <div className="flex gap-4 mt-2 text-gray-700">
              {/* Facebook with actual page link */}
              <a
                href="https://www.facebook.com/profile.php?id=61579989263581"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 bg-gray-100 rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Send a Message</h2>
          <form>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#26344e]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#26344e]"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#26344e]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#26344e] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#1f2b42] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
