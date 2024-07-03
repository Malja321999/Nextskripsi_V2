"use client";
import React, { useState } from "react";
import GBB1_2A from "../../../asset/GBB1_2A.png";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { DiVim } from "react-icons/di";

const Page = () => {
  const [numbers, setNumbers] = useState<number[]>([-5, 2, -2]);
  const [selectedNumbers1, setSelectedNumbers1] = useState<number[]>([]);
  const [selectedNumbers2, setSelectedNumbers2] = useState<number[]>([]);
  const [selectedNumbers3, setSelectedNumbers3] = useState<number[]>([]);
  const [selectedNumbers4, setSelectedNumbers4] = useState<number[]>([]);
  const [selectedNumbers5, setSelectedNumbers5] = useState<number[]>([]);
  const [selectedNumbers6, setSelectedNumbers6] = useState<number[]>([]);
  const [selectedNumbers7, setSelectedNumbers7] = useState<number[]>([]);
  const [selectedNumbers8, setSelectedNumbers8] = useState<number[]>([]);
  const [selectedNumbers9, setSelectedNumbers9] = useState<number[]>([]);
  const [selectedNumbers10, setSelectedNumbers10] = useState<number[]>([]);

  const [BenarSemua, setBenarSemua] = useState("");

  const checkAnswer = () => {
    // Correct answers array
    const correctAnswers1 = [-5];
    const correctAnswers2 = [2];
    const correctAnswers3 = [-2];

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

    if (isCorrect1 && isCorrect2 && isCorrect3) {
      setBenarSemua("benar");
      alert("Jawaban Benar!");
    } else {
      alert("Jawaban Salah, Coba lagi!");
      resetQuiz();
    }
  };

  const resetQuiz = () => {
    setNumbers([-5, 2, -2]); // Reset the original numbers
    setSelectedNumbers1([]);
    setSelectedNumbers2([]);
    setSelectedNumbers3([]);
    setSelectedNumbers4([]);
    setSelectedNumbers5([]);
    setSelectedNumbers6([]);
    setSelectedNumbers7([]);
    setSelectedNumbers8([]);
    setSelectedNumbers9([]);
    setSelectedNumbers10([]);
    // Clear the answer area
    setBenarSemua("");
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
    } else if (target === "soal6" && origin === "numbers") {
      setSelectedNumbers6((prev) => [...prev, number]);
      setNumbers((prev) => prev.filter((num) => num !== number));
    } else if (target === "soal7" && origin === "numbers") {
      setSelectedNumbers7((prev) => [...prev, number]);
      setNumbers((prev) => prev.filter((num) => num !== number));
    } else if (target === "soal8" && origin === "numbers") {
      setSelectedNumbers8((prev) => [...prev, number]);
      setNumbers((prev) => prev.filter((num) => num !== number));
    } else if (target === "soal9" && origin === "numbers") {
      setSelectedNumbers9((prev) => [...prev, number]);
      setNumbers((prev) => prev.filter((num) => num !== number));
    } else if (target === "soal10" && origin === "numbers") {
      setSelectedNumbers10((prev) => [...prev, number]);
      setNumbers((prev) => prev.filter((num) => num !== number));
    } else if (
      (target === "numbers" && origin === "soal1") ||
      origin === "soal2" ||
      origin === "soal3" ||
      origin === "soal4" ||
      origin === "soal5" ||
      origin === "soal6" ||
      origin === "soal7" ||
      origin === "soal8" ||
      origin === "soal9" ||
      origin === "soal10"
    ) {
      setNumbers((prev) => [...prev, number]);
      setSelectedNumbers1((prev) => prev.filter((num) => num !== number));
      setSelectedNumbers2((prev) => prev.filter((num) => num !== number));
      setSelectedNumbers3((prev) => prev.filter((num) => num !== number));
      setSelectedNumbers4((prev) => prev.filter((num) => num !== number));
      setSelectedNumbers5((prev) => prev.filter((num) => num !== number));
      setSelectedNumbers6((prev) => prev.filter((num) => num !== number));
      setSelectedNumbers7((prev) => prev.filter((num) => num !== number));
      setSelectedNumbers8((prev) => prev.filter((num) => num !== number));
      setSelectedNumbers9((prev) => prev.filter((num) => num !== number));
      setSelectedNumbers10((prev) => prev.filter((num) => num !== number));
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow rounded">
        <div className="p-5 flex flex-row bg-indigo-200 text-4xl">
          <div>
            {/* kolom Jawaaban */}
            <div className="z-10 top-8 absolute flex flex-row justify-items-center text-center">
              <div
                className={`${
                  BenarSemua === "benar" ? "opacity-0" : "opacity-100"
                } -top-[80px] flex flex-col justify-center items-center ml-[77px] mt-10`}
              >
                <div
                  onDrop={(e) => handleDrop(e, "soal1")}
                  onDragOver={handleDragOver}
                  className="p-5 ml-0.5 bg-indigo-400 rounded text-center font-bold h-[2.7rem] w-[3.5rem] flex justify-center items-center"
                >
                  <div className="flex space-x-2">
                    {selectedNumbers1.map((number, index) => (
                      <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, number, "soal1")}
                        className="p-1 bg-blue-400 rounded cursor-pointer h-[2.4rem] w-[2.8rem] flex justify-center items-center text-xl"
                      >
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  BenarSemua === "benar" ? "opacity-0" : "opacity-100"
                } -top-[80px] flex flex-col justify-center items-center ml-[27.3rem] mt-10`}
              >
                <div
                  onDrop={(e) => handleDrop(e, "soal2")}
                  onDragOver={handleDragOver}
                  className="p-5 ml-0.5 bg-indigo-400 rounded text-center font-bold h-[2.7rem] w-[3.5rem] flex justify-center items-center"
                >
                  <div className="flex space-x-2">
                    {selectedNumbers2.map((number, index) => (
                      <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, number, "soal2")}
                        className="p-1 bg-blue-400 rounded cursor-pointer h-[2.4rem] w-[2.8rem] flex justify-center items-center text-xl"
                      >
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  BenarSemua === "benar" ? "opacity-0" : "opacity-100"
                } -top-[80px] flex flex-col justify-center items-center -ml-[21.4rem] mt-10`}
              >
                <div
                  onDrop={(e) => handleDrop(e, "soal3")}
                  onDragOver={handleDragOver}
                  className="p-5 ml-0.5 bg-indigo-400 rounded text-center font-bold h-[2.7rem] w-[3.5rem] flex justify-center items-center"
                >
                  <div className="flex space-x-2">
                    {selectedNumbers3.map((number, index) => (
                      <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, number, "soal3")}
                        className="p-1 bg-blue-400 rounded cursor-pointer h-[2.4rem] w-[2.8rem] flex justify-center items-center text-xl"
                      >
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* akhir kolom Jawaaban */}
            {/* kolom gambar */}
            <div className="flex flex-col -mt-2 justify-items-center text-center">
              <div className="rounded-md border-4 mx-2 border-teal-500">
                <Image
                  src={GBB1_2A}
                  alt="Gambar"
                  width={800}
                  height={400}
                ></Image>
              </div>
            </div>
            {/* akhir kolom gambar */}
            {/* kolom angka */}
            <div className="flex ml-2 w-fit mt-8">
              <div
                className="rounded-md w-[50.5rem] grid grid-cols-3 gap-4 p-5 justify-items-center text-center bg-indigo-300"
                onDrop={(e) => handleDrop(e, "numbers")}
                onDragOver={handleDragOver}
              >
                {numbers.map((number, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, number, "numbers")}
                    className="p-2 bg-blue-500 rounded cursor-pointer text-center h-[3rem] w-[3rem] text-xl"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>
            {/* akhir kolom angka */}
          </div>

          <div>
            {/* kolom tombol */}
            <div className="flex flex-col gap-2">
              <button
                onClick={checkAnswer}
                className="bg-purple-600 rounded-md border-2 border-white px-5 py-1 h-[12rem]"
              >
                Cek Jawaban
              </button>
              <button
                onClick={resetQuiz}
                className="bg-rose-600 rounded-md border-2 border-white px-5 py-1 h-[12rem]"
              >
                Ulang Kuis
              </button>
            </div>
            {/* akhir kolom tombol */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
