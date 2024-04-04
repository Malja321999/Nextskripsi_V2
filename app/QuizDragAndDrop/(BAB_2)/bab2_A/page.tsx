"use client";
import Image from "next/image";
import React, { useState } from "react";
import apple from "../../../asset/apple.png";

const Page = () => {
  const JumlahBuah = [
    {
      img: apple,
    },
  ];
  const [buah1, setbuah1] = useState(0);
  const [buah2, setbuah2] = useState(0);
  const [buah3, setbuah3] = useState(0);
  const [buah4, setbuah4] = useState(0);
  const [buah5, setbuah5] = useState(0);
  const [Nebuah1, setNebuah1] = useState(0);
  const [Nebuah2, setNebuah2] = useState(0);
  const [Nebuah3, setNebuah3] = useState(0);
  const [Nebuah4, setNebuah4] = useState(0);
  const [Nebuah5, setNebuah5] = useState(0);

  const checkAnswer = () => {
    // Correct answers array
    const correctAnswers1 = 1;
    const correctAnswers2 = 0;
    const correctAnswers3 = 0;
    const correctAnswers4 = 0;
    const correctAnswers5 = 6;
    const NecorrectAnswers1 = 0;
    const NecorrectAnswers2 = 9; /* -9 */
    const NecorrectAnswers3 = 10; /* -10 */
    const NecorrectAnswers4 = 0;
    const NecorrectAnswers5 = 0;
    // Check if selectedNumbers match correctAnswers
    const isCorrect1 =
      correctAnswers1 === buah1 && NecorrectAnswers1 === Nebuah1;
    const isCorrect2 =
      correctAnswers2 === buah2 && NecorrectAnswers2 === Nebuah2;
    const isCorrect3 =
      correctAnswers3 === buah3 && NecorrectAnswers3 === Nebuah3;
    const isCorrect4 =
      correctAnswers4 === buah4 && NecorrectAnswers4 === Nebuah4;
    const isCorrect5 =
      correctAnswers5 === buah5 && NecorrectAnswers5 === Nebuah5;

    if (isCorrect1 && isCorrect2 && isCorrect3 && isCorrect4 && isCorrect5) {
      alert("Jawaban Benar!");
    } else {
      alert("Jawaban Salah, Coba lagi!");
      resetQuiz();
    }
  };

  const resetQuiz = () => {
    // Clear the answer area
    setbuah1(0);
    setbuah2(0);
    setbuah3(0);
    setbuah4(0);
    setbuah5(0);
    setNebuah1(0);
    setNebuah2(0);
    setNebuah3(0);
    setNebuah4(0);
    setNebuah5(0);
  };

  const handleDragStart = (e: any, number: number, origin: string) => {
    e.dataTransfer.setData("number", number);
    e.dataTransfer.setData("origin", origin);
  };

  const handleDrop = (e: any, target: string) => {
    const origin = e.dataTransfer.getData("origin");

    if (target === "soal1" && origin === "numbers") {
      setbuah1(buah1 + 1);
    } else if (target === "soal2" && origin === "numbers") {
      setbuah2(buah2 + 1);
    } else if (target === "soal3" && origin === "numbers") {
      setbuah3(buah3 + 1);
    } else if (target === "soal4" && origin === "numbers") {
      setbuah4(buah4 + 1);
    } else if (target === "soal5" && origin === "numbers") {
      setbuah5(buah5 + 1);
    }
    if (target === "Nesoal1" && origin === "numbers") {
      setNebuah1(Nebuah1 + 1);
    } else if (target === "Nesoal2" && origin === "numbers") {
      setNebuah2(Nebuah2 + 1);
    } else if (target === "Nesoal3" && origin === "numbers") {
      setNebuah3(Nebuah3 + 1);
    } else if (target === "Nesoal4" && origin === "numbers") {
      setNebuah4(Nebuah4 + 1);
    } else if (target === "Nesoal5" && origin === "numbers") {
      setNebuah5(Nebuah5 + 1);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow rounded">
        <div className="p-5 gap-5 flex flex-row bg-indigo-200 text-5xl">
          <div className="flex flex-col gap-2 justify-items-center text-center">
            <div className="bg-red-500 p-5 rounded-md">3 + (-2)</div>
            <div className="bg-green-500 p-5 rounded-md">-14 + 5</div>
            <div className="bg-sky-500 p-5 rounded-md">-4 + (-6)</div>
            <div className="bg-amber-500 p-5 rounded-md">-8 + 8</div>
            <div className="bg-purple-500 p-5 rounded-md">1 - (-5)</div>
          </div>
          <div className="flex flex-col gap-2 justify-items-center text-center">
            <div className="bg-gray-500 p-5 rounded-md">{"="}</div>
            <div className="bg-gray-500 p-5 rounded-md">{"="}</div>
            <div className="bg-gray-500 p-5 rounded-md">{"="}</div>
            <div className="bg-gray-500 p-5 rounded-md">{"="}</div>
            <div className="bg-gray-500 p-5 rounded-md">{"="}</div>
          </div>
          <div className="flex flex-col gap-2 justify-items-center text-center">
            <div
              onDrop={(e) => handleDrop(e, "soal1")}
              onDragOver={handleDragOver}
              className="p-5 bg-red-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              +{buah1}
            </div>
            <div
              onDrop={(e) => handleDrop(e, "soal2")}
              onDragOver={handleDragOver}
              className="p-5 bg-green-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              +{buah2}
            </div>
            <div
              onDrop={(e) => handleDrop(e, "soal3")}
              onDragOver={handleDragOver}
              className="p-5 bg-sky-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              +{buah3}
            </div>
            <div
              onDrop={(e) => handleDrop(e, "soal4")}
              onDragOver={handleDragOver}
              className="p-5 bg-amber-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              +{buah4}
            </div>
            <div
              onDrop={(e) => handleDrop(e, "soal5")}
              onDragOver={handleDragOver}
              className="p-5 bg-purple-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              +{buah5}
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-items-center text-center">
            <div
              onDrop={(e) => handleDrop(e, "Nesoal1")}
              onDragOver={handleDragOver}
              className="p-5 bg-red-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              -{Nebuah1}
            </div>
            <div
              onDrop={(e) => handleDrop(e, "Nesoal2")}
              onDragOver={handleDragOver}
              className="p-5 bg-green-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              -{Nebuah2}
            </div>
            <div
              onDrop={(e) => handleDrop(e, "Nesoal3")}
              onDragOver={handleDragOver}
              className="p-5 bg-sky-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              -{Nebuah3}
            </div>
            <div
              onDrop={(e) => handleDrop(e, "Nesoal4")}
              onDragOver={handleDragOver}
              className="p-5 bg-amber-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              -{Nebuah4}
            </div>
            <div
              onDrop={(e) => handleDrop(e, "Nesoal5")}
              onDragOver={handleDragOver}
              className="p-5 bg-purple-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              -{Nebuah5}
            </div>
          </div>

          <div className="flex flex-col justify-items-center text-center -space-x-[1rem] p-5  bg-indigo-300 rounded-md h-[29.5rem] w-[14rem]">
            <div className="bg-rose-500 p-5 rounded-md text-center w-fit text-xl font-bold">
              Seret Buah Apel ke Kolom Postif Atau Negatif untuk memberikan jawaban
            </div>

            {JumlahBuah.map((JumlahBuah, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, index, "numbers")}
                className="flex justify-center items-center rounded cursor-pointer"
              >
                <Image
                  src={JumlahBuah.img}
                  alt={"jumlahbuah"}
                  width={1000}
                  height={1000}
                  className="ml-5"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={checkAnswer}
              className="bg-purple-600 rounded-md border-2 border-white px-5 py-1 h-[14.5rem]"
            >
              Cek Jawaban
            </button>
            <button
              onClick={resetQuiz}
              className="bg-rose-600 rounded-md border-2 border-white px-5 py-1 h-[14.5rem]"
            >
              Ulang Kuis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
