"use client";
// pages/index.js
import { useState } from "react";
import { DragEvent } from "react";

export default function Home() {
  const [numbers, setNumbers] = useState(["5", "4", "3", "2", "1"]);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const onDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const onDragStart = (event: DragEvent, number: string) => {
    setDraggedItem(number);
  };

  const onDrop = (event: DragEvent, droppedOnNumber: string) => {
    event.preventDefault();
    setNumbers((prevNumbers) => {
      const newNumbers = [...prevNumbers];
      const draggedIndex = draggedItem ? newNumbers.indexOf(draggedItem) : -1;
      const droppedIndex = newNumbers.indexOf(droppedOnNumber);
      if (draggedIndex !== -1) {
        newNumbers[draggedIndex] = droppedOnNumber;
        if (draggedItem !== null) {
          newNumbers[droppedIndex] = draggedItem;
        }
      }
      return newNumbers;
    });
  };
  const checkAnswer = () => {
    if (numbers.join("") === "12345") {
      alert("Jawaban Anda benar!");
    } else {
      alert("Jawaban Anda salah, coba lagi.");
    }
  };

  const resetQuiz = () => {
    setNumbers(["5", "4", "3", "2", "1"]);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Urutkan Angka</h2>
      <div className="flex flex-col space-y-2">
        {numbers.map((number) => (
          <div
            key={number}
            draggable
            onDragStart={(event) => onDragStart(event, number)}
            onDragOver={onDragOver}
            onDrop={(event) => onDrop(event, number)}
            className="p-2 border-2 border-gray-300 cursor-move"
          >
            {number}
          </div>
        ))}
      </div>
      <button
        onClick={checkAnswer}
        className="mt-4 px-4 py-2 bg-blue-500 text-white"
      >
        Cek Jawaban
      </button>
      <button
        onClick={resetQuiz}
        className="mt-2 px-4 py-2 bg-red-500 text-white"
      >
        Ulang Kuis
      </button>
    </div>
  );
}
