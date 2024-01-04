import React from "react";
import Image from "next/image";
import Peta from "../../asset/PetaKonsep.png";

const peta = () => {
  return (
    <div className="h-[560px] w-[70rem] relative top-28 left-[17rem] text-4xl">
      <table className="table-auto border-separate border-spacing-2 border-2 border-teal-500">
        <thead className="bg-indigo-700 text-center">
          <tr>
            <th className="text-center text-teal-500 dark:text-white">
              <h1>
                PETA KONSEP <br /> MATERI BILANGAN BULAT <br /> KELAS VII SMP
              </h1>
            </th>
          </tr>
        </thead>
        <tbody className="bg-teal-800 text-justify">
          <tr>
            <td>
              <Image src={Peta} alt="Peta Konsep" className="h-[22rem]" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default peta;
