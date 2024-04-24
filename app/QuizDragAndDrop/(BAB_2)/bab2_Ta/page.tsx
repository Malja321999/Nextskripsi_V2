"use client";
import React from "react";
import { useState } from "react";

const Page = () => {
  const [N, setN] = useState(1);
  /* soal 1 */
  const [answers, setAnswers] = useState({
    Asosiatif: false,
    Terbuka: false,
    Tertutup: false,
    Komutatif: false,
  });
  const [result, setResult] = useState("");

  const correctAnswers = {
    Asosiatif: true,
    Terbuka: false,
    Tertutup: true,
    Komutatif: true,
  };

  const handleChange = (e: any) => {
    setAnswers({ ...answers, [e.target.name]: e.target.checked });
  };

  const checkAnswers = () => {
    const isCorrect = Object.keys(correctAnswers).every(
      (key) =>
        answers[key as keyof typeof answers] ===
        correctAnswers[key as keyof typeof answers]
    );
    console.log(isCorrect);
    setResult(isCorrect ? "true" : "false");
    if (result === "true") {
      alert("Jawaban Benar");
    }
    if (result === "false") {
      alert("Jawaban Salah");
      alert(
        "Penjelasan : Sifat-sifat diatas yang termasuk sifat-sifat penjumlahan bilangan bulat adalah Asosiatif, Tertutup, dan Komutatif."
      );
    }
  };

  const resetQuiz = () => {
    setAnswers({
      Asosiatif: false,
      Terbuka: false,
      Tertutup: false,
      Komutatif: false,
    });
    setResult("");
  };

  /* soal 2 */
  const [JawabanSoal2, setJawabanSoal2] = useState("");

  const [Soal2Benar, setSoal2Benar] = useState("");
  const correctAnswersoal2 = "68";

  const checkAnswerSoal2 = () => {
    if (JawabanSoal2 === "") {
      setSoal2Benar("");
      alert("Jawaban Kosong! Isi Jawaban Terlebih Dahulu");
    } else if (JawabanSoal2 !== "") {
      if (JawabanSoal2 === correctAnswersoal2) {
        setSoal2Benar("benar");
        alert("Jawaban Benar");
      } else {
        setSoal2Benar("salah");
        alert("Jawaban Salah");
        alert(
          "Penjelasan : Dalam soal ini karena yang ingin kita cari adalah nilai y maka kita akan menggukan sifat komutatif. Sehingga dapat kita tulis menjadi y = 30 - (-26) - (-12) = 68. Maka nilai y adalah 68."
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
            <div className="font-bold mt-2">{N} dari 4</div>
            {/* soal 1 */}
            <div className="mt-2">
              {N === 1 && (
                <div>
                  <h1 className="p-2">
                    Manakah dibawah ini sifat-sifat pertambahan yang benar?
                  </h1>
                  <h2 className="text-lg p-2 border-2 border-teal-400 bg-white font-bold flex justify-center items-center">
                    <div className="w-fit grid justify-items-start">
                      <div className="cursor-pointer">
                        <input
                          type="checkbox"
                          name="Asosiatif"
                          id="Asosiatif"
                          checked={answers.Asosiatif}
                          onChange={handleChange}
                          className="mr-2 w-5 h-5"
                        />
                        <label htmlFor="Asosiatif" className="cursor-pointer">
                          Asosiatif
                        </label>
                      </div>
                      <div className="cursor-pointer">
                        <input
                          type="checkbox"
                          name="Terbuka"
                          id="Terbuka"
                          checked={answers.Terbuka}
                          onChange={handleChange}
                          className="mr-2 w-5 h-5"
                        />
                        <label htmlFor="Terbuka" className="cursor-pointer">
                          Terbuka
                        </label>
                      </div>
                      <div className="cursor-pointer">
                        <input
                          type="checkbox"
                          name="Tertutup"
                          id="Tertutup"
                          checked={answers.Tertutup}
                          onChange={handleChange}
                          className="mr-2 w-5 h-5"
                        />
                        <label htmlFor="Tertutup" className="cursor-pointer">
                          Tertutup
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="Komutatif"
                          id="Komutatif"
                          checked={answers.Komutatif}
                          onChange={handleChange}
                          className="mr-2 w-5 h-5"
                        />
                        <label htmlFor="Komutatif" className="cursor-pointer">
                          Komutatif
                        </label>
                      </div>
                    </div>
                  </h2>

                  <div className="ml-5 font-bold">
                    {result !== "" && (
                      <div
                        className={`mt-1 ${
                          result === "true" && "text-green-500"
                        } ${result === "false" && "text-red-500"}`}
                      >
                        {result === "true" && "Jawaban Anda benar!"}
                        {result === "false" && "Jawaban Anda salah!"}
                        {(result === "true" || result === "false") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : Sifat-sifat diatas yang termasuk
                            sifat-sifat penjumlahan bilangan bulat adalah
                            Asosiatif, Tertutup, dan Komutatif.
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
                  <h1>Hitunglah hasil Penjumlahan dibawah ini.</h1>
                  <h2 className="text-xl text-center font-bold p-2 border-2 border-teal-400 bg-white flex justify-center items-center">
                    Diketahui -12 + y + (-26) = 30, nilai y adalah
                    <input
                      type="text"
                      placeholder="..."
                      className="w-20 text-center mx-2 rounded-md bg-green-50 border-4 border-sky-400 placeholder-indigo-500  focus:ring-blue-500 focus:border-blue-500"
                      onChange={(event) => setJawabanSoal2(event.target.value)}
                    />
                  </h2>
                  <div className="ml-5 font-bold">
                    {Soal2Benar !== "" && (
                      <div
                        className={`mt-1 ${
                          Soal2Benar === "benar" && "text-green-500"
                        } ${Soal2Benar === "salah" && "text-red-500"}`}
                      >
                        {Soal2Benar === "benar" && "Jawaban Anda benar!"}
                        {Soal2Benar === "salah" && "Jawaban Anda salah!"}
                        {(Soal2Benar === "benar" || Soal2Benar === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : Dalam soal ini karena yang ingin kita
                            cari adalah nilai y maka kita akan menggukan sifat
                            komutatif. Sehingga dapat kita tulis menjadi y = 30
                            - (-26) - (-12) = 68. Maka nilai y adalah 68.
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
                  resetQuiz();

                  setJawabanSoal2("");
                  setSoal2Benar(" ");
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
                    onClick={checkAnswers}
                    className="p-2 rounded-md bg-indigo-500"
                  >
                    Cek Jawaban
                  </button>
                )}
                {N === 2 && (
                  <button
                    onClick={checkAnswerSoal2}
                    className="p-2 rounded-md bg-indigo-500"
                  >
                    Cek Jawaban
                  </button>
                )}
              </div>
              <button
                onClick={() => {
                  if (N !== 2) {
                    setN(N + 1);
                  }
                  resetQuiz();

                  setJawabanSoal2("");
                  setSoal2Benar(" ");
                }}
                className={`${
                  N === 2 ? "bg-[#423d49]" : "bg-indigo-500"
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
