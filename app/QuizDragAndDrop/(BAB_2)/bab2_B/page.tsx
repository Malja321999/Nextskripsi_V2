"use client";
import React, { useState } from "react";

const Page = () => {
  const [numbers, setNumbers] = useState<number[]>([
    2, -2, -18, -5, -15, 25, 0, 3, 4, 5, 12, 20,
  ]);
  const [selectedNumbers1, setSelectedNumbers1] = useState<number[]>([]);
  const [selectedNumbers2, setSelectedNumbers2] = useState<number[]>([]);
  const [selectedNumbers3, setSelectedNumbers3] = useState<number[]>([]);
  const [selectedNumbers3_pro1, setSelectedNumbers3_pro1] = useState<number[]>(
    []
  );
  const [selectedNumbers3_pro2, setSelectedNumbers3_pro2] = useState<number[]>(
    []
  );
  const [selectedNumbers4, setSelectedNumbers4] = useState<number[]>([]);
  const [selectedNumbers4_pro1, setSelectedNumbers4_pro1] = useState<number[]>(
    []
  );
  const [selectedNumbers4_pro2, setSelectedNumbers4_pro2] = useState<number[]>(
    []
  );
  const [selectedNumbers5, setSelectedNumbers5] = useState<number[]>([]);
  const [selectedNumbers5_pro1, setSelectedNumbers5_pro1] = useState<number[]>(
    []
  );
  const [selectedNumbers5_pro2, setSelectedNumbers5_pro2] = useState<number[]>(
    []
  );

  const checkAnswer = () => {
    // Correct answers array
    const correctAnswers1 = [2];
    const correctAnswers2 = [-2];
    const correctAnswers3 = [-18];
    const correctAnswers4 = [-5];
    const correctAnswers5 = [-15];

    // Check if selectedNumbers match correctAnswers
    const isCorrect1 =
      selectedNumbers1.length === correctAnswers1.length &&
      selectedNumbers1.every((val) => correctAnswers1.includes(val));
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

    if (isCorrect1 && isCorrect2 && isCorrect3 && isCorrect4 && isCorrect5) {
      alert("Jawaban Benar!");
    } else {
      alert("Jawaban Salah, Coba lagi!");
      resetQuiz();
    }
    console.log(isCorrect1);
  };

  const resetQuiz = () => {
    setNumbers([2, -2, -18, -5, -15, 25, 0, 3, 4, 5, 12, 20]); // Reset the original numbers
    setSelectedNumbers1([]);
    setSelectedNumbers2([]);
    setSelectedNumbers3([]);
    setSelectedNumbers4([]);
    setSelectedNumbers5([]);

    // Clear the answer area
  };

  const handleDragStart = (e: any, number: number, origin: string) => {
    e.dataTransfer.setData("number", number);
    e.dataTransfer.setData("origin", origin);
  };

  const handleDrop = (e: any, target: string) => {
    const number = +e.dataTransfer.getData("number");
    const origin = e.dataTransfer.getData("origin");

    if (target === "soal1" && origin === "numbers") {
      setSelectedNumbers1((prev) => [...prev, number]);
      setNumbers((prev) => prev.filter((num) => num !== number));
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
        <div className="text-xl p-5 gap-5 flex flex-row bg-indigo-200">
          <div className="text-xl flex flex-col gap-2 justify-items-center text-center">
            <div className="bg-red-500 p-5 rounded-md">
              ( -1 + (-4) ) - (-7)
            </div>
            <div className="bg-green-500 p-5 rounded-md ">
              ( 6 - (-8) ) - 16
            </div>
            <div className="bg-sky-500 p-5 rounded-md ">
              (5 + (-18) ) + (-5)
            </div>
            <div className="bg-amber-500 p-5 rounded-md ">
              ( -9 - (-8) ) + (-4)
            </div>
            <div className="bg-purple-500 p-5 rounded-md ">
              ( 16 - 18 ) - 13
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-items-center text-center">
            <div className="bg-gray-500 p-5 rounded-md text-[30px]">{"="}</div>
            <div className="bg-gray-500 p-5 rounded-md text-[30px]">{"="}</div>
            <div className="bg-gray-500 p-5 rounded-md text-[30px]">{"="}</div>
            <div className="bg-gray-500 p-5 rounded-md text-[30px]">{"="}</div>
            <div className="bg-gray-500 p-5 rounded-md text-[30px]">{"="}</div>
          </div>
          <div className="flex flex-col gap-2 justify-items-center text-center">
            <div
              onDrop={(e) => handleDrop(e, "soal1")}
              onDragOver={handleDragOver}
              className="p-5 bg-red-400 rounded text-center font-bold h-[4.4rem] w-[5rem] flex justify-center items-center"
            >
              <div className="flex space-x-2">
                {selectedNumbers1.map((number, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, number, "soal1")}
                    className="p-1 bg-blue-400 rounded cursor-pointer text-3xl"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>
            <div
              onDrop={(e) => handleDrop(e, "soal2")}
              onDragOver={handleDragOver}
              className="p-5 bg-green-400 rounded text-center font-bold h-[4.4rem] w-[5rem] flex justify-center items-center"
            >
              <div className="flex space-x-2">
                {selectedNumbers2.map((number, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, number, "soal2")}
                    className="p-2 bg-blue-400 rounded cursor-pointer text-3xl"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>
            <div
              onDrop={(e) => handleDrop(e, "soal3")}
              onDragOver={handleDragOver}
              className="p-5 bg-sky-400 rounded text-center font-bold h-[4.4rem] w-[5rem] flex justify-center items-center"
            >
              <div className="flex space-x-2">
                {selectedNumbers3.map((number, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, number, "soal3")}
                    className="p-2 bg-blue-400 rounded cursor-pointer text-3xl"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>

            <div
              onDrop={(e) => handleDrop(e, "soal4")}
              onDragOver={handleDragOver}
              className="p-5 bg-amber-400 rounded text-center font-bold h-[4.4rem] w-[5rem] flex justify-center items-center"
            >
              <div className="flex space-x-2">
                {selectedNumbers4.map((number, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, number, "soal4")}
                    className="p-2 bg-blue-400 rounded cursor-pointer text-3xl"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>
            <div
              onDrop={(e) => handleDrop(e, "soal5")}
              onDragOver={handleDragOver}
              className="p-5 bg-purple-400 rounded text-center font-bold h-[4.4rem] w-[5rem] flex justify-center items-center"
            >
              <div className="flex space-x-2">
                {selectedNumbers5.map((number, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, number, "soal5")}
                    className="p-2 bg-blue-400 rounded cursor-pointer text-3xl"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-items-center text-center"></div>
          <div
            onDrop={(e) => handleDrop(e, "numbers")}
            onDragOver={handleDragOver}
            className="h-[23.9rem] grid grid-cols-3 gap-4 p-5 justify-items-center text-center bg-indigo-300 rounded-md"
          >
            {numbers.map((number, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, number, "numbers")}
                className="p-2 bg-blue-500 rounded cursor-pointer flex justify-center items-center text-center w-[3rem] h-[3rem] text-2xl"
              >
                {number}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={checkAnswer}
              className="bg-purple-600 rounded-md border-2 border-white px-5 py-1 h-[11.7rem] w-60"
            >
              Cek Jawaban
            </button>
           {/*  <button
              onClick={resetQuiz}
              className="bg-rose-600 rounded-md border-2 border-white px-5 py-1 h-[11.7rem] w-60"
            >
              Ulang Kuis
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
