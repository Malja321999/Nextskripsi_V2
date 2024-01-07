"use client";
import React, { useState } from "react";
import NavBar from "./Navbar";
import { usePathname } from "next/navigation";

const disableNavbar = [
  "/signup",
  "/signin",
  "/bab1_1",
  "/bab1_2",
  "/bab1_kuis",
  "/bab2_1",
  "/bab2_2",
  "/bab2_kuis",
  "/bab3_1",
  "/bab3_2",
  "/bab3_kuis",
  "/bab4_1",
  "/bab4_2",
  "/bab4_kuis",
  "/coba",
];

const UsetateNavbar = () => {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div>
      {!disableNavbar.includes(pathname) && (
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      )}
    </div>
  );
};

export default UsetateNavbar;
