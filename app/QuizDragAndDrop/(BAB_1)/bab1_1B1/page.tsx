"use client";
import { useState } from "react";

export default function Quiz() {
  const [numbers, setNumbers] = useState([-12, 7, 0, 0.6, -3, 25, -2.67]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const checkAnswer = () => {
    // Correct answers array
    const correctAnswers = [-12, 7, 0, -3, 25];
    // Check if selectedNumbers match correctAnswers
    const isCorrect =
      selectedNumbers.length === correctAnswers.length &&
      selectedNumbers.every((val) => correctAnswers.includes(val));
    if (isCorrect) {
      alert("Jawaban Benar!");
    } else {
      alert("Jawaban Salah, Coba lagi!");
      resetQuiz();
    }
  };

  const resetQuiz = () => {
    setNumbers([-12, 7, 0, 0.6, -3, 25, -2.67]); // Reset the original numbers
    setSelectedNumbers([]); // Clear the answer area
  };

  const handleDragStart = (e: any, number: number, origin: string) => {
    e.dataTransfer.setData("number", number);
    e.dataTransfer.setData("origin", origin);
  };

  const handleDrop = (e: any, target: string) => {
    const number = +e.dataTransfer.getData("number");
    const origin = e.dataTransfer.getData("origin");

    if (target === "selected" && origin === "numbers") {
      setSelectedNumbers((prev) => [...prev, number]);
      setNumbers((prev) => prev.filter((num) => num !== number));
    } else if (target === "numbers" && origin === "selected") {
      setNumbers((prev) => [...prev, number]);
      setSelectedNumbers((prev) => prev.filter((num) => num !== number));
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
        <div
          onDrop={(e) => handleDrop(e, "selected")}
          onDragOver={handleDragOver}
          className="p-4 bg-green-400 rounded mb-4 h-[10rem] w-100 text-center font-bold"
        >
          Taruh Bilangan Bulat Disini
          <div className="flex space-x-2">
            {selectedNumbers.map((number, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, number, "selected")}
                className="p-2 bg-blue-400 rounded cursor-pointer"
              >
                {number}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={checkAnswer}
            className="px-4 py-2 bg-purple-600 text-white rounded shadow"
          >
            Cek Jawaban
          </button>
         {/*  <button
            onClick={resetQuiz}
            className="px-4 py-2 bg-rose-600 text-white rounded shadow"
          >
            Coba Lagi
          </button> */}
        </div>
      </div>
    </div>
  );
}
