"use client";
import React from "react";
import { useState } from "react";

const Page = () => {
  const [N, setN] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");

  const correctAnswer = "Bilangan Cacah"; // Ganti dengan jawaban yang benar
  const [jawabanbenar, setjawabanbenar] = useState("");

  const checkAnswer = () => {
    if (selectedOption === correctAnswer) {
      setjawabanbenar("benar");
    } else {
      setjawabanbenar("salah");
      alert("Jawaban Salah!");
      alert("Penjelasan : bilangan diatas bukan bilangan cacah melainkan bilangan bulat karena diantara bilangan diatas ada bilangan negatif sedangkan bilangan cacah tidak memuat bilangan negatif.");
      alert("Coba Lagi, dengan memilih opsi yang ada");
    }
  };

  return (
    <div className="text-black flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow rounded">
        <div className="p-4 bg-indigo-200 rounded">
          <div className="border-dotted border-2 border-blue-600 rounded-md p-5">
            <ul className="list list-disc list-inside">
              <h1 className="font-bold">Petunjuk pengerjaan :</h1>
              <div className="text-[10px]">
                <li>Pilihlah jawaban dibawah ini dengan tepat</li>
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
                    Apakah kumpulan bilangan dibawah ini adalah bilangan cacah?
                  </h1>
                  <h2 className="p-2 border-2 border-teal-400 bg-white font-bold flex justify-center items-center text-center">
                    -34, 324, 23, -45
                  </h2>
                  <form className="mt-2 ml-5 flex flex-col gap-2">
                    <div className="flex gap-2 text-center items-center">
                      <input
                        type="radio"
                        name="pg"
                        id="a"
                        value={"Bilangan Cacah"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="h-5 w-5"
                      />
                      <label htmlFor="a">Bilangan Cacah</label>
                    </div>
                    <div className="flex gap-2 text-center items-center">
                      <input
                        type="radio"
                        name="pg"
                        id="b"
                        value={"Bukan Bilangan Cacah"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="h-5 w-5"
                      />
                      <label htmlFor="b">Bukan Bilangan Cacah</label>
                    </div>
                  </form>
                </div>
              )}
            </div>

            <div className="ml-5 font-bold">
              {jawabanbenar !== "" && (
                <div
                  className={`mt-1 ${
                    jawabanbenar === "benar" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {jawabanbenar === "benar"
                    ? "Jawaban Anda benar!"
                    : `Jawaban salah!`}
                  <div className="text-sm w-[50rem]">
                    {jawabanbenar === "benar"
                      ? ""
                      : `Penjelasan : bilangan diatas bukan bilangan cacah melainkan bilangan bulat karena diantara bilangan diatas ada bilangan negatif sedangkan bilangan cacah tidak memuat bilangan negatif.`}
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
                }}
                className={`${
                  N === 1 ? "bg-[#423d49]" : "bg-indigo-500"
                } p-2 rounded-md`}
              >
                Sebelumnya
              </button>
              <button
                onClick={checkAnswer}
                className="p-2 rounded-md bg-indigo-500"
              >
                Cek Jawaban
              </button>
              <button
                onClick={() => {
                  if (N !== 4) {
                    setN(N + 1);
                  }
                }}
                className={`${
                  N === 4 ? "bg-[#423d49]" : "bg-indigo-500"
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
