"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BiSolidChalkboard } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BsClipboard2CheckFill } from "react-icons/bs";
import DataTable, { createTheme } from "react-data-table-component";
import dynamic from "next/dynamic";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const [Collapse, setCollapse] = useState(false);
  const [selectmenu, setselectmenu] = useState("Data Siswa");
  const [value, setValue] = useState("10");

  const NoSSR = dynamic(() => import("../../no-ssr_data_siswa/NOSSR"), {
    ssr: false,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const pathname = usePathname();

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
              <Link href="/halaman_guru/data_siswa">
                <button
                  className={`${
                    pathname === "/halaman_guru/data_siswa" && "bg-teal-500 "
                  }  rounded-md p-2 hover:bg-teal-400 text-2xl flex justify-start items-center ${
                    Collapse ? "flex-row gap-2" : "flex-col gap-0"
                  } `}
                >
                  <div>
                    <FaUser />
                  </div>
                  <div className={` ${!Collapse && "text-xs"}`}>Data Siswa</div>
                </button>
              </Link>
              <Link href="/halaman_guru/data_kelas">
                <button
                  className={`${
                    pathname === "/halaman_guru/data_kelas" && "bg-teal-500"
                  } rounded-md p-2 hover:bg-teal-400 text-2xl flex justify-start items-center ${
                    Collapse ? "flex-row gap-2" : "flex-col gap-0"
                  } `}
                >
                  <div>
                    <BiSolidChalkboard />
                  </div>
                  <div className={` ${!Collapse && "text-xs"}`}>Data Kelas</div>
                </button>
              </Link>

              <Link href="/halaman_guru/data_hasil_kuis">
                <button
                  className={`${
                    pathname === "/halaman_guru/data_hasil_kuis" &&
                    "bg-teal-500"
                  } rounded-md p-2 hover:bg-teal-400 text-2xl flex justify-start items-center ${
                    Collapse ? "flex-row gap-2" : "flex-col gap-0"
                  } `}
                >
                  <div>
                    <BsFillJournalBookmarkFill />
                  </div>
                  <div className={` ${!Collapse && "text-xs"}`}>Hasil Kuis</div>
                </button>
              </Link>
              <Link href="/halaman_guru/data_ujian_akhir">
                <button
                  className={`${
                    pathname === "/halaman_guru/data_ujian_akhir" &&
                    "bg-teal-500"
                  } rounded-md p-2 hover:bg-teal-400 text-2xl flex justify-start items-center ${
                    Collapse ? "flex-row gap-2" : "flex-col gap-0"
                  } `}
                >
                  <div>
                    <BsClipboard2CheckFill />
                  </div>
                  <div className={` ${!Collapse && "text-xs"}`}>
                    Ujian Akhir
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Content Menu */}
      <div className="text-black mt-[6.5rem] flex justify-center items-start bg-gradient-to-r from-purple-500 to-pink-500 shadow-md w-[88rem] h-[38.5rem] p-5 rounded-md">
        {/* Data Hasil Kuis */}
        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-start">
              <div className="text-md font-bold text-center bg-teal-400 p-5 w-fit flex justify-start items-start rounded-md">
                Data Hasil Kuis
              </div>
            </div>

            {/* table data student */}
            <div className="text-gray-900">
              <NoSSR />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
