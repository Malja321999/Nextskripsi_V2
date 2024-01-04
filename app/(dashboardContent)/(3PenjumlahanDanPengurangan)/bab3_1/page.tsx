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

const Page = () => {
  const [Collapse, SetCollapse] = useState(false);
  const [Collapse2, SetCollapse2] = useState(false);
  const sky = "text-sky-400 font-bold";
  const CardSoal =
    "mt-5 bg-white w-fit rounded-md border-8 border-gray-900 text-black p-5";
  const CVideo =
    "bg-gray-900 w-fit mt-20 mb-10 mx-auto p-4 rounded-md flex flex-col relative";

  return (
    <div className="bg-blue-700 h-[37.1rem] w-[88.8rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl overflow-y-scroll">
      <ButttonpnUP
        p={"/bab2_2"}
        n={"/bab3_2"}
      />
      {/* Bab, Prasyarat, dan Tujuan */}
      <div className="mx-2 mt-0 left-[-90.9rem]">
        {/* Judul Bab */}
        <Cardbab n={3} p={"Penjumlahan Dan Pengurangan"} />
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
        <Cardsubbab n={3.1} p={"Penjumlahan Bilangan Bulat"} />
        {/* Isi Sub Bab */}
        <div className="mt-5 mb-2">
          Untuk menghitung hasil operasi penjumalahan dua bilangan bulat, kita
          dapat menggunakan garis bilangan. Pada garis bilangan, bilangan
          positif menunjukkan kearah kanan, sedangkan bilangan negatif
          menunjukkan kearah kiri, agar kamu memahami lebih jelas, perhatikan
          soal dibawah ini.
          {/* Latihan 1 */}
          <Cardcontoh />
          <div>Tentukanlah hasil dari -3 + 7</div>
          {/* Gambar Bab3_1*/}
          <Cardg g={Bab3_1_G1} />
          <div className="mt-5">
            Langkah penyelesaian :
            <ul className="list-none list-inside">
              <li>a. Dari angka 0 melangkah 3 satuan ke kiri</li>
              <li>b. Dilanjutkan dari -3 melangkah 7 satuan ke kanan</li>
              <li>c. Langkah diatas berhenti di angka 4 berarti -3 + 7 = 4</li>
            </ul>
          </div>
          <div>
            Jika <span className={sky}>a</span> dan{" "}
            <span className={sky}>b</span> adalah bilangan bulat maka :
            <br />
            <div className="text-black bg-white rounded-md border-8 border-gray-900 w-fit p-2">
              <ul className="list-none list-inside flex justify-between w-[35rem]">
                <li>a + b = a + b</li>
                <li>a + (-b) = a - b</li>
              </ul>
              <ul className="list-none list-inside flex justify-between w-[35rem]">
                <li>-a + b = (a - b)</li>
                <li>-a + (-b) = -(a + b)</li>
              </ul>
            </div>
          </div>
          <div className="mt-5">
            {/* Contoh */}
            <Cardcontoh />
            {/* Gambar Bab 3_1*/}
            <Cardg g={Bab3_1_G2} a_l={"Bab3_1_G2"} />
          </div>
          <div className="mt-5">
            {/* Judul Sub Per */}
            <Cardsubper p={"Penjumlahan Secara Langsung"} />
            {/* Gambar bab3_1_G9 */}
            <Cardg g={Bab3_1_G9} a_l={"bab3_1_G9"} w={490} />
            {/* Contoh */}
            <Cardcontoh />
            <div className="bg-white text-black p-2 rounded-md border-8 border-black w-fit">
              <ul className="list-none list-inside grid gap-4 grid-cols-1">
                <li>-12 + 5 = -(12 – 5) = -7 &larr; -a + b = -(a – b)</li>
                <li>
                  -8 + (-12) = -(8 + 12) = -20 &larr; -a + (-b) = -(a + b)
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5">
            {/* Judul Sub Per */}
            <Cardsubper p={"Sifat-sifat Penjumlahan Bilangan Bulat"} />
            <div>Sifat-sifat penjumlahan bilangan bulat sebagai berikut :</div>
            <ul className="list-decimal list-inside">
              <li className="font-bold mt-5">
                Sifat Komutatif
                {/* Gambar G3 */}
                <Cardg g={Bab3_1_G3} a_l={"Bab3_1_G3"} />
                <div className="font-normal">
                  Pada penjumlahan dua bilangan bulat berlaku sifat komutatif
                  (pertukaran)
                  {/* Contoh */}
                  <Cardcontoh />
                  {/* Gambar G4 */}
                  <Cardg g={Bab3_1_G4} a_l={"Bab3_1_G4"} />
                </div>
              </li>
              <br />
              <br />
              <li className="font-bold">
                Sifat Asosiatif
                {/* Gambar G5 */}
                <Cardg g={Bab3_1_G5} a_l={"Bab3_1_G5"} />
                <div className="font-normal">
                  Pada penjumlahan tiga bilangan bulat berlaku sifat Asosiatif
                  (Pengelompokan)
                  {/* Contoh */}
                  <Cardcontoh />
                  {/* Gambar G6 */}
                  <Cardg g={Bab3_1_G6} a_l={"Bab3_1_G6"} />
                </div>
              </li>
              <br />
              <br />
              <li className="font-bold">
                Sifat Tertutup
                {/* Gambar G7 */}
                <Cardg g={Bab3_1_G7} a_l={"Bab3_1_G7"} />
                <div className="font-normal">
                  pada penjumlahan dua atau lebih bilangan bulat menghasilkan
                  bilangan bulat (sifat tertutup)
                  {/* Contoh */}
                  <Cardcontoh />
                  {/* Gambar G8 */}
                  <Cardg g={Bab3_1_G8} a_l={"Bab3_1_G8"} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <Cardlatihan />
          </div>
          <div className={CardSoal}>
            <ul className="list-decimal list-inside grid gap-10 grid-cols-1">
              <li>
                Pada penjumlahan terdapat sifat?
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
                Hitunglah Penjumlahan di bawah ini dengan menggunakan sifat
                komutatif.
                <ul className="list-disc list-inside ml-10">
                  <li>27 +(-23) &nbsp;= ... = ...</li>
                  <li>-32 + 2 &nbsp;&nbsp;&nbsp;&nbsp;= ... = ...</li>
                </ul>
              </li>
              <li>
                Hitunglah hasil penjumlahan dibawah ini!
                <ul className="list-disc list-inside ml-10">
                  <li>(34 + (-22)) + 15&nbsp;&nbsp;&nbsp;&nbsp;= ...</li>
                  <li>(13 + (43 + (-43)))&nbsp;= ...</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ButttonpnDOWN
        p={"/bab2_2"}
        n={"/bab3_2"}
      />
    </div>
  );
};

export default Page;
