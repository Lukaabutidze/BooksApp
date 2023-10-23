import React, { useEffect, useState } from "react";
import booksvg from "../assets/book.svg";
import { PiSunBold } from "react-icons/pi";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "./context/appContext";

const Navbar = () => {
  const { favorites } = useAppContext();

  const [theme, setTheme] = useState("fantasy");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "fantasy" : "dark");
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="bg-base-350">
      <nav className="flex justify-between px-20 py-10 items-center shadow-2xl">
        <Link to="/">
          <div className="flex justify-start gap-2">
            <img src={booksvg} width="70" alt="" className="" />
            <h1 className="text-4xl font-bold mt-4">BOOKSTACK</h1>
          </div>
        </Link>
        <div className="flex items-center">
          <div className="flex items-center space-x-6 gap-4">
            <Link to="/">
              <h1
                className="font-bold text-xl transition-all-ease duration-500 hover:scale-125 "
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
    </div>
  );
};

export default Navbar;
