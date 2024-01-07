"use client";
import SubMenu from "antd/es/menu/SubMenu";
import { useState } from "react";
import {
  AiFillEnvironment,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  BsArrowLeftShort,
  BsChevronRight,
  BsFillImageFill,
  BsPerson,
  BsReverseLayoutTextSidebarReverse,
  BsSearch,
} from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

const Coba = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenutOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", link: "/" },
    { title: "Pages", link: "/pages", icon: <AiOutlineFileText /> },
    {
      title: "Media",
      link: "/media",
      spacing: true,
      icon: <BsFillImageFill />,
    },
    {
      title: "Project",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "Submenu1", link: "/submenu1" },
        { title: "Submenu2", link: "/submenu2" },
        { title: "Submenu3", link: "/submenu3" },
      ],
    },
    { title: "Analytics", link: "/analytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", link: "/inbox", icon: <AiOutlineMail /> },
    {
      title: "Profile",
      link: "/profile",
      spacing: true,
      icon: <BsPerson />,
    },
    { title: "Settings", link: "/settings", icon: <AiOutlineSetting /> },
    { title: "Logout", link: "/logout", icon: <AiOutlineLogout /> },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Tailwind
          </h1>
        </div>

        <div
          className={`flex items-center rounded-md bg-light-white mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />
          <input
            type={"search"}
            placeholder={"Search"}
            className={`text-base bg-transparent w-full focus:outline-none ${
              !open && "hidden"
            } duration-200`}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`textt-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronRight
                    className={`text-2xl ${
                      submenuOpen && "rotate-90"
                    } duration-300`}
                    onClick={() => setSubmenutOpen(!submenuOpen)}
                  />
                )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="textt-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>

        <div className="p-7">
          <div className="textt-2xl font-semibold"></div>
        </div>
      </div>
    </div>
  );
};

export default Coba;
