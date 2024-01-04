"use client";
import Sidebar from "../component/Sidebar";

const DashboardCPL = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-row justify-start overflow-y-hidden">
      <Sidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default DashboardCPL;
