"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BiSolidChalkboard } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";

const Page = () => {
  const [Collapse, setCollapse] = useState(false);
  const [selectmenu, setselectmenu] = useState("Data Murid");
  return (
    <div className="flex flex-row justify-start items-start gap-7">
      <div className="flex justify-left items-center">
        {/* Sidebar */}
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
                <div className="text-5xl font-bold text-center bg-teal-500 p-5 w-fit flex justify-start items-start rounded-md">
                  Data Murid
                </div>
              </div>

              <div className="mt-10 flex justify-between items-start gap-[55rem]">
                {/* select class */}

                <div className="flex">
                  <button
                    id="states-button"
                    type="button"
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none  dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600"
                  >
                    USA
                  </button>
                  <label htmlFor="states" className="sr-only">
                    Choose a state
                  </label>
                  <select
                    id="states"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a state</option>
                    <option value="CA">California</option>
                    <option value="TX">Texas</option>
                    <option value="WH">Washinghton</option>
                    <option value="FL">Florida</option>
                    <option value="VG">Virginia</option>
                    <option value="GE">Georgia</option>
                    <option value="MI">Michigan</option>
                  </select>
                </div>

                {/* <div className="flex justify-center items-center">
                  <label
                    htmlFor="countries"
                    className="bg-gray-600 text-white rounded-l-lg h-[50px] w-fit flex flex-row  justify-center items-center text-center text-xl  focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  >
                    Kelas :
                  </label>
                  <form className="max-w-sm mx-auto">
                    <select
                      disabled={false}
                      id="countries"
                      className="rounded-r-lg h-[52px] w-fit flex flex-row  justify-center items-center text-center text-xl bg-white border-2 border-e-gray-500 border-y-gray-500 text-gray-900 focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    >
                      <option selected>Pilih Kelas</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </form>
                </div> */}
                {/* add account */}
                <button className="flex flex-row justify-center items-center gap-2 bg-white rounded-full p-3 h-fit text-center font-bold text-3xl">
                  <div>
                    <HiUserAdd />
                  </div>
                  <div className="text-xl">Add Account</div>
                </button>
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
