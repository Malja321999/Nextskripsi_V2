"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
/* Icon Ringkasan */
import { RiAlarmWarningLine, RiSlideshow2Fill } from "react-icons/ri";
/* Icon Pras */
import { FaRegCalendarCheck, FaVideo } from "react-icons/fa";
/* Icon Tujuan */
import { RiMapPinAddFill } from "react-icons/ri";
/* Icon Uncheck */
import { ImCheckboxUnchecked } from "react-icons/im";
import Bab3_1_G1 from "../../../asset/G19_MBab2.png";
import Bab3_1_G2 from "../../../asset/bab3_1_G2.png";
import Bab3_1_G3 from "../../../asset/bab3_1_G3.png";
import Bab3_1_G4 from "../../../asset/bab3_1_G4.png";
import Bab3_1_G5 from "../../../asset/bab3_1_G5.png";
import Bab3_1_G6 from "../../../asset/bab3_1_G6.png";
import Bab3_1_G7 from "../../../asset/bab3_1_G7.png";
import Bab3_1_G8 from "../../../asset/bab3_1_G8.png";
import Bab3_1_G9 from "../../../asset/bab3_1_G9.png";
import Cardbab from "@/app/component/Cardbab";
import Cardsubbab from "@/app/component/Cardsubbab";
import Cardlatihan from "@/app/component/Cardlatihan";
import Cardcontoh from "@/app/component/Cardcontoh";
import Cardg from "@/app/component/Cardg";
import ButttonpnUP from "@/app/component/ButttonpnUP";
import ButttonpnDOWN from "@/app/component/ButttonpnDOWN";
import Cardsubper from "@/app/component/Cardsubper";
import { IoBookOutline, IoBookmarksOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdCenterFocusStrong } from "react-icons/md";
import { BiFullscreen } from "react-icons/bi";

