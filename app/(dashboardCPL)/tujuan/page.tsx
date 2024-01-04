import React from "react";

const tujuan = () => {
  return (
    <div className="h-[560px] w-[1000px] relative top-32 left-[16rem] text-6xl">
      <table className="table-auto border-separate border-spacing-2 border-2 border-teal-500">
        <thead className="bg-indigo-700 text-center">
          <tr>
            <th
              className="text-center text-teal-500 dark:text-white"
              colSpan={2}
            >
              <h1>Tujuan Pembelajaran</h1>
            </th>
          </tr>
        </thead>
        <tbody className="bg-teal-800 text-center">
          <tr>
            <td>
              <p className="col-12">1</p>
            </td>
            <td>
              <p className="col-12">Bilangan Positif dan Negatif</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="col-12">2</p>
            </td>
            <td>
              <p className="col-12">Penjumlahan dan Pengurangan</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="col-12">3</p>
            </td>
            <td>
              <p className="col-12">Perkalian dan Pembagian</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default tujuan;
