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
import Ab from "@/app/component/Ab";
import Am from "@/app/component/Am";

const Page = () => {
  const [Collapse, SetCollapse] = useState(true);

  const sky = "text-sky-400 font-bold";
  const CardSoal =
    "mt-5 bg-white w-fit rounded-md border-8 border-gray-900 text-black p-5";
  const CVideo =
    "bg-gray-900 w-fit mt-5 mb-10 mx-auto p-4 rounded-md flex flex-col relative";

  const [FinishReading, setFinishReading] = useState(true);

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
        <div className="mx-20 bg-gray-900 w-[74rem] p-2 rounded-md mt-2 flex flex-col relative">
          <button onClick={() => SetCollapse(!Collapse)}>
            <ul className="flex justify-between gap-2">
              <li className="flex justify-between gap-2 text-2xl">
                <RiMapPinAddFill className={"mt-[2.5px]"} />
                Tujuan Pembelajaran
              </li>
              <li>{Collapse ? <IoIosArrowDown /> : <IoIosArrowForward />}</li>
            </ul>
          </button>

          <div>
            {Collapse ? (
              <div className="bg-gray-800 w-[73rem] p-2 rounded-md text-base text-start">
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
                  Video Sudah Ditonton
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
            <div>
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
                  <h1 className="mb-2 font-bold">
                    Tujuan Video Pembelajaran :
                  </h1>
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
              <button
                onClick={() => setFinishReading(!FinishReading)}
                className="ml-[26.5rem] hover:bg-teal-400 text-5xl bg-teal-600 p-5 w-fit rounded-md mt-10 mb-2 font-bold flex justify-between gap-2"
              >
                <span>
                  {FinishReading ? <BsFillBookmarkCheckFill /> : <BsBookmark />}
                </span>
                Video Sudah Ditonton
              </button>
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
                Video Sudah Ditonton
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
              {/* Soal A */}
              <div className="mt-10">
                <Ab />
                <h3 className="ml-5 mb-5 text-black">
                  <div className="text-justify border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5">
                    Kamu telah menonton Video Penjumlahan Dan Pengurangan
                    Bilangan Bulat, jawablah pertanyaan dengan benar pada kolom
                    yang tersedia. Tekan tombol Cek Jawaban apabila telah
                    menjawab seluruh pertanyaan. Jika jawabanmu
                    <span className="font-bold"> benar, </span>maka akan
                    ditampilkan teks Jawaban
                    <span className="font-bold text-green-400 bg-white rounded-md p-1">
                      Kamu Benar!
                    </span>
                    , sedangkan jika jawabanmu
                    <span className="font-bold"> salah, </span>maka akan
                    ditampilkan teks Jawaban
                    <span className="font-bold text-red-400 bg-white rounded-md p-1">
                      Kamu Salah!
                    </span>
                  </div>
                </h3>
                <div className="flex flex-col">
                  <iframe
                    className="h-[60rem] w-100 rounded-md border-4 border-gray-800"
                    loading="lazy"
                    src="/QuizDragAndDrop/bab2_1_ab"
                    allowFullScreen
                  ></iframe>
                </div>
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
                      </div>
                    </ul>
                  </div>
                </h3>
                <div className="flex flex-col">
                  <iframe
                    className="h-[31rem] w-100 rounded-md border-4 border-gray-800"
                    loading="lazy"
                    src="/QuizDragAndDrop/bab2_2_ab"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* Soal c */}
              <div className="mt-10">
                <Am />
                <h3 className="ml-5 mb-5 text-black">
                  <div className="text-justify border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5">
                    Kamu telah menonton Video Penjumlahan Dan Pengurangan
                    Bilangan Bulat, jawablah pertanyaan dibawah ini dengan cara
                    menyerat buah yang ada di kulkas untuk menambahkan bilangan
                    positif dan buah yang ada di pasar untuk menambahkan
                    bilangan negatif sebanyak angka jawaban bilangan bulat di
                    kolom jawaban sesuai dengan letaknya pada soal! Jika
                    jawabanmu benar maka akan ditampilkan teks jawaban
                    <span className="font-bold text-green-400 bg-white rounded-md p-1">
                      Kamu Benar!
                    </span>
                    sedangkan jika jawabanmu salah maka akan ditampilkan teks
                    jawaban
                    <span className="font-bold text-red-400 bg-white rounded-md p-1">
                      Kamu Salah!
                    </span>
                    .
                  </div>
                </h3>
                <div className="flex flex-col">
                  <iframe
                    className="h-[35rem] w-100 rounded-md border-4 border-gray-800"
                    loading="lazy"
                    src="/QuizDragAndDrop/bab2_A"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* Soal d */}
              <div className="mt-10">
                <Am />
                <h3 className="ml-5 mb-5 text-black">
                  <div className="text-justify border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5">
                    Kamu telah menonton Video Penjumlahan Dan Pengurangan
                    Bilangan Bulat, jawablah pertanyaan dengan meletakkan
                    bilangan yang benar pada kolom yang tersedia. Tekan tombol
                    Cek Jawaban apabila telah menjawab seluruh pertanyaan. Jika
                    jawabanmu benar, maka akan ditampilkan teks Jawaban{" "}
                    <span className="font-bold text-green-400 bg-white rounded-md p-1">
                      Kamu Benar!
                    </span>
                    , sedangkan jika jawabanmu salah, maka akan ditampilkan teks
                    Jawaban{" "}
                    <span className="font-bold text-red-400 bg-white rounded-md p-1">
                      Kamu Salah!
                    </span>
                    .
                  </div>
                  <div className="hidden mt-5 flex-col px-[20rem] gap-2 justify-center">
                    <div className="bg-yellow-500 p-4 rounded-md text-black font-bold text-5xl w-fit">
                      Contoh :
                    </div>
                    <Image
                      width={700}
                      height={500}
                      className="rounded-md border-2 border-black p-1"
                      src={"/contoh.png"}
                      alt="contoh"
                    />
                  </div>
                </h3>
                <div className="flex flex-col">
                  <iframe
                    className="h-[35rem] w-100 rounded-md border-4 border-gray-800"
                    loading="lazy"
                    src="/QuizDragAndDrop/bab2_B"
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

      <ButttonpnDOWN p={"/bab1_1"} n={"/bab2_kuis"} />
    </div>
  );
};

export default Page;
