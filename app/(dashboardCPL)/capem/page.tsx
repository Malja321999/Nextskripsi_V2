import React from "react";

const page = () => {
  return (
    <div className="h-[560px] w-[1000px] relative top-32 left-[14rem] text-4xl">
      <table className="table-auto border-separate border-spacing-2 border-2 border-teal-500">
        <thead className="bg-indigo-700 text-center">
          <tr>
            <th className="text-center text-teal-500 dark:text-white">
              <h1>Capaian Pembelajaran</h1>
            </th>
          </tr>
        </thead>
        <tbody className="bg-teal-800 text-justify">
          <tr>
            <td>
              <p className="col-12">
                Di akhir fase D, peserta didik dapat membaca, menulis, dan
                membandingkan bilangan bulat, bilangan rasional dan irasional,
                bilangan desimal, bilangan berpangkat bulat dan akar, bilangan
                dalam notasi ilmiah.
                <br /> <br />
                Mereka dapat menerapkan operasi aritmetika pada bilangan real,
                dan memberikan estimasi/perkiraan dalam menyelesaikan masalah
                (termasuk berkaitan dengan literasi finansial). Peserta didik
                dapat menggunakan faktorisasi prima dan pengertian rasio (skala,
                proporsi, dan laju perubahan) dalam penyelesaian masalah.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
