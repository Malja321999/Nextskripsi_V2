"use client";
import React, { useState } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Pra_Tujuan = ({ s,t }: any) => {
  const [Collapse, SetCollapse] = useState(false);
  const [Collapse2, SetCollapse2] = useState(false);
  return (
    <div>
      <div
        className={`bg-gray-900 w-[23rem] p-2 mt-2 rounded-md cursor-pointer ${
          Collapse ? "h-[6rem]" : "h-14"
        } duration-300 relative`}
        onClick={() => SetCollapse(!Collapse)}
      >
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <FaRegCalendarCheck />
            Prasyarat
          </div>

          <IoIosArrowForward
            className={`${Collapse && "rotate-90 duration-300 relative"}`}
          />
        </div>

        <div
          className={`w-[22rem] p-2 bg-gray-800 rounded-md text-base ${
            !Collapse && "scale-0"
          } `}
        >
          {s ?  s : "Tidak Ada Syarat Untuk Pembelajaran"}
        </div>
      </div>
      <div
        className={`bg-gray-900 w-[23rem] p-2 mt-2 rounded-md cursor-pointer ${
          Collapse2 ? "h-[6rem]" : "h-14"
        } duration-300 relative`}
        onClick={() => SetCollapse2(!Collapse2)}
      >
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <FaRegCalendarCheck />
            Tujuan Pembelajaran
          </div>

          <IoIosArrowForward
            className={`${Collapse2 && "rotate-90 duration-300 relative"}`}
          />
        </div>

        <div
          className={`w-[22rem] p-2 bg-gray-800 rounded-md text-base ${
            !Collapse2 && "scale-0"
          } `}
        >
          {t}
        </div>
      </div>
    </div>
  );
};

export default Pra_Tujuan;
