"use client";
import React from "react";
import { useEffect, useState } from "react";
import Bilcon from "../asset/Bilcon.svg";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function NavBar({ darkMode, setDarkMode }: any) {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark ") setDarkMode(true);
  }, [setDarkMode]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div>
      <nav className="fixed w-max-screen md:w-full h-auto md:h-[91px] bg-indigo-600 top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <div>
                  <Image
                    src={Bilcon}
                    alt="Bilcon"
                    className="w-8 h-5 dark:text-white"
                  />
                  <div
                    className={`${
                      pathname === "/" ? "text-teal-100" : "text-white"
                    } text-3xl font-bold`}
                  >
                    BIL<span className="text-teal-600">BUL</span>
                  </div>
                </div>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-teal-500 rounded-md outline-none focus:border-white focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <IoMdClose size={20} /> : <FaBars size={20} />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li>
                  <Link href="/capem" onClick={() => setNavbar(!navbar)}>
                    <span
                      className={`${
                        pathname === "/capem" ? "text-teal-300" : "text-white"
                      } pb-6 text-xl py-2 px-6 text-center  hover:bg-teal-500 border-teal-500 md:hover:text-teal-500 md:hover:bg-transparent rounded-md`}
                    >
                      Capain Pembelajaran
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/bab1_1" onClick={() => setNavbar(!navbar)}>
                    <span
                      className={`${
                        pathname === "/bab1_1" ? "text-teal-300" : "text-white"
                      } pb-6 text-xl py-2 px-6 text-center  hover:bg-teal-500 border-teal-500 md:hover:text-teal-500 md:hover:bg-transparent rounded-md`}
                    >
                      Content
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    <span
                      className={`${
                        pathname === "/about" ? "text-teal-300" : "text-white"
                      } pb-6 text-xl py-2 md:px-6 text-center   hover:bg-teal-500  border-teal-500  md:hover:text-teal-500 md:hover:bg-transparent rounded-md`}
                    >
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/signup" onClick={() => setNavbar(!navbar)}>
                    <span
                      className={`${
                        pathname === "/signup" ? "text-teal-300" : "text-white"
                      } pb-6 text-xl py-2 md:px-6 text-center hover:bg-teal-500  border-teal-500  md:hover:text-teal-500 md:hover:bg-transparent rounded-md`}
                    >
                      Sign Up
                    </span>
                  </Link>
                </li>
                <li className="w-28 text-xl text-white py-2 px-6 text-center border-teal-500  rounded-md">
                  <div
                    className="relative justify-end w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    <FaMoon className="text-white" size={18} />
                    <div
                      className="absolute bg-white w-6 h-6 rounded-full transform transition-transform duration-300"
                      style={darkMode ? { left: "2px" } : { right: "px" }}
                    ></div>
                    <BsSunFill className="ml-auto text-yellow-400" size={18} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