const Page = () => {
  const [Collapse, SetCollapse] = useState(false);
  const [Collapse2, SetCollapse2] = useState(false);
  const sky = "text-sky-400 font-bold";
  const CardSoal =
    "mt-5 bg-white w-fit rounded-md border-8 border-gray-900 text-black p-5";
  const CVideo =
    "bg-gray-900 w-fit mt-5 mb-10 mx-auto p-4 rounded-md flex flex-col relative";

  const [FinishReading, setFinishReading] = useState(false);

  const [Media, setMedia] = useState("");
  const Tfullscreen = () => {
    const element = document.getElementById("fullscreenItem");

    const isFullscreen = document.fullscreenElement;
    console.log("isFullscreen");
    if (isFullscreen) {
      document.exitFullscreen();
      console.log("exit fullscreen");
    } else {
      element?.requestFullscreen();
      console.log("enter fullscreen");
    }
  };

  return (
    <div className="bg-emerald-700 h-[39.5rem] w-[89.5rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl overflow-y-scroll overflow-x-hidden">
      <ButttonpnUP p={"/bab1_1"} n={"/bab2_kuis"} />
      {/* Judul Bab */}
      <div className="mx-2 mt-0 left-[-90.9rem]">
        <div className="bg-gray-900 w-fit p-2 rounded-md mt-3">
          <ul className="flex justify-start gap-2">
            <li className="mt-1">
              <IoBookOutline />
            </li>
            <li>
              BAB 2 <br /> Penjumlahan dan Pengurangan Bilangan Bulat
            </li>
          </ul>
        </div>
      </div>

      <div>
        {/* Tujuan Pembelajaran 1.2 */}
        <div className="mx-20 bg-gray-900 w-[23rem] p-2 rounded-md mt-2 flex flex-col relative">
          <button onClick={() => SetCollapse2(!Collapse2)}>
            <ul className="flex justify-between gap-2">
              <li className="flex justify-between gap-2 text-2xl">
                <RiMapPinAddFill className={"mt-[2.5px]"} />
                Tujuan Pembelajaran
              </li>
              <li>{Collapse2 ? <IoIosArrowDown /> : <IoIosArrowForward />}</li>
            </ul>
          </button>

          <div>
            {Collapse2 ? (
              <div className="bg-gray-800 w-[22rem] p-2 rounded-md text-base text-start">
                <ul className="list-decimal list-inside">
                  <li>
                    Siswa dapat melakukan proses penjumlahan dua bilangan bulat
                    dengan tepat.
                  </li>
                  <br />
                  <li>
                    Siswa dapat melakukan pengurangan dua bilangan bulat dengan
                    tepat.
                  </li>
                  <br />
                  <li>
                    Siswa dapat melakukan proses perhitungan yang terdapat dua
                    operasi (penjumlahan dan pengurangan) dengan benar.
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* Tombol Media */}
        <div className="mt-5 mb-5">
          <ul className="flex flex-row gap-5 justify-center items-center text-center cursor-pointer">
            <li
              onClick={() => setMedia("")}
              className={`${
                Media === "" ? "bg-indigo-500" : "bg-gray-800"
              } flex justify-center items-center gap-2  hover:bg-gray-700 w-[8rem] h-[3rem] p-2 rounded-md text-base`}
            >
              <MdCenterFocusStrong />
              Fokus
            </li>
            <li
              onClick={() => setMedia("video")}
              className={`${
                Media === "video" ? "bg-indigo-500" : "bg-gray-800"
              } flex justify-center items-center gap-2  hover:bg-gray-700 w-[8rem] h-[3rem] p-2 rounded-md text-base`}
            >
              <FaVideo />
              Video
            </li>
            <li
              onClick={() => setMedia("slide")}
              className={`${
                Media === "slide" ? "bg-indigo-500" : "bg-gray-800"
              } flex justify-center items-center gap-2  hover:bg-gray-700 w-[8rem] h-[3rem] p-2 rounded-md text-base`}
            >
              <RiSlideshow2Fill />
              Slide
            </li>
          </ul>
        </div>

        {/* Konten Bab 2 */}
        <div>
          {Media === "" ? (
            <div className="flex flex-col gap-1">
              <button
                onClick={Tfullscreen}
                className="text-2xl ml-[12rem] flex justify-center items-center bg-gray-800 hover:bg-slate-700 w-[58.6rem] rounded-md"
              >
                <BiFullscreen />
                Fulllscreen
              </button>
              <div className="wrapperIfreme">
                <iframe
                  id="fullscreenItem"
                  loading="lazy"
                  src="https://scratch.mit.edu/projects/1013171666/embed"
                  allowFullScreen
                ></iframe>

                <button
                  onClick={() => setFinishReading(!FinishReading)}
                  className="ml-[15rem] hover:bg-teal-400 text-5xl bg-teal-600 p-5 w-fit rounded-md mt-10 mb-2 font-bold flex justify-between gap-2"
                >
                  <span>
                    {FinishReading ? (
                      <BsFillBookmarkCheckFill />
                    ) : (
                      <BsBookmark />
                    )}
                  </span>
                  Selesai Membaca
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

        {/* Video Bab 2 */}
        <div>
          {Media === "video" ? (
            <div className={CVideo}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/KjetIZJ6vFM?si=JJP-UgBllESKl3fK"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <h1 className="text-center mt-10 mb-5">
                Penjumlahan dan <br /> Pengurangan Bilangan Bulat
              </h1>
              <ul className="ml-5 list-decimal list-inside w-50 text-xs">
                <h1 className="mb-2 font-bold">Tujuan Video Pembelajaran :</h1>
                <li>
                  Siswa dapat melakukan proses penjumlahan dua bilangan bulat
                  dengan tepat.
                </li>
                <br />
                <li>
                  Siswa dapat melakukan pengurangan dua bilangan bulat dengan
                  tepat.
                </li>
                <br />
                <li>
                  Siswa dapat melakukan proses perhitungan yang terdapat dua
                  operasi <br /> (penjumlahan dan pengurangan) dengan benar.
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>

        {/* Slide Bab 2 */}
        <div>
          {Media === "slide" ? (
            <div className="wrapperIfreme">
              <iframe
                width="900"
                height="500"
                loading="lazy"
                src="https://www.canva.com/design/DAF_QKcRC0Q/0-bw9LtH5M9guADqDflk4Q/view?embed"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => setFinishReading(!FinishReading)}
                className="ml-[15.3rem] hover:bg-teal-400 text-5xl bg-teal-600 p-5 w-fit rounded-md mt-10 mb-2 font-bold flex justify-between gap-2"
              >
                <span>
                  {FinishReading ? <BsFillBookmarkCheckFill /> : <BsBookmark />}
                </span>
                Selesai Membaca
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* Latihan Soal 3 */}
      <div>
        {FinishReading ? (
          <div>
            <Cardlatihan n={3} />
            <div className="mt-1">
              <h2 className="font-bold">
                Coba jawablah pertanyaan berikut dengan baik dan benar!
              </h2>
              <br />
              {/* Soal A */}
              <h3 className="text-yellow-200 font-bold">
                A. Jawablah pertanyaan-pertanyaan berikut ini.
              </h3>
              <div className="flex flex-col">
                <iframe
                  className="h-[35rem] w-100 rounded-md border-4 border-gray-800"
                  loading="lazy"
                  src="/QuizDragAndDrop/bab2_Ta"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Soal B */}
              <div id="question">
                <h3 className="text-yellow-200 font-bold">
                  B. Tentukan hasil dari penjumlahan / pengurangan berikut:
                </h3>
              </div>
              <iframe
                className="h-[40rem] w-[85rem] rounded-md border-4 border-gray-800"
                loading="lazy"
                src="/QuizDragAndDrop/bab2_A"
                allowFullScreen
              ></iframe>
              <iframe
                className="h-[40rem] w-[85rem] rounded-md border-4 border-gray-800"
                loading="lazy"
                src="/QuizDragAndDrop/bab2_B"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <ButttonpnDOWN p={"/bab1_1"} n={"/bab2_kuis"} />
    </div>
  );
};

export default Page;
