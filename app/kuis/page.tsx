"use client";
import { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Kuis = () => {
  const soal = [
    {
      id: 1,
      title: "Kuis ",
      q: "1 + 1 = ...",
      option: ["1", "2", "3", "4"],
    },
    {
      id: 2,
      title: "Kuis ",
      q: "2 + 1 = ...",
      option: ["1", "2", "3", "4"],
    },
    {
      id: 3,
      title: "Kuis ",
      q: "3 + 1 = ...",
      option: ["1", "2", "3", "gila banget nih bisa juga"],
    },
  ];

  const [N, setN] = useState(0);
  const SoalLeng = soal.length - 1;

  return (
    <div className="h-screen flex justify-center items-center mt-10">
      <div className="bg-teal-500 w-[60rem] h-fit rounded-md p-5 shadow-md text-5xl">
        <div>
          <h1 className="font-bold bg-sky-700 rounded-md border-4 border-white text-center p-5">
            {soal[N].title + (N + 1)}
          </h1>
          <ul className="bg-white rounded-md border-4 border-sky-400 p-10 mt-5 text-sky-500">
            <p>{soal[N].q}</p>

            {soal[N].option.map((option, index) => {
              return (
                <li className="px-5" key={index}>
                  <input
                    className="mr-2 h-6 w-6"
                    type="radio"
                    name="inlineRadioOptions"
                    id={`inlineRadio${N}`}
                    value={`option${N}`}
                  />

                  <label
                    className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor={`inlineRadio${N}`}
                  >
                    {option}
                  </label>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between mt-5 text-base w-50 gap-10">
            {N > 0 ? (
              <button
                onClick={() => setN(N - 1)}
                className="bg-sky-700 rounded-md shadow-md cursor-pointer text-center font-bold w-fit p-2 flex justify-center items-center"
              >
                <span className="-left-1 relative">
                  <MdNavigateBefore size={40} />
                </span>
              </button>
            ) : (
              <div></div>
            )}
            {N < SoalLeng ? (
              <button
                onClick={() => setN(N + 1)}
                className="bg-sky-700 rounded-md shadow-md cursor-pointer text-center font-bold w-fit p-2 flex justify-center items-center"
              >
                <span className=" relative">
                  <MdNavigateNext size={40} />
                </span>
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kuis;
