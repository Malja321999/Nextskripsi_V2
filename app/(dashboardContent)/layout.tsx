"use client";
import SidebarC from "../component/SidebarC";
import NavBar from "../component/Navbar";

const DashboardContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex justify-start items-start overflow-y-hidden overflow-x-hidden">
      <SidebarC />
      <div className="ml-[90rem] w-1 flex-1 p-4 text-white">{children}</div>
    </div>
  );
};

export default DashboardContent;
