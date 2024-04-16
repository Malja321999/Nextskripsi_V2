"use client";
import React, { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

const CardFinishRead = () => {
  const [FinishReading, setFinishReading] = useState(false);
  return (
    <button
      onClick={() => setFinishReading(!FinishReading)}
      className="ml-[15.3rem] hover:bg-teal-400 text-5xl bg-teal-600 p-5 w-fit rounded-md mt-10 mb-2 font-bold flex justify-between gap-2"
    >
      <span>
        {FinishReading ? <BsFillBookmarkCheckFill /> : <BsBookmark />}
      </span>
      Selesai Membaca
    </button>
  );
};

export default CardFinishRead;
