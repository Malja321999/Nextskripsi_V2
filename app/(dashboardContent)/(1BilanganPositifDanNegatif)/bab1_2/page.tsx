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
import {
  BsBookmark,
  BsFillBookmarkCheckFill,
  BsPencilSquare,
} from "react-icons/bs";
/* Icon Contoh */
import { GiInspiration } from "react-icons/gi";
import Link from "next/link";
import ButttonpnUP from "@/app/component/ButttonpnUP";
import ButttonpnDOWN from "@/app/component/ButttonpnDOWN";
import { FaRegCalendarCheck, FaVideo } from "react-icons/fa";
import { RiMapPinAddFill, RiSlideshow2Fill } from "react-icons/ri";
import Cardlatihan from "@/app/component/Cardlatihan";
import {
  MdCenterFocusStrong,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import { useRouter } from "next/navigation";
import CardFinishRead from "@/app/component/CardFinishRead";
import { BiFullscreen } from "react-icons/bi";
import Melebb from "@/app/component/Melebb";
import Ab from "@/app/component/Ab";
import Am from "@/app/component/Am";

const Page = () => {
  const [Collapse2, SetCollapse2] = useState(true);
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

  const [FinishReading, setFinishReading] = useState(false);

  const [Media, setMedia] = useState("");

  const Tfullscreen = () => {
    const element = document.getElementById("fullscreenItem");

    const isFullscreen = document.fullscreenElement;
    console.log("isFullscreen");
    if (isFullscreen) {
      document.exitFullscreen();
      console.log("exit fullscreen");
      setfullsecreen(true);
      setFinishReading(false);
    } else {
      element?.requestFullscreen();
      console.log("enter fullscreen");
      setfullsecreen(false);
      setFinishReading(true);
    }
  };

  const [fullsecreen, setfullsecreen] = useState(false);

  return (
    <div className="bg-teal-500 md:h-[39.5rem] h-[40rem] md:w-[89.5rem] w-[41rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl overflow-y-scroll overflow-x-hidden">
      <ButttonpnUP p={"/bab1_1"} n={"/bab1_kuis"} />

      {/* Judul Bab */}
      <div className="mx-2 mt-0 left-[-90.9rem]">
        <div className="bg-white text-black w-fit p-2 rounded-md mt-3">
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
        <div className="mx-20 bg-white text-black w-[74rem] p-2 rounded-md mt-2 flex flex-col relative">
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
              <div className="bg-indigo-300 w-[73rem] p-2 rounded-md text-base text-start">
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

        {/* Konten Bab */}
        <div className="mt-5 mb-5 w-fit h-fit">
          {Media === "" ? (
            <div className="flex flex-col gap-2">
              <div>
                <button
                  onClick={Tfullscreen}
                  className="text-2xl ml-[12rem] flex justify-center items-center bg-white text-black hover:bg-slate-700 w-[58.6rem] rounded-md"
                >
                  <BiFullscreen />
                  Fulllscreen
                </button>
              </div>
              <div>
                <iframe
                  width={`${fullsecreen ? "100%" : "10%"}`}
                  height={`${fullsecreen ? "100%" : "5%"}`}
                  className={`rounded-md border-[10px] border-black w-[52rem] h-[42rem] ml-[16rem]`}
                  id="fullscreenItem"
                  loading="lazy"
                  src="https://scratch.mit.edu/projects/1013160095/embed"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="text-center text-base p-2 bg-white shadow rounded text-white">
          <div className="p-4 bg-blue-600 rounded">
            <h1 className="font-bold text-2xl">
              Apakah kamu sudah menonton video Bilangan Dengan Tanda Diatas?
            </h1>
            <div className="flex flex-row justify-center items-center gap-[10rem]">
              <button
                onClick={() => setFinishReading(true)}
                className="text-black hover:bg-green-400  bg-green-300 p-5 w-fit rounded-md mt-10 mb-2 font-bold flex justify-between gap-2"
              >
                Iya
              </button>
              <button
                onClick={Tfullscreen}
                className="text-black hover:bg-red-500  bg-red-400 p-5 w-fit rounded-md mt-10 mb-2 font-bold flex justify-between gap-2"
              >
                Tidak
              </button>
            </div>
            {FinishReading ? (
              <h1 className="font-bold text-2xl bg-white p-5 rounded-md text-black">
                Ayo Kerjakan Latihan Soal 2 Dibawah ini!
              </h1>
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* Latihan Soal */}
        <div>
          {FinishReading ? (
            <div>
              <div className="mt-1">
                <Cardlatihan n={2} />
                Setelah menonton video diatas, jawablah pertanyaan dibawah ini.
                {/* Soal A */}
                <div className="mt-5">
                  <Melebb />
                  <h3 className="ml-5 text-left border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5 text-black">
                    Setelah menonton video diatas, Jawablah pertanyaan dibawah
                    ini dengan cara meletakkan bilangan bulat pada kolom opsi
                    jawaban ke kolom jawaban sesuai dengan letaknya pada garis
                    bilangan! Jika jawabanmu benar maka akan ditampilkan teks
                    jawaban{" "}
                    <span className="text-green-400 bg-white rounded-md">
                      “Kamu Benar!”
                    </span>{" "}
                    sedangkan jika jawabanmu salah maka akan ditampilkan teks
                    jawaban{" "}
                    <span className="text-red-400 bg-white rounded-md">
                      “Kamu Salah!”.
                    </span>{" "}
                    Tekan tombol{" "}
                    <span className="font-bold bg-white rounded-md">
                      Cek Jawaban
                    </span>{" "}
                    ketika kamu sudah menjawab semua pertanyaan.
                  </h3>
                  <iframe
                    className="h-[30rem] w-[85rem] rounded-md border-4 border-gray-800"
                    loading="lazy"
                    src="/QuizDragAndDrop/bab1_2A"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* Soal B */}
                <div className="mt-10">
                  <Ab />
                  <h3 className="ml-5 mb-5 text-black">
                    <div className="border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5">
                      <ul className="list list-disc list-inside">
                        <h1 className="font-bold">Petunjuk pengerjaan :</h1>
                        <div>
                          <li>Jawablah pertanyaan dibawah ini dengan tepat</li>
                          <li>
                            Jika jawabanmu{" "}
                            <span className="font-bold">benar</span>, maka akan
                            ditampilkan teks Jawaban{" "}
                            <span className="font-bold text-green-400 bg-white rounded-md p-1">
                              Kamu Benar!
                            </span>
                            .
                          </li>
                          <li>
                            Jika jawabanmu{" "}
                            <span className="font-bold">salah</span>, maka akan
                            ditampilkan teks Jawaban{" "}
                            <span className="font-bold text-red-400 bg-white rounded-md p-1">
                              Kamu Salah!
                            </span>
                            .
                          </li>
                          <li>
                            {" "}
                            Tekan tombol{" "}
                            <span className="font-bold bg-white rounded-md">
                              Cek Jawaban
                            </span>{" "}
                            ketika kamu sudah menjawab 1 pertanyaan.
                          </li>
                        </div>
                      </ul>
                    </div>
                  </h3>
                  <div className="flex flex-col">
                    <iframe
                      className="h-[45rem] w-100 rounded-md border-4 border-gray-800"
                      loading="lazy"
                      src="/QuizDragAndDrop/bab1_2_ab"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                {/* Soal C */}
                <div className="mt-10">
                  <Am />
                  <h3 className="ml-5 mb-5 text-black">
                    <div className="border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5">
                      <ul className="list list-disc list-inside">
                        <h1 className="font-bold">Petunjuk pengerjaan :</h1>
                        <div>
                          <li>
                            Kamu sudah menonton video mengenai membandingkan
                            bilangan bulat . Sekarang pasangkanlah simbol{" "}
                            <span className="font-bold">
                              lebih dari {"(<)"}, kurang dari {"(>)"} dan sama
                              banyak
                              {"(=)"}
                            </span>
                            dengan bilangan bulat di bawah ini.
                          </li>
                          <li>
                            Jika jawabanmu{" "}
                            <span className="font-bold">benar</span>, maka akan
                            ditampilkan teks Jawaban{" "}
                            <span className="font-bold text-green-400 bg-white rounded-md p-1">
                              Kamu Benar!
                            </span>
                            .
                          </li>
                          <li>
                            Jika jawabanmu{" "}
                            <span className="font-bold">salah</span>, maka akan
                            ditampilkan teks Jawaban{" "}
                            <span className="font-bold text-red-400 bg-white rounded-md p-1">
                              Kamu Salah!
                            </span>
                            .
                          </li>
                          <li>
                            Tekan tombol{" "}
                            <span className="font-bold bg-white rounded-md">
                              Cek Jawaban
                            </span>{" "}
                            ketika kamu sudah menjawab semua pertanyaan.
                          </li>
                        </div>
                      </ul>
                    </div>
                  </h3>
                  <div className="flex flex-col">
                    <iframe
                      className="h-[25rem] w-100 rounded-md border-4 border-gray-800"
                      loading="lazy"
                      src="/QuizDragAndDrop/bab1_2B"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                {/* Soal d */}
                <div className="mt-10">
                  <Am />
                  <h3 className="ml-5 mb-5 text-black">
                    <div className="border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5">
                      <ul className="list list-disc list-inside">
                        <h1 className="font-bold">Petunjuk pengerjaan :</h1>
                        <div>
                          <li>
                            Kamu sudah menonton video mengenai membandingkan
                            bilangan bulat . Sekarang pasangkanlah
                            <span className="font-bold">Nilai Mutlak</span> yang
                            ada di kotak sebelah kiri dengan semua bilangan
                            bulat di bawah ini.
                          </li>
                          <li>
                            Jika jawabanmu{" "}
                            <span className="font-bold">benar</span>, maka akan
                            ditampilkan teks Jawaban{" "}
                            <span className="font-bold text-green-400 bg-white rounded-md p-1">
                              Kamu Benar!
                            </span>
                            .
                          </li>
                          <li>
                            Jika jawabanmu{" "}
                            <span className="font-bold">salah</span>, maka akan
                            ditampilkan teks Jawaban{" "}
                            <span className="font-bold text-red-400 bg-white rounded-md p-1">
                              Kamu Salah!
                            </span>
                            .
                          </li>
                          <li>
                            Tekan tombol{" "}
                            <span className="font-bold bg-white rounded-md">
                              Cek Jawaban
                            </span>{" "}
                            ketika kamu sudah menjawab semua pertanyaan.
                          </li>
                        </div>
                      </ul>
                    </div>
                  </h3>
                  <div className="flex flex-col">
                    <iframe
                      className="h-[30rem] w-100 rounded-md border-4 border-gray-800"
                      loading="lazy"
                      src="/QuizDragAndDrop/bab1_2C"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <ButttonpnDOWN p={"/bab1_1"} n={"/bab1_kuis"} />
    </div>
  );
};

export default Page;
