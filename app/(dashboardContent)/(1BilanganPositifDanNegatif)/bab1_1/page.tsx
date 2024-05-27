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
import Modal from "react-modal";
import { useAppContext } from "@/app/context/AppWrapper";
import { IoClose } from "react-icons/io5";
import { FaCircleQuestion } from "react-icons/fa6";

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
    } else {
      element?.requestFullscreen();
      console.log("enter fullscreen");
    }
  };

  const { modalIsOpen, setModalIsOpen } = useAppContext();

  return (
    <div className="bg-rose-700 md:h-[39.5rem] h-[40rem] md:w-[89.5rem] w-[41rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl overflow-y-scroll overflow-x-hidden">
      <ButttonpnUP p={"/"} n={"/bab1_2"} />

      <div className="flex flex-row gap-2 justify-center items-center">
        <button
          onClick={() => setModalIsOpen(true)}
          className="text-black font-bold bg-yellow-300 p-5 w-fit rounded-md flex flex-col justify-center items-center gap-2"
        >
          <FaCircleQuestion />
          PANDUAN
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Video Modal"
        /* closeTimeoutMS={500} */
        className="flex justify-center items-center text-5xl p-5 rounded-md w-fit"
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.7)",
          },
          content: {
            width: "80rem",
            height: "85vh",
            margin: "auto", // Center the modal horizontally
            padding: "0px",
            border: "none",
            overflow: "hidden",
            marginTop: "100px",
          },
        }}
      >
        <div
          style={{ animation: "dropTop .30s linear" }}
          className="flex flex-col justify-start items-center gap-2"
        >
          <h1 className="text-3xl text-center font-bold bg-indigo-500 p-5 w-fit rounded-md shadow-md">
            Panduan Media Pembelajaran <br /> BILANGAN BULAT
          </h1>
          <iframe
            className="w-[38rem] h-[25rem] rounded-md"
            loading="lazy"
            src="https://www.canva.com/design/DAGE6nXV6FY/o0-Xg_uhhv8oU5mEts8OVg/view?embed"
            allowFullScreen
          />
          <button
            onClick={() => setModalIsOpen(false)}
            className="text-base bg-red-500 p-2 w-fit rounded-md flex flex-col justify-center items-center gap-2"
          >
            <IoClose />
            Tutup
          </button>
        </div>
      </Modal>

      {/* Judul Bab */}
      <div className="mx-2 mt-0 left-[-90.9rem]">
        <div className="bg-gray-900 w-fit p-2 rounded-md mt-3">
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
          <div className="mx-20 bg-gray-900 w-[23rem] p-2 rounded-md mt-2 flex flex-col relative">
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
                <div className="bg-gray-800 w-[22rem] p-2 rounded-md text-base text-start">
                  <ul className="list-decimal list-inside">
                    <li>
                      Siswa dapat menjelaskan maksud dari tanda “+” dan “-” pada
                      suatu bilangan dengan benar.
                    </li>
                    <br />
                    <li>
                      Siswa dapat menyatakan besaran-besaran dengan menggunakan
                      tanda “+” atau “-” dengan tepat.
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

          {/* Konten Bab */}
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
                    src="https://scratch.mit.edu/projects/embed/1008826186/?autostart=true"
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
                    Selesai Membaca
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>

          {/* Video Bab 1.1 */}
          <div>
            {Media === "video" ? (
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
                    Siswa dapat melakukan proses perhitungan yang terdapat dua{" "}
                    <br />
                    operasi (penjumlahan dan pengurangan) dengan benar.
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>

          {/* Slide Materi */}
          <div>
            {Media === "slide" ? (
              <div className="wrapperIfreme">
                <iframe
                  loading="lazy"
                  src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF94ipRtn4&#x2F;HLkGd7YEHY3GDPvcB2Kmkg&#x2F;view?embed"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <></>
            )}
          </div>

          {/* Latihan Soal */}
          <div>
            {FinishReading ? (
              <div>
                <Cardlatihan n={1} />
                <div className="mt-1">
                  <h2 className="font-bold">
                    Coba jawablah pertanyaan berikut dengan baik dan benar!
                  </h2>
                  <br />
                  {/* Soal A */}
                  <h3 className="text-yellow-200 font-bold">
                    A. Jawablah pertanyaan-pertanyaan berikut ini.
                  </h3>
                  <div className="flex flex-col">
                    <iframe
                      className="h-[35rem] w-100 rounded-md border-4 border-gray-800"
                      loading="lazy"
                      src="/QuizDragAndDrop/bab1_1Ta"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <form onSubmit={handleSubmitJawaban}>
                    <h3 className="mt-20 text-yellow-200 font-bold">
                      B. Jawablah pertanyaan-pertanyaan berikut ini dengan
                      mengisi kolom kosong pada setiap pertanyaan.
                    </h3>
                    <ul className="list-decimal list-inside gap-5 flex flex-col ml-10">
                      <li>
                        Diketahui bahwa A adalah titik 0 km. Titik "3 km selah
                        utara A" dinyatakan sebagai +3 km. Bagaimana menyatakan
                        titik “5 km di sebelah selatan A”?
                        <div className="flex">
                          <div className="flex mt-5 text-black bg-white border-4 border-black w-fit rounded-md p-5">
                            <div className="mr-2">Jawaban :</div> <br />
                            <input
                              type="text"
                              placeholder="..."
                              id="soal1"
                              className="w-[7vh] rounded-md text-center placeholder-indigo-500 bg-green-50 text-black border-4 border-sky-400 p-2 px-2 h-10"
                            />
                            <div className="ml-2 mt-1">Km</div>
                          </div>
                          <div className="ml-5 mt-5">
                            {jawaban1status === "benar" ? (
                              <p className="text-teal-500 bg-white border-4 border-black w-fit rounded-md p-5">
                                Benar
                              </p>
                            ) : (
                              <div></div>
                            )}
                            {jawaban1status === "salah" ? (
                              <p className="text-rose-500 bg-white border-4 border-black w-fit rounded-md p-5">
                                Salah
                              </p>
                            ) : (
                              <div></div>
                            )}
                          </div>
                        </div>
                      </li>
                      <li>
                        Apabila "rugi 200 rupiah" dinyatakan sebagai -200
                        rupiah, menyatakan apa +300 rupiah?
                        <div className="flex">
                          <div className="flex mt-5 text-black bg-white border-4 border-black w-fit rounded-md p-5">
                            <div className="mr-2">Jawaban :</div> <br />
                            <input
                              type="text"
                              placeholder="..."
                              id="soal2"
                              className="w-[17vh] rounded-md text-center placeholder-indigo-500 bg-green-50 text-black border-4 border-sky-400 p-2 px-2 h-10"
                            />
                            <div className="ml-2 mt-1">, 300</div>
                            <div className="ml-2 mt-1">Rupiah</div>
                          </div>
                          <div className="ml-5 mt-5">
                            {jawaban2status === "benar" ? (
                              <p className="text-teal-500 bg-white border-4 border-black w-fit rounded-md p-5">
                                Benar
                              </p>
                            ) : (
                              <div></div>
                            )}
                            {jawaban2status === "salah" ? (
                              <p className="text-rose-500 bg-white border-4 border-black w-fit rounded-md p-5">
                                Salah
                              </p>
                            ) : (
                              <div></div>
                            )}
                          </div>
                        </div>
                      </li>
                    </ul>
                    <button
                      type="submit"
                      className="font-bold mt-5 ml-10 w-[78rem] bg-sky-600 p-2 rounded-md text-center hover:bg-sky-400"
                    >
                      Cek Jawaban
                    </button>
                    {(jawaban1status === "salah" ||
                      jawaban2status === "salah") && (
                      <button
                        type="reset"
                        onClick={() => reset()}
                        className="font-bold mt-5 ml-10 w-[78rem] bg-sky-600 p-2 rounded-md text-center hover:bg-sky-400"
                      >
                        Ulang Kuis
                      </button>
                    )}
                  </form>

                  {/* Soal B */}
                  <div>
                    <h3 className="mt-20 text-yellow-200 font-bold">
                      C. Kelompokkan Bilangan-Bilangan berikut ini dengan baik
                      dan benar.
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
