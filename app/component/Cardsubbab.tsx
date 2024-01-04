import React from 'react'
/* Icon Sub Bab */
import { IoBookmarksOutline } from "react-icons/io5";

const Cardsubbab = ({n,p}:any) => {
  return (
    <div className="bg-gray-900 w-fit p-2 rounded-md mt-20">
      <ul className="flex justify-start gap-2">
        <li className="mt-1">
          <IoBookmarksOutline />
        </li>
        <li>
          {n} {p}
        </li>
      </ul>
    </div>
  );
}

export default Cardsubbab