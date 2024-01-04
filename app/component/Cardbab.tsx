import React from 'react'
/* Icon Bab */
import { IoBookOutline } from "react-icons/io5";


const Cardbab = ({n, p} :any) => {
  return (
    <div className="bg-gray-900 w-fit p-2 rounded-md mt-3">
      <ul className="flex justify-start gap-2">
        <li className="mt-1">
          <IoBookOutline />
        </li>
        <li>
          BAB {n} <br /> {p}
        </li>
      </ul>
    </div>
  );
};

export default Cardbab;