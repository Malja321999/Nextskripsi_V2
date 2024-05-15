"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BiSolidChalkboard } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import DataTable, { createTheme } from "react-data-table-component";
import dynamic from "next/dynamic";
const Page = () => {
  const [Collapse, setCollapse] = useState(false);
  const [selectmenu, setselectmenu] = useState("Data Murid");
  const [value, setValue] = useState("10");

  const NoSSR = dynamic(() => import("../no-ssr/NOSSR"), { ssr: false });

  return (
    <div className="flex flex-row justify-start items-start gap-7">
      {/* Sidebar */}
      <div className="flex justify-left items-center">
        <div
          className={`${
            Collapse ? "w-[15rem]" : "w-[5rem]"
          } transition-all duration-300 transform shadow-lg peer-checked:translate-x-0 bg-indigo-600 p-5 rounded-md h-screen flex justify-left items-start mt-[4.5rem]
          `}
        >
          <div>
            {/* button sidebar */}
            <div className={`${!Collapse && "ml-[5px]"}`}>
              <button
                className="text-4xl text-teal-200"
                onClick={() => setCollapse(!Collapse)}
              >
                <FaBars />
              </button>
            </div>

            <div
              className={`flex flex-col mt-10 ${
                !Collapse ? "gap-6" : "gap-10"
              }`}
            >
              {/* button Menu */}
              <button
                onClick={() => setselectmenu("Data Murid")}
                className={`${
                  selectmenu === "Data Murid" && "bg-teal-500 "
                }  rounded-md p-2 hover:bg-teal-400 text-2xl flex justify-start items-center ${
                  Collapse ? "flex-row gap-2" : "flex-col gap-0"
                } `}
              >
                <div>
                  <FaUser />
                </div>
                <div className={` ${!Collapse && "text-xs"}`}>Data Murid</div>
              </button>
              <button
                onClick={() => setselectmenu("Data Kelas")}
                className={`${
                  selectmenu === "Data Kelas" && "bg-teal-500"
                } rounded-md p-2 hover:bg-teal-400 text-2xl flex justify-start items-center ${
                  Collapse ? "flex-row gap-2" : "flex-col gap-0"
                } `}
              >
                <div>
                  <BiSolidChalkboard />
                </div>
                <div className={` ${!Collapse && "text-xs"}`}>Data Kelas</div>
              </button>

              <button
                onClick={() => setselectmenu("Hasil Kuis")}
                className={`${
                  selectmenu === "Hasil Kuis" && "bg-teal-500"
                } rounded-md p-2 hover:bg-teal-400 text-2xl flex justify-start items-center ${
                  Collapse ? "flex-row gap-2" : "flex-col gap-0"
                } `}
              >
                <div>
                  <BsFillJournalBookmarkFill />
                </div>
                <div className={` ${!Collapse && "text-xs"}`}>Hasil Kuis</div>
              </button>
              <button
                onClick={() => setselectmenu("Hasil Ujian")}
                className={`${
                  selectmenu === "Hasil Ujian" && "bg-teal-500"
                } rounded-md p-2 hover:bg-teal-400 text-2xl flex justify-start items-center ${
                  Collapse ? "flex-row gap-2" : "flex-col gap-0"
                } `}
              >
                <div>
                  <BsClipboard2CheckFill />
                </div>
                <div className={` ${!Collapse && "text-xs"}`}>Hasil Ujian</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Content Menu */}
      <div className="text-black mt-[6.5rem] flex justify-center items-start bg-gradient-to-r from-purple-500 to-pink-500 shadow-md w-[88rem] h-[38.5rem] p-5 rounded-md">
        {/* Data Murid */}
        <div>
          {selectmenu === "Data Murid" && (
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-start">
                <div className="text-lg font-bold text-center bg-teal-400 p-5 w-fit flex justify-start items-start rounded-md">
                  Data Murid
                </div>
              </div>
              <div className="mt-2 flex justify-between items-start gap-[55rem]">
                {/* select class */}
                <div className="flex">
                  <button
                    id="states-button"
                    type="button"
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-500"
                  >
                    <label className="font-bold" htmlFor="states">
                      KELAS :
                    </label>
                  </button>

                  <select
                    id="states"
                    className="bg-gray-50 border-2 border-gray-300 text-gray-900 font-bold text-sm rounded-e-lg border-s-gray-100 border-s-2 focus:ring-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option selected>Pilih Kelas</option>
                    <option value="CA">California</option>
                    <option value="TX">Texas</option>
                    <option value="WH">Washinghton</option>
                    <option value="FL">Florida</option>
                    <option value="VG">Virginia</option>
                    <option value="GE">Georgia</option>
                    <option value="MI">Michigan</option>
                  </select>
                </div>
                {/* add account */}
                <button className="flex flex-row justify-center items-center gap-2 bg-white rounded-full p-3 h-fit text-center font-bold text-3xl">
                  <div>
                    <HiUserAdd />
                  </div>
                  <div className="text-base">Add Account</div>
                </button>
              </div>
              <div className="font-bold mt-5 flex justify-between items-start gap-[55rem]">
                {/* Show Data Student */}
                <div className="flex flex-row justify-center items-center gap-2">
                  <div>Tampilkan</div>
                  <select
                    value={value}
                    onChange={(val) => setValue(val.target.value)}
                    id="showData"
                    className="bg-gray-50 border-2 border-gray-300 text-gray-900 font-bold text-sm rounded-md border-s-gray-100 border-s-2 focus:ring-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="10" selected>
                      10
                    </option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  <div>Data</div>
                </div>
                {/*input Search Data Student*/}
                <div className="flex flex-row justify-center items-center gap-2">
                  <div>Cari :</div>
                  <div>
                    <input
                      type="text"
                      className="bg-gray-50 rounded-md p-1 px-4 w-40 focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              {/* table data student */}
              <div className="text-gray-900">
                <NoSSR />
              </div>
            </div>
          )}
        </div>
        {/* Data Kelas */}
        <div>{selectmenu === "Data Kelas" && <div>Data Kelas</div>}</div>
        {/* Hasil Kuis */}
        <div>{selectmenu === "Hasil Kuis" && <div>Hasil Kuis</div>}</div>
        {/* Hasil Ujian */}
        <div>{selectmenu === "Hasil Ujian" && <div>Hasil Ujian</div>}</div>
      </div>
    </div>
  );
};

export default Page;
function constcreateTheme(
  arg0: string,
  arg1: {
    text: { primary: string; secondary: string };
    background: { default: string };
    context: { background: string; text: string };
    divider: { default: string };
    action: { button: string; hover: string; disabled: string };
  },
  arg2: string
) {
  throw new Error("Function not implemented.");
}
