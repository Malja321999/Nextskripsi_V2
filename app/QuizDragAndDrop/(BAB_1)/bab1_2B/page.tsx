"use client";
import React, { useState } from "react";

const Page = () => {
  const [first, setfirst] = useState(">");
  const [second, setsecond] = useState(">");
  const [third, setthird] = useState(">");

  function CekJawaban() {
    if (first === "<" && second === "<" && third === ">") {
      alert("Jawaban Benar");
    } else {
      alert("Jawaban Salah");
      resetQuiz();
    }
  }
  function resetQuiz() {
    setfirst(">");
    setsecond(">");
    setthird(">");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow rounded">
        <div className="p-5 gap-5 flex flex-row bg-indigo-200 text-5xl">
          <div className="flex flex-col gap-2 justify-items-center text-center">
            <div className="bg-red-500 p-5 rounded-md">
              -3{" "}
              {first === ">" ? (
                <button
                  className="bg-indigo-500 rounded-md border-2 border-white px-5 py-1"
                  onClick={() => setfirst("<")}
                >
                  {first}
                </button>
              ) : (
                <button
                  className="bg-fuchsia-500 rounded-md border-2 border-white px-5 py-1"
                  onClick={() => setfirst(">")}
                >
                  {first}
                </button>
              )}{" "}
              5
            </div>
            <div className="bg-green-500 p-5 rounded-md">
              0{" "}
              {second === ">" ? (
                <button
                  className="bg-indigo-500 rounded-md border-2 border-white px-5 py-1"
                  onClick={() => setsecond("<")}
                >
                  {second}
                </button>
              ) : (
                <button
                  className="bg-fuchsia-500 rounded-md border-2 border-white px-5 py-1"
                  onClick={() => setsecond(">")}
                >
                  {second}
                </button>
              )}{" "}
              7
            </div>
            <div className="bg-sky-500 p-5 rounded-md">
              -1,6{" "}
              {third === ">" ? (
                <button
                  className="bg-indigo-500 rounded-md border-2 border-white px-5 py-1"
                  onClick={() => setthird("<")}
                >
                  {third}
                </button>
              ) : (
                <button
                  className="bg-fuchsia-500 rounded-md border-2 border-white px-5 py-1"
                  onClick={() => setthird(">")}
                >
                  {third}
                </button>
              )}{" "}
              -2,4
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={CekJawaban}
              className="bg-purple-600 rounded-md border-2 border-white px-5 py-1 h-[9.5rem]"
            >
              Cek Jawaban
            </button>
            <button
              onClick={resetQuiz}
              className="bg-rose-600 rounded-md border-2 border-white px-5 py-1 h-[9.5rem]"
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
