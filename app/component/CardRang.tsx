import React from "react";

import { RiAlarmWarningLine } from "react-icons/ri";

const CardRang = ({ g, a_l }: any) => {
  return (
    <div className="bg-gray-900 p-2 w-fit rounded-md mt-20 mb-2 text-sky-400 font-bold flex justify-between gap-2">
      <RiAlarmWarningLine />
      Rangkuman
    </div>
  );
};

export default CardRang;
