"use client";
import React, { useMemo, useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { usePathname } from "next/navigation";
import { TbTargetArrow } from "react-icons/tb";
import { FaListCheck } from "react-icons/fa6";
import { FaSitemap } from "react-icons/fa6";
import Link from "next/link";

const menuItems = [
  {
    id: 1,
    label: "Capaian Pembelajaran",
    icon: <FaListCheck size={25} />,
    link: "/capem",
  },
  {
    id: 2,
    label: "Tujuan Pembelajaran",
    icon: <TbTargetArrow size={25} />,
    link: "/tujuan",
  },
  {
    id: 3,
    label: "Peta Konsep",
    icon: <FaSitemap size={25} />,
    link: "/peta",
  },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const pathname = usePathname();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === pathname),
    [pathname]
  );

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div>
      <div
        className={`text-white dark:text-black mt-20 h-screen px-4 pt-8 pb-4 bg-teal-800 dark:bg-light flex justify-between flex-col ${
          !toggleCollapse ? "w-80" : "w-20"
        }`}
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOver}
        style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between relative">
            {isCollapsible && (
              <button
                className="bg-indigo-500 p-4 rounded absolute right-0 top-[-16px]"
                onClick={handleSidebarToggle}
              >
                {toggleCollapse ? (
                  <MdOutlineKeyboardDoubleArrowRight size={25} />
                ) : (
                  <MdOutlineKeyboardDoubleArrowLeft size={25} />
                )}
              </button>
            )}
          </div>
          <div className="flex flex-col items-start mt-24">
            {menuItems.map(({ icon: Icon, ...menu }) => {
              return (
                <Link
                  key={menu.id}
                  href={menu.link}
                  className={`flex items-center cursor-pointer hover:bg-indigo-200 rounded w-full overflow-hidden whitespace-nowrap,
      ${activeMenu?.id === menu.id ? "bg-indigo-400" : ""}`}
                >
                  <div className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>{Icon}</div>
                    {!toggleCollapse && (
                      <span className="text-md font-semibold">
                        {menu.label}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
