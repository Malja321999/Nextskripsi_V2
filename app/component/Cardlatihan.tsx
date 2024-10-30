import React from 'react'
/* Icon Latihan */
import { BsPencilSquare } from "react-icons/bs";

const Cardlatihan = ({n}:any) => {
  return (
    <div className="bg-teal-700  rounded-md border-[5px] border-white p-2 w-fit mt-10 mb-0 text-white font-bold flex justify-between gap-2">
      <BsPencilSquare />
      Latihan Soal {n}
    </div>
  );
}

export default Cardlatihan