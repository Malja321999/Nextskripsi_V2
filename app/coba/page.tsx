"use client";
import Image from "next/image";
import React, { useState } from "react";
import apple from "../asset/apple.png";

const Page = () => {
  const [numbers, setNumbers] = useState<number[]>([
    0, 8, -10, 20, -9, -41, 1, 300, 6, -5, 20, 7,
  ]);
  const [selectedNumbers1, setSelectedNumbers1] = useState<number[]>([]);
  const [selectedNumbers2, setSelectedNumbers2] = useState<number[]>([]);
  const [selectedNumbers3, setSelectedNumbers3] = useState<number[]>([]);
  const [selectedNumbers4, setSelectedNumbers4] = useState<number[]>([]);
  const [selectedNumbers5, setSelectedNumbers5] = useState<number[]>([]);

  const JumlahBuah = [
    {
      img: apple,
    },
    {
      img: apple,
    },
    {
      img: apple,
    },
  ];
  const [buah1, setbuah1] = useState(0);

  const checkAnswer = () => {
    // Correct answers array
    const correctAnswers1 = 1;
    const correctAnswers2 = [-9];
    const correctAnswers3 = [-10];
    const correctAnswers4 = [0];
    const correctAnswers5 = [6];
    // Check if selectedNumbers match correctAnswers
    const isCorrect1 = correctAnswers1 === buah1;

    const isCorrect2 =
      selectedNumbers2.length === correctAnswers2.length &&
      selectedNumbers2.every((val) => correctAnswers2.includes(val));
    const isCorrect3 =
      selectedNumbers3.length === correctAnswers3.length &&
      selectedNumbers3.every((val) => correctAnswers3.includes(val));
    const isCorrect4 =
      selectedNumbers4.length === correctAnswers4.length &&
      selectedNumbers4.every((val) => correctAnswers4.includes(val));
    const isCorrect5 =
      selectedNumbers5.length === correctAnswers5.length &&
      selectedNumbers5.every((val) => correctAnswers5.includes(val));

    if (isCorrect1 /* && isCorrect2 && isCorrect3 && isCorrect4 && isCorrect5 */) {
      alert("Jawaban Benar!");
    } else {
      alert("Jawaban Salah, Coba lagi!");
      resetQuiz();
    }
  };

  const resetQuiz = () => {
    setNumbers([0, 8, -10, 20, -9, -41, 1, 300, 6, -5, 20, 7]); // Reset the original numbers
    setSelectedNumbers1([]);
    setSelectedNumbers2([]);
    setSelectedNumbers3([]);
    setSelectedNumbers4([]);
    setSelectedNumbers5([]);
    // Clear the answer area
    setbuah1(0);
  };

  const handleDragStart = (e: any, number: number, origin: string) => {
    e.dataTransfer.setData("number", number);
    e.dataTransfer.setData("origin", origin);
  };

  const handleDrop = (e: any, target: string) => {
    const number = +e.dataTransfer.getData("number");
    const origin = e.dataTransfer.getData("origin");

    if (target === "soal1" && origin === "numbers") {
      /* setSelectedNumbers1((prev) => [...prev, number]);
      setNumbers((prev) => prev.filter((num) => num !== number)); */
      setbuah1(buah1 + 1);
    } else if (target === "soal2" && origin === "numbers") {
      setSelectedNumbers2((prev) => [...prev, number]);
      setNumbers((prev) => prev.filter((num) => num !== number));
    } else if (target === "soal3" && origin === "numbers") {
      setSelectedNumbers3((prev) => [...prev, number]);
      setNumbers((prev) => prev.filter((num) => num !== number));
    } else if (target === "soal4" && origin === "numbers") {
      setSelectedNumbers4((prev) => [...prev, number]);
      setNumbers((prev) => prev.filter((num) => num !== number));
    } else if (target === "soal5" && origin === "numbers") {
      setSelectedNumbers5((prev) => [...prev, number]);
      setNumbers((prev) => prev.filter((num) => num !== number));
    } else if (
      (target === "numbers" && origin === "soal1") ||
      origin === "soal2" ||
      origin === "soal3" ||
      origin === "soal4" ||
      origin === "soal5"
    ) {
      setNumbers((prev) => [...prev, number]);
      setSelectedNumbers1((prev) => prev.filter((num) => num !== number));
      setSelectedNumbers2((prev) => prev.filter((num) => num !== number));
      setSelectedNumbers3((prev) => prev.filter((num) => num !== number));
      setSelectedNumbers4((prev) => prev.filter((num) => num !== number));
      setSelectedNumbers5((prev) => prev.filter((num) => num !== number));
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
              <div className="flex space-x-2">
                <div
                  draggable
                  onDragStart={(e) => handleDragStart(e, 1, "soal1")}
                  className="p-1 bg-blue-400 rounded cursor-pointer"
                >
                  {buah1}
                </div>
              </div>
            </div>
            <div
              onDrop={(e) => handleDrop(e, "soal2")}
              onDragOver={handleDragOver}
              className="p-5 bg-green-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              <div className="flex space-x-2">
                {selectedNumbers2.map((number, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, number, "soal2")}
                    className="p-2 bg-blue-400 rounded cursor-pointer"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>

            <div
              onDrop={(e) => handleDrop(e, "soal3")}
              onDragOver={handleDragOver}
              className="p-5 bg-sky-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              <div className="flex space-x-2">
                {selectedNumbers3.map((number, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, number, "soal3")}
                    className="p-2 bg-blue-400 rounded cursor-pointer"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>
            <div
              onDrop={(e) => handleDrop(e, "soal4")}
              onDragOver={handleDragOver}
              className="p-5 bg-amber-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              <div className="flex space-x-2">
                {selectedNumbers4.map((number, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, number, "soal4")}
                    className="p-2 bg-blue-400 rounded cursor-pointer"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>
            <div
              onDrop={(e) => handleDrop(e, "soal5")}
              onDragOver={handleDragOver}
              className="p-5 bg-purple-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              <div className="flex space-x-2">
                {selectedNumbers5.map((number, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, number, "soal5")}
                    className="p-2 bg-blue-400 rounded cursor-pointer"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            onDrop={(e) => handleDrop(e, "numbers")}
            onDragOver={handleDragOver}
            className="grid grid-cols-3 -space-x-[1rem] p-5 justify-items-center text-center bg-indigo-300 rounded-md h-[29.5rem] w-[18rem]"
          >
            {JumlahBuah.map((JumlahBuah, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, index, "numbers")}
                className="m-0 p-2 rounded cursor-pointer text-center w-[10rem] h-[10rem]"
              >
                <Image
                  src={JumlahBuah.img}
                  alt={"jumlahbuah"}
                  width={100}
                  height={100}
                  className="w-fit h-fit"
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
