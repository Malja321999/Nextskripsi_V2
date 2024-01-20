"use client";
import Image from "next/image";
import Bilcon from "../asset/Bilcon.svg";
import { useState } from "react";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
} from "react-icons/tb";
import { FaA, FaB, FaC, FaD } from "react-icons/fa6";
import { BsArrowLeftShort, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarC = () => {
  const [open1, setOpen1] = useState(true);
  const [submenuOpen1, setSubmenutOpen1] = useState(false);

  const [submenuOpen2, setSubmenutOpen2] = useState(false);

  const [submenuOpen3, setSubmenutOpen3] = useState(false);

  const [submenuOpen4, setSubmenutOpen4] = useState(false);

  const pathname = usePathname();

  return (
    <div className="flex mt-[5.7rem] h-screen bg-teal-900 dark:bg-dark-purple">
      <div
        className={`h-[38rem] p-5 pt-8 overflow-y-auto overflow-x-hidden ${
          open1 ? "w-74" : "w-[6rem]"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-[2px] top-9 border border-dark-purple cursor-pointer ${
            !open1 && "rotate-180"
          }`}
          onClick={() => setOpen1(!open1)}
        />
        <div className="inline-flex">
          <Image
            src={Bilcon}
            width={30}
            height={30}
            alt="logo"
            className={`text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open1 && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open1 && "scale-0"
            }`}
          >
            BILBUL
          </h1>
        </div>
        <ul className="flex flex-col gap-2 w-fit">
          <li>
            {/* Bab 1 */}
            <ul className="pt-2">
              <>
                <Link href="/bab1_1">
                  <li
                    className={`${
                      open1 && "w-[275px]"
                    } text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white hover:text-teal-200 rounded-md 
                ${pathname === "/bab1_1" && "bg-teal-500"}
                ${pathname === "/bab1_kuis" && "bg-teal-500"}`}
                    onClick={() => setSubmenutOpen1(!submenuOpen1)}
                  >
                    <span className="text-2xl block float-left">
                      <TbCircleNumber1 />
                    </span>
                    <span
                      className={`text-xs font-medium flex-1 ${
                        !open1 && "hidden"
                      }`}
                    >
                      Bilangan Bulat
                    </span>

                    {open1 && (
                      <BsChevronRight
                        className={`text-2xl ${
                          submenuOpen1 && "rotate-90"
                        } duration-300`}
                      />
                    )}
                  </li>
                </Link>
                {submenuOpen1 && (
                  <ul className={`${open1 && "ml-5"}`}>
                    <Link href="/bab1_1">
                      <li
                        className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                          pathname === "/bab1_1" && "bg-blue-600"
                        }`}
                      >
                        <span>
                          <span className="text-2xl block float-left">
                            <FaA />
                          </span>
                          <span
                            className={`text-xs font-medium flex-1 ${
                              !open1 && "hidden"
                            }`}
                          >
                            1.1 Mengenal Bilangan Bulat
                          </span>
                        </span>
                      </li>
                    </Link>
                    <Link href="/bab1_kuis">
                      <li
                        className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                          pathname === "/bab1_kuis" && "bg-blue-600"
                        }`}
                      >
                        <span>
                          <span className="text-2xl block float-left">
                            <FaB />
                          </span>
                          <span
                            className={`text-xs font-medium flex-1 ${
                              !open1 && "hidden"
                            }`}
                          >
                            Kuis 1
                          </span>
                        </span>
                      </li>
                    </Link>
                  </ul>
                )}
              </>
            </ul>
          </li>

          <li>
            {/* Bab 2 */}
            <ul className="pt-2">
              <>
                <Link href="/bab2_1">
                  <li
                    className={`${
                      open1 && "w-[275px]"
                    } text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white hover:text-teal-200 rounded-md 
                ${pathname === "/bab2_1" && "bg-teal-500"}
                ${pathname === "/bab2_2" && "bg-teal-500"}
                ${pathname === "/bab2_kuis" && "bg-teal-500"}`}
                    onClick={() => setSubmenutOpen2(!submenuOpen2)}
                  >
                    <span className="text-2xl block float-left">
                      <TbCircleNumber2 />
                    </span>
                    <span
                      className={`text-xs font-medium flex-1 ${
                        !open1 && "hidden"
                      }`}
                    >
                      Bilangan Positif Dan Negatif
                    </span>
                    {open1 && (
                      <BsChevronRight
                        className={`text-2xl ${
                          submenuOpen2 && "rotate-90"
                        } duration-300`}
                      />
                    )}
                  </li>
                </Link>
                {submenuOpen2 && (
                  <ul className={`${open1 && "ml-5"}`}>
                    <Link href="/bab2_1">
                      <li
                        className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                          pathname === "/bab2_1" && "bg-blue-600"
                        }`}
                      >
                        <span>
                          <span className="text-2xl block float-left">
                            <FaA />
                          </span>
                          <span
                            className={`text-xs font-medium flex-1 ${
                              !open1 && "hidden"
                            }`}
                          >
                            2.1 Bilangan Dengan Tanda
                          </span>
                        </span>
                      </li>
                    </Link>
                    <Link href="/bab2_2">
                      <li
                        className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                          pathname === "/bab2_2" && "bg-blue-600"
                        }`}
                      >
                        <span>
                          <span className="text-2xl block float-left">
                            <FaB />
                          </span>
                          <span
                            className={`text-xs font-medium flex-1 ${
                              !open1 && "hidden"
                            }`}
                          >
                            2.2 Membandingkan Bilangan Bulat
                          </span>
                        </span>
                      </li>
                    </Link>
                    <Link href="/bab2_kuis">
                      <li
                        className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                          pathname === "/bab2_kuis" && "bg-blue-600"
                        }`}
                      >
                        <span>
                          <span className="text-2xl block float-left">
                            <FaC />
                          </span>
                          <span
                            className={`text-xs font-medium flex-1 ${
                              !open1 && "hidden"
                            }`}
                          >
                            Kuis 2
                          </span>
                        </span>
                      </li>
                    </Link>
                  </ul>
                )}
              </>
            </ul>
          </li>
          <li>
            {/* Bab 3 */}
            <ul className="pt-2">
              <>
                <Link href="/bab3_1">
                  <li
                    className={`${
                      open1 && "w-[275px]"
                    } text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white hover:text-teal-200 rounded-md
                ${pathname === "/bab3_1" && "bg-teal-500"}
                ${pathname === "/bab3_2" && "bg-teal-500"}
                ${pathname === "/bab3_kuis" && "bg-teal-500"}
                `}
                    onClick={() => setSubmenutOpen3(!submenuOpen3)}
                  >
                    <span className="text-2xl block float-left">
                      <TbCircleNumber3 />
                    </span>
                    <span
                      className={`text-xs font-medium flex-1 ${
                        !open1 && "hidden"
                      }`}
                    >
                      Penjumlahan Dan Pengurangan
                    </span>
                    {open1 && (
                      <BsChevronRight
                        className={`text-2xl ${
                          submenuOpen3 && "rotate-90"
                        } duration-300`}
                      />
                    )}
                  </li>
                </Link>
                {submenuOpen3 && (
                  <ul className={`${open1 && "ml-5"}`}>
                    <Link href="/bab3_1">
                      <li
                        className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                          pathname === "/bab3_1" && "bg-blue-600"
                        }`}
                      >
                        <span>
                          <span className="text-2xl block float-left">
                            <FaA />
                          </span>
                          <span
                            className={`text-xs font-medium flex-1 ${
                              !open1 && "hidden"
                            }`}
                          >
                            3.1 Penjumalahan Bilangan Bulat
                          </span>
                        </span>
                      </li>
                    </Link>
                    <Link href="/bab3_2">
                      <li
                        className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                          pathname === "/bab3_2" && "bg-blue-600"
                        }`}
                      >
                        <span>
                          <span className="text-2xl block float-left">
                            <FaB />
                          </span>
                          <span
                            className={`text-xs font-medium flex-1 ${
                              !open1 && "hidden"
                            }`}
                          >
                            3.2 Pengurangan Bilangan Bulat
                          </span>
                        </span>
                      </li>
                    </Link>
                    <Link href="/bab3_kuis">
                      <li
                        className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                          pathname === "/bab3_kuis" && "bg-blue-600"
                        }`}
                      >
                        <span>
                          <span className="text-2xl block float-left">
                            <FaC />
                          </span>
                          <span
                            className={`text-xs font-medium flex-1 ${
                              !open1 && "hidden"
                            }`}
                          >
                            Kuis 3
                          </span>
                        </span>
                      </li>
                    </Link>
                  </ul>
                )}
              </>
            </ul>
          </li>

          <li>
            {/* Bab 4 */}
            <ul className="pt-2">
              <>
                <Link href="/bab4_1">
                  <li
                    className={`${
                      open1 && "w-[275px]"
                    } text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white hover:text-teal-200 rounded-md
                ${pathname === "/bab4_1" && "bg-teal-500"}
                ${pathname === "/bab4_2" && "bg-teal-500"}
                ${pathname === "/bab4_kuis" && "bg-teal-500"}
                `}
                    onClick={() => setSubmenutOpen4(!submenuOpen4)}
                  >
                    <span className="text-2xl block float-left">
                      <TbCircleNumber4 />
                    </span>
                    <span
                      className={`text-xs font-medium flex-1 ${
                        !open1 && "hidden"
                      }`}
                    >
                      Perkalian Dan Pembagian
                    </span>
                    {open1 && (
                      <BsChevronRight
                        className={`text-2xl ${
                          submenuOpen4 && "rotate-90"
                        } duration-300`}
                      />
                    )}
                  </li>
                </Link>
                {submenuOpen4 && (
                  <ul className={`${open1 && "ml-5"}`}>
                    <Link href="/bab4_1">
                      <li
                        className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                          pathname === "/bab4_1" && "bg-blue-600"
                        }`}
                      >
                        <span>
                          <span className="text-2xl block float-left">
                            <FaA />
                          </span>
                          <span
                            className={`text-xs font-medium flex-1 ${
                              !open1 && "hidden"
                            }`}
                          >
                            4.1 Perkalian Bilangan Bulat
                          </span>
                        </span>
                      </li>
                    </Link>
                    <Link href="/bab4_2">
                      <li
                        className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                          pathname === "/bab4_2" && "bg-blue-600"
                        }`}
                      >
                        <span>
                          <span className="text-2xl block float-left">
                            <FaB />
                          </span>
                          <span
                            className={`text-xs font-medium flex-1 ${
                              !open1 && "hidden"
                            }`}
                          >
                            4.2 Pembagian Bilangan Bulat
                          </span>
                        </span>
                      </li>
                    </Link>
                    <Link href="/bab4_kuis">
                      <li
                        className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                          pathname === "/bab4_kuis" && "bg-blue-600"
                        }`}
                      >
                        <span>
                          <span className="text-2xl block float-left">
                            <FaC />
                          </span>
                          <span
                            className={`text-xs font-medium flex-1 ${
                              !open1 && "hidden"
                            }`}
                          >
                            Kuis 4
                          </span>
                        </span>
                      </li>
                    </Link>
                  </ul>
                )}
              </>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarC;
