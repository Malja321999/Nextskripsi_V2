"use client";
import { useState } from "react";

export default function Quiz() {
  const [numbers, setNumbers] = useState([-12, 7, 0, 0.6, -3, 25, -2.67]);
  const [positiveNumbers, setPositiveNumbers] = useState<number[]>([]);
  const [negativeNumbers, setNegativeNumbers] = useState<number[]>([]);

  const checkAnswer = () => {
    // Correct answers
    const correctPositive = [0.6, 7, 25];
    const correctNegative = [-12, -3, -2.67];

    // Check if answers match
    const isPositiveCorrect =
      positiveNumbers.length === correctPositive.length &&
      positiveNumbers.every((val) => correctPositive.includes(val));
    const isNegativeCorrect =
      negativeNumbers.length === correctNegative.length &&
      negativeNumbers.every((val) => correctNegative.includes(val));

    if (isPositiveCorrect && isNegativeCorrect) {
      alert("Jawaban Benar!");
    } else {
      alert("Jawaban Salah, Coba lagi!");
      resetQuiz();
    }
  };

  const resetQuiz = () => {
    setNumbers([-12, 7, 0, 0.6, -3, 25, -2.67]);
    setPositiveNumbers([]);
    setNegativeNumbers([]);
  };

  const handleDragStart = (e: any, number: number, origin: string) => {
    e.dataTransfer.setData("number", number);
    e.dataTransfer.setData("origin", origin);
  };

  const handleDrop = (e: any, target: string) => {
    const number = +e.dataTransfer.getData("number");
    const origin = e.dataTransfer.getData("origin");

    if (target === "positive" && origin === "numbers") {
      setPositiveNumbers((prev) => [...prev, number]);
      setNumbers((prev) => prev.filter((num) => num !== number));
    } else if (target === "negative" && origin === "numbers") {
      setNegativeNumbers((prev) => [...prev, number]);
      setNumbers((prev) => prev.filter((num) => num !== number));
    } else if (
      (target === "numbers" && origin === "positive") ||
      origin === "negative"
    ) {
      setNumbers((prev) => [...prev, number]);
      setPositiveNumbers((prev) => prev.filter((num) => num !== number));
      setNegativeNumbers((prev) => prev.filter((num) => num !== number));
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow rounded">
        <div
          onDrop={(e) => handleDrop(e, "numbers")}
          onDragOver={handleDragOver}
          className="grid grid-cols-3 gap-4 mb-4 p-4 bg-indigo-200 rounded w-[40rem] h-[12rem]"
        >
          {numbers.map((number, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, number, "numbers")}
              className="p-2 bg-blue-500 rounded cursor-pointer text-center w-[12rem] h-[2.5rem]"
            >
              {number}
            </div>
          ))}
        </div>
        <div className="flex mb-4 gap-2">
          <div
            onDrop={(e) => handleDrop(e, "negative")}
            onDragOver={handleDragOver}
            className="p-4 bg-gray-800 rounded h-[10rem] w-[20rem]"
          >
            Taruh Bilangan Negatif Disini
            <div className="flex flex-wrap gap-2">
              {negativeNumbers.map((number, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, number, "negative")}
                  className="p-2 bg-gray-700 rounded cursor-pointer"
                >
                  {number}
                </div>
              ))}
            </div>
          </div>
          <div
            onDrop={(e) => handleDrop(e, "positive")}
            onDragOver={handleDragOver}
            className="p-4 bg-red-500 rounded h-[10rem] w-[20rem]"
          >
            Taruh Bilangan Positif Disini
            <div className="flex flex-wrap gap-2">
              {positiveNumbers.map((number, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, number, "positive")}
                  className="p-2 bg-red-300 rounded cursor-pointer"
                >
                  {number}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={checkAnswer}
            className="px-4 py-2 mt-2 bg-purple-600 text-white rounded shadow"
          >
            Cek Jawaban
          </button>
          <button
            onClick={resetQuiz}
            className="px-4 py-2 mt-2 bg-rose-600 text-white rounded shadow"
          >
            Ulang Kuis
          </button>
        </div>
      </div>
    </div>
  );
}
