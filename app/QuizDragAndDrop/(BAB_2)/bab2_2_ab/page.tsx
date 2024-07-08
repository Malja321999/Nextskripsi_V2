"use client";
import React from "react";
import { useState } from "react";

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
          "Penjelasan : Dalam soal kita dintanya berapa selisih antara suhu ruangan biasa dan pendingin, selisih adalah proses operasi dimana angka yang lebih besar di kurang angka lebih kecil maka dapat di simpulkan 24 - (-5) = 29 derajat celcius"
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
          "Penjelasan : Dalam soal di katakan bahawa suhu di gunung adalah -5 derajat celcius kemudian terjadi kenaikkan suhu 12 derajat celcius. Terjadinya kenaikkan suhu artinya operasi anatara suhu tersebut adalah tambah. Dimana dapat di simpulkan menjadi -5 + 12 = 7."
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
          "Penjelasan : Untuk mengetahui nilai y kita dapat membalik proses operesi bilangan yaitu 30 - (-12) - (-26) = 68."
        );
      }
    }
  };
  console.log(jawabanbenar3);

  /* soal 4 */
  const [selectedOption4, setSelectedOption4] = useState("");
  const correctAnswer4 = "d"; // Ganti dengan jawaban yang benar
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
          "Penjelasan : Dari tersebut kita dapat menyimpulkan bahwa terjadi operasi tambah dari proses beli dan kurang dari proses jual, dengan demikian hasilnya adalah 215 + 282 = 262."
        );
      }
    }
  };

  /* soal 5 */
  const [selectedOption5, setSelectedOption5] = useState("");
  const correctAnswer5 = "a"; // Ganti dengan jawaban yang benar
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
                    1. Jika m = -3 dan n = -4 maka nilai dari m - n adalah...
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
                        4
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
                        3
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
                        2
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
                        1
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
                            Penjelasan : Di soal kita dapat mengetehui nilai m =
                            -3 dan n = -4, maka nilai dari m - n = -3 - (-4) =
                            1.
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
                    2. Pada malam hari, suhu di puncak suatu gunung -5°C, <br />
                    kemudian pada siang hari suhunya naik 12°C jadi suhu pada
                    siang hari adalah...
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
                        6
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
                        7
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
                        10
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
                        17
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
                            Penjelasan : Dalam soal di katakan bahawa suhu di
                            gunung adalah -5 derajat celcius kemudian terjadi
                            kenaikkan suhu 12 derajat celcius. Terjadinya
                            kenaikkan suhu artinya operasi anatara suhu tersebut
                            adalah tambah. Dimana dapat di simpulkan menjadi -5
                            + 12 = 7.
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
                    3. Diketahui -12 + y + (-26) = 30, nilai y adalah...
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
                        23
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
                        68
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
                        86
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
                        100
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
                            Penjelasan : Untuk mengetahui nilai y kita dapat
                            membalik proses operesi bilangan yaitu 30 - (-12) -
                            (-26) = 68.
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
                    4. seorang pedagang mempunyai 215 ekor kambing Kemudian ia
                    membeli lagi 282 ekor kambing, <br /> Seminggu kemudian 235 ekor
                    kambing laku terjual Berapa banyak kambing yang belum
                    terjual...
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
                        203
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
                        226
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
                        254
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
                        262
                      </label>
                    </div>
                  </form>
                  <div className="ml-5 font-bold">
                    {jawabanbenar4 !== "" && (
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
                            Penjelasan : Dari tersebut kita dapat menyimpulkan
                            bahwa terjadi operasi tambah dari proses beli dan
                            kurang dari proses jual, dengan demikian hasilnya
                            adalah 215 + 282 = 262.
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
                    5. Suhu di suatu ruangan pendingin adalah -5 derajat
                    celcius. <br /> Suhu di dalam ruangan 24 derajat celcius. Selisih
                    suhu ruangan pendingin dengan suhu ruangan adalah...
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
                        29°C
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
                        27°C
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
                        25°C
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
                        25°C
                      </label>
                    </div>
                  </form>
                  <div className="ml-5 font-bold">
                    {jawabanbenar5 !== "" && (
                      <div
                        className={`mt-1 ${
                          jawabanbenar5 === "benar" && "text-green-500"
                        } ${jawabanbenar5 === "salah" && "text-red-500"}`}
                      >
                        {jawabanbenar5 === "benar" && "Jawaban Anda benar!"}
                        {jawabanbenar5 === "salah" && "Jawaban Anda salah!"}
                        {(jawabanbenar5 === "benar" ||
                          jawabanbenar5 === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : Dalam soal kita dintanya berapa selisih
                            antara suhu ruangan biasa dan pendingin, selisih
                            adalah proses operasi dimana angka yang lebih besar
                            di kurang angka lebih kecil maka dapat di simpulkan
                            24 - (-5) = 29 derajat celcius.
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
