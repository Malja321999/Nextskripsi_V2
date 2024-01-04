import React from "react";
import { GiInspiration } from "react-icons/gi";

const Cardcontoh = ({n}:any) => {
  return (
    <div className="bg-gray-900 p-2 w-fit rounded-md mt-5 mb-2 text-sky-400 font-bold flex justify-between gap-2">
      <GiInspiration/>
      Contoh {n} :
    </div>
  );
};

export default Cardcontoh;
