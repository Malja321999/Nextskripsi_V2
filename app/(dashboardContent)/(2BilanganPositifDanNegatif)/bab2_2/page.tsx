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
    <div className="bg-emerald-700 h-[37.1rem] w-[89.5rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl overflow-y-scroll">
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
                1. Siswa dapat Menyajikan Bilangan Bulat negatif pada garis
                bilangan dan membandingkannya
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
            <li>2.2 Membandingkan Bilangan Bulat</li>
          </ul>
        </div>
        {/* Isi Sub Bab */}
        <div className="mt-5">
          Kita dapat menyajikan bilangan positif dan negatif pada garis bilangan
          dengan memperpanjang garis ke arah kiri dari 0. Tandai titik-titik
          dengan menggunakan interval yang sama. Kemudian cocokkan posisi
          bilangan pada garis bilangan tersebut. Contohnya pada garis bilangan
          dibawah ini dimana terdapat titik A bersesuian dengan -4 dan B
          bersuaian dengan -1,5.
          <div>
            {/* Gambar Bab 2_2*/}
            <Image src={Bab2_2_G1} alt="Bab2_2_G1" className={CardImg} />
          </div>
        </div>
        <div className="mt-5">
          Titik yang bersuaian dengan 0 disebut pangkal. Arah ke kanan disebut
          arah positif, sedangkan arah ke kiri disebut arah negatif.
          <div>
            {/* Gambar Bab 2_2*/}
            <Image src={Bab2_2_G2} alt="Bab2_2_G2" className={CardImg} />
          </div>
        </div>
        {/* Latihan 1 */}
        <div>
          <div className={CardTitle}>
            <BsPencilSquare />
            Latihan 1
          </div>
          <div className="mt-5">
            <ul className="list-decimal list-inside">
              <li>
                Gambarlah garis bilangan, tandai titik-titik yang bersuaian
                dengan bilangan-bilangan berikut.
                <div>
                  <Image src={Bab2_2_G3} alt="Bab2_2_G3" className={CardImg} />
                </div>
              </li>
              <li>
                Nyatakanlah bilangan-bilangan yang sesuai dengan titik A, B, C,
                D, dan E.
                <div>
                  <Image src={Bab2_2_G4} alt="Bab2_2_G4" className={CardImg} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* contoh 1 */}
        <div className="mt-5">
          <div className={CardCapter}>
            <CiBookmarkPlus />
            Membandingkan Bilangan dengan Menggunakan Garis Bilangan
          </div>
          <div>
            Mana yang lebih besar, -2 atau -5? Dan bagaiman menjelaskannya
            dengan menggunakan garis bilangan?. Pada daerah bilingan-bilangan
            negatif, bilangan-bilangan yang letaknya semakin ke kanan adalah
            lebih besar, sedangkan yang letaknya semakin ke kiri adalah lebih
            kecil, demikian juga untuk bilangan-bilangan positif.
          </div>
          <div>
            <Image src={Bab2_2_G5} alt="Bab2_2_G5" className={CardImg} />
          </div>
        </div>
        {/* contoh 2 */}
        <div className="mt-5">
          <div className={CardTitle}>
            <GiInspiration />
            Contoh 1
          </div>
          <div>
            <Image
              src={Bab2_2_G6}
              alt="Bab2_2_G6"
              className="bg-white border-8 border-gray-900 rounded-md mt-2 mb-2"
            />
          </div>
          <div>
            Untuk -2 dan -5, pada garis bilangan -2 terletak disebelah kanan
            dari -5. Dengan demikian, -2 lebih besar dari -5. Hal ini dapat
            disajikan dengan menggunakan tanda pertidaksamaan sebagai -5 &lt; 2
            atau -2 &gt; -5.
          </div>
        </div>
        <div className="mt-5">
          <div className={CardTitle}>
            <GiInspiration />
            Contoh 2
          </div>
          <div>
            <Image
              src={Bab2_2_G7}
              alt="Bab2_2_G7"
              className="bg-white border-8 border-gray-900 rounded-md mt-2 mb-2"
            />
          </div>
          <div>
            Kita dapat menyajikan -2, +3 dan -4 pada garis bilangan sebagaimana
            yang terlihat pada gambar di samping. Dengan menggunakan tanda
            pertidaksamaan dan disajikan dari terkecil ke terbesar : <br /> -4
            &lt; -2 &lt; +3 <br /> dari terbesar ke terkecil : <br /> +3 &gt; -2
            &gt; -4
          </div>
        </div>
        {/* Latihan 2 */}
        <div className="mt-5">
          <div className={CardTitle}>
            <BsPencilSquare />
            Latihan 2
          </div>
          <div>
            Bandingkan pasangan-pasangan bilangan berikut dengan menggunakan
            tanda-tanda pertidaksamaan.
          </div>
          <div>
            <Image
              src={Bab2_2_G8}
              alt="Bab2_2_G8"
              className="bg-white border-8 border-gray-900 rounded-md mt-2 mb-2 w-[50vh]"
            />
          </div>
        </div>
        {/* Subbab 2 */}
        <div className="mt-5">
          <div className={CardCapter}>
            <CiBookmarkPlus /> Nilai Mutlak
          </div>
          <div>
            Ketika kita sajikan +4 dan +6 pada garis bilangan, bilangan manakah
            yang terletak lebih jauh dari titik asal?. Jarak antara titik asal
            dengan titik yang bersuaian dengan suatu bilangan yang diketahui
            dinamakan nilai mutlak. Sebagai contoh, nilai mutlak dari +4 adalah
            4, sedangkan nilai mutlak dari -3 adalah 3. Nilai mutlak dari 0
            adalah 0.
          </div>
          <div>
            <Image
              src={Bab2_2_G9}
              alt="Bab2_2_G9"
              className="bg-white border-8 border-gray-900 rounded-md mt-2 mb-2 w-[80vh]"
            />
          </div>

          <div className="mt-5">
            Ketika membandingkan dua bilangan positif +4 dan +6, nilai mutlak
            dari +6 lebih besar. Pada garis bilangan, +6 terletak lebih ke
            kanan. Jadi, untuk dua bilangan positif, bilangan yang nilai
            mutlaknya lebih besar merupakan bilangan yang lebih besar.
          </div>
          <div>
            <Image
              src={Bab2_2_G10}
              alt="Bab2_2_G10"
              className="bg-white border-8 border-gray-900 rounded-md mt-2 mb-2 w-[50vh]"
            />
          </div>
        </div>
        {/* Latihan 3 */}
        <div className="mt-5">
          <CardRang />
          <div>Jawblah pertanyaan dibawah ini dengan benar!</div>
          <div className="mt-5">
            <ul className="list-decimal list-inside">
              <li>
                Berturut-turut, tentukan nilai-nilai mutlak dari -7 dan +5,2.
              </li>
              <li>
                Tentukanlah bilangan-bilangan yang nilai mutlaknya 10 dan{" "}
                <div className="frac">
                  <span>2</span>
                  <span className="symbol">/</span>
                  <span className="bottom">3</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <div className={CardTitle}>
              <RiAlarmWarningLine />
              Rangkuman
            </div>
            <div>
              <Image
                src={Bab2_2_G11}
                alt="Bab2_2_G11"
                className="bg-white border-8 border-gray-900 rounded-md mt-2 mb-2 w-[150vh]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ButtonpnDown */}
      <ButttonpnDOWN p={"/bab2_1"} n={"/bab2_kuis"} />
    </div>
  );
};

export default Page;
