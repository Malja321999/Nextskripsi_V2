"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

/* Icon Bab */
import { IoBookOutline, IoBookmarksOutline } from "react-icons/io5";
/* Icon Sub Bab */
import { CiBookmarkPlus } from "react-icons/ci";
/* Icon Latihan */
import { BsPencilSquare } from "react-icons/bs";
/* Icon Contoh */
import { GiInspiration } from "react-icons/gi";
/* Icon Ringkasan */
import { RiAlarmWarningLine, RiMapPinAddFill } from "react-icons/ri";
import Bab2_2_G1 from "../../../asset/G8. GB Bab1.2.png";
import Bab2_2_G2 from "../../../asset/G9. GB Bab1.2.png";
import Bab2_2_G3 from "../../../asset/G10_GB Latihan 1_2.png";
import Bab2_2_G4 from "../../../asset/G11_GB Latihan 1_2.png";
import Bab2_2_G5 from "../../../asset/G12_GB MB.png";
import Bab2_2_G6 from "../../../asset/Bab2_2_G6.png";
import Bab2_2_G7 from "../../../asset/Bab2_2_G7.png";
import Bab2_2_G8 from "../../../asset/Bab2_2_G8.png";
import Bab2_2_G9 from "../../../asset/Bab2_2_G9.png";
import Bab2_2_G10 from "../../../asset/Bab2_2_G10.png";
import Bab2_2_G11 from "../../../asset/G18_GB M.png";
import ButttonpnUP from "@/app/component/ButttonpnUP";
import ButttonpnDOWN from "@/app/component/ButttonpnDOWN";
import { FaRegCalendarCheck } from "react-icons/fa";
import CardRang from "@/app/component/CardRang";

