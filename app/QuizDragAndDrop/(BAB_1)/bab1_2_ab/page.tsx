"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import ab from "../../../asset/bab2_ab.png";

const Page = () => {
  const [N, setN] = useState(1);

  const [selectedOption, setSelectedOption] = useState("");
  const correctAnswer = "d"; // Ganti dengan jawaban yang benar
  const [jawabanbenar, setjawabanbenar] = useState("");

  const checkAnswer = () => {
    if (selectedOption === "") {
      setjawabanbenar("");
      alert("Jawaban kosong! Pilih jawaban terlebih dahulu");
    } else if (selectedOption !== "") {
      if (selectedOption === correctAnswer) {
        setjawabanbenar("benar");
      } else {
        setjawabanbenar("salah");
        alert("Jawaban Salah!");
        alert(
          "Penjelasan : Dapat kita lihat pada garis bilangan bilangan bulat 1 memang tidak diperlihatkan, tetapi dengan bantuan semua angka lainnya yang terlihat dan garis di setiap angka bilangan bulat pada garis bilangan dapat kita simpulkan bahwa bilangan bulat 1 berada di titik D."
        );
      }
    }
  };

  /* soal 2 */
  const [selectedOption2, setSelectedOption2] = useState("");
  const correctAnswer2 = "a"; // Ganti dengan jawaban yang benar
  const [jawabanbenar2, setjawabanbenar2] = useState("");

  const checkAnswer2 = () => {
    if (selectedOption2 === "") {
      setjawabanbenar2("");
      alert("Jawaban kosong! Pilih jawaban terlebih dahulu");
    } else if (selectedOption2 !== "") {
      if (selectedOption2 === correctAnswer2) {
        setjawabanbenar2("benar");
      } else {
        setjawabanbenar2("salah");
        alert("Jawaban Salah!");
        alert(
          "Penjelasan : Berdasarkan garis bilangan pada no.1 dapat kita simpulkan sama seperti pada titik D, dimana kita dapat melihat semua angka yang terlihat sebelumnya maupun setelahnya kemudian kita melihat gari, sehingga dapat simpulkan titik A bersesuian dengan -3."
        );
      }
    }
  };

  /* soal 3 */
  const [selectedOption3, setSelectedOption3] = useState("");
  const correctAnswer3 = "b"; // Ganti dengan jawaban yang benar
  const [jawabanbenar3, setjawabanbenar3] = useState("");

  const checkAnswer3 = () => {
    if (selectedOption3 === "") {
      setjawabanbenar3("");
      alert("Jawaban kosong! Pilih jawaban terlebih dahulu");
    } else if (selectedOption3 !== "") {
      if (selectedOption3 === correctAnswer3) {
        setjawabanbenar3("benar");
      } else {
        setjawabanbenar3("salah");
        alert("Jawaban Salah!");
        alert(
          "Penjelasan :Pada bilangan bulat Bilangan Positif nilai yang lebih tinggi daripada bilangan Negatif, dan bilangan positif memiliki nilai semakin tinggi ketika nilai angkanya lebih besar, sebaliknya jika bilangan Negatif semakin besar angkanya memiliki nilai semakin kecil, maka dapat di simpulkan bahwa 3 memiliki nilai lebih besar dari -4 atau dilambangkan menjadai 3 > -4."
        );
      }
    }
  };
  console.log(jawabanbenar3);

  /* soal 4 */
  const [selectedOption4, setSelectedOption4] = useState("");
  const correctAnswer4 = "b"; // Ganti dengan jawaban yang benar
  const [jawabanbenar4, setjawabanbenar4] = useState("");

  const checkAnswer4 = () => {
    if (selectedOption4 === "") {
      setjawabanbenar4("");
      alert("Jawaban kosong! Pilih jawaban terlebih dahulu");
    } else if (selectedOption4 !== "") {
      if (selectedOption4 === correctAnswer4) {
        setjawabanbenar4("benar");
      } else {
        setjawabanbenar4("salah");
        alert("Jawaban Salah!");
        alert(
          "Penjelasan : Jarak antara bilangan bulat dan titik 0 disebut Nilai Mutlak, di soal ini kita membandingkan manakah bilangan bulat manakah yang memiliki nilai mutlak paling besar antara 8 dan -12 maka dapat kita simpulkan berdasarkan pengertian Nilai Mutlak sebelumnya bilangan bulat yang memiliki Nilai Mutlak paling tinggi atau jarak paling jauh dari titik 0 adalaah -12  yang memiliki Nilai Mutlak 12."
        );
      }
    }
    console.log(selectedOption4 === correctAnswer4);
  };

  /* soal 5 */
  const [selectedOption5, setSelectedOption5] = useState("");
  const correctAnswer5 = "d"; // Ganti dengan jawaban yang benar
  const [jawabanbenar5, setjawabanbenar5] = useState("");

  const checkAnswer5 = () => {
    if (selectedOption5 === "") {
      setjawabanbenar2("");
      alert("Jawaban kosong! Pilih jawaban terlebih dahulu");
    } else if (selectedOption5 !== "") {
      if (selectedOption5 === correctAnswer5) {
        setjawabanbenar5("benar");
      } else {
        setjawabanbenar5("salah");
        alert("Jawaban Salah!");
        alert(
          "Penjelasan : Sama seperti pada soal no.4 kita dapat mengetahui nilai mutlak dari sesuatu bilangan bulat dengan melihat jarak antara bilangan bulat tersebut dengan titik 0, atau sederhana cukup hilangkan saja tanda Negatif ataupun Positif dari bilangan bulat sehingga kita mendapatkan Nilai Mutlaknya."
        );
      }
    }
    /*     console.log(selectedOption5 === correctAnswer5);
     */ console.log(jawabanbenar5);
  };

  return (
    <div className="text-base text-black flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow rounded">
        <div className="p-4 bg-indigo-200 rounded">
          <div className="border-dotted border-2 border-blue-600 rounded-md p-5">
            <ul className="list list-disc list-inside">
              <h1 className="font-bold">Petunjuk pengerjaan :</h1>
              <div>
                <li>Jawablah pertanyaan dibawah ini dengan tepat</li>
                <li>
                  Jika jawaban kamu benar, maka akan muncul tulisan jawaban
                  benar
                </li>
                <li>
                  Jika jawaban kamu salah, maka akan muncul tulisan jawaban
                  salah disertai pembahasan
                </li>
              </div>
            </ul>
          </div>
          <div>
            <div className="font-bold mt-2">{N} dari 5</div>
            {/* soal 1 */}
            <div className="mt-2">
              {N === 1 && (
                <div>
                  <h1 className="p-2">
                    1. Berikan garis bilangan sebagai berikut :
                    <span className="ml-5 p-2 border-2 border-teal-400 bg-white font-bold flex justify-center items-center text-center">
                      <Image className="w-100" src={ab} alt="ab" />
                    </span>
                    Berada di titik manakah bilngan bulat 1?...
                  </h1>
                  <form className="mt-2 ml-5 flex flex-col gap-2">
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="a"
                        value={"a"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="a" className="cursor-pointer">
                        A
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="b"
                        value={"b"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="b" className="cursor-pointer">
                        B
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="c"
                        value={"c"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="c" className="cursor-pointer">
                        C
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="d"
                        value={"d"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="d" className="cursor-pointer">
                        D
                      </label>
                    </div>
                  </form>
                  <div className="ml-5 font-bold">
                    {jawabanbenar !== "" && (
                      <div
                        className={`mt-1 bg-white rounded-md p-2 ${
                          jawabanbenar === "benar" && "text-green-500"
                        } ${jawabanbenar === "salah" && "text-red-500"}`}
                      >
                        {jawabanbenar === "benar" && "Jawaban Anda benar!"}
                        {jawabanbenar === "salah" && "Jawaban Anda salah!"}
                        {(jawabanbenar === "benar" ||
                          jawabanbenar === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : Dapat kita lihat pada garis bilangan
                            bilangan bulat 1 memang tidak diperlihatkan, tetapi
                            dengan bantuan semua angka lainnya yang terlihat dan
                            garis di setiap angka bilangan bulat pada garis
                            bilangan dapat kita simpulkan bahwa bilangan bulat 1
                            berada di titik D.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* soal 2 */}
            <div className="mt-2">
              {N === 2 && (
                <div>
                  <h1 className="p-2">
                    2. Berdasarkan garis bilangan pada nomor 1. Bilangan bulat
                    apa yang bersesuian dengan titik A?...
                  </h1>
                  <form className="mt-2 ml-5 flex flex-col gap-2">
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="a"
                        value={"a"}
                        onChange={(e) => setSelectedOption2(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="a" className="cursor-pointer">
                        -3
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="b"
                        value={"b"}
                        onChange={(e) => setSelectedOption2(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="b" className="cursor-pointer">
                        -2
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="c"
                        value={"c"}
                        onChange={(e) => setSelectedOption2(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="c" className="cursor-pointer">
                        1
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="d"
                        value={"d"}
                        onChange={(e) => setSelectedOption2(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="d" className="cursor-pointer">
                        3
                      </label>
                    </div>
                  </form>
                  <div className="ml-5 font-bold">
                    {jawabanbenar2 !== "" && (
                      <div
                        className={`mt-1 bg-white rounded-md p-2 ${
                          jawabanbenar2 === "benar" && "text-green-500"
                        } ${jawabanbenar2 === "salah" && "text-red-500"}`}
                      >
                        {jawabanbenar2 === "benar" && "Jawaban Anda benar!"}
                        {jawabanbenar2 === "salah" && "Jawaban Anda salah!"}
                        {(jawabanbenar2 === "benar" ||
                          jawabanbenar2 === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : Berdasarkan garis bilangan pada no.1
                            dapat kita simpulkan sama seperti pada titik D,
                            dimana kita dapat melihat semua angka yang terlihat
                            sebelumnya maupun setelahnya kemudian kita melihat
                            gari, sehingga dapat simpulkan titik A bersesuian
                            dengan -3.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* soal 3 */}
            <div className="mt-2">
              {N === 3 && (
                <div>
                  <h1 className="p-2">
                    3. Di sajikan bilangan bulat 3 dan -4. Manakah peryataan
                    pertidaksamaan dibawah ini yang benar berdasarkan <br />
                    perbandingan dua bilangan bulat tersebut...
                  </h1>
                  <form className="mt-2 ml-5 flex flex-col gap-2">
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="a"
                        value={"a"}
                        onChange={(e) => setSelectedOption3(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="a" className="cursor-pointer">
                        3 = -4
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="b"
                        value={"b"}
                        onChange={(e) => setSelectedOption3(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="b" className="cursor-pointer">
                        3 {">"} -4
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="c"
                        value={"c"}
                        onChange={(e) => setSelectedOption3(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="c" className="cursor-pointer">
                        3 {"<"} -4
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="d"
                        value={"d"}
                        onChange={(e) => setSelectedOption3(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="d" className="cursor-pointer">
                        -4 {">"} 3
                      </label>
                    </div>
                  </form>
                  <div className="ml-5 font-bold">
                    {jawabanbenar3 !== "" && (
                      <div
                        className={`mt-1 bg-white rounded-md p-2 ${
                          jawabanbenar3 === "benar" && "text-green-500"
                        } ${jawabanbenar3 === "salah" && "text-red-500"}`}
                      >
                        {jawabanbenar3 === "benar" && "Jawaban Anda benar!"}
                        {jawabanbenar3 === "salah" && "Jawaban Anda salah!"}
                        {(jawabanbenar3 === "benar" ||
                          jawabanbenar3 === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : Pada bilangan bulat Bilangan Positif
                            nilai yang lebih tinggi daripada bilangan Negatif,
                            dan bilangan positif memiliki nilai semakin tinggi
                            ketika nilai angkanya lebih besar, sebaliknya jika
                            bilangan Negatif semakin besar angkanya memiliki
                            nilai semakin kecil, maka dapat di simpulkan bahwa 3
                            memiliki nilai lebih besar dari -4 atau dilambangkan
                            menjadai 3 {">"} -4.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* soal 4 */}
            <div className="mt-2">
              {N === 4 && (
                <div>
                  <h1 className="p-2">
                    4. Ketika kita sajikan 8 dan -12 pada garis bilangan,
                    bilangan manakah yang terletak lebih jauh dari titik
                    asal?...
                  </h1>
                  <form className="mt-2 ml-5 flex flex-col gap-2">
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="a"
                        value={"a"}
                        onChange={(e) => setSelectedOption4(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="a" className="cursor-pointer">
                        8
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="b"
                        value={"b"}
                        onChange={(e) => setSelectedOption4(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="b" className="cursor-pointer">
                        -12
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="c"
                        value={"c"}
                        onChange={(e) => setSelectedOption4(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="c" className="cursor-pointer">
                        16
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="d"
                        value={"d"}
                        onChange={(e) => setSelectedOption4(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="d" className="cursor-pointer">
                        24
                      </label>
                    </div>
                  </form>
                  <div className="ml-5 font-bold">
                    {jawabanbenar4 !== "" && (
                      <div
                        className={`mt-1 bg-white rounded-md p-2 ${
                          jawabanbenar4 === "benar" && "text-green-500"
                        } ${jawabanbenar4 === "salah" && "text-red-500"}`}
                      >
                        {jawabanbenar4 === "benar" && "Jawaban Anda benar!"}
                        {jawabanbenar4 === "salah" && "Jawaban Anda salah!"}
                        {(jawabanbenar4 === "benar" ||
                          jawabanbenar4 === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : Jarak antara bilangan bulat dan titik 0
                            disebut Nilai Mutlak, di soal ini kita membandingkan
                            manakah bilangan bulat manakah yang memiliki nilai
                            mutlak paling besar antara 8 dan -12 maka dapat kita
                            simpulkan berdasarkan pengertian Nilai Mutlak
                            sebelumnya bilangan bulat yang memiliki Nilai Mutlak
                            paling tinggi atau jarak paling jauh dari titik 0
                            adalaah -12 yang memiliki Nilai Mutlak 12.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* soal 5 */}
            <div className="mt-2">
              {N === 5 && (
                <div>
                  <h1 className="p-2">
                    5. Berturut-turut, tentukan nilai-nilai mutlak dari -7 dan
                    5...
                  </h1>
                  <form className="mt-2 ml-5 flex flex-col gap-2">
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="a"
                        value={"a"}
                        onChange={(e) => setSelectedOption5(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="a" className="cursor-pointer">
                        14 dan 10
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="b"
                        value={"b"}
                        onChange={(e) => setSelectedOption5(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="b" className="cursor-pointer">
                        1 dan 2
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="c"
                        value={"c"}
                        onChange={(e) => setSelectedOption5(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="c" className="cursor-pointer">
                        7 dan -5
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="d"
                        value={"d"}
                        onChange={(e) => setSelectedOption5(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="d" className="cursor-pointer">
                        7 dan 5
                      </label>
                    </div>
                  </form>
                  <div className="ml-5 font-bold">
                    {jawabanbenar5 !== "" && (
                      <div
                        className={`mt-1 bg-white rounded-md p-2 ${
                          jawabanbenar5 === "benar" && "text-green-500"
                        } ${jawabanbenar5 === "salah" && "text-red-500"}`}
                      >
                        {jawabanbenar5 === "benar" && "Jawaban Anda benar!"}
                        {jawabanbenar5 === "salah" && "Jawaban Anda salah!"}
                        {(jawabanbenar5 === "benar" ||
                          jawabanbenar5 === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : Sama seperti pada soal no.4 kita dapat
                            mengetahui nilai mutlak dari sesuatu bilangan bulat
                            dengan melihat jarak antara bilangan bulat tersebut
                            dengan titik 0, atau sederhana cukup hilangkan saja
                            tanda Negatif ataupun Positif dari bilangan bulat
                            sehingga kita mendapatkan Nilai Mutlaknya.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-7 ml-4 flex flex-row gap-60 text-white">
              <button
                onClick={() => {
                  if (N !== 1) {
                    setN(N - 1);
                  }
                  setSelectedOption("");
                  setSelectedOption2("");
                  setSelectedOption3("");
                  setSelectedOption4("");
                  setSelectedOption5("");
                  setjawabanbenar("");
                  setjawabanbenar2("");
                  setjawabanbenar3("");
                  setjawabanbenar4("");
                  setjawabanbenar5("");
                }}
                className={`${
                  N === 1 ? "bg-[#423d49]" : "bg-indigo-500"
                } p-2 rounded-md`}
              >
                Sebelumnya
              </button>
              <div>
                {N === 1 && (
                  <button
                    onClick={checkAnswer}
                    className="p-2 rounded-md bg-indigo-500"
                  >
                    Cek Jawaban
                  </button>
                )}
                {N === 2 && (
                  <button
                    onClick={checkAnswer2}
                    className="p-2 rounded-md bg-indigo-500"
                  >
                    Cek Jawaban
                  </button>
                )}
                {N === 3 && (
                  <button
                    onClick={checkAnswer3}
                    className="p-2 rounded-md bg-indigo-500"
                  >
                    Cek Jawaban
                  </button>
                )}
                {N === 4 && (
                  <button
                    onClick={checkAnswer4}
                    className="p-2 rounded-md bg-indigo-500"
                  >
                    Cek Jawaban
                  </button>
                )}
                {N === 5 && (
                  <button
                    onClick={checkAnswer5}
                    className="p-2 rounded-md bg-indigo-500"
                  >
                    Cek Jawaban
                  </button>
                )}
              </div>
              <button
                onClick={() => {
                  if (N !== 5) {
                    setN(N + 1);
                  }
                  setSelectedOption("");
                  setSelectedOption2("");
                  setSelectedOption3("");
                  setSelectedOption4("");
                  setSelectedOption5("");
                  setjawabanbenar("");
                  setjawabanbenar2("");
                  setjawabanbenar3("");
                  setjawabanbenar4("");
                  setjawabanbenar5("");
                }}
                className={`${
                  N === 5 ? "bg-[#423d49]" : "bg-indigo-500"
                } p-2 rounded-md`}
              >
                Selanjutnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
