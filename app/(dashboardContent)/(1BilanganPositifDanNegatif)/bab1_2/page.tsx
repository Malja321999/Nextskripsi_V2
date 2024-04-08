"use client";
import React, { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Bab2_G1 from "../../../asset/G6. Bilangan Negatif Dan Positif Di Dalam Bilangan BUlat.png";
import Bab2_G2 from "../../../asset/G2_Termometer.png";
import Bab2_G3 from "../../../asset/G3_Gunung Semeru.png";
import Bab2_G4 from "../../../asset/G4.Timur dan Barat.png";
/* Icon Bab */
import { IoBookmarksOutline } from "react-icons/io5";
/* Icon SubPer */
import { CiBookmarkPlus } from "react-icons/ci";
/* Icon Latihan */
import { BsPencilSquare } from "react-icons/bs";
/* Icon Contoh */
import { GiInspiration } from "react-icons/gi";
import Link from "next/link";
import ButttonpnUP from "@/app/component/ButttonpnUP";
import ButttonpnDOWN from "@/app/component/ButttonpnDOWN";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiMapPinAddFill } from "react-icons/ri";
import Cardlatihan from "@/app/component/Cardlatihan";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { useRouter } from "next/navigation";

const Page = () => {
  const [Collapse2, SetCollapse2] = useState(false);
  const sky = "text-sky-400 font-bold";
  const CardSoal =
    "mt-5 bg-white w-fit rounded-md border-8 border-gray-900 text-black p-5";
  const CardTitle =
    "bg-gray-900 p-2 w-fit rounded-md mt-5 text-sky-400 font-bold flex justify-between gap-2";
  const CVideo =
    "bg-gray-900 w-fit mt-5 mb-10 mx-auto p-4 rounded-md flex flex-col relative";
  const CSlide = "mt-5 mb-10 mx-auto flex flex-col relative";
  const [next, setnext] = useState("part1");
  const router = useRouter();

  return (
    <div className="bg-rose-700 md:h-[39.5rem] h-[40rem] md:w-[89.5rem] w-[41rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl overflow-y-scroll overflow-x-hidden">
      <ButttonpnUP p={"/bab1_1"} n={"/bab1_kuis"} />

      {/* Judul Bab */}
      <div className="mx-2 mt-0 left-[-90.9rem]">
        <div className="bg-gray-900 w-fit p-2 rounded-md mt-3">
          <ul className="flex justify-start gap-2">
            <li className="mt-1">
              <IoBookOutline />
            </li>
            <li>
              BAB 1.2 <br /> Membandingkan Bilangan Bulat
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
                    Siswa dapat menentukan posisi bilangan pada garis bilangan
                    dengan benar.
                  </li>
                  <br />
                  <li>
                    Siswa dapat membandingkan bilangan-bilangan menggunakan
                    tanda pertidaksamaan yang tepat.
                  </li>
                  <br />
                  <li>
                    Siswa dapat menyatakan nilai mutlak dari suatu bilangan.
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* Video Intro Bab 1.2 */}
        <div className={CVideo}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WfnTG0q3D6o?si=0HlcHnbHP74JpdeB"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <h1 className="text-center mt-10 mb-5">
            MEMBANDINGKAN BILANGAN BULAT
          </h1>
        </div>

        {/* Konten Bab 1.2 */}
        <div className="wrapperIfreme">
          <iframe
            width="900"
            height="500"
            loading="lazy"
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-5u0wRd0&#x2F;KsfvvNbdHZUXR3eAaDUYZw&#x2F;view?embed"
            allowFullScreen
          ></iframe>
        </div>
        {/* Latihan Soal */}
        <div>
          <Cardlatihan n={2} />
          <div className="mt-1">
            <h2 className="font-bold">
              Coba jawablah pertanyaan berikut dengan baik dan benar!
            </h2>
            <br />
            {/* Soal A */}
            <div id="question">
              <h3 className="text-yellow-200 font-bold">
                A. Letakkan bilangan-bilangan berikut pada garis bilangan dengan
                tepat.
              </h3>
              <iframe
                className="h-[30rem] w-[85rem] rounded-md border-4 border-gray-800"
                loading="lazy"
                src="/QuizDragAndDrop/bab1_2A"
                allowFullScreen
              ></iframe>
            </div>
            {/* Soal B */}
            <h3 className="mt-20 text-yellow-200 font-bold">
              B. Bandingkan bilangan-bilangan berikut dengan mengubah tanda (
              &gt; atau &lt; ) pada pernyataan bilangan berikut.
            </h3>
            <iframe
              className="h-[30rem] w-[85rem] rounded-md border-4 border-gray-800"
              loading="lazy"
              src="/QuizDragAndDrop/bab1_2B"
              allowFullScreen
            ></iframe>

            {/* Soal C */}
            <h3 className="mt-20 text-yellow-200 font-bold">
              C. Tentukan nilai mutlak dari bilangan berikut :
            </h3>
            <iframe
              className="h-[30rem] w-[85rem] rounded-md border-4 border-gray-800"
              loading="lazy"
              src="/QuizDragAndDrop/bab1_2C"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <ButttonpnDOWN p={"/bab1_1"} n={"/bab1_kuis"} />
    </div>
  );
};

export default Page;