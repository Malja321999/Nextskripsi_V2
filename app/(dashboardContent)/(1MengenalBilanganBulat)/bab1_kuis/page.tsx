import ButttonpnUP from "@/app/component/ButttonpnUP";
import Pra_Tujuan from "@/app/component/Pra_Tujuan";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-rose-700 h-[37.1rem] w-[88.8rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl text-white">
      Bab1 Kuis
      <Pra_Tujuan t={"Mengenal Bilangan Bulat"} />
      <br />
      <br />
      <ButttonpnUP p={"/bab1_1"} n={"/bab2_1"} />
    </div>
  );
};

export default page;
