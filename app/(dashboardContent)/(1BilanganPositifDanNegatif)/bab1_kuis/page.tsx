"use client";
import { useRouter } from "next/navigation";

const BAb2_Kuis_Page = () => {
  const router = useRouter();

  return (
    <div className="bg-rose-700 h-[40rem] w-[89.5rem] mt-[5rem] mx-2 mb-5 p-5 relative rounded-md left-[-90.9rem] text-3xl text-white flex justify-center items-center overflow-x-auto">
      <div className="bg-emerald-600 w-full h-full mx-auto rounded-md shadow-md text-justify">
        <h1 className="text-center text-5xl p-5 px-10 font-bold">KUIS BAB 1</h1>
        {/* garis green */}
        <div className="bg-[#146b43] w-full h-[0.5px]" />
        {/* List */}
        <ul className="list-inside list-decimal mt-2 text-4xl py-5 px-10 font-medium flex flex-col gap-5">
          <li>Kamu akan diberikan 10 pertayaan.</li>
          <li>
            Waktu pengerjaan semua soal sebanyak{" "}
            <span className="">20 menit.</span>
          </li>
          <li>Setiap jawaban yang benar akan diberikan 10 poin.</li>
          <li>
            Pertanyaan memiliki 4 opsi jawaban. Kamu hanya bisa memilih 1
            jawaban <br />
            <span className="ml-10">saja.</span>
          </li>
          <li>
            Kamu dapat memeriksa dan mengganti jawaban selama waktu belum
            <br />
            <span className="ml-10">
              habis dan tidak menekan tombol Menyelesaikan kuis.
            </span>
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <button
            onClick={() => router.replace("/pagekuis/bab1_kuis")}
            className="mt-3 bg-yellow-300 hover:bg-yellow-200 rounded-md w-[20rem] p-5 text-2xl font-bold text-black"
          >
            Mulai Kuis
          </button>
        </div>
      </div>
    </div>
  );
};

export default BAb2_Kuis_Page;
