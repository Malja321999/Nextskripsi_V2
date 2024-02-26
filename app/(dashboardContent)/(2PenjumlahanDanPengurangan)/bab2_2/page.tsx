"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
/* Icon Ringkasan */
import { RiAlarmWarningLine } from "react-icons/ri";
/* Icon Pras */
import { FaRegCalendarCheck } from "react-icons/fa";
/* Icon Tujuan */
import { RiMapPinAddFill } from "react-icons/ri";
/* Icon Uncheck */
import { ImCheckboxUnchecked } from "react-icons/im";
import Bab3_2_G1 from "../../../asset/bab3_2_G1.png";
import Bab3_2_G2 from "../../../asset/bab3_2_G2.png";
import Bab3_2_G3 from "../../../asset/bab3_2_G3.png";
import Bab3_2_G4 from "../../../asset/bab3_2_G4.png";
import Bab3_2_G5 from "../../../asset/bab3_2_G5.png";
import Bab3_2_G6 from "../../../asset/bab3_2_G6.png";
import Cardbab from "@/app/component/Cardbab";
import Cardsubbab from "@/app/component/Cardsubbab";
import Cardlatihan from "@/app/component/Cardlatihan";
import Cardcontoh from "@/app/component/Cardcontoh";
import Cardg from "@/app/component/Cardg";
import ButttonpnUP from "@/app/component/ButttonpnUP";
import ButttonpnDOWN from "@/app/component/ButttonpnDOWN";
import Cardsubper from "@/app/component/Cardsubper";

