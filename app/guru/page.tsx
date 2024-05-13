"use client";
import React, { useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Page = () => {
  const [Collapse, setCollapse] = useState(false);
  return (
    <div>
      <div className="flex justify-left items-center">
        {/* Sidebar */}
        <div
          className={`bg-indigo-500 p-5 rounded-md h-screen flex justify-left items-center w-[15rem]
          `}
        >
          <button className="text-5xl" onClick={() => setCollapse(!Collapse)}>
            {Collapse ? (
              <MdOutlineKeyboardDoubleArrowLeft />
            ) : (
              <MdOutlineKeyboardDoubleArrowRight />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
