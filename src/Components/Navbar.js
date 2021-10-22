import React, { useState } from "react";

export function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false); //Controls menu toggle
  return (
    <div className="w-screen h-20 bg-white shadow-xl flex flex-col justify-evenly">
      <div className="flex flex-row justify-between static">
        <div className="font-black text-2xl ml-8 hover:text-indigo-500 transition duration-300 cursor-pointer">
          PRW
        </div>
        <div className="hidden flex-row justify-evenly w-80 bg sm:flex">
          <div className="hover:bg-indigo-500 hover:text-white transition duration-300 p-2 rounded-md cursor-pointer">
            <div className="font-mono">Write a review</div>
          </div>
          <div className="hover:bg-indigo-500 hover:text-white transition duration-300 p-2 rounded-md cursor-pointer">
            <div className="font-mono">Log In</div>
          </div>
        </div>
        <div
          className={`${
            menuToggle ? "flex" : "hidden"
          } absolute sm:hidden flex-col right-2 top-14 bg-white shadow-2xl p-2 rounded-b-xl`}
        >
          <div className="relative z-10 font-mono">
            <span className="hover:text-white hover:bg-indigo-500 p-2 cursor-pointer rounded-md transition duration-300">
              Write a review
            </span>
          </div>
          <div className="relative z-10 font-mono p-2">
            <span className="hover:text-white hover:bg-indigo-500 p-2 cursor-pointer rounded-md transition duration-300">
              Log In
            </span>
          </div>
        </div>
        {/* Menu Icon */}
        <svg
          onClick={() => setMenuToggle(!menuToggle)}
          xmlns="http://www.w3.org/2000/svg"
          className="sm:hidden mr-6 h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
    </div>
  );
}