const Page = () => {
  const [Collapse, SetCollapse] = useState(false);
  const [Collapse2, SetCollapse2] = useState(false);
  const sky = "text-sky-400 font-bold";
  const CardSoal =
    "mt-5 bg-white w-fit rounded-md border-8 border-gray-900 text-black p-5";
  const CVideo =
    "bg-gray-900 w-fit mt-20 mb-10 mx-auto p-4 rounded-md flex flex-col relative";

  return (
    <div className="bg-emerald-700 h-[39.5rem] w-[89.5rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl overflow-y-scroll">
      <ButttonpnUP p={"/bab2_1"} n={"/bab2_kuis"} />
      {/* Bab, Prasyarat, dan Tujuan */}
      <div className="mx-2 mt-0 left-[-90.9rem]">
        {/* Judul Bab */}
        <Cardbab n={2} p={"Penjumlahan Dan Pengurangan"} />
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
                <ul className="list-decimal list-inside">
                  <li>Siswa dapat menjumlahkan Bilangan Bulat</li>
                  <br />
                  <li>
                    Siswa mampu memahami sifat-sifat Penjumlahan Bilangan Bulat
                  </li>
                </ul>
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
        <Cardsubbab n={2.2} p={"Pengurangan Bilangan Bulat"} />
        {/* Isi Sub Bab */}
        <div className="mt-5 mb-2">
          Seperti pada penjumlahan bilangan bulat, untuk menghitung hasil
          pengurangan dua bilangan bulat dapat menggunakan bantuan garis
          bilangan. Lihatlah penjelasan di bawah ini :{/* Latihan 1 */}
          <Cardcontoh />
          <div>Tentukanlah hasil dari 3 - 7</div>
          {/* Gambar Bab3_1*/}
          <Cardg g={Bab3_2_G1} a_l={"Bab3_2_G1"} h={"50vh"} />
          <div className="mt-5">
            Langkah penyelesaian :
            <ul className="list-none list-inside">
              <li>a. Dari angka 0 melangkah 3 satuan ke kanan</li>
              <li>
                b. Dilanjutkan dari titik angka 3 melangkah 7 satuan ke kiri
              </li>
              <li>
                c. Langkah diatas berhenti di angka -4 berarti 3 - 7 = - 4
              </li>
            </ul>
          </div>
          <div className="mt-5">
            {/* Judul Sub Per */}
            <Cardsubper p={"Pengurangan Secara Langsung"} />
            {/* Gambar bab3_1_G9 */}
            <Cardg g={Bab3_2_G2} a_l={"bab3_1_G9"} w={490} />
            {/* Contoh */}
            <Cardcontoh />
            <div className="bg-white text-black p-2 rounded-md border-8 border-black w-fit">
              <ul className="list-none list-inside grid gap-4 grid-cols-1">
                <li>12 - 8 = 12 + (-18) = -6</li>
                <li>16 – (-9) = 16 + 9 = 25</li>
              </ul>
            </div>
          </div>
          <div className="mt-5">
            {/* Judul Sub Per */}
            <Cardsubper p={"Sifat-sifat Pengurangan Bilangan Bulat"} />
            <div>Sifat-sifat pengurangan bilangan bulat sebagai berikut :</div>
            <ul className="list-decimal list-inside grid gap-10 grid-cols-1">
              <li className="mt-5">
                <span className="font-bold">Sifat Komutatif</span>
                <div>
                  Ketika suatu bilangan bulat dikurangkan dari bilangan bulat
                  lainnya, selisihnya tidak selalu merupakan bilangan bulat.
                  Artinya, bilangan bulat tidak ditutup pada pengurangan. Jika a
                  dan b adalah dua bilangan bulat dan a - b = c, maka c tidak
                  selalu merupakan bilangan bulat. Misalkan a = 7 dan b = 5, a -
                  b = 7 - 5 = 2 dan b - a = 5 - 7 = -2 (bukan bilangan bulat
                </div>
              </li>
              <li>
                <span className="font-bold">Sifat Asosiatif</span>
                <div>
                  Sifat asosiatif tidak berlaku untuk pengurangan bilangan
                  bulat. Artinya kita tidak bisa mengelompokkan dua bilangan
                  bulat dan mengurangkannya terlebih dahulu. Urutan pengurangan
                  merupakan faktor penting . Jika a, b, dan c adalah tiga
                  bilangan bulat, maka a - (b - c) ≠ (a - b) - c. Perhatikan
                  kasus ketika a = 8, b = 5 dan c = 2, 8 - (5 - 2) = 5 ≠ (8 - 5)
                  - 2 = 1.
                </div>
              </li>
              <li>
                <span className="font-bold">Sifat Tertutup</span>
                <div>
                  Ketika suatu bilangan bulat dikurangkan dari bilangan bulat
                  lainnya, selisihnya tidak selalu merupakan bilangan bulat.
                  Artinya, bilangan bulat tidak ditutup pada pengurangan. Jika a
                  dan b adalah dua bilangan bulat dan a − b = c, maka c tidak
                  selalu merupakan bilangan bulat. Misalkan a = 7 dan b = 5, a −
                  b = 7 − 5 = 2 dan b − a = 5 − 7 = −2 (bukan bilangan bulat).
                </div>
              </li>
              <li>
                <span className="font-bold">Sifat Subtraktif dari Nol</span>
                <div>
                  Saat kita mengurangkan nol dari suatu bilangan bulat, nilai
                  bilangan bulat tersebut tetap sama. Ambil contoh, a = 98, a −
                  0 = 98 − 0 = 98.
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <div>
              <Cardlatihan />
            </div>
            <div className={CardSoal}>
              <ul className="list-decimal list-inside grid gap-10 grid-cols-1">
                <li>
                  Pada pengurangan terdapat sifat?
                  <ul className="list-none list-inside ml-10">
                    <li className="flex justify-between w-fit gap-2">
                      <ImCheckboxUnchecked className="w-5 mt-0.5" />
                      Asosiatif
                    </li>
                    <li className="flex justify-between w-fit gap-2">
                      <ImCheckboxUnchecked className="w-5 mt-0.5" />
                      Komunikatif
                    </li>
                    <li className="flex justify-between w-fit gap-2">
                      <ImCheckboxUnchecked className="w-5 mt-0.5" />
                      Tertutup
                    </li>
                    <li className="flex justify-between w-fit gap-2">
                      <ImCheckboxUnchecked className="w-5 mt-0.5" />
                      Terbuka
                    </li>
                  </ul>
                  <div className="ml-5">
                    *berikan tanda √ di jawaban yang tepat. Jawaban boleh lebih
                    dari satu.
                  </div>
                </li>
                <li>
                  Hitunglah soal Pengurangan dibawah ini.
                  <ul className="list-disc list-inside ml-10">
                    <li>27 - (-32) &nbsp; &nbsp;= ...</li>
                    <li>-31 - (-20) &nbsp; = ...</li>
                    <li>-42 - 31 &nbsp; &nbsp; &nbsp; = ...</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ButttonpnDOWN p={"/bab2_1"} n={"/bab2_kuis"} />
    </div>
  );
};

export default Page;