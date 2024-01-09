"use client";
import Footer from "./component/Footer";
import * as Icon from "react-icons/fa";
import * as Iconb from "react-icons/bs";
import GHome from "./asset/home.png";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="h-screen w-auto flex justify-center items-center mt-40 md:mt-12">
      <div className="h-[900px] md:mx-35 w-full relative left-40">
        <div className="overflow-y-scroll overflow-x-hidden md:overflow-hidden h-screen mt-3.2">
          <div className="flex justify-between ml-[60px] mt-3">
            {/* Judul */}
            <div className="h-[600px] flex justify-between items-center md:mx-32">
              <div className="text-black dark:text-white">
                <h1 className="flex justify-start font-sans text-left text-5xl font-bold w-40 md:w-[412px]">
                  BILANGAN BULAT KELAS VII SMP
                </h1>
                <p className="font-medium flex text-justify md:w-[400px] w-[380px] my-2">
                  Pembelajaran online untuk Kelas VII SMP. Media pembelajaran
                  yang membuat proses belajar menjadi menyenanagkan dan menarik
                  bagi siswa dalam mempelajari Bilangan Bulat.
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
                    <Link href={"/signup"}>
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
                      <button className="flex justify-start items-center bg-[#0d6efd] w-48 p-4 rounded-lg cursor-pointer font-bold text-white hover:bg-teal-500 shadow-2xl">
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
          </div>
          {/* Menu */}
          <div>
            <ul className="md:flex justify-between items-center md:w-[900px] w-72 p-1 bg-indigo-600 border-10 rounded-3xl md:mx-[175px] mx-10 my-[-100px] mb-10 border-2 border-teal-300">
              <li>
                <Link href={"/capem"}>
                  <button className="w-60 p-10 px-24  mx-5 my-5 rounded-lg bg-[#dc3545] hover:bg-teal-300 shadow-2xl cursor-pointer font-bold">
                    CaPem
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/bab1_1"}>
                  <button className="w-60 p-10 px-24  mx-5 my-5 rounded-lg bg-[#ffc107] hover:bg-teal-300 shadow-2xl cursor-pointer font-bold">
                    Content
                  </button>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <button className="w-60 p-10 px-24 mx-5 my-5 rounded-lg bg-[#0dcaf0] hover:bg-teal-300 shadow-2xl cursor-pointer font-bold">
                    About
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer */}
        <div className="fixed bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
