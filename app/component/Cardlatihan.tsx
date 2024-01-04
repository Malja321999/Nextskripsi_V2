import React from 'react'
/* Icon Latihan */
import { BsPencilSquare } from "react-icons/bs";

const Cardlatihan = ({n}:any) => {
  return (
    <div className="bg-gray-900 p-2 w-fit rounded-md mt-10 mb-2 text-sky-400 font-bold flex justify-between gap-2">
      <BsPencilSquare />
      Latihan {n}
    </div>
  );
}

export default Cardlatihan