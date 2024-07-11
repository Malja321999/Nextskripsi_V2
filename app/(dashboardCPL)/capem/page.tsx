import React from "react";

const page = () => {
  return (
    <div className="h-[560px] w-[1000px] relative top-32 left-[14rem] text-4xl">
      <table className="table-auto border-separate border-spacing-2 border-2 border-teal-500">
        <thead className="bg-indigo-700 text-center">
          <tr>
            <th className="text-center text-white">
              <h1>Capaian Pembelajaran</h1>
            </th>
          </tr>
        </thead>
        <tbody className="bg-teal-800 text-justify">
          <tr>
            <td>
              <div className="col-12 p-4 ">
                Di akhir fase D, peserta didik dapat membaca, menulis, dan
                membandingkan bilangan bulat. Mereka dapat menerapkan operasi
                aritmetika pada bilangan bulat, dan memberikan
                estimasi/perkiraan dalam menyelesaikan masalah (termasuk
                berkaitan dengan literasi finansial).
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
