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

const Page = () => {
  const [Collapse, SetCollapse] = useState(false);
  const [Collapse2, SetCollapse2] = useState(false);
  const sky = "text-sky-400 font-bold";
  const CardSoal =
    "mt-5 bg-white w-fit rounded-md border-8 border-gray-900 text-black p-5";
  const CardTitle =
    "bg-gray-900 p-2 w-fit rounded-md mt-5 text-sky-400 font-bold flex justify-between gap-2";
  const CVideo =
    "bg-gray-900 w-fit mt-20 mb-10 mx-auto p-4 rounded-md flex flex-col relative";

  return (
    <div className="bg-emerald-700 h-[37.1rem] w-[89.5rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl overflow-y-scroll">
      <ButttonpnUP p={"/bab1_1"} n={"/bab2_2"} />
      {/* Bab, Prasyarat, dan Tujuan */}
      <div className="mx-2 mt-0 left-[-90.9rem]">
        <div className="bg-gray-900 w-fit p-2 rounded-md mt-3">
          <ul className="flex justify-start gap-2">
            <li className="mt-1">
              <IoBookOutline />
            </li>
            <li>
              BAB 2 <br /> Bilangan Positif Dan Negatif
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
                1. Siswa dapat memahami penggunaan tanda Bilangan{" "}
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

      {/* Konten Bab 1 */}
      <div className="mx-20 text-justify">
        {/* Judul Sub Bab */}
        <div className="bg-gray-900 w-fit p-2 rounded-md mt-3">
          <ul className="flex justify-start gap-2">
            <li className="mt-1">
              <IoBookmarksOutline />
            </li>
            <li>2.1 Bilangan Dengan Tanda</li>
          </ul>
        </div>
        {/* Isi Sub Bab */}
        <div className="mt-5 mb-2">
          {/*span className={sky}>Bilangan bulat</span>*/}
          Di sekolah Dasar kita telah belajar tentang bilangan positif dan 0.
          Disekolah Menengah kita akan mempelajari juga bilangan negatif. Jadi,
          bilangan bulat mencakup bilangan positif, 0 , dan negatif. Bilangan
          bulat positif juga disebut bilangan asli.
          {/* Gambar Bab */}
          <Image
            src={Bab2_G1}
            alt="Bab1_G1"
            className="bg-gray-900 p-2 w-[200vh] rounded-md my-7 mx-auto"
            width={1000}
            height={4000}
          />
          {/* 2 kolom paragraf dan image oversize */}
          <div className="flex justify-between gap-5">
            <div className="w-[450vh]">
              Termometer di samping ini menunjukkan suhu di Dieng dan Surabaya.
              Berapa suhunya masing-masing? Perhatikan suhu tersebut. Jika
              dibandingkan dengan 0°, mana yang lebih tinggi dan mana yang lebih
              rendah? Jika suhunya 2°C di bawah 0, maka kita gunakan tanda -,
              sehingga ditulis (-2)°C. Dibaca “minus/negatif 2°C”. Untuk suhu
              27°C di atas 0, maka kita gunakan tanda +, dan ditulis 27°C.
              Dibaca “plus/ positif 27°C ”.
              <br />
              Jika bilangan memiliki tanda + dan -, maka disebut secara
              berturut-turut bilangan positif dan negatif. Ditetapkan 0°C
              sebagai suhu acuan (pangkal) ketika air membeku dan es meleleh.
            </div>
            <div className="w-[80%]">
              <Image
                src={Bab2_G2}
                alt="Bab1_G1"
                className="bg-gray-900 p-2 w-[100vh] h-[50vh] ml-15 rounded-md"
              />
            </div>
          </div>
          <div className="mt-5">
            Kita dapat menyatakan suhu lebih tinggi dari 0°C dengan tanda
            positif, dan suhu lebih rendah dari 0°C dengan tanda negatif. Selain
            untuk menyatakan suhu, beberapa besaran juga dinyatakan dengan tanda
            positif dan negatif dengan titik acuan 0.
          </div>
          {/* Contoh */}
          <div className="mt-5">
            <div className="bg-gray-900 p-2 w-fit rounded-md flex justify-between gap-2">
              <GiInspiration />
              Contoh :
            </div>
            <div className="gap-5">
              <div>
                Ditetapkan titik A sebagai titik pangkal 0 km. Titik “6 km di
                sebelah Timur A” sebagai +6 km. Titik “4 km di sebelah Barat A”
                dinyatakan sebagai -4 km.
              </div>
              <div>
                <Image
                  src={Bab2_G4}
                  alt="Bab1_G1"
                  className="bg-gray-900 p-2 w-[180vh] h-[30vh] rounded-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Latihan */}
        <div className="mt-10">
          <div className={CardTitle}>
            <BsPencilSquare />
            Latihan 1
          </div>
          <div className="mt-2">
            Nyatakanlah suhu berikut ini dengan tanda positif atau negatif.
            <ol className="mt-2 list-decimal list-inside">
              <li>
                Suhu (6,5)°C lebih tinggi dibandingkan 0°C <sup></sup>
              </li>
              <li>Suhu 10°C lebih rendah dibandingkan 0°C</li>
            </ol>
          </div>
        </div>
        <div className="mt-5">
          <div className="bg-gray-900 p-2 w-fit rounded-md flex justify-between gap-2">
            <CiBookmarkPlus />
            Variasi Penggunaan Tanda `+` dan `-`
          </div>
          <div>
            Ketinggian Gunung Semeru adalah 3.676 meter di atas permukaan laut,
            dan kedalaman Palung Jawa adalah 7.140 meter di bawah permukaan
            laut. Ditetapkan titik pangkal sebagai acuan adalah garis pantai.
            Bagaimana kita menyatakan besaran-besaran pada gambar berikut ini
            dengan menggunakan tanda positif dan negatif?
          </div>
        </div>
        {/* Latihan */}
        <div className="mt-5">
          <div className={CardTitle}>
            <BsPencilSquare />
            Latihan 2
          </div>
          <div className="flex justify-between gap-5">
            <div className="w-[150vh]">
              Ketinggian Gunung Semeru adalah 3.676 meter di atas permukaan
              laut, dan kedalaman Palung Jawa adalah 7.140 meter di bawah
              permukaan laut. Ditetapkan titik pangkal sebagai acuan adalah
              garis pantai. Bagaimana kita menyatakan besaran-besaran pada
              gambar berikut ini dengan menggunakan tanda positif dan negatif?
            </div>
            <div className="w-[100%]">
              <Image
                src={Bab2_G3}
                alt="Bab1_G1"
                className="bg-gray-900 p-2 w-[100vh] h-[50vh] ml-15 rounded-md"
              />
            </div>
          </div>
        </div>
        {/* Latihan */}
        <Cardlatihan n={3} />
        <div className={CardSoal}>
          <div className="mt-5 gap-5">
            <ul className="list-decimal list-inside">
              <li className="mt-5">
                Berdasarkan contoh 1. Titik -7 Km dan +2,5 Km menyatakan posisi
                dimana pada garis? Tunjukkan nilai tersebut dengan ↑. Kemudian,
                nyatakan dengan menggunakan kata-kata.
              </li>
              <li className="mt-5">
                Nyatakan besaran-besaran berikut ini menggunakan tanda positif
                dan negatif.
                <ul className="realative ml-10">
                  <li className="mt-2">
                    a) ”Rugi 500 rupiah”, jika ”untung 400 rupiah” dinyatakan
                    sebagai +400 rupiah.
                  </li>
                  <li className="mt-2">
                    b) ”30 menit dari sekarang” jika ”20 menit yang lalu”
                    dinyatakan sebagai -20 menit.
                  </li>
                  <li className="mt-2">
                    c) ”4°C lebih rendah dibandingkan suhu tertinggi kemarin”
                    berdasarkan suhu tertinggi hari ini, jika 3°C lebih tinggi
                    dibandingkan suhu tertinggi kemarin”    dinyatakan sebagai
                    (+3)°C.
                  </li>
                </ul>
              </li>
              <li className="mt-5">
                Papan pengumuman lomba lari cepat 100 m menunjukkan bahwa
                kecepatam angin buritan adalah 0,9 m per detik dinyatakan sebagi
                ”+0,9 m/detik”. Apa artinya -2,3 m/detik”?
              </li>
              <li className="mt-5">
                Nyatakan bilangan-bilangan berikut ini menggunakan tanda positif
                dan negatif.
                <ul className="realative ml-10">
                  <li>a) Bilangan 8 lebih dari 0</li>
                  <li>b) Bilangan 4 kurang dari 0</li>
                </ul>
              </li>
              <li className="mt-5">
                Tentukan bilangan-bilangan berikut ini apakah positif atau
                negatif. Nyatakanlah selisihnya terhadap 0 (lebih besar atau
                lebih kecil dari 0).
                <ul className="flex justify-between w-[60rem] ml-12">
                  <li>a) -6</li>
                  <li>b) +3</li>
                  <li>c) +1,2</li>
                  <li>d) -2/5</li>
                  <li>e) -0,1</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ButttonpnDOWN p={"/bab1_1"} n={"/bab2_2"} />
    </div>
  );
};

export default Page;
