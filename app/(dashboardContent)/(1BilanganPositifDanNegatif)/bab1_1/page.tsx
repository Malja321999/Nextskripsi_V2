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
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiMapPinAddFill } from "react-icons/ri";
import Cardlatihan from "@/app/component/Cardlatihan";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { useRouter } from "next/navigation";
import CardFinishRead from "@/app/component/CardFinishRead";
import { FaVideo } from "react-icons/fa";
import { RiSlideshow2Fill } from "react-icons/ri";
import { MdCenterFocusStrong } from "react-icons/md";
import { set } from "firebase/database";
import { BiFullscreen } from "react-icons/bi";

import { useAppContext } from "@/app/context/AppWrapper";
import { IoClose } from "react-icons/io5";
import { FaCircleQuestion } from "react-icons/fa6";
import Mnb from "@/app/component/Mnb";
import Mbb from "@/app/component/Mbb";
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

  const [jawaban1status, setjawaban1status] = useState("");
  const [jawaban2status, setjawaban2status] = useState("");

  const [FinishReading, setFinishReading] = useState(false);

  function handleSubmitJawaban(e: any) {
    e.preventDefault();
    const jawaban1 = e.target.soal1.value.toUpperCase();
    const jawaban2 = e.target.soal2.value.toUpperCase();

    if (jawaban1 === "-5") {
      setjawaban1status("benar");
    } else if (jawaban1 === "") {
      setjawaban1status("");
    } else {
      setjawaban1status("salah");
    }

    if (jawaban2 === "UNTUNG") {
      setjawaban2status("benar");
    } else if (jawaban2 === "") {
      setjawaban1status("");
    } else {
      setjawaban2status("salah");
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
    <div className="bg-teal-500 md:h-[39.5rem] h-[40rem] md:w-[89.5rem] w-[41rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl overflow-y-scroll overflow-x-hidden">
      <ButttonpnUP p={"/"} n={"/bab1_2"} />

      <div className="w-full flex flex-col gap-2 justify-center items-center text-black font-bold bg-indigo-300 p-5 rounded-md">
        <div className="text-3xl bg-white p-5 rounded-md">
          Panduan Pengunaan Media Interaktif Bilangan Bulat
        </div>
        <div className="ml-6 text-justify">
          <ul className="flex flex-col gap-2 list-decimal p-5">
            <li>
              <div>Tekan bendera hijau untuk memulai video pembelajaran</div>
              <div>
                <Image width={900} height={200} src={"/p1.png"} alt="bendera" />
              </div>
            </li>
            <li>
              <div>
                Tonton, perhatikan, dan pahami setiap pembahasan dalam video
                pembelajaran
              </div>
              <div>
                <Image width={900} height={200} src={"/p2.png"} alt="bendera" />
              </div>
            </li>
            <li>
              <div>
                Jawab pertanyaan di dalam video agar dapat melanjutkan video
                pembelajaran
              </div>
              <div>
                <Image width={900} height={200} src={"/p3.png"} alt="bendera" />
              </div>
            </li>
            <li>
              <div>
                Jika kamu sudah selesai menonton video, kamu dapat mengulang
                video kembali
              </div>
              <div>
                <Image width={900} height={200} src={"/p4.png"} alt="bendera" />
              </div>
            </li>
            <li>
              <div>
                Geser halaman bab ke paling bawah, jawab pertanyaan dengan "Iya"
                jika kamu sudah menonton video pembelajaran dan jawab "Tidak"
                jika sebaliknya
              </div>
              <div>
                <Image width={900} height={200} src={"/p5.png"} alt="bendera" />
              </div>
            </li>
            <li>
              <div>
                Soal Latihan akan muncul ketika kamu sudah menjawab pertanyaan
                dengan "Iya"
              </div>
              <div>
                <Image width={900} height={200} src={"/p6.png"} alt="bendera" />
              </div>
            </li>
            <li>
              <div>
                Kerjakan semua soal latihan pada bab agar kamu dapat lebih
                memahami pembelajaran dalam bab tersebut
              </div>
              <div>
                <Image width={900} height={200} src={"/p7.png"} alt="bendera" />
              </div>
            </li>
            <li>
              <div>
                Jika kamu sudah mengerjakan semua soal latihan pada bab,
                silahkan lanjutkan ke bab berikutnya dengan menekan tombol
                "selanjutnya"
              </div>
              <div>
                <Image width={900} height={200} src={"/p8.png"} alt="bendera" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Judul Bab */}
      <div className="mx-2 mt-0 left-[-90.9rem]">
        <div className="bg-white text-black w-fit p-2 rounded-md mt-3">
          <ul className="flex justify-start gap-2">
            <li className="mt-1">
              <IoBookOutline />
            </li>
            <li>
              BAB 1.1 <br /> Bilangan Dengan Tanda
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div>
          {/* Tujuan Pembelajaran */}
          <div className="mx-20 bg-white text-black w-[74rem] p-2 rounded-md mt-2 flex flex-col relative">
            <button onClick={() => SetCollapse2(!Collapse2)}>
              <ul className="flex justify-between gap-2">
                <li className="flex justify-between gap-2 text-2xl">
                  <RiMapPinAddFill className={"mt-[2.5px]"} />
                  Tujuan Pembelajaran
                </li>
                <li>
                  {Collapse2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </li>
              </ul>
            </button>

            <div>
              {Collapse2 ? (
                <div className="bg-indigo-300 w-[73rem] p-2 rounded-md text-base text-start">
                  <ul className="list-decimal list-inside">
                    <li>
                      Siswa dapat menjelaskan “Bilangan Positif” dan “Bilangan
                      Negatif” pada suatu bilangan bulat dengan benar.
                    </li>
                    <br />
                    <li>
                      Siswa dapat menyatakan besaran-besaran dengan menggunakan
                      “Bilangan Positif” atau “Bilangan Negatif” dengan tepat.
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* Tombol Media */}
          {/*  <div className="mt-5 mb-5">
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
          </div> */}

          {/* Konten Bab */}
          <div className="mt-5 mb-5 w-fit h-fit">
            {Media === "" ? (
              <div className="flex flex-col gap-2">
                <div>
                  <button
                    onClick={Tfullscreen}
                    className="text-2xl ml-[12rem] flex justify-center items-center bg-blue-700 text-white hover:bg-blue-600 w-[58.6rem] rounded-md"
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
                    src="https://scratch.mit.edu/projects/embed/1008826186/?autostart=true"
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
                  Ayo Kerjakan Latihan Soal 1 Dibawah ini!
                </h1>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* Video Bab 1.1 */}
          {/*   <div>
            {Media === "video" ? (
              <div>
                <div className={CVideo}>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Q-i7IjBUF6s?si=nXBEewH5Uw6OXp1U"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <h1 className="text-center mt-10 mb-5">
                    BILANGAN DENGAN TANDA
                  </h1>
                  <ul className="ml-5 list-decimal list-inside w-50 text-xs">
                    <h1 className="mb-2 font-bold">
                      Tujuan Video Pembelajaran :
                    </h1>
                    <li>
                      Siswa dapat melakukan proses penjumlahan dua bilangan
                      bulat dengan tepat.
                    </li>
                    <br />
                    <li>
                      Siswa dapat melakukan pengurangan dua bilangan bulat
                      dengan tepat.
                    </li>
                    <br />
                    <li>
                      Siswa dapat melakukan proses perhitungan yang terdapat dua{" "}
                      <br />
                      operasi (penjumlahan dan pengurangan) dengan benar.
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => setFinishReading(!FinishReading)}
                  className="ml-[26.5rem] hover:bg-teal-400 text-5xl bg-teal-600 p-5 w-fit rounded-md mt-10 mb-2 font-bold flex justify-between gap-2"
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
            ) : (
              <></>
            )}
          </div> */}

          {/* Slide Materi */}
          {/*    <div>
            {Media === "slide" ? (
              <div className="wrapperIfreme">
                <iframe
                  loading="lazy"
                  src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF94ipRtn4&#x2F;HLkGd7YEHY3GDPvcB2Kmkg&#x2F;view?embed"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={() => setFinishReading(!FinishReading)}
                  className="ml-[15.3rem] hover:bg-teal-400 text-5xl bg-teal-600 p-5 w-fit rounded-md mt-10 mb-2 font-bold flex justify-between gap-2"
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
            ) : (
              <></>
            )}
          </div> */}

          {/* Latihan Soal */}
          <div>
            {FinishReading ? (
              <div>
                <div className="mb-5">
                  <Cardlatihan n={1} />
                  <span className="ml-5">
                    Setelah menonton video diatas, jawablah pertanyaan dibawah
                    ini.
                  </span>
                </div>
                <div>
                  {/* Soal A */}
                  <Mnb />
                  <h3 className="ml-5 mb-5 text-left border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5 text-black">
                    Nyatakan besaran-besaran berikut ini menggunakan Bilangan
                    Positif atau Bilangan Negatif, dengan cara memasangkan
                    jawaban yang ada di kolom pendapatmu dengan sesuai! Jika
                    jawabanmu benar maka akan ditampilkan teks jawaban
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
                  <div className="flex flex-col">
                    <iframe
                      className="h-[35rem] w-100 rounded-md border-4 border-gray-800"
                      loading="lazy"
                      src="/QuizDragAndDrop/bab1_1_mnb"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* soal b */}
                  <div className="mt-10">
                    <Mbb />
                    <h3 className="ml-5 mb-5 text-left border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5 text-black">
                      Hitunglah benda pada sebelah kiri kemudian pilih lambang
                      bilangan Positif dan bilangan Negatif di sebelah kanan.
                      Benda yang berwarna{" "}
                      <span className="text-red-400 font-bold bg-black p-1 rounded-lg">
                        Merah
                      </span>{" "}
                      akan dilambangkan sebagai bilangan{" "}
                      <span className="text-red-400 font-bold bg-black p-1 rounded-lg">
                        Positif
                      </span>{" "}
                      dan benda berwarna
                      <span className="font-bold text-black bg-white rounded-lg">
                        Hitam
                      </span>{" "}
                      akan dilambangkan sebagai bilangan{" "}
                      <span className="font-bold text-black bg-white rounded-lg">
                        Negatif.
                      </span>{" "}
                      Jika jawabanmu benar maka akan ditampilkan teks jawaban
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
                    <div className="flex flex-col">
                      <iframe
                        className="h-[45rem] w-100 rounded-md border-4 border-gray-800"
                        loading="lazy"
                        src="/QuizDragAndDrop/bab1_1_mbb"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  {/* Soal c */}
                  <div className="mt-10">
                    <Ab />
                    <h3 className="ml-5 mb-5 text-black">
                      <div className="border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5">
                        <ul className="list list-disc list-inside">
                          <h1 className="font-bold">Petunjuk pengerjaan :</h1>
                          <div>
                            <li>
                              Jawablah pertanyaan dibawah ini dengan tepat
                            </li>
                            <li>
                              Jika jawabanmu{" "}
                              <span className="font-bold">benar</span>, maka
                              akan ditampilkan teks Jawaban{" "}
                              <span className="font-bold text-green-400 bg-white rounded-md p-1">
                                Kamu Benar!
                              </span>
                              .
                            </li>
                            <li>
                              Jika jawabanmu{" "}
                              <span className="font-bold">salah</span>, maka
                              akan ditampilkan teks Jawaban{" "}
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
                        src="/QuizDragAndDrop/bab1_1ab"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  {/* Soal d */}
                  {/*  <div className="mt-10">
                    <Am />
                    <h3 className="ml-5 mb-5 text-black">
                      <div className="border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5">
                        <ul className="flex flex-col gap-4 ist list-disc list-inside">
                          <h1 className="font-bold">Petunjuk pengerjaan :</h1>
                          <li>
                            Kamu telah menonton video mengenai Bilangan Dengan
                            Tanda. Sekarang pasangkanlah banyak benda dengan
                            lambang bilangan bulat di bawah ini.
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
                        </ul>
                      </div>
                    </h3>
                    <div className="flex flex-col">
                      <iframe
                        className="h-[80rem] w-100 rounded-md border-4 border-gray-800"
                        loading="lazy"
                        src="/QuizDragAndDrop/bab1_1_am"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div> */}

                  {/* Soal e */}
                  <div className="mt-10">
                    <Am />
                    <h3 className="ml-5 mb-5 text-black">
                      <div className="border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5">
                        <ul className="p-5 list list-disc list-inside">
                          <h1 className="font-bold">Petunjuk pengerjaan :</h1>
                          <div>
                            <li>
                              Kamu sudah menonton video mengenai Bilangan Dengan
                              Tanda. Sekarang kelompokkanlah{" "}
                              <span className="font-bold">Bilangan</span> pada
                              kotak yang tersedia berdasarkan kelompok bilangan
                              di setiap pertanyaan di bawah ini.
                            </li>
                            <li>
                              Jika jawabanmu{" "}
                              <span className="font-bold">benar</span>, maka
                              akan ditampilkan teks Jawaban{" "}
                              <span className="font-bold text-green-400 bg-white rounded-md p-1">
                                Kamu Benar!
                              </span>
                              .
                            </li>
                            <li>
                              Jika jawabanmu{" "}
                              <span className="font-bold">salah</span>, maka
                              akan ditampilkan teks Jawaban{" "}
                              <span className="font-bold text-red-400 bg-white rounded-md p-1">
                                Kamu Salah!
                              </span>
                              .
                            </li>
                            <li>
                              Tarik dan tahan bilangan bulat pada kotak berwarna
                              ungu
                            </li>
                            <li>
                              Letakkan pada kotak berwarna hitam jika menurutmu
                              bilangan yang ditarik adalah bilangan negatif
                              sebaliknya jika tidak maka taruhlah pada kotak
                              berwarna merah
                            </li>
                            <li>
                              Tekan tombol{" "}
                              <span className="font-bold bg-white rounded-md">
                                Cek Jawaban
                              </span>{" "}
                              ketika kamu merasa sudah meletakkan semua bilangan
                              yang diminta.
                            </li>
                          </div>
                        </ul>
                      </div>
                    </h3>

                    <br />
                    <ul className="list-decimal list-inside gap-5 flex flex-col ml-10">
                      <li>
                        Mana yang merupakan bilangan positif? Mana yang
                        merupakan bilangan negatif?
                      </li>
                      <iframe
                        className="h-[30rem] w-100 rounded-md border-4 border-gray-800"
                        loading="lazy"
                        src="/QuizDragAndDrop/bab1_1A"
                        allowFullScreen
                      ></iframe>
                      <h3 className="ml-5 mb-5 text-black">
                        <div className="border-dotted border-2 bg-indigo-300 border-blue-600 rounded-md p-5">
                          <ul className="p-5 list list-disc list-inside">
                            <h1 className="font-bold">Petunjuk pengerjaan :</h1>
                            <div>
                              <li>
                                Kamu sudah menonton video mengenai Bilangan
                                Dengan Tanda. Sekarang kelompokkanlah{" "}
                                <span className="font-bold">Bilangan</span> pada
                                kotak yang tersedia berdasarkan kelompok
                                bilangan di setiap pertanyaan di bawah ini.
                              </li>
                              <li>
                                Jika jawabanmu{" "}
                                <span className="font-bold">benar</span>, maka
                                akan ditampilkan teks Jawaban{" "}
                                <span className="font-bold text-green-400 bg-white rounded-md p-1">
                                  Kamu Benar!
                                </span>
                                .
                              </li>
                              <li>
                                Jika jawabanmu{" "}
                                <span className="font-bold">salah</span>, maka
                                akan ditampilkan teks Jawaban{" "}
                                <span className="font-bold text-red-400 bg-white rounded-md p-1">
                                  Kamu Salah!
                                </span>
                                .
                              </li>
                              <li>
                                Tarik dan tahan bilangan bulat pada kotak
                                berwarna ungu
                              </li>
                              <li>
                                Letakkan pada kotak berwarna hijau jika
                                menurutmu bilangan yang ditarik adalah bilangan
                                seuai dengan bilangan yang diminta di setiap
                                soal
                              </li>
                              <li>
                                Tekan tombol{" "}
                                <span className="font-bold bg-white rounded-md">
                                  Cek Jawaban
                                </span>{" "}
                                ketika kamu merasa sudah meletakkan semua
                                bilangan yang diminta.
                              </li>
                            </div>
                          </ul>
                        </div>
                      </h3>
                      <li>Mana yang merupakan bilangan bulat?</li>
                      <iframe
                        className="h-[30rem] w-100 rounded-md border-4 border-gray-800"
                        loading="lazy"
                        src="/QuizDragAndDrop/bab1_1B1"
                        allowFullScreen
                      ></iframe>
                      <li>Mana yang merupakan bilangan asli?</li>
                      <iframe
                        className="h-[30rem] w-100 rounded-md border-4 border-gray-800"
                        loading="lazy"
                        src="/QuizDragAndDrop/bab1_1B2"
                        allowFullScreen
                      ></iframe>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <ButttonpnDOWN p={"/"} n={"/bab1_2"} />
    </div>
  );
};

export default Page;
