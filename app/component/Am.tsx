import React from 'react'
/* Icon Latihan */
import { BsPencilSquare } from "react-icons/bs";

const Cardlatihan = ({n}:any) => {
  return (
    <div className="bg-white text-black p-2 w-fit rounded-md mt-0 mb-2 font-bold flex justify-between gap-2">
      <BsPencilSquare />
      Ayo Mencoba {n}
    </div>
  );
}

export default Cardlatihan