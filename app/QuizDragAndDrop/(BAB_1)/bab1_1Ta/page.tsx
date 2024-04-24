"use client";
import React from "react";
import { useState } from "react";
import { DragEvent } from "react";

const Page = () => {
  const [N, setN] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");

  const correctAnswer = "Bukan Bilangan Cacah"; // Ganti dengan jawaban yang benar
  const [jawabanbenar, setjawabanbenar] = useState("");

  const checkAnswer = () => {
    if (selectedOption === "") {
      setjawabanbenar("");
      alert("Jawaban kosong! Pilih jawaban terlebih dahulu");
    } else if (selectedOption !== "") {
      if (selectedOption === correctAnswer) {
        setjawabanbenar("benar");
      } else {
        setjawabanbenar("salah");
        alert("Jawaban Salah!");
        alert(
          "Penjelasan : bilangan diatas bukan bilangan cacah melainkan bilangan bulat karena diantara bilangan diatas ada bilangan negatif sedangkan bilangan cacah tidak memuat bilangan negatif."
        );
      }
    }
  };

  /* soal 2 */
  const [JawabanSoal2, setJawabanSoal2] = useState("");

  const [Soal2Benar, setSoal2Benar] = useState("");
  const correctAnswersoal2 = "<";

  const checkAnswerSoal2 = () => {
    if (JawabanSoal2 === "") {
      setSoal2Benar("");
      alert("Jawaban Kosong! Isi Jawaban Terlebih Dahulu");
    } else if (JawabanSoal2 !== "") {
      if (JawabanSoal2 === correctAnswersoal2) {
        setSoal2Benar("benar");
        alert("Jawaban Benar");
      } else {
        setSoal2Benar("salah");
        alert("Jawaban Salah");
        alert(
          "Penjelasan : -1 lebih kecil dibandingkan 10 maka seharusnya jawaban yang benar adalah 1 < 10."
        );
      }
    }
  };

  /* soal 3 */
  const [JawabanSoal3, setJawabanSoal3] = useState("");

  const [Soal3Benar, setSoal3Benar] = useState("");
  const correctAnswersoal3 = "M > N";

  const checkAnswerSoal3 = () => {
    if (JawabanSoal3 === "") {
      setSoal3Benar("");
      alert("Jawaban Kosong! Isi Jawaban Terlebih Dahulu");
    } else if (JawabanSoal3 !== "") {
      if (JawabanSoal3 === correctAnswersoal3) {
        setSoal3Benar("benar");
        alert("Jawaban Benar");
      } else {
        setSoal3Benar("salah");
        alert("Jawaban Salah");
        alert(
          "Penjelasan : kita misalkan bahwa huruf diatas menjadi angka sembarang maka: M = 123456 N = 8123 maka bisa kita lihat 123456 lebih besar dari 8123 maka bisa kita tulis 123456 > 8123 artinya M > N."
        );
      }
    }
  };

  /* soal 4 */
  const [numbers, setNumbers] = useState(["43", "-7", "-31", "5", "8"]);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [Soal4Benar, setSoal4Benar] = useState("");

  const onDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const onDragStart = (event: DragEvent, number: string) => {
    setDraggedItem(number);
  };

  const onDrop = (event: DragEvent, droppedOnNumber: string) => {
    event.preventDefault();
    setNumbers((prevNumbers) => {
      const newNumbers = [...prevNumbers];
      const draggedIndex = draggedItem ? newNumbers.indexOf(draggedItem) : -1;
      const droppedIndex = newNumbers.indexOf(droppedOnNumber);
      if (draggedIndex !== -1) {
        newNumbers[draggedIndex] = droppedOnNumber;
        if (draggedItem !== null) {
          newNumbers[droppedIndex] = draggedItem;
        }
      }
      return newNumbers;
    });
  };
  const checkAnswerSoal4 = () => {
    if (numbers.join("") === "-31-75843") {
      setSoal4Benar("benar");
      alert("Jawaban Anda benar!");
    } else {
      setSoal4Benar("salah");
      alert("Jawaban Salah");
      alert(
        "Penjelasan : Urutan bilangan yang benar adalah -31 < -7 < 5 < 8 < 43"
      );
    }
  };

  const resetQuiz = () => {
    setNumbers(["5", "4", "3", "2", "1"]);
  };

  return (
    <div className="text-base text-black flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow rounded">
        <div className="p-4 bg-indigo-200 rounded">
          <div className="border-dotted border-2 border-blue-600 rounded-md p-5">
            <ul className="list list-disc list-inside">
              <h1 className="font-bold">Petunjuk pengerjaan :</h1>
              <div>
                <li>Jawablah pertanyaan dibawah ini dengan tepat</li>
                <li>
                  Jika jawaban kamu benar, maka akan muncul tulisan jawaban
                  benar
                </li>
                <li>
                  Jika jawaban kamu salah, maka akan muncul tulisan jawaban
                  salah disertai pembahasan
                </li>
              </div>
            </ul>
          </div>
          <div>
            <div className="font-bold mt-2">{N} dari 4</div>
            {/* soal 1 */}
            <div className="mt-2">
              {N === 1 && (
                <div>
                  <h1 className="p-2">
                    Apakah kumpulan bilangan dibawah ini adalah bilangan cacah?
                  </h1>
                  <h2 className="p-2 border-2 border-teal-400 bg-white font-bold flex justify-center items-center text-center">
                    -34, 324, 23, -45
                  </h2>
                  <form className="mt-2 ml-5 flex flex-col gap-2">
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="a"
                        value={"Bilangan Cacah"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="a" className="cursor-pointer">
                        Bilangan Cacah
                      </label>
                    </div>
                    <div className="flex gap-2 text-center items-center cursor-pointer">
                      <input
                        type="radio"
                        name="pg"
                        id="b"
                        value={"Bukan Bilangan Cacah"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="b" className="cursor-pointer">
                        Bukan Bilangan Cacah
                      </label>
                    </div>
                  </form>
                  <div className="ml-5 font-bold">
                    {jawabanbenar !== "" && (
                      <div
                        className={`mt-1 ${
                          jawabanbenar === "benar" && "text-green-500"
                        } ${jawabanbenar === "salah" && "text-red-500"}`}
                      >
                        {jawabanbenar === "benar" && "Jawaban Anda benar!"}
                        {jawabanbenar === "salah" && "Jawaban Anda salah!"}
                        {(jawabanbenar === "benar" ||
                          jawabanbenar === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : bilangan diatas bukan bilangan cacah
                            melainkan bilangan bulat karena diantara bilangan
                            diatas ada bilangan negatif sedangkan bilangan cacah
                            tidak memuat bilangan negatif.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* soal 2 */}
            <div className="mt-2">
              {N === 2 && (
                <div>
                  <h1>
                    Isilah titik-titik dibawah ini dengan Simbol-simbol
                    perbandingan bilangan &#40;"&lt;","&gt;"&#41;
                  </h1>
                  <h2 className="text-xl text-center font-bold p-2 border-2 border-teal-400 bg-white flex justify-center items-center">
                    -1
                    <input
                      type="text"
                      placeholder="..."
                      className="w-20 text-center mx-2 rounded-md bg-green-50 border-4 border-sky-400 placeholder-indigo-500  focus:ring-blue-500 focus:border-blue-500"
                      onChange={(event) => setJawabanSoal2(event.target.value)}
                    />
                    10
                  </h2>
                  <div className="ml-5 font-bold">
                    {Soal2Benar !== "" && (
                      <div
                        className={`mt-1 ${
                          Soal2Benar === "benar" && "text-green-500"
                        } ${Soal2Benar === "salah" && "text-red-500"}`}
                      >
                        {Soal2Benar === "benar" && "Jawaban Anda benar!"}
                        {Soal2Benar === "salah" && "Jawaban Anda salah!"}
                        {(Soal2Benar === "benar" || Soal2Benar === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : -1 lebih kecil dibandingkan 10 maka
                            seharusnya jawaban yang benar adalah 1 &lt; 10.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* soal 3 */}
            <div className="mt-2">
              {N === 3 && (
                <div>
                  <h1 className="p-2 w-[30rem]">
                    Perhatikan dua buah bilangan berikut:
                  </h1>
                  <h2 className="p-2 border-2 border-teal-400 bg-white font-bold flex justify-center items-center text-center">
                    M = 1abcde <br /> N = 8abc
                  </h2>
                  <h1 className="p-2">
                    Jika setiap huruf pada bilangan diatas mewakili sebuah
                    angka, maka diantara jawaban di bawah ini yang benar
                    adalah...
                  </h1>
                  <form className="mt-2 ml-5 flex flex-col gap-2">
                    <div className="cursor-pointer flex gap-2 text-center items-center">
                      <input
                        type="radio"
                        name="pg"
                        id="a"
                        value={"M > N"}
                        onChange={(e) => setJawabanSoal3(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="a" className="cursor-pointer">
                        M &gt; N
                      </label>
                    </div>
                    <div className="cursor-pointer flex gap-2 text-center items-center">
                      <input
                        type="radio"
                        name="pg"
                        id="b"
                        value={"M < N"}
                        onChange={(e) => setJawabanSoal3(e.target.value)}
                        className="h-5 w-5 cursor-pointer"
                      />
                      <label htmlFor="b" className="cursor-pointer">
                        M &lt; N
                      </label>
                    </div>
                  </form>
                  <div className="ml-5 font-bold">
                    {Soal3Benar !== "" && (
                      <div
                        className={`mt-1 ${
                          Soal3Benar === "benar" && "text-green-500"
                        } ${Soal3Benar === "salah" && "text-red-500"}`}
                      >
                        {Soal3Benar === "benar" && "Jawaban Anda benar!"}
                        {Soal3Benar === "salah" && "Jawaban Anda salah!"}
                        {(Soal3Benar === "benar" || Soal3Benar === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : kita misalkan bahwa huruf diatas
                            menjadi angka sembarang maka: M = 123456 N = 8123
                            maka bisa kita lihat 123456 lebih besar dari 8123
                            maka bisa kita tulis 123456 &gt; 8123 artinya M &gt;
                            N.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* soal 4 */}
            <div className="mt-2">
              {N === 4 && (
                <div>
                  <h1 className="p-2">
                    Urutkan lah bilangan dibawah ini dari yang terkecil sampai
                    ke terbesar. <br />
                    <span className="font-bold">Petunjuk :</span> tarik bilangan
                    dibawah ini dan pindahkan sehingga urut.
                  </h1>
                  <h2 className="p-2 border-2 border-teal-400 bg-white font-bold flex justify-center items-center text-center">
                    <div className="flex flex-row w-fit h-fit gap-2">
                      {numbers.map((number) => (
                        <div
                          key={number}
                          className="flex flex-row gap-2 text-center justify-center items-center"
                        >
                          <div className="text-5xl text-center p-2 mb-[15px]">
                            &lt;
                          </div>
                          <div
                            draggable
                            onDragStart={(event) => onDragStart(event, number)}
                            onDragOver={onDragOver}
                            onDrop={(event) => onDrop(event, number)}
                            className="cursor-move text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          >
                            {number}
                          </div>
                        </div>
                      ))}
                    </div>
                  </h2>

                  <div className="ml-5 font-bold">
                    {Soal4Benar !== "" && (
                      <div
                        className={`mt-1 ${
                          Soal4Benar === "benar" && "text-green-500"
                        } ${Soal4Benar === "salah" && "text-red-500"}`}
                      >
                        {Soal4Benar === "benar" && "Jawaban Anda benar!"}
                        {Soal4Benar === "salah" && "Jawaban Anda salah!"}
                        {(Soal4Benar === "benar" || Soal4Benar === "salah") && (
                          <div className="text-xs w-[50rem]">
                            Penjelasan : kita misalkan bahwa huruf diatas
                            menjadi angka sembarang maka: M = 123456 N = 8123
                            maka bisa kita lihat 123456 lebih besar dari 8123
                            maka bisa kita tulis 123456 &gt; 8123 artinya M &gt;
                            N.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-7 ml-4 flex flex-row gap-60 text-white">
              <button
                onClick={() => {
                  if (N !== 1) {
                    setN(N - 1);
                  }
                  setSelectedOption("");
                  setJawabanSoal2("");
                  setJawabanSoal3("");
                  setNumbers(["43", "-7", "-31", "5", "8"]);
                  setjawabanbenar(" ");
                  setSoal2Benar(" ");
                  setSoal3Benar(" ");
                  setSoal4Benar(" ");
                }}
                className={`${
                  N === 1 ? "bg-[#423d49]" : "bg-indigo-500"
                } p-2 rounded-md`}
              >
                Sebelumnya
              </button>
              <div>
                {N === 1 && (
                  <button
                    onClick={checkAnswer}
                    className="p-2 rounded-md bg-indigo-500"
                  >
                    Cek Jawaban
                  </button>
                )}
                {N === 2 && (
                  <button
                    onClick={checkAnswerSoal2}
                    className="p-2 rounded-md bg-indigo-500"
                  >
                    Cek Jawaban
                  </button>
                )}
                {N === 3 && (
                  <button
                    onClick={checkAnswerSoal3}
                    className="p-2 rounded-md bg-indigo-500"
                  >
                    Cek Jawaban
                  </button>
                )}
                {N === 4 && (
                  <button
                    onClick={checkAnswerSoal4}
                    className="p-2 rounded-md bg-indigo-500"
                  >
                    Cek Jawaban
                  </button>
                )}
              </div>
              <button
                onClick={() => {
                  if (N !== 4) {
                    setN(N + 1);
                  }
                  setSelectedOption("");
                  setJawabanSoal2("");
                  setJawabanSoal3("");
                  setNumbers(["43", "-7", "-31", "5", "8"]);
                  setjawabanbenar(" ");
                  setSoal2Benar(" ");
                  setSoal3Benar(" ");
                  setSoal4Benar(" ");
                }}
                className={`${
                  N === 4 ? "bg-[#423d49]" : "bg-indigo-500"
                } p-2 rounded-md`}
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
