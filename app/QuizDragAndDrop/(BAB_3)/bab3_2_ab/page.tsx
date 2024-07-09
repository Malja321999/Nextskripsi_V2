"use client";
import React from "react";
import { useState } from "react";

const Page = () => {
  const [N, setN] = useState(1);

  const [selectedOption, setSelectedOption] = useState("");
  const correctAnswer = "a"; // Ganti dengan jawaban yang benar
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
          "Penjelasan : Di soal kita dapat mengetehui terdapat 37 murid yang mengumpulkan uang untuk korban bencana alam, maka dapat kita simpulkan terjadi operasi perkalian karena setiap orang menyumbang sebesar 25.000 rupiah sehingga menjadi 37 x 25.000 = 925.000 rupiah."
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
          "Penjelasan : Dalam soal ini dapat diketahui bahwa p =  24, q = -4, r = 6, s = 3. maka hasil dari (p x q) - (r x s) = (24 x -4) - (-6 x 3) = -96 - (-18) = -78."
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
          "Penjelasan : Dalam soal di katakan bahawa ada pembagian daging sebanyak 650 kg kepada 65 orang, sehingga dapat kita simpulkan menjadi 650 : 65 = 10 orang."
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
          "Penjelasan : Dalam soal ini dapat diketahui bahwa p = 850 : 5 dan q = 100 : 10, maka dapat di simpulkan nilai p = 170 dan nilai q = 10 jadi hasil dari p : q adalah 17."
        );
      }
    }
  };

  /* soal 5 */
  const [selectedOption5, setSelectedOption5] = useState("");
  const correctAnswer5 = "c"; // Ganti dengan jawaban yang benar
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
          "Penjelasan : Di soal ini diketahui bahwa benar = 4, salah = -1 dan tidak menjawab = 0. Maka dapatkan soal dijawab 18, 3 salah dan sisanya benar, untuk menjadi soal benar saja = 18 soal dijawab - 3 soal salah = 15, soal salah = 3, tidak menjawab 25 total soal - 18 soal dijawab = 7. Kesimpulannya adalah (15 soal benar x 4) + (3 soal salah x -1) + (7 soal tidak dijawab x 0) = 57."
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
                    Untuk membantu korban bencana alam, 37 murid sekolah dasar
                    mengumpulkan uang. <br /> Setiap orang menyumbang 25.000
                    rupiah. uang yang terkumpul...
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
                        925.000 rupiah
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
                        250.000 rupiah
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
                        125.000 rupiah
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
                        75.000 rupiah
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
                            Penjelasan : Di soal kita dapat mengetehui terdapat
                            37 murid yang mengumpulkan uang untuk korban bencana
                            alam, maka dapat kita simpulkan terjadi operasi
                            perkalian karena setiap orang menyumbang sebesar
                            25.000 rupiah sehingga menjadi 37 x 25.000 = 925.000
                            rupiah.
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
                    2. diketahui nilai p = 24, q = -4, r = -6 dan s = 3. Hasil
                    dari (p x q) - (r x s) adalah ...
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
                        -87
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
                        -78
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
                        67
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
                        76
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
                            Penjelasan : Dalam soal ini dapat diketahui bahwa p
                            = 24, q = -4, r = 6, s = 3. maka hasil dari (p x q)
                            - (r x s) = (24 x -4) - (-6 x 3) = -96 - (-18) =
                            -78.
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
                    3. pada saat hari raya idul adha, panitia akan membagikan
                    650 kg daging kepada 65 orang. <br /> Berapa kilogram-kah
                    setiap orang menerima daging?...
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
                        -6
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
                        9
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
                        10
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
                        42
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
                            Penjelasan : Dalam soal di katakan bahawa ada
                            pembagian daging sebanyak 650 kg kepada 65 orang,
                            sehingga dapat kita simpulkan menjadi 650 : 65 = 10
                            orang.
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
                    4. jika p = 850 : 5 dan q = 100 : 10 hasil p : q adalah...
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
                        20
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
                        19
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
                        18
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
                        17
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
                            Penjelasan : Dalam soal ini dapat diketahui bahwa p
                            = 850 : 5 dan q = 100 : 10, maka dapat di simpulkan
                            nilai p = 170 dan nilai q = 10 jadi hasil dari p : q
                            adalah 17.
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
                    5. Seorang siswa mengerjakan 18 soal dari 25 soal ujian.
                    Tiga jawabannya ternyata salah dan sisanya benar. <br /> Jika
                    jawaban benar bernilai 4, jawaban salah bernilai -1 dan
                    tidak menjawab bernilai 0. Maka nilai ujian siswa tersebut
                    adalah...
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
                        80
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
                        75
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
                        57
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
                        -1
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
                            Penjelasan : Di soal ini diketahui bahwa benar = 4,
                            salah = -1 dan tidak menjawab = 0. Maka dapatkan
                            soal dijawab 18, 3 salah dan sisanya benar, untuk
                            menjadi soal benar saja = 18 soal dijawab - 3 soal
                            salah = 15, soal salah = 3, tidak menjawab 25 total
                            soal - 18 soal dijawab = 7. Kesimpulannya adalah (15
                            soal benar x 4) + (3 soal salah x -1) + (7 soal
                            tidak dijawab x 0) = 57.
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
