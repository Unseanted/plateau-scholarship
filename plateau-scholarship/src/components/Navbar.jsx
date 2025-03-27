import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-200 flex items-center justify-between fixed w-full h-16 top-0 z-10">
      {/* Logo on the Left */}
      <div className="text-xl font-bold">Logo</div>

      {/* Centered Navigation Links */}
      <ul className="flex gap-x-6 font-light absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
        <li className="hover:text-blue-600">Home</li>
        <li className="hover:text-blue-600">About</li>
        <li className="hover:text-blue-600">Students</li>
      </ul>

      {/* Buttons on the Right */}
      <div className="space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Log In
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
