import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import header from "../assets/header.png";
import { MdArrowOutward, MdMenu, MdClose } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { MdLightMode } from "react-icons/md";

export const Navbar = ({ isTheme, setIsTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleTheme = () => {
    setIsTheme(!isTheme);
  };

  // Handle scroll to toggle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight - 80;

      setIsSticky(scrollY > viewportHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update activeHash on hashchange
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Handle dark/light theme classes on body
  useEffect(() => {
    if (isTheme) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isTheme]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "My Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div id="home">
      {/* Header Image */}
      <div className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-60%]`}>
        {!isTheme && <img src={header} alt="header" className="w-full" />}
      </div>

      {/* Navbar */}
      <nav
        className={`${
          isSticky
            ? `fixed top-0 w-full shadow-md ${
                isTheme ? "bg-black/70 text-white" : "bg-white/70"
              } z-50`
            : "relative"
        } transition-all duration-300`}
      >
        {/* Navbar content */}

        <div className="mx-auto flex justify-between lg:justify-around items-center py-4 px-4">
          {/* Navbar Logo */}
          {isTheme ? (
            <img
              src={logo1}
              className="w-25 h-25 md:w-20 md:h-20 bg-white/70"
            />
          ) : (
            <img src={logo} className="w-25 h-25 md:w-20 md:h-20 bg-white/70" />
          )}

          {/* Navigation Links */}
          <ul
            className={`hidden md:flex items-center lg:space-x-6 md:space-x-4 lg:px-12 md:px-8 py-3 rounded-full ${
              isTheme
                ? "bg-[#777] text-gray-300 shadow-sm"
                : isSticky
                ? "bg-white"
                : "bg-white shadow-sm"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-md transition-colors ${
                    activeHash === `#${link.id}`
                      ? `underline underline-offset-4 ${
                          isTheme ? "text-black" : "text-purple-500"
                        }`
                      : ""
                  } ${isTheme ? "hover:text-white" : "hover:text-pink-500"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle and Buttons */}
          <div className="flex items-center space-x-4">
            <button className="cursor-pointer" onClick={handleTheme}>
              {isTheme ? (
                <MdLightMode className="w-9 h-9 text-yellow-500" />
              ) : (
                <IoMdMoon className="w-9 h-9" />
              )}
            </button>
            <a href="#contact">
              <button
                className="hidden md:flex items-center justify-center lg:px-6 lg:py-3 md:px-4 md:py-2 px-3 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white 
              shadow-md transition duration-300 ease-in-out transform hover:scale-101 hover:shadow-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none cursor-pointer"
              >
                <span>Contact</span>
                <MdArrowOutward className="w-5 h-5" />
              </button>
            </a>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleSidebar}
                className={`text-3xl z-50 transition-transform duration-300 ${
                  isOpen ? "text-pink-600" : ""
                }`}
              >
                {isOpen ? <MdClose /> : <MdMenu />}
              </button>
              <div
                className={`fixed inset-0 z-40 bg-opacity-50 bg-black transform ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                } transition-transform duration-500 ease-in-out`}
              >
                <div
                  className={`w-full h-full  text-white flex flex-col items-center justify-center shadow-lg relative ${
                    isTheme
                      ? "bg-gradient-to-b from-white via-[#222] to-white to-white"
                      : "bg-gradient-to-b from-white via-pink-500 to-white"
                  }`}
                >
                  <button
                    onClick={toggleSidebar}
                    className="absolute top-5 right-5 text-3xl z-50"
                  >
                    <MdClose />
                  </button>
                  <ul className="flex flex-col items-center justify-center gap-6 text-2xl">
                    {navLinks.map((link) => (
                      <li key={link.id}>
                        <a
                          href={`#${link.id}`}
                          className={`hover:border px-4 py-1 hover:border-5 cursor-pointer ${
                            activeHash === `#${link.id}`
                              ? `underline underline-offset-4 ${
                                  isTheme ? "text-black" : "text-white-500"
                                }`
                              : ""
                          }`}
                          onClick={toggleSidebar}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
