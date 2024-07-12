"use client";

import React, { useState, useEffect } from "react";

const Timer = ({ calculatePoints, Timer }: any) => {
  // Setel waktu awal dalam detik (diambil dari TimerKuis || TimirUjianAkhir)
  const [timeLeft, setTimeLeft] = useState(Timer);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Jika timer tidak aktif atau waktu habis, jangan lakukan apa-apa
    if (!isActive || timeLeft === 0) return;

    // Mengurangi waktu setiap detik
    const intervalId = setInterval(() => {
      setTimeLeft((time: any) => time - 1);
    }, 1000);

    // Bersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, [calculatePoints, isActive, timeLeft]);

  // Fungsi untuk menghentikan timer
  const stopTimer = () => {
    setIsActive(false);
  };

  // Format waktu menjadi menit:detik
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Periksa jika waktu habis dan hentikan timer
  useEffect(() => {
    if (timeLeft === 0) {
      stopTimer();
      alert("Waktu habis");
      calculatePoints();
    }
  }, [calculatePoints, timeLeft]);

  return (
    <div>
      <h1>{formatTime()}</h1>
    </div>
  );
};

export default function NavQuestions({
  questions,
  userAnswers,
  currentQuestion,
  setCurrentQuestion,
  allQuestionsAnswered,
  calculatePoints,
  TimerKuis,
  TimerUjianAkhir,
}: any) {
  const Cek =
    !allQuestionsAnswered() && currentQuestion == questions.length - 1;
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div className="flex flex-col gap-2 justify-center items-center w-[20rem] h-fit bg-teal-500 rounded-md p-5 shadow-md">
        <div className="font-bold text-black bg-sky-400 rounded-md border-4 text-center p-2 w-full">
          Waktu Pengerjaan
        </div>
        <div className="font-bold w-20 text-normal border-4 rounded-md p-1 text-center text-black bg-white">
          <Timer
            calculatePoints={calculatePoints}
            Timer={TimerKuis || TimerUjianAkhir}
          />
        </div>
      </div>
      <div className="w-fit h-fit bg-teal-500 rounded-md p-5 shadow-md ">
        <h1 className="font-bold text-black bg-sky-400 rounded-md border-4 text-center p-2 w-full mb-5">
          Nomor Soal
        </h1>
        <ul
          className={`grid grid-cols-5 text-sky-500 text-center font-bold gap-2 rounded-md p-2 w-full ${
            Cek && "border-4 border-rose-500"
          }`}
        >
          {questions.map((question: any, index: number) => (
            <li
              onClick={() => setCurrentQuestion(index)}
              key={index}
              className={`h-fit w-[3rem] text-normal border-4 rounded-md p-2 text-center text-black cursor-pointer 
            ${currentQuestion === index ? "border-sky-700" : "border-white"}
            ${userAnswers[index] !== "" ? "bg-sky-300" : "bg-white"} `}
            >
              {index + 1}
            </li>
          ))}
        </ul>
        <div className="font-bold text-left text-base w-full ml-7">
          <h1 className="text-3xl">Ket :</h1>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between w-[14rem]">
              <div className="w-20 text-normal border-4 rounded-md p-1 text-center text-black bg-white">
                Putih
              </div>
              = Belum dijawab
            </div>
            <div className="flex justify-between w-[14rem]">
              <div className="w-20 text-normal border-4 rounded-md p-1 text-center text-black bg-sky-300">
                Biru
              </div>
              = Sudah dijawab
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        {allQuestionsAnswered() ? (
          <div
            onClick={() => calculatePoints()}
            className="text-2xl w-[20rem] bg-sky-700 rounded-md shadow-md cursor-pointer text-center font-bold p-2 flex justify-center items-center"
          >
            Submit Quiz
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
