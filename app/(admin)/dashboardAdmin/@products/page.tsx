"use client";

import { useState } from "react";

export default function PageadminRevalidate() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=123456",
      {
        method: "POST",
      }
    );
    /*  if (!res.ok) {
      setStatus("Tidak ada respon");
    } else { */
    const response = await res.json();
    if (response.revalidate) {
      setStatus("Revalidate Success");
    } else {
      setStatus("Revalidate Failed");
    }
    /*  } */
  };

  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex flex-col justify-center items-center mr-5">
      <h1
        className={`text-5xl font-bold ${
          status === "Revalidate Success" ? "text-teal-500" : "text-rose-500"
        }`}
      >
        {status}
      </h1>
      <button
        onClick={revalidate}
        className="bg-sky-500 p-5 w-fit rounded-md text-2xl hover:bg-sky-300"
      >
        Ravalidate
      </button>
    </div>
  );
}
