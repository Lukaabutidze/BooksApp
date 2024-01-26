import React, { useEffect, useState } from "react";
import { PiSunBold } from "react-icons/pi";
import { FaRegMoon, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "./context/appContext";
import stackofbooks from "../assets/transparentbooks.png";

const Navbar = () => {
  const { favorites } = useAppContext();
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("fantasy");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "fantasy" : "dark");
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-base-350">
      <nav className="flex justify-between px-20 py-10 items-center shadow-2xl">
        <a href="/">
          <div className="flex justify-start gap-2">
            <img src={stackofbooks} width="100" alt="" />
            <h1 className="sm:text-4xl  font-bold mt-7 font-serif ">
              BOOKSTACK
            </h1>
          </div>
        </a>
        {/* Hamburger Menu */}
        <div onClick={handleNav} className="lg:hidden z-10 flex justify-center">
          <FaBars size={35} className="mr-4 cursor-pointer" />
        </div>
        <div className="items-center hidden lg:flex">
          <div className="flex items-center space-x-6 gap-2">
            <Link to="/">
              <h1
                className="font-bold text-xl transition-all-ease duration-500 hover:scale-125"
                href="/"
              >
                Home
              </h1>
            </Link>
            <Link to="/favorites">
              <h1 className="font-bold text-red-600 text-xl transition-all-ease duration-500 hover:scale-125">
                Favorites ({favorites.length})
              </h1>
            </Link>
            <Link to="/contactus">
              <h1 className="font-bold text-xl transition-all-ease duration-500 hover:scale-125">
                Contact
              </h1>
            </Link>
            <Link to="/aboutus">
              <h1 className="font-bold text-xl transition-all-ease duration-500 hover:scale-125">
                About Us
              </h1>
            </Link>
            <a>
              <label className="swap swap-rotate">
                <input onClick={toggleTheme} type="checkbox" />
                <div className="swap-on font-semibold shadow">
                  <PiSunBold className="text-3xl" />
                </div>
                <div className="swap-off font-semibold">
                  <FaRegMoon className="text-3xl" />
                </div>
              </label>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden lg:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="/favorites">Favorites ({favorites.length})</a>
          </li>
          <li className="text-2xl py-8">
            <a href="/contactus">Contact</a>
          </li>
          <li className="text-2xl py-8">
            <a href="/aboutus">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
