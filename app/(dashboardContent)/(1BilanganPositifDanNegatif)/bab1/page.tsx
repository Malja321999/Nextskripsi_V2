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
import { BsPencilSquare } from "react-icons/bs";
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

const Page = () => {
  const [Collapse, SetCollapse] = useState(false);
  const [Collapse2, SetCollapse2] = useState(false);
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

  return (
    <div className="bg-rose-700 md:h-[39.5rem] h-[40rem] md:w-[89.5rem] w-[41rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl overflow-y-scroll overflow-x-hidden">
      <div>
        {next === "part1" ? (
          <div className="flex justify-between mt-1">
            <button
              onClick={() => router.push("/")}
              className="bg-gray-900 p-2 rounded-md flex justify-between text-xl"
            >
              <MdSkipPrevious className={"mt-[4px]"} />
              Sebelumnya
            </button>

            <button
              onClick={() => setnext("part2")}
              className="bg-gray-900 p-2 rounded-md flex justify-between text-xl"
            >
              Selanjutnya
              <MdSkipNext className={"mt-[4px]"} />
            </button>
          </div>
        ) : (
          <div className="flex justify-between mt-1">
            <button
              onClick={() => setnext("part1")}
              className="bg-gray-900 p-2 rounded-md flex justify-between text-xl"
            >
              <MdSkipPrevious className={"mt-[4px]"} />
              Sebelumnya
            </button>

            <button
              onClick={() => router.push("bab1_kuis")}
              className="bg-gray-900 p-2 rounded-md flex justify-between text-xl"
            >
              Selanjutnya
              <MdSkipNext className={"mt-[4px]"} />
            </button>
          </div>
        )}
      </div>

      {/* Judul Bab */}
      <div className="mx-2 mt-0 left-[-90.9rem]">
        <div className="bg-gray-900 w-fit p-2 rounded-md mt-3">
          <ul className="flex justify-start gap-2">
            <li className="mt-1">
              <IoBookOutline />
            </li>
            <li>
              BAB 1 <br /> Bilangan Positif Dan Negatif
            </li>
          </ul>
        </div>
      </div>

      <div>
        {next === "part1" ? (
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
                        Siswa dapat menjelaskan maksud dari tanda “+” dan “-”
                        pada suatu bilangan dengan benar.
                      </li>
                      <br />
                      <li>
                        Siswa dapat menyatakan besaran-besaran dengan
                        menggunakan tanda “+” atau “-” dengan tepat.
                      </li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>

            {/* Video Intro Bab */}
            <div className={CVideo}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Q-i7IjBUF6s?si=nXBEewH5Uw6OXp1U"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <h1 className="text-center mt-10 mb-5">Judul Video</h1>
            </div>

            {/* Konten Bab */}
            <div className="wrapperIfreme">
              <iframe
                loading="lazy"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF94ipRtn4&#x2F;HLkGd7YEHY3GDPvcB2Kmkg&#x2F;view?embed"
                allowFullScreen
              ></iframe>
            </div>
            {/* Latihan Soal */}
            <div>
              <Cardlatihan n={1} />
              <div className="mt-1">
                <h2 className="font-bold">
                  Coba jawablah pertanyaan berikut dengan baik dan benar!
                </h2>
                <br />
                {/* Soal A */}
                <div id="question">
                  <form onSubmit={handleSubmitJawaban}>
                    <h3 className="text-yellow-200 font-bold">
                      A. Jawablah pertanyaan-pertanyaan berikut ini.
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
                              id="soal1"
                              className="w-[7vh] rounded-md text-center dark:text-white text-black border-4 border-sky-400 p-2 px-2 h-10"
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
                              id="soal2"
                              className="w-[17vh] rounded-md text-center dark:text-white text-black border-4 border-sky-400 p-2 px-2 h-10"
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
                    {jawaban1status === "salah" ||
                      (jawaban2status === "salah" && (
                        <button
                          type="reset"
                          onClick={() => reset()}
                          className="font-bold mt-5 ml-10 w-[78rem] bg-sky-600 p-2 rounded-md text-center hover:bg-sky-400"
                        >
                          Ulang Kuis
                        </button>
                      ))}
                  </form>
                </div>
                {/* Soal B */}
                <div>
                  <h3 className="mt-20 text-yellow-200 font-bold">
                    B. Kelompokkan Bilangan-Bilangan berikut ini dengan baik dan
                    benar.
                  </h3>
                  {/* <h4 className="ml-7 text-black font-bold bg-white border-4 border-black w-fit rounded-md p-5">
                    -12;&emsp;+7;&emsp;0;&emsp;+0,6;&emsp;-3;&emsp;+25;&emsp;-8/3
                  </h4> */}
                  <br />
                  <ul className="list-decimal list-inside gap-5 flex flex-col ml-10">
                    <li>
                      Mana yang merupakan bilangan positif? Mana yang merupakan
                      bilangan negatif?
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
          </div>
        ) : (
          <div>
            {/* Tujuan Pembelajaran 1.2 */}
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
                        Siswa dapat menentukan posisi bilangan pada garis
                        bilangan dengan benar.
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

            {/* Video Intro Bab 1.2 */}
            <div className={CVideo}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WfnTG0q3D6o?si=0HlcHnbHP74JpdeB"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <h1 className="text-center mt-10 mb-5">Judul Video</h1>
            </div>

            {/* Konten Bab 1.2 */}
            <div className={CVideo}>
              <iframe
                width="900"
                height="500"
                loading="lazy"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-5u0wRd0&#x2F;KsfvvNbdHZUXR3eAaDUYZw&#x2F;view?embed"
                allowFullScreen
              ></iframe>
            </div>
            {/* Latihan Soal */}
            <div>
              <Cardlatihan n={1} />
              <div className="mt-1">
                <h2 className="font-bold">
                  Coba jawablah pertanyaan berikut dengan baik dan benar!
                </h2>
                <br />
                {/* Soal A */}
                <div id="question">
                  <form onSubmit={handleSubmitJawaban}>
                    <h3 className="text-yellow-200 font-bold">
                      A. Jawablah pertanyaan-pertanyaan berikut ini. Gunakan
                      tanda positif atau negatif untuk menyajikan besaran.
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
                              onFocus={(event) => {
                                const target = event.target as HTMLInputElement;
                                if (target.value) {
                                  target.value = "";
                                }
                              }}
                              type="text"
                              id="soal1"
                              className="w-[7vh] rounded-md text-center dark:text-white text-black border-4 border-sky-400 p-2 px-2 h-10"
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
                              id="soal2"
                              className="w-[17vh] rounded-md text-center dark:text-white text-black border-4 border-sky-400 p-2 px-2 h-10"
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
                    {jawaban1status === "salah" ||
                      (jawaban2status === "salah" && (
                        <button
                          type="reset"
                          onClick={() => reset()}
                          className="font-bold mt-5 ml-10 w-[78rem] bg-sky-600 p-2 rounded-md text-center hover:bg-sky-400"
                        >
                          Ulang Kuis
                        </button>
                      ))}
                  </form>
                </div>
                {/* Soal B */}
                <h3 className="mt-20 text-yellow-200 font-bold">
                  B. Diberikan bilangan-bilangan.
                </h3>
                <h4 className="ml-7 text-black font-bold bg-white border-4 border-black w-fit rounded-md p-5">
                  -12;&emsp;+7;&emsp;0;&emsp;+0,6;&emsp;-3;&emsp;+25;&emsp;-8/3
                </h4>
                <ul className="list-decimal list-inside gap-5 flex flex-col ml-10">
                  <li>
                    Mana yang merupakan bilangan positif? Mana yang merupakan
                    bilangan negatif?
                  </li>
                  <iframe
                    className="h-[12rem] w-[60rem] rounded-md border-4 border-gray-800"
                    loading="lazy"
                    src="https://bilangan-ne-po.vercel.app"
                    allowFullScreen
                  ></iframe>
                  <li>
                    Mana yang merupakan bilangan bulat? Mana yang merupakan
                    bilangan asli?
                  </li>
                  <iframe
                    className="h-[12rem] w-[60rem] rounded-md border-4 border-gray-800"
                    loading="lazy"
                    src="https://bilangan-ne-po.vercel.app"
                    allowFullScreen
                  ></iframe>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {next === "part1" ? (
          <div className="flex justify-between mt-1">
            <button
              onClick={() => router.push("/")}
              className="bg-gray-900 p-2 rounded-md flex justify-between text-xl"
            >
              <MdSkipPrevious className={"mt-[4px]"} />
              Sebelumnya
            </button>

            <button
              onClick={() => setnext("part2")}
              className="bg-gray-900 p-2 rounded-md flex justify-between text-xl"
            >
              Selanjutnya
              <MdSkipNext className={"mt-[4px]"} />
            </button>
          </div>
        ) : (
          <div className="flex justify-between mt-1">
            <button
              onClick={() => setnext("part1")}
              className="bg-gray-900 p-2 rounded-md flex justify-between text-xl"
            >
              <MdSkipPrevious className={"mt-[4px]"} />
              Sebelumnya
            </button>

            <button
              onClick={() => router.push("bab1_kuis")}
              className="bg-gray-900 p-2 rounded-md flex justify-between text-xl"
            >
              Selanjutnya
              <MdSkipNext className={"mt-[4px]"} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
