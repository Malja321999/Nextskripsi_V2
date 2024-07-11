"use client";
import React, { useState, useEffect } from "react";

const Timer = () => {
  // Setel waktu awal dalam detik (10 menit = 600 detik)
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Jika timer tidak aktif atau waktu habis, jangan lakukan apa-apa
    if (!isActive || timeLeft === 0) return;

    // Mengurangi waktu setiap detik
    const intervalId = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    // Bersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, [isActive, timeLeft]);

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
    }
  }, [timeLeft]);

  return (
    <div>
      <h1>Timer: {formatTime()}</h1>
    </div>
  );
};

export default function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-9xl w-[50rem] h-[30rem] bg-white text-blue-500 flex justify-center items-center rounded-md p-4">
        <Timer />
      </div>
    </div>
  );
}
