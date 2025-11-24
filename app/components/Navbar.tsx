// import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="navbar fixed top-0 left-0 w-full h-16 flex justify-center items-center text-center bg-[#ecf0f1] z-9999 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center w-[85%]">
        <div className="w-28 h-auto">
          <img
            src="/assets/logo.png"
            alt="Picture of the author"
            className="w-full h-full"
          />
        </div>
        <ul className="flex space-x-10 font-mulish text-primary-dark">
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
          <li className="text-lg cursor-pointer">Educators Dialogue</li>
          <li className="text-lg cursor-pointer">Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
