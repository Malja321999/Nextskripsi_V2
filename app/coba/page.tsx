"use client";
import { useState } from "react";

export default function Quiz() {
  const [selectedOption, setSelectedOption] = useState("");

  const correctAnswer = "president A"; // Ganti dengan nama presiden yang benar pada tahun 2024
  const [jawabanbenar, setjawabanbenar] = useState("");

  const checkAnswer = () => {
    if (selectedOption === correctAnswer) {
      setjawabanbenar("benar");
    } else {
      setjawabanbenar("salah");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-lg font-semibold mb-4">
        Siapa Presiden pada tahun 2024?
      </h2>
      <div className="mb-2">
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="president"
            value="president A"
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <span className="ml-2">Calon A</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="president"
            value="president B"
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <span className="ml-2">Calon B</span>
        </label>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={checkAnswer}
      >
        Cek Jawaban
      </button>
      {jawabanbenar !== "" && (
        <div
          className={`mt-4 ${
            jawabanbenar === "benar" ? "text-green-500" : "text-red-500"
          }`}
        >
          {jawabanbenar === "benar"
            ? "Jawaban Anda benar!"
            : `Jawaban salah. Presiden pada tahun 2024 adalah ${correctAnswer}.`}
        </div>
      )}
    </div>
  );
}
