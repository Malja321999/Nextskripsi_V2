// pages/index.js
"use client";
import { useState } from "react";

export default function Home() {
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Quiz Matematika</h1>
      <div className="mb-4">
        <label className="block">
          <input
            type="checkbox"
            name="Asosiatif"
            checked={answers.Asosiatif}
            onChange={handleChange}
            className="mr-2"
          />
          Asosiatif
        </label>
        <label className="block">
          <input
            type="checkbox"
            name="Terbuka"
            checked={answers.Terbuka}
            onChange={handleChange}
            className="mr-2"
          />
          Terbuka
        </label>
        <label className="block">
          <input
            type="checkbox"
            name="Tertutup"
            checked={answers.Tertutup}
            onChange={handleChange}
            className="mr-2"
          />
          Tertutup
        </label>
        <label className="block">
          <input
            type="checkbox"
            name="Komutatif"
            checked={answers.Komutatif}
            onChange={handleChange}
            className="mr-2"
          />
          Komutatif
        </label>
      </div>
      <button
        onClick={checkAnswers}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Cek Jawaban
      </button>

      <div className="mt-4">
        {result === "true" && (
          <p className="text-green-500">Selamat! Jawaban Anda benar.</p>
        )}
        {result === "false" && (
          <p className="text-red-500">Jawaban Anda salah. Coba lagi.</p>
        )}
      </div>

      <button
        onClick={resetQuiz}
        className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
      >
        Ulang Quiz
      </button>
    </div>
  );
}
