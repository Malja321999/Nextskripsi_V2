"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

/* Icon Pras */
import { FaRegCalendarCheck } from "react-icons/fa";
/* Icon Tujuan */
import { RiMapPinAddFill } from "react-icons/ri";
/* Icon Uncheck */
import { ImCheckboxUnchecked } from "react-icons/im";
import Bab4_2_G1 from "../../../asset/G44_MBab3.png";
import Bab4_2_G2 from "../../../asset/Bab4_2_G2.png";
import Bab4_2_G3 from "../../../asset/Bab4_2_G3.png";
import Bab4_2_G4 from "../../../asset/Bab4_2_G4.png";
import Bab4_2_G5 from "../../../asset/Bab4_2_G5.png";
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
      <ButttonpnUP p={"/bab4_1"} n={"/bab4_kuis"} />
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
        <Cardsubbab n={4.2} p={"Pembagian Bilangan Bulat"} />
        {/* Isi Sub Bab */}
        <div className="mt-5 mb-2">
          Dalam matematika, pembagian dapat diartikan sebagai mengurangkan
          bilangan terhadap bilangan yang tetap hinggga habis. Jika terdapat 15
          buah Katsuri di bagikan kepada 3 anak, maka dapat digambarkan sebagai
          berikut :
          <Cardg g={Bab4_2_G1} a_l={"Bab4_2_G1"} />
          Maka setiap anak mendapatlkan 5 buah Katsuri . Jadi, 15 : 3 = 5.
          Pembagian juga bisa disebut operasi kebalikan dari perkaliuan, coba
          kita ambil contoh dari jawaban diatas. 15 : 3 = 5 ←→ 3 x 5 = 15 maka
          dapat kita simpulkan bahwa setiap a, b, dan c bilangan bulat maka
          berlaku :
          <Cardg g={Bab4_2_G2} p={"Bab4_2_G2"} />
          <div className="mt-5">
            {/* Judul sub per */}
            <Cardsubper
              p={
                "Beberapa arti dan makna pada Pembagian dua Bilangan bulat sebagai berikut"
              }
            />
            <ul className="list-none list-inside">
              <li>
                a. Hasil bagi dua bilangan bulat bertanda sama maka akan
                menghasilkan bilangan positif
              </li>
              <div className="ml-9">
                <Cardg g={Bab4_2_G3} a_l={"Bab4_2_G3"} />
              </div>
              <div className="ml-10">
                <Cardcontoh />
                <div className={CardSoal}>
                  <ul>
                    <li>16 : 8 = 2</li>
                    <li>(-10) : (-2) = 5</li>
                  </ul>
                </div>
              </div>
              <li>
                b. Hasil bagi dua bilangan bertanda berbeda maka akan
                menghasilkan bilangan negatif
              </li>
              <div className="ml-9">
                <Cardg g={Bab4_2_G4} a_l={"Bab4_2_G1"} w={287} />
              </div>
              <div className="ml-10">
                <Cardcontoh />
                <div className={CardSoal}>
                  <ul>
                    <li>50 : (-5) = -10</li>
                    <li>-10 -30 : 3 = -10</li>
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
            <Cardsubper p={"Sifat-sifat Pembagian Bilangan bulat"} />
            <div>Sifat-sifat pembagian bilangan bulat sebagai berikut :</div>
            <ul className="list-decimal list-inside grid gap-10 grid-cols-1 mt-10">
              <li>
                <span className="font-bold">
                  Untuk a Bilangan bulat dan a ≠ 0 berlaku 0 : a = 0
                </span>
                <div>
                  <div>
                    <Cardcontoh />
                  </div>
                  <div className={CardSoal}>
                    <ul>
                      <li>0 : 10 = 0</li>
                      <li>0 : 200 = 0</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <span className="font-bold">
                  Setiap bilangan bulat yang dibagi 0 hasilnya tidak terdefinisi
                </span>
                <div>
                  <div>
                    <Cardcontoh />
                  </div>
                  <div className={CardSoal}>
                    <ul>
                      <li>5 : 0 = tidak terdefenisi</li>
                      <li>-20 : 0 = tidak terdefenisi</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <span className="font-bold">
                  Setiap a dan b bilangan bulat, hasil dari a : b tidak selalu
                  bilangan bulat. Jadi pembagian tidak bersifat tertutup.{" "}
                </span>
                <div>
                  <div>
                    <Cardcontoh />
                  </div>
                  <div className={CardSoal}>
                    <ul>
                      <li>
                        9 : 2 =
                        <div className="frac">
                          <span>9</span>
                          <span className="symbol">/</span>
                          <span className="bottom">2</span>
                        </div>
                        = 4
                        <div className="frac">
                          <span>1</span>
                          <span className="symbol">/</span>
                          <span className="bottom">2</span>
                        </div>
                        (bukan Bilangan bulat)
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <div>
              <CardRang />
            </div>
            <div>
              <Cardg g={Bab4_2_G5} a_l={"Bab4_2_G5"} />
            </div>
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
                  Tentukan hasil Pembagian berikut ini
                  <ul className="list-disc list-inside ml-10">
                    <li>10 : 2 &nbsp; &nbsp;= ...</li>
                    <li>25 : (-5) &nbsp; = ...</li>
                    <li>5 : 5 &nbsp; &nbsp; = ...</li>
                  </ul>
                </li>
                <li>
                  Jika Pembagian berlaku a : b = c ←→ b x c = a maka?
                  <ul className="list-disc list-inside ml-10">
                    <li>20 : 2 = (…x….) – (….x….) = ….</li>
                    <li>100 x 2 = (…x….) + (….x….) = ….</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ButttonpnDOWN p={"/bab4_1"} n={"/bab4_kuis"} />
    </div>
  );
};

export default Page;
