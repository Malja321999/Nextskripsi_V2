import React from "react";
import GBB1_2A from "../../../asset/GBB1_2A.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow rounded">
        <div className="rounded-md border-4 border-blue-500">
          <Image src={GBB1_2A} alt="Gambar"></Image>
        </div>
        <div className="text-blue-500">AKU DISINI</div>
      </div>
    </div>
  );
};

export default page;