const Page = () => {
  const [Collapse, SetCollapse] = useState(false);
  const [Collapse2, SetCollapse2] = useState(false);
  const sky = "text-sky-400 font-bold";
  const CardCapter =
    "bg-gray-900 p-2 w-fit rounded-md mt-20 mb-2 flex justify-between gap-2";
  const CardTitle =
    "bg-gray-900 p-2 w-fit rounded-md mt-20 mb-2 text-sky-400 font-bold flex justify-between gap-2";
  const CardImg =
    "bg-white border-8 border-gray-900 rounded-md mt-2 mb-7 mx-auto";
  const CVideo =
    "bg-gray-900 w-fit mt-20 mb-10 mx-auto p-4 rounded-md flex flex-col relative";

  return (
    <div className="bg-rose-700 h-[39.5rem] w-[89.5rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl overflow-y-scroll">
      {/* ButtonpnUP */}
      <ButttonpnUP p={"/bab2_1"} n={"/bab2_kuis"} />
      {/* Bab, Prasyarat, dan Tujuan */}
      <div className="mx-2 mt-0 left-[-90.9rem]">
        <div className="bg-gray-900 w-fit p-2 rounded-md mt-3">
          <ul className="flex justify-start gap-2">
            <li className="mt-1">
              <IoBookOutline />
            </li>
            <li>
              BAB 1 <br /> Bilangan Bulat
            </li>
          </ul>
        </div>
        <div className="bg-gray-900 w-[23rem] p-2 rounded-md mt-2 flex flex-col relative">
          <button onClick={() => SetCollapse(!Collapse)}>
            <ul className="flex justify-between gap-2">
              <li className="flex justify-between gap-2">
                <FaRegCalendarCheck className={"mt-[2.5px]"} />
                Prasyarat
              </li>

              <li>{Collapse ? <IoIosArrowDown /> : <IoIosArrowForward />}</li>
            </ul>
          </button>

          <div>
            {Collapse ? (
              <div className="bg-gray-800 w-[22rem] p-2 rounded-md text-base text-start">
                Tidak Ada Syarat Untuk Pembelajaran
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="bg-gray-900 w-[23rem] p-2 rounded-md mt-2 flex flex-col relative">
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
                1. Siswa dapat mengetahui apa itu bilangan bulat
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {/* Video Intro Bab */}
      <div className={CVideo}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DA4nq8YL80I?si=6N7oOQzwWtgVRFrp"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <h1 className="text-center mt-10 mb-5">Judul Video</h1>
      </div>
      {/* Konten Bab */}
      <div className="mx-20 text-justify">
        {/* Judul Sub Bab */}
        <div className={CardCapter}>
          <ul className="flex justify-start gap-2">
            <li className="mt-1">
              <IoBookmarksOutline />
            </li>
            <li>2.2 Ciri-Ciri Dan Contoh Bilangan Bulat</li>
          </ul>
        </div>
        {/* Isi Sub Bab */}
        <div className="mt-5">
          <div className="bg-gray-900 p-2 w-fit rounded-md flex justify-between gap-2">
            <CiBookmarkPlus />
            Berikut merupakan ciri-ciri bilangan bulat.
          </div>
          <ul className="list-decimal list-inside flex flex-col gap-5 mt-2">
            <li>
              Tidak Memiliki Koma atau Pecahan. <br />
              <div className="ml-8">
                Bilangan bulat selalu berupa angka bulat tanpa adanya koma atau
                pecahan. <br /> <span className={sky}> Contoh:</span> -5, 0, 8.
                2. Memiliki Nilai Mutlak Setiap bilangan bulat memiliki nilai
                mutlak, yaitu jarak bilangan tersebut dari nol pada garis
                bilangan bulat. Misalnya, nilai mutlak dari -5 adalah 5.
              </div>
            </li>
            <li>
              Memiliki Nilai Mutlak. <br />
              <div className="ml-8">
                Setiap bilangan bulat memiliki nilai mutlak, yaitu jarak
                bilangan tersebut dari nol pada garis bilangan bulat.{" "}
                <span className={sky}>Misalnya</span>, nilai mutlak dari -5
                adalah 5.
              </div>
            </li>
            <li>
              Terdapat di Sebelah Kiri dan Kanan Nol. <br />
              <div className="ml-8">
                Bilangan bulat terletak baik di sebelah kiri maupun kanan nol
                pada garis bilangan bulat. Semakin besar angka, semakin jauh
                dari nol.
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <div className="bg-gray-900 p-2 w-fit rounded-md flex justify-between gap-2">
            <CiBookmarkPlus />
            Berikut merupakan contoh bilangan bulat.
          </div>
          <ul className="list-decimal list-inside flex flex-col gap-5 mt-2">
            <li>
              Bilangan Positif <br />
              <div className="ml-8">
                Bilangan bulat positif bernilai positif yang biasanya berada di
                sebelah kanan dari angka nol di garis bilangan.{" "}
                <span className={sky}> Contoh:</span> bilangan positif yaitu 1,
                2, 3, 4, 5, 6, 7, 8, 9, 10, dan seterusnya.
              </div>
            </li>
            <li>
              Bilangan Negatif <br />
              <div className="ml-8">
                Bilangan bulat negatif berada di sebelah kiri dari angka nol
                pada garis bilangan.
                <span className={sky}> Contoh:</span>
                -1,-2,-3,-4,-5,-6,-7,-8,-9,-10, dan seterusnya.{" "}
                <span className={sky}>
                  Perbedaan bilangan positif dan negatif{" "}
                </span>
                adalah nilai bilangan bergantung posisi angka. Semakin ke kanan
                posisinya dalam garis bilangan akan semakin besar nilai
                bilangannya. Sedangkan semakin kiri posisinya juga akan semakin
                kecil nilai angkanya.
              </div>
            </li>
            <li>
              Bilangan Nol <br />
              <div className="ml-8">
                Bilangan nol adalah bilangan yang berarti kosong atau tidak ada
                objek apapun. Bilangan nol dilambangkan dengan angka 0. Bilangan
                nol merupakan angka yang istimewa. Semua bilangan yang dikalikan
                dengan nol, akan menghasilkan nol. Dilansir dari Wolfram
                MathWorld, pembagi dan fungsi pembagi nol dianggap tidak
                terdefinisi. Sehingga semua bilangan yang dibagi nol, nilainya
                tidak akan terdefinisi.
              </div>
            </li>
            <li>
              Bilangan Bulat pada Koordinat Kartesian <br />
              <div className="ml-8">
                Dalam koordinat kartesian, bilangan bulat digunakan untuk
                menunjukkan titik-titik pada sumbu X dan Y. Misalnya, titik (3,
                -2) berarti berada pada koordinat tiga di sumbu X dan negatif
                dua di sumbu Y.
              </div>
            </li>
            <li>
              Skala Temperatur dalam Celcius <br />
              <div className="ml-8">
                Penggunaan bilangan bulat juga ditemui dalam mengukur suhu dalam
                derajat Celcius. Misalnya, 5°C menunjukkan suhu yang lebih
                hangat dibandingkan -3°C.
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* ButtonpnDown */}
      <ButttonpnDOWN p={"/bab2_1"} n={"/bab2_kuis"} />
    </div>
  );
};

export default Page;
