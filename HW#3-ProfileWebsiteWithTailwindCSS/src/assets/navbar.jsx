import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">Tanapoom</div>
        <div className="flex space-x-4 items-center justify-center">
          <a href="#home">
            <p className="hover:bg-green-100 p-2 rounded-full">Home</p>
          </a>
          <a href="#aboutme">
            <p className="hover:bg-green-100 p-2 rounded-full">AboutMe</p>
          </a>
          <a href="#gallery">
            <p className="hover:bg-green-100 p-2 rounded-full">Gallery</p>
          </a>
        </div>
        <button className="bg-green-900 text-white  shadow-gray-400 shadow-2xl px-4 py-2 rounded-full hover:bg-green-600">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
