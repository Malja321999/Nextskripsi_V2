"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
/* Icon Ringkasan */
import { RiAlarmWarningLine } from "react-icons/ri";
/* Icon Pras */
import { FaRegCalendarCheck } from "react-icons/fa";
/* Icon Tujuan */
import { RiMapPinAddFill } from "react-icons/ri";
/* Icon Uncheck */
import { ImCheckboxUnchecked } from "react-icons/im";
import Bab4_1_G1 from "../../../asset/Bab4_1_G1.png";
import Bab4_1_G2 from "../../../asset/Bab4_1_G2.png";
import Bab4_1_G4 from "../../../asset/Bab4_1_G4.png";
import Bab4_1_G5 from "../../../asset/Bab4_1_G5.png";
import Bab4_1_G6 from "../../../asset/Bab4_1_G6.png";
import Bab4_1_G7 from "../../../asset/Bab4_1_G7.png";
import Bab4_1_G8 from "../../../asset/Bab4_1_G8.png";
import Bab4_1_G9 from "../../../asset/Bab4_1_G9.png";

import Cardbab from "@/app/component/Cardbab";
import Cardsubbab from "@/app/component/Cardsubbab";
import Cardlatihan from "@/app/component/Cardlatihan";
import Cardcontoh from "@/app/component/Cardcontoh";
import Cardg from "@/app/component/Cardg";
import ButttonpnUP from "@/app/component/ButttonpnUP";
import ButttonpnDOWN from "@/app/component/ButttonpnDOWN";
import Cardsubper from "@/app/component/Cardsubper";
import CardRang from "@/app/component/CardRang";

