"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
/* Icon Ringkasan */
import { RiAlarmWarningLine, RiSlideshow2Fill } from "react-icons/ri";
/* Icon Pras */
import { FaRegCalendarCheck, FaVideo } from "react-icons/fa";
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
import { IoBookOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdCenterFocusStrong } from "react-icons/md";
import { BiFullscreen } from "react-icons/bi";
import Am from "@/app/component/Am";
import Ab from "@/app/component/Ab";
import Image from "next/image";

const Page = () => {
  const [Collapse, SetCollapse] = useState(true);

  const sky = "text-sky-400 font-bold";
  const CardSoal =
    "mt-5 bg-white w-fit rounded-md border-8 border-gray-900 text-black p-5";
  const CVideo =
    "bg-gray-900 w-fit mt-5 mb-10 mx-auto p-4 rounded-md flex flex-col relative";

  const [jawaban1status, setjawaban1status] = useState("");
  const [jawaban2status, setjawaban2status] = useState("");

  const [FinishReading, setFinishReading] = useState(false);

  function handleSubmitJawaban(e: any) {
    e.preventDefault();
    const jawaban1 = e.target.soal1.value.toUpperCase();
    const jawaban2 = e.target.soal2.value.toUpperCase();
    if (jawaban1 !== "") {
      if (jawaban1 === "-5") {
        setjawaban1status("benar");
      } else {
        setjawaban1status("salah");
      }
    }
    if (jawaban2 !== "") {
      if (jawaban2 === "UNTUNG") {
        setjawaban2status("benar");
      } else {
        setjawaban2status("salah");
      }
    }
    if (jawaban1 === "" || jawaban2 === "") {
      alert("Jawaban Belum Diisi");
    }
  }

  function reset() {
    setjawaban1status("");
    setjawaban2status("");
  }

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
    <div className="bg-sky-700 h-[39.5rem] w-[89.5rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl overflow-y-scroll overflow-x-hidden">
      <ButttonpnUP p={"/bab2"} n={"/bab3_kuis"} />
      {/* Judul Bab */}
      <div className="mx-2 mt-0 left-[-90.9rem]">
        <div className="bg-gray-900 w-fit p-2 rounded-md mt-3">
          <ul className="flex justify-start gap-2">
            <li className="mt-1">
              <IoBookOutline />
            </li>
            <li>
              BAB 3 <br /> Perkalian dan Pembagian Bilangan Bulat
            </li>
          </ul>
        </div>
      </div>

      <div>
        {/* Tujuan Pembelajaran bab 3 */}
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
                    Siswa dapat melakukan proses perkalian dua bilangan bulat
                    dengan tepat.
                  </li>
                  <br />
                  <li>
                    Siswa dapat melakukan pembagian dua bilangan bulat dengan
                    tepat.
                  </li>
                  <br />
                  <li>
                    Siswa dapat melakukan proses perhitungan dengan kombinasi
                    empat operasi (penjumlahan, pengurangan, perkalian, dan
                    pembagian) dengan benar.
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* Konten Bab 3 */}
        <div className="mt-5 mb-5 w-fit h-fit">
          {Media === "" ? (
            <div className="flex flex-col gap-2">
              <div>
                <button
                  onClick={Tfullscreen}
                  className="text-2xl ml-[12rem] flex justify-center items-center bg-gray-800 hover:bg-slate-700 w-[58.6rem] rounded-md"
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
                  src="https://scratch.mit.edu/projects/1013173153/embed"
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
                Ayo Kerjakan Latihan Soal 3 Dibawah ini!
              </h1>
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
                      Kamu telah menonton Video Perkalian Dan Pembagian Bilangan
                      Bulat, jawablah pertanyaan dengan benar pada kolom yang
                      tersedia. Tekan tombol Cek Jawaban apabila telah menjawab
                      seluruh pertanyaan. Jika jawabanmu
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
                      . Tekan tombol{" "}
                      <span className="font-bold bg-white rounded-md">
                        Cek Jawaban
                      </span>{" "}
                      ketika kamu sudah menjawab semua pertanyaan.
                    </div>
                  </h3>
                  <div className="flex flex-col">
                    <iframe
                      className="h-[65rem] w-100 rounded-md border-4 border-gray-800"
                      loading="lazy"
                      src="/QuizDragAndDrop/bab3_1_ab"
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
                          </li>{" "}
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
                      className="h-[37rem] w-100 rounded-md border-4 border-gray-800"
                      loading="lazy"
                      src="/QuizDragAndDrop/bab3_2_ab"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                {/* Soal c */}
                <div className="mt-10">
                  <Am />
                  <h3 className="ml-5 mb-5 text-black">
                    <div className="text-justify border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5">
                      Kamu telah menonton Video Perkalian Dan Pembagian Bilangan
                      Bulat, jawablah pertanyaan dengan meletakkan bilangan yang
                      benar pada kolom yang tersedia. Tekan tombol Cek Jawaban
                      apabila telah menjawab seluruh pertanyaan. Jika jawabanmu
                      benar, maka akan ditampilkan teks Jawaban{" "}
                      <span className="font-bold text-green-400 bg-white rounded-md p-1">
                        Kamu Benar!
                      </span>
                      , sedangkan jika jawabanmu salah, maka akan ditampilkan
                      teks Jawaban Kamu{" "}
                      <span className="font-bold text-red-400 bg-white rounded-md p-1">
                        Kamu Salah!
                      </span>
                      . Tekan tombol{" "}
                      <span className="font-bold bg-white rounded-md">
                        Cek Jawaban
                      </span>{" "}
                      ketika kamu sudah menjawab semua pertanyaan.
                    </div>
                  </h3>
                  <div className="flex flex-col">
                    <iframe
                      className="h-[35rem] w-100 rounded-md border-4 border-gray-800"
                      loading="lazy"
                      src="/QuizDragAndDrop/bab3_A"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                {/* Soal d */}
                <div className="mt-10">
                  <Am />
                  <h3 className="ml-5 mb-5 text-black">
                    <div className="text-justify border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5">
                      Kamu telah menonton Video Perkalian Dan Pembagian Bilangan
                      Bulat, jawablah pertanyaan dengan meletakkan bilangan yang
                      benar pada kolom yang tersedia. Tekan tombol Cek Jawaban
                      apabila telah menjawab seluruh pertanyaan. Jika jawabanmu
                      benar, maka akan ditampilkan teks Jawaban{" "}
                      <span className="font-bold text-green-400 bg-white rounded-md p-1">
                        Kamu Benar!
                      </span>
                      , sedangkan jika jawabanmu salah, maka akan ditampilkan
                      teks Jawaban Kamu{" "}
                      <span className="font-bold text-red-400 bg-white rounded-md p-1">
                        Kamu Salah!
                      </span>
                      . Tekan tombol{" "}
                      <span className="font-bold bg-white rounded-md">
                        Cek Jawaban
                      </span>{" "}
                      ketika kamu sudah menjawab semua pertanyaan.
                    </div>
                    <div className="mt-5 flex-col px-[20rem] gap-2 justify-center">
                      <div className="bg-yellow-500 p-4 rounded-md text-black font-bold text-5xl w-fit">
                        Contoh :
                      </div>
                      <Image
                        width={700}
                        height={500}
                        className="rounded-md border-2 border-black p-1"
                        src={"/contoh2.png"}
                        alt="contoh2"
                      />
                    </div>
                  </h3>
                  <div className="flex flex-col">
                    <iframe
                      className="h-[35rem] w-100 rounded-md border-4 border-gray-800"
                      loading="lazy"
                      src="/QuizDragAndDrop/bab3_B"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <> </>
          )}
        </div>
      </div>
      <ButttonpnDOWN p={"/bab2"} n={"/bab3_kuis"} />
    </div>
  );
};

export default Page;
