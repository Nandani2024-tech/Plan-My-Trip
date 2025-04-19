// This component renders the top navigation bar with logo and links to all main pages beautifully spaced.

// Colors:
// Primary - #C1AA7F
// Secondary - #24282B

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.jpg"; // Ensure correct path

function Navbar() {
  return (
    <nav className="w-full bg-[#C1AA7F] text-white shadow-md">
      {/* Top Section: Logo + Brand Name */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-2xl font-serif font-semibold">PlanMyTrip</span>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="w-full bg-[#24282B] text-white flex justify-center px-6 py-4 text-sm md:text-base font-medium">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-2">
          <Link to="/" className="hover:text-[#C1AA7F] transition">
            Home
          </Link>
          <Link to="/placesToVisit" className="hover:text-[#C1AA7F] transition">
            Places To Visit
          </Link>
          <Link to="/posts" className="hover:text-[#C1AA7F] transition">
            Posts
          </Link>
          <Link to="/create-trip" className="hover:text-[#C1AA7F] transition">
            Create Trip
          </Link>
          <Link to="/trip-list" className="hover:text-[#C1AA7F] transition">
            Trip List
          </Link>
          <Link to="/ai-assistant" className="hover:text-[#C1AA7F] transition">
            AI Assistant
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
