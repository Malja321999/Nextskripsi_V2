"use client";
import { useState } from "react";
import Image from "next/image";
import I1 from "../../../asset/I1.png";
import I2 from "../../../asset/I2.png";
import I3 from "../../../asset/I3.png";

export default function Quiz() {
  const [MNB1, setMNB1] = useState("");
  const [MNB2, setMNB2] = useState("");
  const [MNB3, setMNB3] = useState("");
  const [MNB4, setMNB4] = useState("");
  const [MNB5, setMNB5] = useState("");
  const [MNB6, setMNB6] = useState("");

  const [ketMNB1, setketMNB1] = useState("");
  const [ketMNB2, setketMNB2] = useState("");
  const [ketMNB3, setketMNB3] = useState("");
  const [ketMNB4, setketMNB4] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Negatif!"
  );
  const [ketMNB5, setketMNB5] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Positif!"
  );
  const [ketMNB6, setketMNB6] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Negatif!"
  );

  function CekjawabanMNB() {
    if (MNB1 !== "") {
      if (MNB1 === "4") {
        setketMNB1("Kamu Benar");
      } else {
        setketMNB1("Kamu Salah");
      }
    } else if (MNB1 === "") {
      setketMNB1("Kamu Harus Memilih Jawaban Bilangan Positif!");
    }
    if (MNB2 !== "") {
      if (MNB2 === "-2") {
        setketMNB2("Kamu Benar");
      } else {
        setketMNB2("Kamu Salah");
      }
    } else if (MNB2 === "") {
      setketMNB2("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    }
    if (MNB3 !== "") {
      if (MNB3 === "-3") {
        setketMNB3("Kamu Benar");
      } else {
        setketMNB3("Kamu Salah");
      }
    } else if (MNB3 === "") {
      setketMNB3("K");
    }
    console.log(MNB3, ketMNB3);
  }

  function reset() {
    setMNB1("");
    setMNB2("");
    setMNB3("");
    setMNB4("");
    setMNB5("");
    setMNB6("");
    setketMNB1("Kamu Harus Memilih Jawaban Bilangan Positif!");
    setketMNB2("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    setketMNB3("Kamu Harus Memilih Jawaban Bilangan Positif!");
    setketMNB4("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    setketMNB5("Kamu Harus Memilih Jawaban Bilangan Positif!");
    setketMNB6("Kamu Harus Memilih Jawaban Bilangan Negatif!");
  }

  console.log(MNB5);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-indigo-300 shadow rounded flex flex-col gap-2">
        <table className="w-[80rem] h-[5rem] text-black text-base">
          <thead>
            <tr className="p-5 rounded-md bg-teal-400 h-fit font-black justify-center items-center">
              <th className="border border-slate-600 text-center p-3 px-5">
                Benda
              </th>
              <th className="border border-slate-600 text-center p-3 px-20">
                Bilangan Bulat
              </th>
              {/* <th className="border border-slate-600 text-center p-3 px-20">
                Bilangan Negatif
              </th> */}
              <th className="border border-slate-600 text-center p-3 px-20">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody className="font-bold ">
            <tr className={`border-b bg-gray-100 `}>
              <td className="flex justify-center border border-slate-600 p-3 px-5">
                <div>
                  <Image
                    className="rounded-md border-2 border-black p-1"
                    src={I1}
                    alt="I1"
                  />
                </div>
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB1}
                  onChange={(e) => setMNB1(e.target.value)}
                  id="MNB1"
                  className="text-center  bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="4">4</option>
                  <option value="-4">-4</option>
                  <option value="0">0</option>
                </select>
              </td>
              {/* <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB2}
                  onChange={(e) => setMNB2(e.target.value)}
                  id="MNB1"
                  className="text-center  bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="3">3</option>
                  <option value="-3">-3</option>
                  <option value="0">0</option>
                </select>
              </td> */}
              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${ketMNB1 === "Kamu Benar" && "text-green-500"} ${
                    ketMNB1 === "Kamu Salah" && "text-red-500"
                  }`}
                >
                  {ketMNB1}
                </div>
                {/* <div
                  className={`${
                    ketMNB2 === "Kamu Benar, Bilangan Negatif!" &&
                    "text-green-500"
                  } ${
                    ketMNB2 === "Kamu Salah, Bilangan Negatif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB2}
                </div> */}
              </td>
            </tr>
            <tr className={`border-b  bg-gray-300`}>
              <td className="flex justify-center border border-slate-600 p-3 px-5">
                <div>
                  <Image
                    className="rounded-md border-2 border-black p-1"
                    src={I2}
                    alt="I2"
                  />
                </div>
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB2}
                  onChange={(e) => setMNB2(e.target.value)}
                  id="MNB2"
                  className="text-center  bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="2">2</option>
                  <option value="-2">-2</option>
                  <option value="0">0</option>
                </select>
              </td>
              {/*  <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB4}
                  onChange={(e) => setMNB4(e.target.value)}
                  id="MNB4"
                  className="text-center  bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="2">2</option>
                  <option value="-2">-2</option>
                  <option value="0">0</option>
                </select>
              </td> */}
              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${ketMNB2 === "Kamu Benar" && "text-green-500"} ${
                    ketMNB2 === "Kamu Salah" && "text-red-500"
                  }`}
                >
                  {ketMNB2}
                </div>
                {/*   <div
                  className={`${
                    ketMNB4 === "Kamu Benar, Bilangan Negatif!" &&
                    "text-green-500"
                  } ${
                    ketMNB4 === "Kamu Salah, Bilangan Negatif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB4}
                </div> */}
              </td>
            </tr>
            <tr className={`border-b bg-gray-100`}>
              <td className="flex justify-center border border-slate-600 p-3 px-5">
                <div>
                  <Image
                    className="rounded-md border-2 border-black p-1"
                    src={I3}
                    alt="I3"
                  />
                </div>
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB3}
                  onChange={(e) => setMNB3(e.target.value)}
                  id="MNB3"
                  className="text-center  bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="3">3</option>
                  <option value="-3">-3</option>
                  <option value="0">0</option>
                </select>
              </td>
              {/*  <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB6}
                  onChange={(e) => setMNB6(e.target.value)}
                  id="MNB6"
                  className="text-center bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="3">3</option>
                  <option value="-3">-3</option>
                  <option value="0">0</option>
                </select>
              </td> */}
              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${ketMNB3 === "Kamu Benar" && "text-green-500"} ${
                    ketMNB3 === "Kamu Salah" && "text-red-500"
                  }`}
                >
                  {ketMNB3}
                </div>
                {/*    <div
                  className={`${
                    ketMNB6 === "Kamu Benar, Bilangan Negatif!" &&
                    "text-green-500"
                  } ${
                    ketMNB6 === "Kamu Salah, Bilangan Negatif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB6}
                </div> */}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-row gap-2 w-full justify-center items-center">
          <button
            className="bg-violet-600 hover:bg-violet-500 text-center p-5  rounded-lg"
            onClick={CekjawabanMNB}
          >
            Cek Jawaban
          </button>
          {ketMNB1 === "Kamu Salah" ||
            ketMNB2 === "Kamu Salah" ||
            (ketMNB3 === "Kamu Salah" && (
              <button
                className="bg-rose-600 hover:bg-rose-500 text-center p-5  rounded-lg"
                onClick={reset}
              >
                Coba Lagi
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
