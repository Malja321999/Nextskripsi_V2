"use client";
import Image from "next/image";
import React, { useState } from "react";
import apple_kulkas from "../../../asset/apple_Kulkas.png";
import apple_market from "../../../asset/apple_Market.jpg";

const Page = () => {
  const JumlahBuah = [
    {
      img: apple_kulkas,
    },
  ];

  const JumlahBuahMarket = [
    {
      img: apple_market,
    },
  ];
  const [buah1, setbuah1] = useState(0);
  const [buah2, setbuah2] = useState(0);
  const [buah3, setbuah3] = useState(0);
  const [buah4, setbuah4] = useState(0);
  const [buah5, setbuah5] = useState(0);

  const checkAnswer = () => {
    // Correct answers array
    const correctAnswers1 = 1;
    const correctAnswers2 = -9;
    const correctAnswers3 = -10;
    const correctAnswers4 = 0;
    const correctAnswers5 = 6;

    // Check if selectedNumbers match correctAnswers
    const isCorrect1 = correctAnswers1 === buah1;
    const isCorrect2 = correctAnswers2 === buah2;
    const isCorrect3 = correctAnswers3 === buah3;
    const isCorrect4 = correctAnswers4 === buah4;
    const isCorrect5 = correctAnswers5 === buah5;

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
  };

  const handleDragStart = (e: any, origin: string) => {
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
    } else if (target === "soal1" && origin === "numbers_negative") {
      setbuah1(buah1 - 1);
    } else if (target === "soal2" && origin === "numbers_negative") {
      setbuah2(buah2 - 1);
    } else if (target === "soal3" && origin === "numbers_negative") {
      setbuah3(buah3 - 1);
    } else if (target === "soal4" && origin === "numbers_negative") {
      setbuah4(buah4 - 1);
    } else if (target === "soal5" && origin === "numbers_negative") {
      setbuah5(buah5 - 1);
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
              {buah1}
            </div>
            <div
              onDrop={(e) => handleDrop(e, "soal2")}
              onDragOver={handleDragOver}
              className="p-5 bg-green-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              {buah2}
            </div>
            <div
              onDrop={(e) => handleDrop(e, "soal3")}
              onDragOver={handleDragOver}
              className="p-5 bg-sky-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              {buah3}
            </div>
            <div
              onDrop={(e) => handleDrop(e, "soal4")}
              onDragOver={handleDragOver}
              className="p-5 bg-amber-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              {buah4}
            </div>
            <div
              onDrop={(e) => handleDrop(e, "soal5")}
              onDragOver={handleDragOver}
              className="p-5 bg-purple-400 rounded text-center font-bold h-[5.5rem] w-[7.5rem] flex justify-center items-center"
            >
              {buah5}
            </div>
          </div>

          <div>
            <div className="bg-teal-500 mb-2 p-5 rounded-md text-center text-xs font-bold w-[30rem]">
              Suatu hari Kak Ani ingin membuat jus Apel, kemudian dia mengambil
              Apel tersebut dalam kulkas. Kemudian ia menghitung jumlah Apel
              didalam kulkas apakah sudah cukup untuk membuat jus apel untuk
              dirinya dan keluarganya, sebelum akhirnya ia ingin pergi ke pasar
              untuk membeli apel jika jumlahnya kurang. Jika jumlah apel dalam
              kulkas di lambangkan bilangan positif dan jumlah apel kurang yang
              harus dibeli di pasar adalah bilangan negatif maka nyatakanlah
              jumlah appel yang dimiliki Kak Ani, dengan selesaikanlah soal di
              samping ini.
            </div>

            <div className="bg-rose-500 mb-2 p-5 rounded-md text-center text-sm font-bold w-[30rem]">
              Seret Buah Apel Dari Kulkas Atau Pasar ke Kolom Jawaban Untuk
              Memberikan Jumlah Apel Yang Dimiliki Saat Ini.
            </div>

            <div className="flex flex-row gap-8">
              <div className="flex flex-col justify-items-center text-center p-5  bg-indigo-300 rounded-md h-fit w-[14rem]">
                {JumlahBuah.map((JumlahBuah, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, "numbers")}
                    className="flex flex-col justify-center items-center cursor-pointer"
                  >
                    <Image
                      src={JumlahBuah.img}
                      alt={"jumlahbuah"}
                      width={1000}
                      height={1000}
                    />
                    <div className="text-xs mt-2 bg-rose-500 p-2 rounded-md">
                      Buah Didalam Kulkas
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-items-center text-center p-5  bg-indigo-300 rounded-md h-fit w-[14rem]">
                {JumlahBuahMarket.map((JumlahBuahMarket, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, "numbers_negative")}
                    className="flex flex-col justify-center items-center cursor-pointer"
                  >
                    <Image
                      src={JumlahBuahMarket.img}
                      alt={"JumlahBuahMarket"}
                      width={1000}
                      height={1000}
                      className="flex w-[12rem] bg-slate-500"
                    />
                    <div className="text-xs mt-2 bg-rose-500 p-2 rounded-md">
                      Buah Yang Dijual Di Pasar
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={checkAnswer}
              className="bg-purple-600 rounded-md border-2 border-white px-5 py-1 h-[11.7rem] w-60"
            >
              Cek Jawaban
            </button>
            <button
              onClick={resetQuiz}
              className="bg-rose-600 rounded-md border-2 border-white px-5 py-1 h-[11.7rem] w-60"
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
