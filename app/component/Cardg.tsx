import React from 'react'
import Image from "next/image";

const Cardg = ({g,w,h,a_l}:any) => {
  return (
    <div>
      <Image
        src={g}
        alt={a_l}
        width={w}
        height={h}
        className="border-8 border-gray-900 rounded-md mt-2 mb-2"
      />
    </div>
  );
}

export default Cardg