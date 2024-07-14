"use client";
import { useState } from "react";
import { emitKeypressEvents } from "readline";

export default function Quiz() {
  const [MNB1, setMNB1] = useState("");
  const [MNB2, setMNB2] = useState("");
  const [MNB3, setMNB3] = useState("");
  const [MNB4, setMNB4] = useState("");
  const [MNB5, setMNB5] = useState("");

  const [ketMNB1, setketMNB1] = useState("");
  const [ketMNB2, setketMNB2] = useState("");
  const [ketMNB3, setketMNB3] = useState("");
  const [ketMNB4, setketMNB4] = useState("");
  const [ketMNB5, setketMNB5] = useState("");

  function CekjawabanMNB() {
    if (MNB1 !== "") {
      if (MNB1 === "6") {
        setketMNB1("Kamu Benar!");
      } else {
        setketMNB1("Kamu Salah!");
      }
    } else if (MNB1 === "") {
      setketMNB1("Kamu Harus Memilih Jawaban!");
    }
    if (MNB2 !== "") {
      if (MNB2 === "-10") {
        setketMNB2("Kamu Benar!");
      } else {
        setketMNB2("Kamu Salah!");
      }
    } else if (MNB2 === "") {
      setketMNB2("Kamu Harus Memilih Jawaban!");
    }
    if (MNB3 !== "") {
      if (MNB3 === "-600") {
        setketMNB3("Kamu Benar!");
      } else {
        setketMNB3("Kamu Salah!");
      }
    } else if (MNB3 === "") {
      setketMNB3("Kamu Harus Memilih Jawaban!");
    }
    if (MNB4 !== "") {
      if (MNB4 === "+30") {
        setketMNB4("Kamu Benar!");
      } else {
        setketMNB4("Kamu Salah!");
      }
    } else if (MNB4 === "") {
      setketMNB4("Kamu Harus Memilih Jawaban!");
    }
    if (MNB5 !== "") {
      if (MNB5 === "-4") {
        setketMNB5("Kamu Benar!");
      } else {
        setketMNB5("Kamu Salah!");
      }
    } else if (MNB5 === "") {
      setketMNB5("Kamu Harus Memilih Jawaban!");
    }
  }

  function reset() {
    setMNB1("");
    setMNB2("");
    setMNB3("");
    setMNB4("");
    setMNB5("");
    setketMNB1("");
    setketMNB2("");
    setketMNB3("");
    setketMNB4("");
    setketMNB5("");
  }

  console.log(MNB5);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-indigo-300 shadow rounded flex flex-col gap-2">
        <table className="w-[80rem] h-[5rem] text-black text-base">
          <thead>
            <tr className="p-5 rounded-md bg-teal-400 h-fit font-black justify-center items-center">
              <th className="border border-slate-600 text-center p-3 px-5">
                Besaran
              </th>
              <th className="border border-slate-600 text-center p-3 px-20">
                Besaran Bilangan Bulat
              </th>
              <th className="border border-slate-600 text-center p-3 px-20">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody className="font-bold ">
            <tr className={`border-b bg-gray-100 `}>
              <td className="border border-slate-600 p-3 px-5">
                "Suhu 6°C lebih tinggi dibandingkan 0°C"
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
                  <option value="6">6</option>
                  <option value="-6">-6</option>
                  <option value="0">0</option>
                </select>
              </td>
              <td
                className={`${ketMNB1 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB1 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB1}
              </td>
            </tr>
            <tr className={`border-b  bg-gray-300`}>
              <td className="border border-slate-600 p-3 px-5">
                "Suhu 10°C lebih rendah dibandingkan 0°C"
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
                  <option value="10">10</option>
                  <option value="-10">-10</option>
                  <option value="0">0</option>
                </select>
              </td>
              <td
                className={`${ketMNB2 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB2 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB2}
              </td>
            </tr>
            <tr className={`border-b bg-gray-100`}>
              <td className="border border-slate-600 p-3 px-5">
                "Rugi 600 rupiah”, jika ”untung 500 rupiah” dinyatakan sebagai
                +500 rupiah
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
                  <option value="+600">+600</option>
                  <option value="-600">-600</option>
                  <option value="0">0</option>
                </select>
              </td>
              <td
                className={`${ketMNB3 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB3 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB3}
              </td>
            </tr>
            <tr className={`border-b bg-gray-300`}>
              <td className="border border-slate-600 p-3 px-5">
                "30 menit dari sekarang”, jika ”20 menit yang lalu” dinyatakan
                sebagai -20 menit.
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB4}
                  onChange={(e) => setMNB4(e.target.value)}
                  id="MNB4"
                  className="text-center  bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="+30">+30</option>
                  <option value="-30">-30</option>
                  <option value="0">0</option>
                </select>
              </td>
              <td
                className={`${ketMNB4 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB4 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB4}
              </td>
            </tr>
            <tr className={`border-b bg-gray-100`}>
              <td className="border border-slate-600 p-3 px-5">
                ”4°C lebih rendah dibandingkan suhu tertinggi kemarin”
                berdasarkan suhu tertinggi hari ini, jika 3°C lebih tinggi
                dibandingkan suhu tertinggi kemarin” dinyatakan sebagai +3°C.
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB5}
                  onChange={(e) => setMNB5(e.target.value)}
                  id="MNB5"
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
              <td
                className={`${ketMNB5 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB5 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB5}
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
          <button
            className="bg-rose-600 hover:bg-rose-500 text-center p-5  rounded-lg"
            onClick={reset}
          >
            Coba Lagi
          </button>
        </div>
      </div>
    </div>
  );
}
