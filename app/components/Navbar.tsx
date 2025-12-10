"use client";

// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <header
      className={`navbar fixed top-0 left-0 w-full ${
        showDropdown ? "h-[50%] md:h-[35%]" : "h-16"
      } ${
        showDropdown ? "" : "flex"
      } justify-center items-center text-center bg-[#ecf0f1] z-9999 transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center w-[85%]">
        <div className="w-28 h-auto">
          <img
            src="/assets/logo.png"
            alt="Picture of the author"
            className="w-full h-full"
          />
        </div>
        <ul
          className={`hidden lg:flex space-x-10 font-mulish text-primary-dark`}
        >
          <li className="text-lg cursor-pointer">
            <Link className="" href="/">
              Home
            </Link>
          </li>
          <li className="text-lg cursor-pointer">
            <Link className="" href="/about-us">
              About
            </Link>
          </li>
          <li className="text-lg cursor-pointer">
            <Link className="" href="/educators-dialogue">
              Educators Dialogue
            </Link>
          </li>
          <li className="text-lg cursor-pointer">Contact</li>
        </ul>
        {showDropdown ? (
          <LiaTimesSolid
            onClick={() => setShowDropdown(!showDropdown)}
            size={30}
            className="flex lg:hidden "
          />
        ) : (
          <IoIosMenu
            onClick={() => setShowDropdown(!showDropdown)}
            size={30}
            className="flex lg:hidden "
          />
        )}
      </div>
      {showDropdown && (
        <ul className="space-y-7 mx-auto font-mulish text-primary-dark">
          <li
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-lg cursor-pointer"
          >
            <Link className="" href="/">
              Home
            </Link>
          </li>
          <li
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-lg cursor-pointer"
          >
            <Link className="" href="/about-us">
              About
            </Link>
          </li>
          <li
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-lg cursor-pointer"
          >
            <Link className="" href="/educators-dialogue">
              Educators Dialogue
            </Link>
          </li>
          <li
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-lg cursor-pointer"
          >
            Contact
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
