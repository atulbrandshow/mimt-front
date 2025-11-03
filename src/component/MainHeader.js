import React from "react";
import { Search } from "lucide-react";

function MainHeader() {
  return (
    <header className="w-full bg-white shadow-md font-sans">
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-sm flex justify-center items-center py-1">
        <span className="font-semibold">
          Toll Free: <span className="font-bold">1800-103-3797</span>
        </span>
      </div>

      {/* Main Header */}
      <div className="flex flex-wrap justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        {/* Left: Logos */}
        <div className="flex items-center gap-4">
          <img
            src="https://www.mangalmay.org/assets/images/best-college-logo.webp"
            alt="Mangalmay Logo"
            className="h-14 w-auto object-contain"
          />
          <img
            src="https://www.mangalmay.org/assets/images/logo-naac.png"
            alt="NAAC Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-red-600 transition-colors">
            Blogs
          </a>
          <a href="#" className="hover:text-red-600 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-red-600 transition-colors">
            Apply Online
          </a>
        </nav>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3">
          <button className="bg-red-600 text-white text-sm px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors">
            Apply Now
          </button>
          <button className="bg-yellow-400 text-black text-sm px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition-colors">
            Announcement
          </button>
          <button
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            aria-label="Search"
          >
            <Search size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
