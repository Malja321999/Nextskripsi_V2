import ButttonpnUP from "@/app/component/ButttonpnUP";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-emerald-700 h-[40rem] w-[89.5rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl overflow-y-scroll">
      BAB2 Kuis
      {/* ButtonpnUP */}
      <ButttonpnUP p={"/bab2_2"} n={"/bab3_1"} />
    </div>
  );
};

export default page;
