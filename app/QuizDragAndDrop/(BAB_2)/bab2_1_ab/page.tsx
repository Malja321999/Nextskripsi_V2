"use client";
import { useState } from "react";

export default function Quiz() {
  const [MNB1, setMNB1] = useState("");
  const [MNB2, setMNB2] = useState("");
  const [MNB3, setMNB3] = useState("");
  const [MNB4, setMNB4] = useState("");
  const [MNB5, setMNB5] = useState("");
  const [MNB6, setMNB6] = useState("");
  const [MNB7, setMNB7] = useState("");
  const [MNB8, setMNB8] = useState("");
  const [MNB9, setMNB9] = useState("");
  const [MNB10, setMNB10] = useState("");

  const [ketMNB1, setketMNB1] = useState("");
  const [ketMNB2, setketMNB2] = useState("");
  const [ketMNB3, setketMNB3] = useState("");
  const [ketMNB4, setketMNB4] = useState("");
  const [ketMNB5, setketMNB5] = useState("");
  const [ketMNB6, setketMNB6] = useState("");
  const [ketMNB7, setketMNB7] = useState("");
  const [ketMNB8, setketMNB8] = useState("");
  const [ketMNB9, setketMNB9] = useState("");
  const [ketMNB10, setketMNB10] = useState("");

  function CekjawabanMNB() {
    if (MNB1 !== "") {
      if (MNB1 === "7") {
        setketMNB1("Kamu Benar!");
      } else {
        setketMNB1("Kamu Salah!");
      }
    } else if (MNB1 === "") {
      setketMNB1("Kamu Harus Memilih Jawaban!");
    }
    if (MNB2 !== "") {
      if (MNB2 === "-8") {
        setketMNB2("Kamu Benar!");
      } else {
        setketMNB2("Kamu Salah!");
      }
    } else if (MNB2 === "") {
      setketMNB2("Kamu Harus Memilih Jawaban!");
    }
    if (MNB3 !== "") {
      if (MNB3 === "-2") {
        setketMNB3("Kamu Benar!");
      } else {
        setketMNB3("Kamu Salah!");
      }
    } else if (MNB3 === "") {
      setketMNB3("Kamu Harus Memilih Jawaban!");
    }
    if (MNB4 !== "") {
      if (MNB4 === "-9") {
        setketMNB4("Kamu Benar!");
      } else {
        setketMNB4("Kamu Salah!");
      }
    } else if (MNB4 === "") {
      setketMNB4("Kamu Harus Memilih Jawaban!");
    }
    if (MNB5 !== "") {
      if (MNB5 === "-5") {
        setketMNB5("Kamu Benar!");
      } else {
        setketMNB5("Kamu Salah!");
      }
    } else if (MNB5 === "") {
      setketMNB5("Kamu Harus Memilih Jawaban!");
    }
    if (MNB6 !== "") {
      if (MNB6 === "-4") {
        setketMNB6("Kamu Benar!");
      } else {
        setketMNB6("Kamu Salah!");
      }
    } else if (MNB6 === "") {
      setketMNB6("Kamu Harus Memilih Jawaban!");
    }
    if (MNB7 !== "") {
      if (MNB7 === "-2") {
        setketMNB7("Kamu Benar!");
      } else {
        setketMNB7("Kamu Salah!");
      }
    } else if (MNB7 === "") {
      setketMNB7("Kamu Harus Memilih Jawaban!");
    }
    if (MNB8 !== "") {
      if (MNB8 === "9") {
        setketMNB8("Kamu Benar!");
      } else {
        setketMNB8("Kamu Salah!");
      }
    } else if (MNB8 === "") {
      setketMNB8("Kamu Harus Memilih Jawaban!");
    }
    if (MNB9 !== "") {
      if (MNB9 === "-4") {
        setketMNB9("Kamu Benar!");
      } else {
        setketMNB9("Kamu Salah!");
      }
    } else if (MNB9 === "") {
      setketMNB9("Kamu Harus Memilih Jawaban!");
    }
    if (MNB10 !== "") {
      if (MNB10 === "1") {
        setketMNB10("Kamu Benar!");
      } else {
        setketMNB10("Kamu Salah!");
      }
    } else if (MNB10 === "") {
      setketMNB10("Kamu Harus Memilih Jawaban!");
    }
  }

  function reset() {
    setMNB1("");
    setMNB2("");
    setMNB3("");
    setMNB4("");
    setMNB5("");
    setMNB6("");
    setMNB7("");
    setMNB8("");
    setMNB9("");
    setMNB10("");
    setketMNB1("Kamu Harus Memasukkan Jawaban!");
    setketMNB2("Kamu Harus Memasukkan Jawaban!");
    setketMNB3("Kamu Harus Memasukkan Jawaban!");
    setketMNB4("Kamu Harus Memasukkan Jawaban!");
    setketMNB5("Kamu Harus Memasukkan Jawaban!");
    setketMNB6("Kamu Harus Memasukkan Jawaban!");
    setketMNB7("Kamu Harus Memasukkan Jawaban!");
    setketMNB8("Kamu Harus Memasukkan Jawaban!");
    setketMNB9("Kamu Harus Memasukkan Jawaban!");
    setketMNB10("Kamu Harus Memasukkan Jawaban!");
  }

  console.log(MNB1);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-indigo-300 shadow rounded flex flex-col gap-2">
        <div className="bg-yellow-500 p-4 rounded-md text-black font-bold text-5xl w-fit">
          Contoh :
        </div>
        <table className="text-center w-[80rem] h-[5rem] text-black text-base">
          <thead>
            <tr className="p-5 rounded-md bg-teal-400 h-fit font-black justify-center items-center">
              <th className="border border-slate-600 text-center p-3 px-5">
                Bilangan Bertanda
              </th>
              <th className="border border-slate-600 text-center p-3 px-20">
                Operasi Tambah
              </th>
              <th className="border border-slate-600 text-center p-3 px-20">
                Operasi Kurang
              </th>
            </tr>
          </thead>
          <tbody className="font-bold ">
            <tr className={`border-b bg-gray-100 `}>
              <td className="border border-slate-600 p-3 px-5">
                Hasil bilangan bulat bertanda sama
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                5 + 3 = 8
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                1 {" – "} 4 = -3
              </td>
            </tr>
            <tr className={`border-b  bg-gray-300`}>
              <td className="border border-slate-600 p-3 px-5">
                Hasil bilangan bulat berbeda tanda
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                5 + (-3) = 2
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                2 {" – "} (-3) = 5
              </td>
            </tr>
          </tbody>
        </table>
        <table className="mt-5 w-[80rem] h-[5rem] text-black text-base">
          <thead>
            <tr className="p-5 rounded-md bg-teal-400 h-fit font-black justify-center items-center">
              <th className="border border-slate-600 text-center p-3 px-5">
                Soal
              </th>
              <th className="border border-slate-600 text-center p-3 px-20">
                Jawaban
              </th>
              <th className="border border-slate-600 text-center p-3 px-20">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody className="font-bold ">
            <tr className={`border-b bg-gray-100 `}>
              <td className="text-center border border-slate-600 p-3 px-5">
                3 + 4 = ...
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <input
                  type="text"
                  placeholder="..."
                  value={MNB1}
                  onChange={(e) => setMNB1(e.target.value)}
                  className="text-center border-2 border-teal-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </td>
              <td
                className={`${ketMNB1 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB1 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB1}
              </td>
            </tr>
            <tr className={`border-b bg-gray-300 `}>
              <td className="text-center border border-slate-600 p-3 px-5">
                -2 + (-6) = ...
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <input
                  type="text"
                  placeholder="..."
                  value={MNB2}
                  onChange={(e) => setMNB2(e.target.value)}
                  className="text-center border-2 border-teal-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </td>
              <td
                className={`${ketMNB2 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB2 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB2}
              </td>
            </tr>
            <tr className={`border-b bg-gray-100 `}>
              <td className="text-center border border-slate-600 p-3 px-5">
                -5 + 3 = ...
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <input
                  type="text"
                  placeholder="..."
                  value={MNB3}
                  onChange={(e) => setMNB3(e.target.value)}
                  className="text-center border-2 border-teal-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </td>
              <td
                className={`${ketMNB3 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB3 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB3}
              </td>
            </tr>
            <tr className={`border-b bg-gray-300 `}>
              <td className="text-center border border-slate-600 p-3 px-5">
                (-3) + (-6) = ...
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <input
                  type="text"
                  placeholder="..."
                  value={MNB4}
                  onChange={(e) => setMNB4(e.target.value)}
                  className="text-center border-2 border-teal-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </td>
              <td
                className={`${ketMNB4 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB4 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB4}
              </td>
            </tr>
            <tr className={`border-b bg-gray-100 `}>
              <td className="text-center border border-slate-600 p-3 px-5">
                (-2) + 7 = ...
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <input
                  type="text"
                  placeholder="..."
                  value={MNB5}
                  onChange={(e) => setMNB5(e.target.value)}
                  className="text-center border-2 border-teal-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </td>
              <td
                className={`${ketMNB5 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB5 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB5}
              </td>
            </tr>
            <tr className={`border-b bg-gray-300 `}>
              <td className="text-center border border-slate-600 p-3 px-5">
                (-6) – (-2) = ...
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <input
                  type="text"
                  placeholder="..."
                  value={MNB6}
                  onChange={(e) => setMNB6(e.target.value)}
                  className="text-center border-2 border-teal-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </td>
              <td
                className={`${ketMNB6 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB6 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB6}
              </td>
            </tr>
            <tr className={`border-b bg-gray-100 `}>
              <td className="text-center border border-slate-600 p-3 px-5">
                2 – 4 = ...
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <input
                  type="text"
                  placeholder="..."
                  value={MNB7}
                  onChange={(e) => setMNB7(e.target.value)}
                  className="text-center border-2 border-teal-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </td>
              <td
                className={`${ketMNB7 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB7 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB7}
              </td>
            </tr>
            <tr className={`border-b bg-gray-300 `}>
              <td className="text-center border border-slate-600 p-3 px-5">
                3 – (-6) = ...
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <input
                  type="text"
                  placeholder="..."
                  value={MNB8}
                  onChange={(e) => setMNB8(e.target.value)}
                  className="text-center border-2 border-teal-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </td>
              <td
                className={`${ketMNB8 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB8 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB8}
              </td>
            </tr>
            <tr className={`border-b bg-gray-100 `}>
              <td className="text-center border border-slate-600 p-3 px-5">
                (-1) – 3 = ...
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <input
                  type="text"
                  placeholder="..."
                  value={MNB9}
                  onChange={(e) => setMNB9(e.target.value)}
                  className="text-center border-2 border-teal-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </td>
              <td
                className={`${ketMNB9 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB9 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB9}
              </td>
            </tr>
            <tr className={`border-b bg-gray-300 `}>
              <td className="text-center border border-slate-600 p-3 px-5">
                (-4) – (-5) = ...
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <input
                  type="text"
                  placeholder="..."
                  value={MNB10}
                  onChange={(e) => setMNB10(e.target.value)}
                  className="text-center border-2 border-teal-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </td>
              <td
                className={`${ketMNB10 === "Kamu Benar!" && "text-green-500"} ${
                  ketMNB10 === "Kamu Salah!" && "text-red-500"
                } border border-slate-600 p-3 px-5 text-center`}
              >
                {ketMNB10}
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
