"use client";
import { useAppContext } from "@/app/context/AppWrapper";
import { useSession } from "next-auth/react";
import Link from "next/link";

const ResultQuiz = ({ Pass, TotalQuestion, correct, incorrect }: any) => {
  const { data: session }: { data: any; status: string } = useSession();

  const { points } = useAppContext();

  function ResetQuiz() {
    window.location.reload();
  }
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-screen mx-20 bg-teal-500 rounded-md p-2 shadow-md text-4xl m-5">
        <h1 className="font-bold bg-sky-700 rounded-md border-4 border-white  text-center p-5 w-full mb-5">
          Quiz completed!
        </h1>
        <div className="w-full mx-auto bg-white rounded-md border-4 border-sky-400 p-10">
          {/* Display result table here */}
          <div className="flex justify-center items-center">
            <div className="w-1/2 mb-5 ">
              {Pass ? (
                <>
                  <h1 className="w-full p-5 bg-sky-500 text-center rounded-md shadow-md border-4 border-indigo-200">
                    Selamat Kamu Lulus!
                  </h1>
                </>
              ) : (
                <>
                  <h1 className="w-full p-5 bg-rose-500 text-center rounded-md shadow-md border-4 border-indigo-200">
                    Kamu Belum Lulus
                  </h1>
                </>
              )}
            </div>
          </div>
          <ul className="p-5 bg-teal-500 rounded-md">
            <li className="flex justify-between">
              <span>Username:</span>
              <span>{session?.user?.fullname}</span>
            </li>
            <li className="flex justify-between">
              <span>Total Questions:</span>
              <span>{TotalQuestion}</span>
            </li>
            <li className="flex justify-between">
              <span>Total Correct:</span>
              <span>{correct}</span>
            </li>
            <li className="flex justify-between">
              <span>Total Incorrect:</span>
              <span>{incorrect}</span>
            </li>
            <li className="flex justify-between">
              <span>Total Points:</span>
              <span>{points}</span>
            </li>
          </ul>
          <div className="mt-5">
            {Pass ? (
              <div className="w-full flex justify-center items-center">
                <Link href={"/bab2_1"}>
                  <button className="mx-auto bg-yellow-400 hover:bg-yellow-300 rounded-md w-[20rem] p-5 text2-xl font-bold text-2xl text-black">
                    Lannjutkan Ke BAB 2
                  </button>
                </Link>
              </div>
            ) : (
              <div className="w-full flex justify-center items-center">
                <button
                  onClick={() => ResetQuiz()}
                  className="mx-auto bg-yellow-400 hover:bg-yellow-300 rounded-md w-[20rem] p-5 text-2xl font-bold text-black"
                >
                  Reset
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
