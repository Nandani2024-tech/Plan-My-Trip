import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.jpg";

function Navbar() {
  const baseStyle = "hover:text-[#C1AA7F] transition";
  const activeStyle = "text-[#C1AA7F] underline underline-offset-4";

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${baseStyle} ${activeStyle}` : baseStyle
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/placesToVisit"
            className={({ isActive }) =>
              isActive ? `${baseStyle} ${activeStyle}` : baseStyle
            }
          >
            Places To Visit
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? `${baseStyle} ${activeStyle}` : baseStyle
            }
          >
            Posts
          </NavLink>
          <NavLink
            to="/create-trip"
            className={({ isActive }) =>
              isActive ? `${baseStyle} ${activeStyle}` : baseStyle
            }
          >
            Create Trip
          </NavLink>
          <NavLink
            to="/trip-list"
            className={({ isActive }) =>
              isActive ? `${baseStyle} ${activeStyle}` : baseStyle
            }
          >
            Trip List
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
