import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-white p-2 shadow-md">
      <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        
        <li>
          <Link
            href="/login"
            className="block cursor-pointer rounded-lg p-2 text-sm font-semibold text-black transition hover:bg-blue-50 hover:text-blue-500 sm:px-3 sm:text-base"
          >
            Login
          </Link>
        </li>

        <li>
          <Link
            href="/register"
            className="block cursor-pointer rounded-lg p-2 text-sm font-semibold text-black transition hover:bg-blue-50 hover:text-blue-500 sm:px-3 sm:text-base"
          >
            Register
          </Link>
        </li>

        <li>
          <Link
            href="/tutorials"
            className="block cursor-pointer rounded-lg p-2 text-sm font-semibold text-black transition hover:bg-blue-50 hover:text-blue-500 sm:px-3 sm:text-base"
          >
            Tutorials
          </Link>
        </li>

        <li>
          <Link
            href="/stories"
            className="block cursor-pointer rounded-lg p-2 text-sm font-semibold text-black transition hover:bg-blue-50 hover:text-blue-500 sm:px-3 sm:text-base"
          >
            Stories
          </Link>
        </li>


        <li>
          <Link
            href="/about"
            className="block cursor-pointer rounded-lg p-2 text-sm font-semibold text-black transition hover:bg-blue-50 hover:text-blue-500 sm:px-3 sm:text-base"
          >
            About Us
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;