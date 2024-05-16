"use client";
import { useAppContext } from "@/app/context/AppWrapper";
import { useSession } from "next-auth/react";
import Link from "next/link";

const ResultQuiz = ({
  Pass,
  TotalQuestion,
  correct,
  incorrect,
  points,
}: any) => {
  const { data: session }: { data: any; status: string } = useSession();

  function ResetQuiz() {
    window.location.reload();
  }
  return (
    <div className="flex justify-center items-center h-screen w-screen -ml-[7rem]">
      <div className="w-screen mx-20 bg-teal-500 rounded-md p-2 shadow-md text-4xl m-5">
        <h1 className="font-bold bg-sky-700 rounded-md border-4 border-white  text-center p-5 w-full mb-5">
          Kuis Selesai!
        </h1>
        <div className="w-full mx-auto bg-white rounded-md border-4 border-sky-400 p-10">
          {/* Display result table here */}
          <div className="flex justify-center items-center">
            <div className="w-1/2 mb-5 ">
              {Pass ? (
                <>
                  <h1 className="w-full p-5 bg-sky-500 text-center rounded-md shadow-md border-4 border-indigo-200">
                    Selamat Kamu Lulus Kuis Bab 1.2!
                  </h1>
                </>
              ) : (
                <>
                  <h1 className="w-full p-5 bg-rose-500 text-center rounded-md shadow-md border-4 border-indigo-200">
                    Kamu Belum Lulus Kuis Bab 1.2
                  </h1>
                </>
              )}
            </div>
          </div>
          <ul className="p-5 bg-teal-500 rounded-md">
            <li className="flex justify-between">
              <span>Nama Pengguna:</span>
              <span>{session?.user?.fullname}</span>
            </li>
            <li className="flex justify-between">
              <span>Total Soal:</span>
              <span>{TotalQuestion}</span>
            </li>
            <li className="flex justify-between">
              <span>Total Benar:</span>
              <span>{correct}</span>
            </li>
            <li className="flex justify-between">
              <span>Total Salah:</span>
              <span>{incorrect}</span>
            </li>
            <li className="flex justify-between">
              <span>Total Nilai:</span>
              <span>{points}</span>
            </li>
          </ul>
          <div className="mt-5">
            {Pass ? (
              <div className="w-full flex justify-center items-center">
                <Link href={"/bab2"}>
                  <button className="mx-auto bg-yellow-400 hover:bg-yellow-300 rounded-md w-[20rem] p-5 text2-xl font-bold text-2xl text-black">
                    Lanjutkan Ke Bab 2
                  </button>
                </Link>
              </div>
            ) : (
              <div className="w-full flex justify-center items-center">
                <button
                  onClick={() => ResetQuiz()}
                  className="mx-auto bg-yellow-400 hover:bg-yellow-300 rounded-md w-[20rem] p-5 text-2xl font-bold text-black"
                >
                  Ulang Kuis
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultQuiz;
