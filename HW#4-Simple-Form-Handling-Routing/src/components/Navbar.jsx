import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-blue-900 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="flex space-x-6">
            <NavLink
              to="/"
              end
              className="text-lg font-semibold px-4 py-2 rounded-full hover:text-white hover:bg-blue-300 transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/login"
              className="text-lg font-semibold px-4 py-2 rounded-full hover:text-white hover:bg-blue-300 transition-colors"
            >
              Log In
            </NavLink>
            <NavLink
              to="/fav"
              className="text-lg font-semibold px-4 py-2 rounded-full hover:text-white hover:bg-blue-300 transition-colors"
            >
              Favourites
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