const Page = () => {
  const [Collapse, SetCollapse] = useState(false);
  const [Collapse2, SetCollapse2] = useState(false);
  const sky = "text-sky-400 font-bold";
  const CardSoal =
    "mt-5 bg-white w-fit rounded-md border-8 border-gray-900 text-black p-5";
  const CVideo =
    "bg-gray-900 w-fit mt-20 mb-10 mx-auto p-4 rounded-md flex flex-col relative";

  return (
    <div className="bg-fuchsia-600 h-[39.5rem] w-[89.5rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl overflow-y-scroll">
      <ButttonpnUP p={"/bab3_2"} n={"/bab4_2"} />
      {/* Bab, Prasyarat, dan Tujuan */}
      <div className="mx-2 mt-0 left-[-90.9rem]">
        {/* Judul Bab */}
        <Cardbab n={4} p={"Perkalian Dan Pembagian"} />
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
                  <li>Siswa mampu melakukan Perkalian Bilangan Bulat</li>
                  <br />
                  <li>
                    Siswa mampu memahami sifat-sifat Perkalian Bilangan Bulat
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
        <Cardsubbab n={4.1} p={"Perkalian Bilangan Bulat"} />
        {/* Isi Sub Bab */}
        <div className="mt-5 mb-2">
          Pada waktu sekolah dasar, kamu sudah mengetahui bahwa perkalian adalah
          operasi penjumlahan berulang dengan bilangan yang sama.
          <br /> <br />
          Misalkan a dan b Bilangan bulat positif maka ditulis a x b = b + b + b
          + ….. + b (b ditambahkan sebanyak a suku ).
          {/* Contoh */}
          <Cardcontoh />
          <div className="bg-white text-black p-2 rounded-md border-8 border-black w-fit">
            <ul className="list-none list-inside grid gap-4 grid-cols-1">
              <li>3 x 4 = 4 + 4 + 4 = 12</li>
              <li>4 x -9 = -9 + (-9) + (-9) + (-9) = -36</li>
            </ul>
          </div>
          <div className="mt-5">
            {/* Judul sub per */}
            <Cardsubper
              p={
                "Beberapa arti dan makna pada Perkalian dua Bilangan bulat sebagai berikut"
              }
            />
            <ul className="list-none list-inside">
              <li>
                a. Hasil kali dan Bilangan bertanda sama maka akan menghasilkan
                Bilangan positif
              </li>
              <div className="ml-9">
                <Cardg g={Bab4_1_G1} a_l={"Bab4_1_G1"} />
              </div>
              <div className="ml-10">
                <Cardcontoh />
                <div className={CardSoal}>
                  <ul>
                    <li>
                      8&nbsp;&nbsp;&nbsp; &nbsp;x&nbsp;&nbsp;&nbsp;
                      8&nbsp;&nbsp;= 64
                    </li>
                    <li>(-3) x (-2)&nbsp;= 6</li>
                  </ul>
                </div>
              </div>
              <li>
                b. Hasil kali dua bilangan bertanda berbeda maka akan
                menghasilkan bilangan negatif
              </li>
              <div className="ml-9">
                <Cardg g={Bab4_1_G2} a_l={"Bab4_1_G1"} w={287} />
              </div>
              <div className="ml-10">
                <Cardcontoh />
                <div className={CardSoal}>
                  <ul>
                    <li>-5 x 8&nbsp; &nbsp; = -40</li>
                    <li> 9 x (-9) &nbsp;= -81</li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
          {/* Rangkuman */}
          <div className="mt-5">
            <CardRang />
            <div>
              <table className="bg-blue-500 text-black text-center border-collapse border-8 border-gray-300 w-fit">
                <thead>
                  <tr>
                    <th className="border-8 border-gray-300">Bilangan 1</th>
                    <th className="border-8 border-gray-300">Bilangan 2</th>
                    <th className="border-8 border-gray-300">
                      Hasil Bil.1 X Bil.2
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-8 border-gray-300 ...">+</td>
                    <td className="border-8 border-gray-300 ...">+</td>
                    <td className="border-8 border-gray-300 ...">+</td>
                  </tr>
                  <tr>
                    <td className="border-8 border-gray-300 ...">+</td>
                    <td className="border-8 border-gray-300 ...">-</td>
                    <td className="border-8 border-gray-300 ...">-</td>
                  </tr>
                  <tr>
                    <td className="border-8 border-gray-300 ...">-</td>
                    <td className="border-8 border-gray-300 ...">+</td>
                    <td className="border-8 border-gray-300 ...">-</td>
                  </tr>
                  <tr>
                    <td className="border-8 border-gray-300 ...">-</td>
                    <td className="border-8 border-gray-300 ...">-</td>
                    <td className="border-8 border-gray-300 ...">+</td>
                  </tr>
                  <tr>
                    <td className="border-8 border-gray-300 ...">0</td>
                    <td className="border-8 border-gray-300 ...">+</td>
                    <td className="border-8 border-gray-300 ...">0</td>
                  </tr>
                  <tr>
                    <td className="border-8 border-gray-300 ...">0</td>
                    <td className="border-8 border-gray-300 ...">-</td>
                    <td className="border-8 border-gray-300 ...">0</td>
                  </tr>
                  <tr>
                    <td className="border-8 border-gray-300 ...">
                      (+) = Bilangan positif
                      <br />
                      (-) = Bilangan negatif
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-5">
            {/* Judul Sub Per */}
            <Cardsubper p={"Sifat-sifat Perkalian Bilangan Bulat"} />
            <div>Sifat-sifat perkalian bilangan bulat sebagai berikut :</div>
            <ul className="list-decimal list-inside grid gap-10 grid-cols-1 mt-10">
              <li>
                <span className="font-bold">Sifat Tertutup</span>
                <div>
                  <div>
                    <Cardg g={Bab4_1_G4} a_l={"Bab4_1_G4"} />
                  </div>
                  <div>
                    Pada perkalian dua atau lebih bilangan bulat menghasilkan
                    bilangan bulat (sifat tertutup)
                  </div>
                  <div>
                    <div>
                      <Cardcontoh />
                    </div>
                    <div className={CardSoal}>
                      <ul>
                        <li>
                          -6 x 8 = -42 → (-6,8 dan -42 adalah bilangan bulat)
                        </li>
                        <li>
                          -12 x (-15) = 180 → (-12,-15 dan 180 adalah bilangan
                          bulat)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span className="font-bold">
                  Hasil perkalian bilangan 0 dengan bilangan bulat lainnya sama
                  dengan 0
                </span>
                <div>
                  <div>
                    <Cardg g={Bab4_1_G5} a_l={"Bab4_1_G5"} />
                  </div>
                  <div>
                    <div>
                      <Cardcontoh />
                    </div>
                    <div className={CardSoal}>
                      <ul>
                        <li>13 x 0 = 0</li>
                        <li>12 x 0 = 0</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span className="font-bold">Unsur identitas</span>
                <div>
                  <div>
                    Bilangan 1 merupakan unsur identitas pada Perkalian bilangan
                    bulat. Setiap Bilangan bulat dikalikan dengan 1 menghasilkan
                    Bilangan itu sendiri.
                  </div>
                  <div>
                    <Cardg g={Bab4_1_G6} a_l={"Bab4_1_G6"} />
                  </div>
                  <div>
                    <div>
                      <Cardcontoh />
                    </div>
                    <div className={CardSoal}>
                      <ul>
                        <li>12 x 1 = 12</li>
                        <li>3 x 1 = 3</li>
                        <li>5 x 1 = 5</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span className="font-bold">Sifat komutatif (pertukaran)</span>
                <div>
                  <div>
                    <Cardg g={Bab4_1_G7} a_l={"Bab4_1_G7"} />
                  </div>
                  <div>
                    <div>
                      <Cardcontoh />
                    </div>
                    <div className={CardSoal}>
                      <ul>
                        <li>12 x 5 → 5 x 12 = 60</li>
                        <li>3 x (-5) → -5 x 3 = -15</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span className="font-bold">
                  Sifat asosiatif (Pengelompokkan)
                </span>
                <div>Perkalian tiga Bilangan bulat bersifat asosiatif.</div>
                <div>
                  <div>
                    <Cardg g={Bab4_1_G8} a_l={"Bab4_1_G8"} />
                  </div>
                  <div>
                    <div>
                      <Cardcontoh />
                    </div>
                    <div className={CardSoal}>
                      <ul>
                        <li>(3 x (-6)) x 4 = 3 x (-6 x 4) = 72</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span className="font-bold">Sifat distributif</span>
                <div>
                  Perkalian bilangan bulat bersifat distributif (penyetaraan)
                  terhadap penjumlahan dan Pengurangan.
                </div>
                <div>
                  <div>
                    <Cardg g={Bab4_1_G9} a_l={"Bab4_1_G9"} />
                  </div>
                  <div>
                    <div>
                      <Cardcontoh />
                    </div>
                    <div className={CardSoal}>
                      <ul>
                        <li> -5 x (-27 + 12 ) = -5 x (-27) + (-5) x 12 = 75</li>
                      </ul>
                    </div>
                  </div>
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
                  Pada perkalian terdapat sifat?
                  <ul className="list-none list-inside ml-10">
                    <li className="flex justify-between w-fit gap-2">
                      <ImCheckboxUnchecked className="w-5 mt-0.5" />
                      Tertutup
                    </li>
                    <li className="flex justify-between w-fit gap-2">
                      <ImCheckboxUnchecked className="w-5 mt-0.5" />
                      Komunikatif
                    </li>
                    <li className="flex justify-between w-fit gap-2">
                      <ImCheckboxUnchecked className="w-5 mt-0.5" />
                      Distributif
                    </li>
                    <li className="flex justify-between w-fit gap-2">
                      <ImCheckboxUnchecked className="w-5 mt-0.5" />
                      Unsur identitas
                    </li>
                    <li className="flex justify-between w-fit gap-2">
                      <ImCheckboxUnchecked className="w-5 mt-0.5" />
                      Asosiatif
                    </li>
                  </ul>
                  <div className="ml-5">
                    *berikan tanda √ di jawaban yang tepat. Jawaban boleh lebih
                    dari satu.
                  </div>
                </li>
                <li>
                  Tentukan hasil Perkalian berikut ini
                  <ul className="list-disc list-inside ml-10">
                    <li>10 x 4 &nbsp; &nbsp;= ...</li>
                    <li>13 x (-4) &nbsp; = ...</li>
                    <li>-3 x 8 x 2 &nbsp; &nbsp; &nbsp; = ...</li>
                  </ul>
                </li>
                <li>
                  Jika Perkalian berlaku sifat distributif maka?
                  <ul className="list-disc list-inside ml-10">
                    <li>10 x (-2 – 23) = (…x…) – (….x….) = ….</li>
                    <li>3 x (12 + 21) = (…x….) + (….x….) = ….</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ButttonpnDOWN p={"/bab3_2"} n={"/bab4_2"} />
    </div>
  );
};

export default Page;
