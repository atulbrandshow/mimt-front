import Link from "next/link";
import { Search, Menu, X, BellDot } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary shadow-md font-sans">
      {/* Top Bar */}
      <div className="bg-white">
        <div className="bg-primary text-white text-xs sm:text-sm flex justify-center items-center py-1 rounded-br-2xl">
          <span className="font-semibold">
            Toll Free: <span className="font-bold">1800-103-3797</span>
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="rounded-tl-3xl bg-white">
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 max-w-[1700px] mx-auto">
          {/* Left: Logos */}
          <div className="flex items-center gap-3 sm:gap-5">
            <Link href="/">
              <img
                src="https://www.mangalmay.org/assets/images/best-college-logo.webp"
                alt="Mangalmay Logo"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>
            <img
              src="https://www.mangalmay.org/assets/images/logo-naac.png"
              alt="NAAC Logo"
              className="h-10 sm:h-14 w-auto object-contain"
            />
          </div>

          {/* Right: Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="bg-primary text-white text-sm px-4 py-2 rounded-md font-semibold hover:bg-primary/80 transition-colors">
              Apply Now
            </button>
            <button className="bg-secondary text-black text-sm p-2 rounded-full  font-semibold hover:bg-secondary/80 transition-colors cursor-pointer">
              <BellDot />
            </button>
            <button
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
