"use client";
import React from "react";
import { useState } from "react";
import { DragEvent } from "react";

const Page = () => {
  const [N, setN] = useState(1);

  const [selectedOption, setSelectedOption] = useState("");
  const correctAnswer = "-10 km"; // Ganti dengan jawaban yang benar
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
          "Penjelasan : Selatan ke arah bawah dari titik A yang berada di pusat mata angin. Arah selatan menjadi bernilai negatif terhadap titik A. 10 km  di sebelah arah selatan = - 10 km."
        );
      }
    }
  };

  /* soal 2 */
  const [selectedOption2, setSelectedOption2] = useState("");
  const correctAnswer2 = "b"; // Ganti dengan jawaban yang benar
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
          "Penjelasan : Berdasarkan pernyataan di atas, tanda (-) negatif dinyatakan sebagai kerugian sehingga tanga (+) dinyatakan sebagai keuntungan. Jadi, +300 rupiah dinyatakan sebagai untung sebesar 300 rupiah."
        );
      }
    }
  };

  /* soal 3 */
  const [selectedOption3, setSelectedOption3] = useState("");
  const correctAnswer3 = "c"; // Ganti dengan jawaban yang benar
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
          "Penjelasan : Dari pilihan jawaban diatas didapatakan bahwa yang merupakan kelompok Bilangan Bulat yang tepat adalah Positif : 3 ; 14 ; 50 ; Negatif : -24 ; -6 ; -4;"
        );
      }
    }
  };
  console.log(jawabanbenar3);

  /* soal 4 */
  const [selectedOption4, setSelectedOption4] = useState("");
  const correctAnswer4 = "a"; // Ganti dengan jawaban yang benar
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
          "Penjelasan : Di papan pengumuman lomba lari, kecepatan angin buritan adalah +. Angin haluan dinyatakan dengan tanda -. Pada hal ini, perlu untuk memastikan bahwa titik pangkal adalah 0 m/s menyatakan keadaan tanpa angin. Dan juga, satuan kecepatan m/s, biasanya dibaca “meter per second” atau “meter per detik”. Maka dari soal ini jawaban yang tepat adalah a. Ada angin buritan dengan kecepatan 5 m/detik."
        );
      }
    }
  };

  /* soal 5 */
  const [selectedOption5, setSelectedOption5] = useState("");
  const correctAnswer5 = "b"; // Ganti dengan jawaban yang benar
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
          "Penjelasan : Di soal ini suhu 6°C lebih tinggi dibandingkan suhu tertinggi kemarin kemarin dinyatakan sebagai +6°C. Maka 8°C lebih rendah dibandingkan suhu tertinggi kemarin dapat dinyatakan sebagai -8°C."
        );
      }
    }
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
                    1. Diketahui bahwa A adalah titik 0 km. Titik ”6 km sebelah
                    utara A” dinyatakan sebagai +6 km. <br /> Bagaimana
                    menyatakan titik ”10 km di sebelah selatan A”?...
                  </h1>
                  <form className="mt-2 ml-5 flex flex-col gap-2">
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="a"
                        value={"-10 km"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="a" className="cursor-pointer">
                        -10 km
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="b"
                        value={"-9 km"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="b" className="cursor-pointer">
                        -9 km
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="c"
                        value={"1 km"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="c" className="cursor-pointer">
                        1 km
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="d"
                        value={"10 km"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="d" className="cursor-pointer">
                        10 km
                      </label>
                    </div>
                  </form>
                  <div className="ml-5 font-bold">
                    {jawabanbenar !== "" && (
                      <div
                        className={`mt-1 ${
                          jawabanbenar === "benar" && "text-green-500"
                        } ${jawabanbenar === "salah" && "text-red-500"}`}
                      >
                        {jawabanbenar === "benar" && "Jawaban Anda benar!"}
                        {jawabanbenar === "salah" && "Jawaban Anda salah!"}
                        {(jawabanbenar === "benar" ||
                          jawabanbenar === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : Selatan ke arah bawah dari titik A yang
                            berada di pusat mata angin. Arah selatan menjadi
                            bernilai negatif terhadap titik A. 10 km di sebelah
                            arah selatan = - 10 km.
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
                    2. Apabila “rugi 200 rupiah” dinyatakan sebagai -200 rupiah,
                    menyatakan apa +300 rupiah?...
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
                        ”untung 600 rupiah”
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
                        "untung 300 rupiah"
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
                        "rugi 300 rupiah"
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
                        "Tidak untung dan rugi 1000 rupiah"
                      </label>
                    </div>
                  </form>
                  <div className="ml-5 font-bold">
                    {jawabanbenar2 !== "" && (
                      <div
                        className={`mt-1 ${
                          jawabanbenar2 === "benar" && "text-green-500"
                        } ${jawabanbenar2 === "salah" && "text-red-500"}`}
                      >
                        {jawabanbenar2 === "benar" && "Jawaban Anda benar!"}
                        {jawabanbenar2 === "salah" && "Jawaban Anda salah!"}
                        {(jawabanbenar2 === "benar" ||
                          jawabanbenar2 === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : Berdasarkan pernyataan di atas, tanda
                            (-) negatif dinyatakan sebagai kerugian sehingga
                            tanga (+) dinyatakan sebagai keuntungan. Jadi, +300
                            rupiah dinyatakan sebagai untung sebesar 300 rupiah.
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
                    3. Diberikan bilangan-bilangan.
                    <span className="ml-5 p-2 border-2 border-teal-400 bg-white font-bold flex justify-center items-center text-center">
                      -24 ; -6 ; -4 ; 0 ; 3 ; 14 ; 50
                    </span>
                    Mana yang merupakan bilangan positif? Mana yang negatif?...
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
                        Positif : 14 ; 3 ; 0 ; -6 ; <br /> Negatif : -4; 50 ;
                        -24 ;
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
                        Positif : -4 ; 3 ; 0 ; -6 ; <br /> Negatif : 14; 50 ;
                        -24 ;
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
                        Positif : 3 ; 14 ; 50 ; <br /> Negatif : -24 ; -6 ; -4;
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
                        Positif : 3 ; 14 ; -4 ; <br /> Negatif : -24 ; -6 ; 50;
                      </label>
                    </div>
                  </form>
                  <div className="ml-5 font-bold">
                    {jawabanbenar3 !== "" && (
                      <div
                        className={`mt-1 ${
                          jawabanbenar3 === "benar" && "text-green-500"
                        } ${jawabanbenar3 === "salah" && "text-red-500"}`}
                      >
                        {jawabanbenar3 === "benar" && "Jawaban Anda benar!"}
                        {jawabanbenar3 === "salah" && "Jawaban Anda salah!"}
                        {(jawabanbenar3 === "benar" ||
                          jawabanbenar3 === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : Dari pilihan jawaban diatas didapatakan
                            bahwa yang merupakan kelompok Bilangan Bulat yang
                            tepat adalah <br /> Positif : 3 ; 14 ; 50 ; <br />{" "}
                            Negatif : -24 ; -6 ; -4;.
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
                    4. Papan pengumuman lomba lari cepat 100 m menunjukkan bahwa
                    kecepatan angin buritan adalah 1 m per detik <br />{" "}
                    dinyatakan sebagai “1 m /detik. ” Apa artinya 5 m
                    /detik”?...
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
                        Ada angin buritan dengan kecepatan 5 m/detik
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
                        Ada angin haluan dengan kecepatan 10 m/detik
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
                        Ada angain buirtan dengan kecepatan 10 m/detik
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
                        Ada angin haluan dengan kecepatan 5 m/detik
                      </label>
                    </div>
                  </form>
                  <div className="ml-5 font-bold">
                    {jawabanbenar !== "" && (
                      <div
                        className={`mt-1 ${
                          jawabanbenar4 === "benar" && "text-green-500"
                        } ${jawabanbenar4 === "salah" && "text-red-500"}`}
                      >
                        {jawabanbenar4 === "benar" && "Jawaban Anda benar!"}
                        {jawabanbenar4 === "salah" && "Jawaban Anda salah!"}
                        {(jawabanbenar4 === "benar" ||
                          jawabanbenar4 === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : Di papan pengumuman lomba lari,
                            kecepatan angin buritan adalah +. Angin haluan
                            dinyatakan dengan tanda -. Pada hal ini, perlu untuk
                            memastikan bahwa titik pangkal adalah 0 m/s
                            menyatakan keadaan tanpa angin. Dan juga, satuan
                            kecepatan m/s, biasanya dibaca “meter per secon”
                            atau “meter per detik”. Maka dari soal ini jawaban
                            yang tepat adalah a. Ada angin buritan dengan
                            kecepatan 5 m/detik.
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
                    Bagaimana menyatakan”8°C lebih rendah dibandingkan suhu
                    tertinggi kemarin” jika berdasarkan suhu tertinggi hari ini,{" "}
                    <br />
                    ”6°C lebih tinggi dibandingkan suhu tertinggi kemarin”
                    dinyatakan sebagai 6°C maka ...
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
                        -16°C
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
                        -8°C
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
                        -4°C
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="d"
                        value={"10 km"}
                        onChange={(e) => setSelectedOption5(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="d" className="cursor-pointer">
                        8°C
                      </label>
                    </div>
                  </form>
                  <div className="ml-5 font-bold">
                    {jawabanbenar !== "" && (
                      <div
                        className={`mt-1 ${
                          jawabanbenar5 === "benar" && "text-green-500"
                        } ${jawabanbenar === "salah" && "text-red-500"}`}
                      >
                        {jawabanbenar5 === "benar" && "Jawaban Anda benar!"}
                        {jawabanbenar5 === "salah" && "Jawaban Anda salah!"}
                        {(jawabanbenar5 === "benar" ||
                          jawabanbenar5 === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : Di soal ini suhu 6°C lebih tinggi
                            dibandingkan suhu tertinggi kemarin kemarin
                            dinyatakan sebagai +6°C. Maka 8°C lebih rendah
                            dibandingkan suhu tertinggi kemarin dapat dinyatakan
                            sebagai -8°C.
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
