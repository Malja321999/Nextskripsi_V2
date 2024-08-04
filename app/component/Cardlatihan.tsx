import React from 'react'
/* Icon Latihan */
import { BsPencilSquare } from "react-icons/bs";

const Cardlatihan = ({n}:any) => {
  return (
    <div className="bg-white p-2 w-fit rounded-md mt-10 mb-0 text-black font-bold flex justify-between gap-2">
      <BsPencilSquare />
      Latihan Soal {n}
    </div>
  );
}

export default Cardlatihan