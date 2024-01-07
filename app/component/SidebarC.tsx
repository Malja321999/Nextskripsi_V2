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
import { BsArrowLeftShort, BsChevronRight } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
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
    <div className="flex mt-[5rem] overflow-y-auto overflow-x-hidden h-[40rem]">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open1 ? "w-72" : "w-20"
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
        {/* Bab 1 */}
        <ul className="pt-2">
          <>
            <Link href="/bab1_1">
              <li
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white hover:text-teal-200 rounded-md ${
                  pathname === "/bab1_1" && "bg-light-white text-teal-200"
                } ${
                  pathname === "/bab1_kuis" && "bg-light-white text-teal-200"
                }`}
                onClick={() => setSubmenutOpen1(!submenuOpen1)}
              >
                <span className="text-2xl block float-left">
                  <TbCircleNumber1 />
                </span>
                <span
                  className={`text-base font-medium flex-1  ${
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
            {submenuOpen1 && open1 && (
              <ul>
                <Link href="/bab1_1">
                  <li
                    className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                      pathname === "/bab1_1" && "bg-blue-600"
                    }`}
                  >
                    1.1 Mengenal Bilangan Bulat
                  </li>
                </Link>
                <Link href="/bab1_kuis">
                  <li
                    className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                      pathname === "/bab1_kuis" && "bg-blue-600"
                    }`}
                  >
                    Kuis 1
                  </li>
                </Link>
              </ul>
            )}
          </>
        </ul>
        {/* Bab 2 */}
        <ul className="pt-2">
          <>
            <Link href="/bab2_1">
              <li
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white hover:text-teal-200 rounded-md 
                ${pathname === "/bab2_1" && "bg-light-white text-teal-200"}
                ${pathname === "/bab2_2" && "bg-light-white text-teal-200"}
                ${pathname === "/bab2_kuis" && "bg-light-white text-teal-200"}`}
                onClick={() => setSubmenutOpen2(!submenuOpen2)}
              >
                <span className="text-2xl block float-left">
                  <TbCircleNumber2 />
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
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
            {submenuOpen2 && open1 && (
              <ul>
                <Link href="/bab2_1">
                  <li
                    className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                      pathname === "/bab2_1" && "bg-blue-600"
                    }`}
                  >
                    2.1 Bilangan Dengan Tanda
                  </li>
                </Link>
                <Link href="/bab2_2">
                  <li
                    className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                      pathname === "/bab2_2" && "bg-blue-600"
                    }`}
                  >
                    2.2 Membandingkan Bilangan Bulat
                  </li>
                </Link>
                <Link href="/bab2_kuis">
                  <li
                    className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                      pathname === "/bab2_kuis" && "bg-blue-600"
                    }`}
                  >
                    Kuis 2
                  </li>
                </Link>
              </ul>
            )}
          </>
        </ul>
        {/* Bab 3 */}
        <ul className="pt-2">
          <>
            <Link href="/bab3_1">
              <li
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white hover:text-teal-200 rounded-md
                ${pathname === "/bab3_1" && "bg-light-white text-teal-200"}
                ${pathname === "/bab3_2" && "bg-light-white text-teal-200"}
                ${pathname === "/bab3_kuis" && "bg-light-white text-teal-200"}
                `}
                onClick={() => setSubmenutOpen3(!submenuOpen3)}
              >
                <span className="text-2xl block float-left">
                  <TbCircleNumber3 />
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
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
            {submenuOpen3 && open1 && (
              <ul>
                <Link href="/bab3_1">
                  <li
                    className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                      pathname === "/bab3_1" && "bg-blue-600"
                    }`}
                  >
                    3.1 Penjumalahan Bilangan Bulat
                  </li>
                </Link>
                <Link href="/bab3_2">
                  <li
                    className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                      pathname === "/bab3_2" && "bg-blue-600"
                    }`}
                  >
                    3.2 Pengurangan Bilangan Bulat
                  </li>
                </Link>
                <Link href="/bab3_kuis">
                  <li
                    className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                      pathname === "/bab3_kuis" && "bg-blue-600"
                    }`}
                  >
                    Kuis 3
                  </li>
                </Link>
              </ul>
            )}
          </>
        </ul>
        {/* Bab 4 */}
        <ul className="pt-2">
          <>
            <Link href="/bab4_1">
              <li
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white hover:text-teal-200 rounded-md
                ${pathname === "/bab4_1" && "bg-light-white text-teal-200"}
                ${pathname === "/bab4_2" && "bg-light-white text-teal-200"}
                ${pathname === "/bab4_kuis" && "bg-light-white text-teal-200"}
                `}
                onClick={() => setSubmenutOpen4(!submenuOpen4)}
              >
                <span className="text-2xl block float-left">
                  <TbCircleNumber4 />
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
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
            {submenuOpen4 && open1 && (
              <ul>
                <Link href="/bab4_1">
                  <li
                    className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                      pathname === "/bab4_1" && "bg-blue-600"
                    }`}
                  >
                    4.1 Perkalian Bilangan Bulat
                  </li>
                </Link>
                <Link href="/bab4_2">
                  <li
                    className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                      pathname === "/bab4_2" && "bg-blue-600"
                    }`}
                  >
                    4.2 Pembagian Bilangan Bulat
                  </li>
                </Link>
                <Link href="/bab4_kuis">
                  <li
                    className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                      pathname === "/bab4_kuis" && "bg-blue-600"
                    }`}
                  >
                    Kuis 4
                  </li>
                </Link>
              </ul>
            )}
          </>
        </ul>

        <div className="p-7">
          <div className="textt-2xl font-semibold"></div>
        </div>
      </div>
    </div>
  );
};

export default SidebarC;
