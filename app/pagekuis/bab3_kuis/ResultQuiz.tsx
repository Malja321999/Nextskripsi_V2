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
                <div className="flex flex-col gap-5 justify-center items-center">
                  <h1 className="text-lg w-fit p-5 bg-teal-500 text-center rounded-md shadow-md border-4 border-indigo-200">
                    Selamat Kamu Lulus Kuis Bab 3!
                  </h1>
                  <h2 className="text-base w-[80rem] font-bold p-5 bg-sky-500 text-center rounded-md shadow-md border-4 border-indigo-200">
                    "Selamat! Usaha keras dan dedikasimu telah membuahkan hasil
                    yang luar biasa. Kegigihanmu dalam mempelajari materi telah
                    terbayar dengan keberhasilan ini. Teruslah bersemangat dan
                    jadikan ini sebagai batu loncatan untuk meraih lebih banyak
                    lagi prestasi di masa depan. Kita semua bangga padamu!"
                  </h2>
                </div>
              ) : (
                <div className="flex flex-col gap-5 justify-center items-center">
                  <h1 className="text-lg w-fit p-5 bg-rose-500 text-center rounded-md shadow-md border-4 border-indigo-200">
                    Kamu Belum Lulus Kuis Bab 3
                  </h1>
                  <h2 className="text-base w-[80rem] font-bold p-5 bg-sky-500 text-center rounded-md shadow-md border-4 border-indigo-200">
                    "Kamu mungkin belum lulus kali ini, tapi jangan menyerah!
                    Ingatlah bahwa kegagalan adalah awal dari kesuksesan. Ayo
                    pelajari kembali materi sebelumnya dengan tekun, agar kamu
                    dapat mengatasi kesulitan dan berhasil lulus di kuis
                    berikutnya."
                  </h2>
                </div>
              )}
            </div>
          </div>
          <ul className="p-5 bg-teal-500 rounded-md">
            <li className="flex justify-between">
              <span>Nama:</span>
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
          <div className="mt-5 w-full flex flex-row gap-[10rem] justify-center items-center">
            <div>
              <Link href={"/bab3"}>
                <button className="mx-auto bg-yellow-400 hover:bg-yellow-300 rounded-md w-[20rem] p-5 text2-xl font-bold text-2xl text-black">
                  Kembali Ke Bab 3
                </button>
              </Link>
            </div>
            {Pass ? (
              <div>
                <Link href={"/ujian_akhir"}>
                  <button className="mx-auto bg-yellow-400 hover:bg-yellow-300 rounded-md w-[20rem] p-5 text2-xl font-bold text-2xl text-black">
                    Lanjutkan <br /> Ulangan Akhir
                  </button>
                </Link>
              </div>
            ) : (
              <div>
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
