"use client";
import { useState } from "react";
import Image from "next/image";
import A1 from "../../../asset/A1.png";
import A2 from "../../../asset/A2.png";
import A3 from "../../../asset/A3.png";
import A4 from "../../../asset/A4.png";
import A5 from "../../../asset/A5.png";
import A6 from "../../../asset/A6.png";
import A7 from "../../../asset/A7.png";
import A8 from "../../../asset/A8.png";
import A9 from "../../../asset/A9.png";
import A10 from "../../../asset/A10.png";

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
  const [MNB11, setMNB11] = useState("");
  const [MNB12, setMNB12] = useState("");
  const [MNB13, setMNB13] = useState("");
  const [MNB14, setMNB14] = useState("");
  const [MNB15, setMNB15] = useState("");
  const [MNB16, setMNB16] = useState("");
  const [MNB17, setMNB17] = useState("");
  const [MNB18, setMNB18] = useState("");
  const [MNB19, setMNB19] = useState("");
  const [MNB20, setMNB20] = useState("");

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
  const [ketMNB11, setketMNB11] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Bulat!"
  );
  const [ketMNB12, setketMNB12] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Bulat!"
  );
  const [ketMNB13, setketMNB13] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Bulat!"
  );
  const [ketMNB14, setketMNB14] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Bulat!"
  );
  const [ketMNB15, setketMNB15] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Bulat!"
  );
  const [ketMNB16, setketMNB16] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Bulat!"
  );
  const [ketMNB17, setketMNB17] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Bulat!"
  );
  const [ketMNB18, setketMNB18] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Bulat!"
  );
  const [ketMNB19, setketMNB19] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Bulat!"
  );
  const [ketMNB20, setketMNB20] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Bulat!"
  );

  function CekjawabanMNB() {
    if (MNB1 !== "") {
      if (MNB1 === "2") {
        setketMNB1("Kamu Benar");
      } else {
        setketMNB1("Kamu Salah");
      }
    } else if (MNB1 === "") {
      setketMNB1("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    }
    if (MNB2 !== "") {
      if (MNB2 === "-2") {
        setketMNB2("Kamu Benar");
      } else {
        setketMNB2("Kamu Salah");
      }
    } else if (MNB2 === "") {
      setketMNB2("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    }
  }

  function CekjawabanMNB2() {
    if (MNB3 !== "") {
      if (MNB3 === "1") {
        setketMNB3("Kamu Benar");
      } else {
        setketMNB3("Kamu Salah");
      }
    } else if (MNB3 === "") {
      setketMNB3("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    }
    if (MNB4 !== "") {
      if (MNB4 === "-2") {
        setketMNB4("Kamu Benar");
      } else {
        setketMNB4("Kamu Salah");
      }
    } else if (MNB4 === "") {
      setketMNB3("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    }
    console.log(MNB3, ketMNB3);
  }

  function CekjawabanMNB3() {
    if (MNB5 !== "") {
      if (MNB5 === "3") {
        setketMNB5("Kamu Benar");
      } else {
        setketMNB5("Kamu Salah");
      }
    } else if (MNB5 === "") {
      setketMNB5("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    }
    if (MNB6 !== "") {
      if (MNB6 === "-5") {
        setketMNB6("Kamu Benar");
      } else {
        setketMNB6("Kamu Salah");
      }
    } else if (MNB6 === "") {
      setketMNB6("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    }
    console.log(MNB6, ketMNB6);
  }

  function CekjawabanMNB4() {
    if (MNB7 !== "") {
      if (MNB7 === "2") {
        setketMNB7("Kamu Benar");
      } else {
        setketMNB7("Kamu Salah");
      }
    } else if (MNB7 === "") {
      setketMNB7("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    }
    if (MNB8 !== "") {
      if (MNB8 === "-6") {
        setketMNB8("Kamu Benar");
      } else {
        setketMNB8("Kamu Salah");
      }
    } else if (MNB8 === "") {
      setketMNB8("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    }
  }

  function CekjawabanMNB5() {
    if (MNB9 !== "") {
      if (MNB9 === "5") {
        setketMNB9("Kamu Benar");
      } else {
        setketMNB9("Kamu Salah");
      }
    } else if (MNB9 === "") {
      setketMNB9("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    }
    if (MNB10 !== "") {
      if (MNB10 === "-5") {
        setketMNB10("Kamu Benar");
      } else {
        setketMNB10("Kamu Salah");
      }
    } else if (MNB10 === "") {
      setketMNB10("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    }
  }

  async function SemuaCekJawaban() {
    await CekjawabanMNB();
    await CekjawabanMNB2();
    await CekjawabanMNB3();
    await CekjawabanMNB4();
    await CekjawabanMNB5();
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

    setketMNB1("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    setketMNB2("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    setketMNB3("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    setketMNB4("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    setketMNB5("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    setketMNB6("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    setketMNB7("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    setketMNB8("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    setketMNB9("Kamu Harus Memilih Jawaban Bilangan Bulat!");
    setketMNB10("Kamu Harus Memilih Jawaban Bilangan Bulat!");
  }

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
                    src={A1}
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
                  <option value="2">2</option>
                  <option value="-2">-2</option>
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
                  <option value="2">2</option>
                  <option value="-2">-2</option>
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
              </td>
            </tr>
            <tr className={`border-b  bg-gray-300`}>
              <td className="flex justify-center border border-slate-600 p-3 px-5">
                <div>
                  <Image
                    className="rounded-md border-2 border-black p-1"
                    src={A2}
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
              </td>
            </tr>
            <tr className={`border-b bg-gray-100`}>
              <td className="flex justify-center border border-slate-600 p-3 px-5">
                <div>
                  <Image
                    className="rounded-md border-2 border-black p-1"
                    src={A3}
                    alt="I3"
                  />
                </div>
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB3}
                  onChange={(e) => setMNB3(e.target.value)}
                  id="MNB3"
                  className="text-center bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="1">1</option>
                  <option value="-1">-1</option>
                  <option value="0">0</option>
                </select>
              </td>

              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${ketMNB3 === "Kamu Benar" && "text-green-500"} ${
                    ketMNB3 === "Kamu Salah" && "text-red-500"
                  }`}
                >
                  {ketMNB3}
                </div>
              </td>
            </tr>
            <tr className={`border-b bg-gray-100`}>
              <td className="flex justify-center border border-slate-600 p-3 px-5">
                <div>
                  <Image
                    className="rounded-md border-2 border-black p-1"
                    src={A4}
                    alt="I3"
                  />
                </div>
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB4}
                  onChange={(e) => setMNB4(e.target.value)}
                  id="MNB4"
                  className="text-center bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="2">2</option>
                  <option value="-2">-2</option>
                  <option value="0">0</option>
                </select>
              </td>

              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${ketMNB4 === "Kamu Benar" && "text-green-500"} ${
                    ketMNB4 === "Kamu Salah" && "text-red-500"
                  }`}
                >
                  {ketMNB4}
                </div>
              </td>
            </tr>
            <tr className={`border-b bg-gray-100`}>
              <td className="flex justify-center border border-slate-600 p-3 px-5">
                <div>
                  <Image
                    className="rounded-md border-2 border-black p-1"
                    src={A5}
                    alt="I3"
                  />
                </div>
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB5}
                  onChange={(e) => setMNB5(e.target.value)}
                  id="MNB5"
                  className="text-center bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="3">3</option>
                  <option value="-3">-3</option>
                  <option value="0">0</option>
                </select>
              </td>

              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${ketMNB5 === "Kamu Benar" && "text-green-500"} ${
                    ketMNB5 === "Kamu Salah" && "text-red-500"
                  }`}
                >
                  {ketMNB5}
                </div>
              </td>
            </tr>
            <tr className={`border-b bg-gray-100`}>
              <td className="flex justify-center border border-slate-600 p-3 px-5">
                <div>
                  <Image
                    className="rounded-md border-2 border-black p-1"
                    src={A6}
                    alt="I3"
                  />
                </div>
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB6}
                  onChange={(e) => setMNB6(e.target.value)}
                  id="MNB6"
                  className="text-center bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="5">5</option>
                  <option value="-5">-5</option>
                  <option value="0">0</option>
                </select>
              </td>

              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${ketMNB6 === "Kamu Benar" && "text-green-500"} ${
                    ketMNB6 === "Kamu Salah" && "text-red-500"
                  }`}
                >
                  {ketMNB6}
                </div>
              </td>
            </tr>
            <tr className={`border-b bg-gray-100`}>
              <td className="flex justify-center border border-slate-600 p-3 px-5">
                <div>
                  <Image
                    className="rounded-md border-2 border-black p-1"
                    src={A7}
                    alt="I3"
                  />
                </div>
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB7}
                  onChange={(e) => setMNB7(e.target.value)}
                  id="MNB7"
                  className="text-center bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="2">2</option>
                  <option value="-2">-2</option>
                  <option value="0">0</option>
                </select>
              </td>

              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${ketMNB7 === "Kamu Benar" && "text-green-500"} ${
                    ketMNB7 === "Kamu Salah" && "text-red-500"
                  }`}
                >
                  {ketMNB7}
                </div>
              </td>
            </tr>
            <tr className={`border-b bg-gray-100`}>
              <td className="flex justify-center border border-slate-600 p-3 px-5">
                <div>
                  <Image
                    className="rounded-md border-2 border-black p-1"
                    src={A8}
                    alt="I3"
                  />
                </div>
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB8}
                  onChange={(e) => setMNB8(e.target.value)}
                  id="MNB8"
                  className="text-center bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="6">6</option>
                  <option value="-6">-6</option>
                  <option value="0">0</option>
                </select>
              </td>

              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${ketMNB8 === "Kamu Benar" && "text-green-500"} ${
                    ketMNB8 === "Kamu Salah" && "text-red-500"
                  }`}
                >
                  {ketMNB8}
                </div>
              </td>
            </tr>
            <tr className={`border-b bg-gray-100`}>
              <td className="flex justify-center border border-slate-600 p-3 px-5">
                <div>
                  <Image
                    className="rounded-md border-2 border-black p-1"
                    src={A9}
                    alt="I3"
                  />
                </div>
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB9}
                  onChange={(e) => setMNB9(e.target.value)}
                  id="MNB9"
                  className="text-center bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="5">5</option>
                  <option value="-5">-5</option>
                  <option value="0">0</option>
                </select>
              </td>
              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${ketMNB9 === "Kamu Benar" && "text-green-500"} ${
                    ketMNB9 === "Kamu Salah" && "text-red-500"
                  }`}
                >
                  {ketMNB9}
                </div>
              </td>
            </tr>
            <tr className={`border-b bg-gray-100`}>
              <td className="flex justify-center border border-slate-600 p-3 px-5">
                <div>
                  <Image
                    className="rounded-md border-2 border-black p-1"
                    src={A10}
                    alt="I3"
                  />
                </div>
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB10}
                  onChange={(e) => setMNB10(e.target.value)}
                  id="MNB10"
                  className="text-center bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="5">5</option>
                  <option value="-5">-5</option>
                  <option value="0">0</option>
                </select>
              </td>

              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${
                    ketMNB10 === "Kamu Benar" && "text-green-500"
                  } ${ketMNB10 === "Kamu Salah" && "text-red-500"}`}
                >
                  {ketMNB10}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-row gap-2 w-full justify-center items-center">
          <button
            className="bg-violet-600 hover:bg-violet-500 text-center p-5  rounded-lg"
            onClick={SemuaCekJawaban}
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
