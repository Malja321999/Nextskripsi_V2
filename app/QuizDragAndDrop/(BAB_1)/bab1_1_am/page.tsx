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

  const [ketMNB1, setketMNB1] = useState(
    ""
  );
  const [ketMNB2, setketMNB2] = useState(
    ""
  );
  const [ketMNB3, setketMNB3] = useState(
    ""
  );
  const [ketMNB4, setketMNB4] = useState(
    ""
  );
  const [ketMNB5, setketMNB5] = useState(
    ""
  );
  const [ketMNB6, setketMNB6] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Negatif!"
  );
  const [ketMNB7, setketMNB7] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Positif!"
  );
  const [ketMNB8, setketMNB8] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Negatif!"
  );
  const [ketMNB9, setketMNB9] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Positif!"
  );
  const [ketMNB10, setketMNB10] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Negatif!"
  );
  const [ketMNB11, setketMNB11] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Positif!"
  );
  const [ketMNB12, setketMNB12] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Negatif!"
  );
  const [ketMNB13, setketMNB13] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Positif!"
  );
  const [ketMNB14, setketMNB14] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Negatif!"
  );
  const [ketMNB15, setketMNB15] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Positif!"
  );
  const [ketMNB16, setketMNB16] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Negatif!"
  );
  const [ketMNB17, setketMNB17] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Positif!"
  );
  const [ketMNB18, setketMNB18] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Negatif!"
  );
  const [ketMNB19, setketMNB19] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Positif!"
  );
  const [ketMNB20, setketMNB20] = useState(
    "Kamu Harus Memilih Jawaban Bilangan Negatif!"
  );

  function CekjawabanMNB() {
    if (MNB1 !== "") {
      if (MNB1 === "2") {
        setketMNB1("Kamu Benar, Bilangan Positif!");
      } else {
        setketMNB1("Kamu Salah, Bilangan Positif!");
      }
    } else if (MNB1 === "") {
      setketMNB1("Kamu Harus Memilih Jawaban Bilangan Positif!");
    }
    if (MNB2 !== "") {
      if (MNB2 === "-2") {
        setketMNB2("Kamu Benar, Bilangan Negatif!");
      } else {
        setketMNB2("Kamu Salah, Bilangan Negatif!");
      }
    } else if (MNB2 === "") {
      setketMNB2("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    }
  }

  function CekjawabanMNB2() {
    if (MNB3 !== "") {
      if (MNB3 === "3") {
        setketMNB3("Kamu Benar, Bilangan Positif!");
      } else {
        setketMNB3("Kamu Salah, Bilangan Positif!");
      }
    } else if (MNB3 === "") {
      setketMNB3("Kamu Harus Memilih Jawaban Bilangan Positif!");
    }
    if (MNB4 !== "") {
      if (MNB4 === "-2") {
        setketMNB4("Kamu Benar, Bilangan Negatif!");
      } else {
        setketMNB4("Kamu Salah, Bilangan Negatif!");
      }
    } else if (MNB4 === "") {
      setketMNB3("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    }
  }

  function CekjawabanMNB3() {
    if (MNB5 !== "") {
      if (MNB5 === "1") {
        setketMNB5("Kamu Benar, Bilangan Positif!");
      } else {
        setketMNB5("Kamu Salah, Bilangan Positif!");
      }
    } else if (MNB5 === "") {
      setketMNB5("Kamu Harus Memilih Jawaban Bilangan Positif!");
    }
    if (MNB6 !== "") {
      if (MNB6 === "-1") {
        setketMNB6("Kamu Benar, Bilangan Negatif!");
      } else {
        setketMNB6("Kamu Salah, Bilangan Negatif!");
      }
    } else if (MNB6 === "") {
      setketMNB6("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    }
    console.log(MNB6, ketMNB6);
  }

  function CekjawabanMNB4() {
    if (MNB7 !== "") {
      if (MNB7 === "1") {
        setketMNB7("Kamu Benar, Bilangan Positif!");
      } else {
        setketMNB7("Kamu Salah, Bilangan Positif!");
      }
    } else if (MNB7 === "") {
      setketMNB7("Kamu Harus Memilih Jawaban Bilangan Positif!");
    }
    if (MNB8 !== "") {
      if (MNB8 === "-2") {
        setketMNB8("Kamu Benar, Bilangan Negatif!");
      } else {
        setketMNB8("Kamu Salah, Bilangan Negatif!");
      }
    } else if (MNB8 === "") {
      setketMNB8("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    }
  }

  function CekjawabanMNB5() {
    if (MNB9 !== "") {
      if (MNB9 === "3") {
        setketMNB9("Kamu Benar, Bilangan Positif!");
      } else {
        setketMNB9("Kamu Salah, Bilangan Positif!");
      }
    } else if (MNB9 === "") {
      setketMNB9("Kamu Harus Memilih Jawaban Bilangan Positif!");
    }
    if (MNB10 !== "") {
      if (MNB10 === "-3") {
        setketMNB10("Kamu Benar, Bilangan Negatif!");
      } else {
        setketMNB10("Kamu Salah, Bilangan Negatif!");
      }
    } else if (MNB10 === "") {
      setketMNB10("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    }
  }

  function CekjawabanMNB6() {
    if (MNB11 !== "") {
      if (MNB11 === "5") {
        setketMNB11("Kamu Benar, Bilangan Positif!");
      } else {
        setketMNB11("Kamu Salah, Bilangan Positif!");
      }
    } else if (MNB11 === "") {
      setketMNB11("Kamu Harus Memilih Jawaban Bilangan Positif!");
    }
    if (MNB12 !== "") {
      if (MNB12 === "-5") {
        setketMNB12("Kamu Benar, Bilangan Negatif!");
      } else {
        setketMNB12("Kamu Salah, Bilangan Negatif!");
      }
    } else if (MNB12 === "") {
      setketMNB12("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    }
  }

  function CekjawabanMNB7() {
    if (MNB13 !== "") {
      if (MNB13 === "2") {
        setketMNB13("Kamu Benar, Bilangan Positif!");
      } else {
        setketMNB13("Kamu Salah, Bilangan Positif!");
      }
    } else if (MNB13 === "") {
      setketMNB13("Kamu Harus Memilih Jawaban Bilangan Positif!");
    }
    if (MNB14 !== "") {
      if (MNB14 === "-1") {
        setketMNB14("Kamu Benar, Bilangan Negatif!");
      } else {
        setketMNB14("Kamu Salah, Bilangan Negatif!");
      }
    } else if (MNB14 === "") {
      setketMNB14("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    }
  }

  function CekjawabanMNB8() {
    if (MNB15 !== "") {
      if (MNB15 === "1") {
        setketMNB15("Kamu Benar, Bilangan Positif!");
      } else {
        setketMNB15("Kamu Salah, Bilangan Positif!");
      }
    } else if (MNB15 === "") {
      setketMNB15("Kamu Harus Memilih Jawaban Bilangan Positif!");
    }
    if (MNB16 !== "") {
      if (MNB16 === "-6") {
        setketMNB16("Kamu Benar, Bilangan Negatif!");
      } else {
        setketMNB16("Kamu Salah, Bilangan Negatif!");
      }
    } else if (MNB16 === "") {
      setketMNB16("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    }
  }

  function CekjawabanMNB9() {
    if (MNB17 !== "") {
      if (MNB17 === "5") {
        setketMNB17("Kamu Benar, Bilangan Positif!");
      } else {
        setketMNB17("Kamu Salah, Bilangan Positif!");
      }
    } else if (MNB17 === "") {
      setketMNB17("Kamu Harus Memilih Jawaban Bilangan Positif!");
    }
    if (MNB18 !== "") {
      if (MNB18 === "-3") {
        setketMNB18("Kamu Benar, Bilangan Negatif!");
      } else {
        setketMNB18("Kamu Salah, Bilangan Negatif!");
      }
    } else if (MNB18 === "") {
      setketMNB18("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    }
  }

  function CekjawabanMNB10() {
    if (MNB19 !== "") {
      if (MNB19 === "4") {
        setketMNB19("Kamu Benar, Bilangan Positif!");
      } else {
        setketMNB19("Kamu Salah, Bilangan Positif!");
      }
    } else if (MNB19 === "") {
      setketMNB19("Kamu Harus Memilih Jawaban Bilangan Positif!");
    }
    if (MNB20 !== "") {
      if (MNB20 === "-5") {
        setketMNB20("Kamu Benar, Bilangan Negatif!");
      } else {
        setketMNB20("Kamu Salah, Bilangan Negatif!");
      }
    } else if (MNB20 === "") {
      setketMNB20("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    }
  }

  async function SemuaCekJawaban() {
    await CekjawabanMNB();
    await CekjawabanMNB2();
    await CekjawabanMNB3();
    await CekjawabanMNB4();
    await CekjawabanMNB5();
    await CekjawabanMNB6();
    await CekjawabanMNB7();
    await CekjawabanMNB8();
    await CekjawabanMNB9();
    await CekjawabanMNB10();
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
    setMNB11("");
    setMNB12("");
    setMNB13("");
    setMNB14("");
    setMNB15("");
    setMNB16("");
    setMNB17("");
    setMNB18("");
    setMNB19("");
    setMNB20("");

    setketMNB1("Kamu Harus Memilih Jawaban Bilangan Positif!");
    setketMNB2("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    setketMNB3("Kamu Harus Memilih Jawaban Bilangan Positif!");
    setketMNB4("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    setketMNB5("Kamu Harus Memilih Jawaban Bilangan Positif!");
    setketMNB6("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    setketMNB7("Kamu Harus Memilih Jawaban Bilangan Positif!");
    setketMNB8("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    setketMNB9("Kamu Harus Memilih Jawaban Bilangan Positif!");
    setketMNB10("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    setketMNB11("Kamu Harus Memilih Jawaban Bilangan Positif!");
    setketMNB12("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    setketMNB13("Kamu Harus Memilih Jawaban Bilangan Positif!");
    setketMNB14("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    setketMNB15("Kamu Harus Memilih Jawaban Bilangan Positif!");
    setketMNB16("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    setketMNB17("Kamu Harus Memilih Jawaban Bilangan Positif!");
    setketMNB18("Kamu Harus Memilih Jawaban Bilangan Negatif!");
    setketMNB19("Kamu Harus Memilih Jawaban Bilangan Positif!");
    setketMNB20("Kamu Harus Memilih Jawaban Bilangan Negatif!");
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
                Bilangan Positif
              </th>
              <th className="border border-slate-600 text-center p-3 px-20">
                Bilangan Negatif
              </th>
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
              <td className="border border-slate-600 p-3 px-5 text-center">
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
              </td>
              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${
                    ketMNB1 === "Kamu Benar, Bilangan Positif!" &&
                    "text-green-500"
                  } ${
                    ketMNB1 === "Kamu Salah, Bilangan Positif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB1}
                </div>
                <div
                  className={`${
                    ketMNB2 === "Kamu Benar, Bilangan Negatif!" &&
                    "text-green-500"
                  } ${
                    ketMNB2 === "Kamu Salah, Bilangan Negatif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB2}
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
                  <option value="2">2</option>
                  <option value="-2">-2</option>
                  <option value="0">0</option>
                </select>
              </td>
              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${
                    ketMNB3 === "Kamu Benar, Bilangan Positif!" &&
                    "text-green-500"
                  } ${
                    ketMNB3 === "Kamu Salah, Bilangan Positif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB3}
                </div>
                <div
                  className={`${
                    ketMNB4 === "Kamu Benar, Bilangan Negatif!" &&
                    "text-green-500"
                  } ${
                    ketMNB4 === "Kamu Salah, Bilangan Negatif!" &&
                    "text-red-500"
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
                    src={A3}
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
                  <option value="1">1</option>
                  <option value="-1">-1</option>
                  <option value="0">0</option>
                </select>
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
                  <option value="1">1</option>
                  <option value="-1">-1</option>
                  <option value="0">0</option>
                </select>
              </td>
              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${
                    ketMNB5 === "Kamu Benar, Bilangan Positif!" &&
                    "text-green-500"
                  } ${
                    ketMNB5 === "Kamu Salah, Bilangan Positif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB5}
                </div>
                <div
                  className={`${
                    ketMNB6 === "Kamu Benar, Bilangan Negatif!" &&
                    "text-green-500"
                  } ${
                    ketMNB6 === "Kamu Salah, Bilangan Negatif!" &&
                    "text-red-500"
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
                    src={A4}
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
                  <option value="1">1</option>
                  <option value="-1">-1</option>
                  <option value="0">0</option>
                </select>
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
                  <option value="2">2</option>
                  <option value="-2">-2</option>
                  <option value="0">0</option>
                </select>
              </td>
              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${
                    ketMNB7 === "Kamu Benar, Bilangan Positif!" &&
                    "text-green-500"
                  } ${
                    ketMNB7 === "Kamu Salah, Bilangan Positif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB7}
                </div>
                <div
                  className={`${
                    ketMNB8 === "Kamu Benar, Bilangan Negatif!" &&
                    "text-green-500"
                  } ${
                    ketMNB8 === "Kamu Salah, Bilangan Negatif!" &&
                    "text-red-500"
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
                    src={A5}
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
                  <option value="3">3</option>
                  <option value="-3">-3</option>
                  <option value="0">0</option>
                </select>
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
                  <option value="3">3</option>
                  <option value="-3">-3</option>
                  <option value="0">0</option>
                </select>
              </td>
              <td className={`border border-slate-600 p-3 px-5 text-center`}>
                <div
                  className={`${
                    ketMNB9 === "Kamu Benar, Bilangan Positif!" &&
                    "text-green-500"
                  } ${
                    ketMNB9 === "Kamu Salah, Bilangan Positif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB9}
                </div>
                <div
                  className={`${
                    ketMNB10 === "Kamu Benar, Bilangan Negatif!" &&
                    "text-green-500"
                  } ${
                    ketMNB10 === "Kamu Salah, Bilangan Negatif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB10}
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
                  value={MNB11}
                  onChange={(e) => setMNB11(e.target.value)}
                  id="MNB11"
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
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB12}
                  onChange={(e) => setMNB12(e.target.value)}
                  id="MNB12"
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
                    ketMNB11 === "Kamu Benar, Bilangan Positif!" &&
                    "text-green-500"
                  } ${
                    ketMNB11 === "Kamu Salah, Bilangan Positif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB11}
                </div>
                <div
                  className={`${
                    ketMNB12 === "Kamu Benar, Bilangan Negatif!" &&
                    "text-green-500"
                  } ${
                    ketMNB12 === "Kamu Salah, Bilangan Negatif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB12}
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
                  value={MNB13}
                  onChange={(e) => setMNB13(e.target.value)}
                  id="MNB13"
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
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB14}
                  onChange={(e) => setMNB14(e.target.value)}
                  id="MNB14"
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
                  className={`${
                    ketMNB13 === "Kamu Benar, Bilangan Positif!" &&
                    "text-green-500"
                  } ${
                    ketMNB13 === "Kamu Salah, Bilangan Positif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB13}
                </div>
                <div
                  className={`${
                    ketMNB14 === "Kamu Benar, Bilangan Negatif!" &&
                    "text-green-500"
                  } ${
                    ketMNB14 === "Kamu Salah, Bilangan Negatif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB14}
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
                  value={MNB15}
                  onChange={(e) => setMNB15(e.target.value)}
                  id="MNB15"
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
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB16}
                  onChange={(e) => setMNB16(e.target.value)}
                  id="MNB16"
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
                  className={`${
                    ketMNB15 === "Kamu Benar, Bilangan Positif!" &&
                    "text-green-500"
                  } ${
                    ketMNB15 === "Kamu Salah, Bilangan Positif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB15}
                </div>
                <div
                  className={`${
                    ketMNB16 === "Kamu Benar, Bilangan Negatif!" &&
                    "text-green-500"
                  } ${
                    ketMNB16 === "Kamu Salah, Bilangan Negatif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB16}
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
                  value={MNB17}
                  onChange={(e) => setMNB17(e.target.value)}
                  id="MNB17"
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
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB18}
                  onChange={(e) => setMNB18(e.target.value)}
                  id="MNB18"
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
                  className={`${
                    ketMNB17 === "Kamu Benar, Bilangan Positif!" &&
                    "text-green-500"
                  } ${
                    ketMNB17 === "Kamu Salah, Bilangan Positif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB17}
                </div>
                <div
                  className={`${
                    ketMNB18 === "Kamu Benar, Bilangan Negatif!" &&
                    "text-green-500"
                  } ${
                    ketMNB18 === "Kamu Salah, Bilangan Negatif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB18}
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
                  value={MNB19}
                  onChange={(e) => setMNB19(e.target.value)}
                  id="MNB19"
                  className="text-center bg-teal-400 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="" selected>
                    -Pilih Bilangan Bulat-
                  </option>
                  <option value="4">4</option>
                  <option value="-4">-4</option>
                  <option value="0">0</option>
                </select>
              </td>
              <td className="border border-slate-600 p-3 px-5 text-center">
                <select
                  value={MNB20}
                  onChange={(e) => setMNB20(e.target.value)}
                  id="MNB20"
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
                    ketMNB19 === "Kamu Benar, Bilangan Positif!" &&
                    "text-green-500"
                  } ${
                    ketMNB19 === "Kamu Salah, Bilangan Positif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB19}
                </div>
                <div
                  className={`${
                    ketMNB20 === "Kamu Benar, Bilangan Negatif!" &&
                    "text-green-500"
                  } ${
                    ketMNB20 === "Kamu Salah, Bilangan Negatif!" &&
                    "text-red-500"
                  }`}
                >
                  {ketMNB20}
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
