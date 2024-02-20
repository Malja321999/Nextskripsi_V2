"use client";
import React, { useState } from "react";
import NavBar from "./Navbar";
import { usePathname } from "next/navigation";

const UsetateNavbar = () => {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(true);
  const disableNavbar = [
    "signup",
    "signin",
    "coba",
    "pagekuis",
  ];

  return (
    <div>{!disableNavbar.includes(pathname.split("/")[1]) && <NavBar />}</div>
  );
};

export default UsetateNavbar;
