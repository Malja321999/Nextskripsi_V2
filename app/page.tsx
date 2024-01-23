"use client";
import Footer from "./component/Footer";
import * as Icon from "react-icons/fa";
import * as Iconb from "react-icons/bs";
import GHome from "./asset/home.png";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaFlag } from "react-icons/fa";
import { BsListUl } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";

const Home = () => {
  const { data: session, status }: { data: any; status: string } = useSession();

  return (
    <div className="md:h-screen h-[77vh] w-auto flex flex-col justify-center items-center md:mt-0 mt-24 overflow-y-auto">
      {/* Judul */}
      <div className="flex justify-center items-center md:w-1/2 w-fit md:mt-20 mt-[21rem]">
        <div className="text-black dark:text-white">
          <h1 className="flex justify-start text-left text-5xl font-bold md:w-[412px] w-auto">
            BILANGAN BULAT KELAS VII SMP
          </h1>
          <p className="font-medium flex text-justify md:w-[400px] w-[380px] my-2">
            Pembelajaran online untuk Kelas VII SMP. Media pembelajaran yang
            membuat proses belajar menjadi menyenanagkan dan menarik bagi siswa
            dalam mempelajari Bilangan Bulat.
          </p>
          <ul className="flex justify-start items-center gap-2 w-[350px]">
            <li className="flex justify-start items-center">
              <Icon.FaCheckCircle />
              Online
            </li>
            <li className="flex justify-start items-center">
              <Icon.FaCheckCircle />
              Anywhere
            </li>
            <li className="flex justify-start items-center">
              <Icon.FaCheckCircle />
              Knowledge
            </li>
            <li className="flex justify-start items-center">
              <Icon.FaCheckCircle />
              Experience
            </li>
          </ul>
          <ul className="flex justify-start items-center w-48 gap-4">
            <li>
              <Link href={"/bab1_1"}>
                <button className="flex justify-start items-center bg-[#198754] w-48 p-4 rounded-lg cursor-pointer font-bold text-white hover:bg-teal-500 shadow-2xl">
                  <Iconb.BsFillArrowRightCircleFill
                    size={25}
                    style={{ color: "white", margin: "5px" }}
                  />
                  Get Started
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/watch"}>
                <button className="flex justify-start items-center bg-[#0d6efd] w-48 p-4 rounded-lg cursor-pointer font-bold text-white hover:bg-blue-400 shadow-2xl">
                  <Iconb.BsFillArrowRightCircleFill
                    size={25}
                    style={{ color: "white", margin: "5px" }}
                  />
                  Watch Video
                </button>
              </Link>
            </li>
          </ul>
        </div>
        {/* Image Home */}
        <div className="md:flex hidden w-[32rem] rounded-3xl mx-7">
          <div className="mx-auto">
            <Image src={GHome} alt="gambar home" width={350} />
          </div>
        </div>
      </div>
      {/* Menu */}
      <div>
        <ul className="md:flex justify-between items-center md:w-fit w-full p-1 bg-indigo-600 dark:bg-[#111827] border-10 rounded-3xl mx-auto mt-5 mb-16 border-2 border-teal-300 dark:border-[#0d6efd]">
          {session?.user?.role === "admin" ? (
            <li>
              <Link href={"/dashboardAdmin"}>
                <button className="w-[12rem] p-5 text-center m-5 flex flex-col justify-center items-center rounded-lg bg-amber-500 hover:bg-teal-300 shadow-2xl cursor-pointer font-bold">
                  <GrUserAdmin className="w-[35px] h-[35px]" />
                  Admin
                </button>
              </Link>
            </li>
          ) : (
            <li></li>
          )}
          <li>
            <Link href={"/capem"}>
              <button className="w-[12rem] p-5 text-center m-5 flex flex-col justify-center items-center  rounded-lg bg-[#dc3545] hover:bg-teal-300 shadow-2xl cursor-pointer font-bold">
                <FaFlag className="w-[35px] h-[35px]" />
                CaPem
              </button>
            </Link>
          </li>
          <li>
            <Link href={"/bab1_1"}>
              <button className="w-[12rem] p-5 text-center m-5 flex flex-col justify-center items-center rounded-lg bg-emerald-600 hover:bg-teal-300 shadow-2xl cursor-pointer font-bold">
                <BsListUl className="w-[35px] h-[35px]" />
                Content
              </button>
            </Link>
          </li>
          <li>
            <Link href={"/profile"}>
              <button className="w-[12rem] p-5 text-center m-5 flex flex-col justify-center items-center rounded-lg bg-[#0dcaf0] hover:bg-teal-300 shadow-2xl cursor-pointer font-bold">
                <MdAccountCircle className="w-[35px] h-[35px]" />
                Profile
              </button>
            </Link>
          </li>

          <li>
            <Link href={"/about"}>
              <button className="w-[12rem] p-5 text-center m-5 flex flex-col justify-center items-center rounded-lg bg-indigo-500 hover:bg-teal-300 shadow-2xl cursor-pointer font-bold">
                <BsFillInfoSquareFill className="w-[35px] h-[35px]" />
                About
              </button>
            </Link>
          </li>
        </ul>
      </div>
      {/* Footer */}
      <div className="fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
