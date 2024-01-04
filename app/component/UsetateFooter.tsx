"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const enableFooter = ["/", "/about"];

const UsetateFooter = () => {
  const pathname = usePathname();

  return <div>{enableFooter.includes(pathname) && <Footer />}</div>;
};

export default UsetateFooter;
