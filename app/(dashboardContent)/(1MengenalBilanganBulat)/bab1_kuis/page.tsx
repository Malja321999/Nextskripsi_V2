import Link from "next/link";

const BAb1_Kuis_Page = () => {
  return (
    <div className="bg-rose-700 h-[37.1rem] w-[90rem] mt-[5rem] mx-2 mb-5 p-5 relative rounded-md left-[-90.9rem] text-3xl text-white flex justify-center items-center overflow-x-auto">
      <div className="bg-emerald-600 w-full h-full rounded-md shadow-md text-justify">
        <h1 className="text-center text-5xl p-5 px-10 font-bold">KUIS BAB 1</h1>
        {/* garis green */}
        <div className="bg-[#146b43] w-full h-[0.5px]" />
        {/* List */}
        <ul className="list-inside list-decimal mt-2 text-4xl py-5 px-10 font-medium flex flex-col gap-5">
          <li>Kamu akan ditanya 10 pertayaan</li>
          <li>Setiap jawaban yang benar akan diberikan 10 poin.</li>
          <li>
            Pertanyaan memiliki 4 opsi jawaban. Kamu hanya bisa memilih 1
            jawaban saja
          </li>
          <li>
            Kamu dapat memeriksa dan mengganti jawaban sebelum menekan tombol{" "}
            <br />
            <span className="ml-10">Finish Quiz.</span>
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <Link href={"/pagekuis/bab1_kuis"}>
            <button className="mt-7 text-black bg-yellow-300 hover:bg-yellow-200 rounded-md w-[20rem] p-5 text-2xl">
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BAb1_Kuis_Page;
