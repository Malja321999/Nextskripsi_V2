import React from "react";
/* Icon Sub Bab */
import { CiBookmarkPlus } from "react-icons/ci";

const Cardsubper = ({ p }: any) => {
  return (
    <div className="bg-gray-900 w-fit p-2 rounded-md mt-20">
      <ul className="flex justify-start gap-2">
        <li className="mt-1">
          <CiBookmarkPlus />
        </li>
        <li>{p}</li>
      </ul>
    </div>
  );
};

export default Cardsubper;
