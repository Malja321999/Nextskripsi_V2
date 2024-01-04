"use client";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 w-max-screen md:w-full p-5 bg-indigo-600 top-auto left-0 right-0 z-10 shadow-inherit">
        <p className="text-center">
          Copyright &copy;2023; Designed by
          <span
            style={{
              opacity: "0.7",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: "400",
              margin: "0px 5px",
            }}
          >
            jamaludin
          </span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
