"use client";
import { useState } from "react";
import SidebarC from "../component/SidebarC";
import { Layout as L } from "antd";
import NavBar from "../component/Navbar";

const DashboardContent = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="h-screen flex justify-start items-start overflow-y-hidden overflow-x-hidden">
      <L>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <SidebarC/>
      </L>
      <div className="ml-[90rem] w-1 flex-1 p-4 text-white">{children}</div>
    </div>
  );
};

export default DashboardContent;
