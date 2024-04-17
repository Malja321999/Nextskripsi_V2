"use client";
import React from "react";
import { useState } from "react";

const Page = () => {
  const [N, setN] = useState(1);
  return (
    <div className="text-black flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow rounded ">
        <div className="p-4 bg-indigo-200 rounded">
          <div className="border-dotted border-2 border-blue-600 rounded-md font-bold p-5">
            <ul className="list list-disc list-inside">
              <h1 className="text-4xl">Petunjuk pengerjaan</h1>
              <li>Pilihlah jawaban dibawah ini dengan tepat</li>
              <li>
                Jika jawaban kamu benar, maka akan muncul tulisan jawaban benar
              </li>
              <li>
                Jika jawaban kamu salah, maka akan muncul tulisan jawaban salah
                disertai pembahasan
              </li>
            </ul>
          </div>
          <div>
            <div className="text-3xl font-bold mt-5">{N} dari 4</div>
            <div className="mt-2">
              {N === 1 && (
                <div>
                  <h1 className="p-6 text-3xl">
                    Apakah kumpulan bilangan dibawah ini adalah bilangan cacah?
                  </h1>
                  <h2 className="p-4 text-3xl flex justify-center items-center text-center">
                    -34, 324, 23, -45
                  </h2>
                  <form className="ml-5 flex flex-col gap-2 text-2xl">
                    <div className="flex gap-2 text-center items-center">
                      <input type="radio" name="a" className="h-5 w-5" />
                      <label htmlFor="a">Bilangan Cacah</label>
                    </div>
                    <div className="flex gap-2 text-center items-center">
                      <input type="radio" name="a" className="h-5 w-5" />
                      <label htmlFor="a">Bukan Bilangan Cacah</label>
                    </div>
                  </form>
                </div>
              )}
            </div>
            <div className="mt-7 ml-4 flex flex-row gap-60 font-normal text-white">
              <button
                onClick={() => {
                  if (N !== 1) {
                    setN(N - 1);
                  }
                }}
                className={`${
                  N === 1 ? "bg-[#423d49]" : "bg-indigo-500"
                } p-5 rounded-md`}
              >
                Sebelumnya
              </button>
              <button className="p-5 rounded-md bg-indigo-500">
                Cek Jawaban
              </button>
              <button
                onClick={() => {
                  if (N !== 4) {
                    setN(N + 1);
                  }
                }}
                className={`${
                  N === 4 ? "bg-[#423d49]" : "bg-indigo-500"
                } p-5 rounded-md`}
              >
                Selanjutnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
