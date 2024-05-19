import { headers } from "next/headers";
import { it } from "node:test";
import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../lib/firebase/init";
import { DiVim } from "react-icons/di";

function NOSSR() {
  const [IsLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<any>([]);

  const [DataUsers, setDataUsers] = useState<DocumentData[]>([]);

  useEffect(() => {
    const GetData = async () => {
      setIsLoading(true);
      const q = query(
        collection(firestore, "users"),
        where("role", "==", "member")
      );
      const snapshot = await getDocs(q);

      try {
        if (snapshot.empty) {
          console.log("No such document!");
        } else {
          setDataUsers(snapshot.docs.map((doc) => doc.data()));
        }
      } catch (error) {
        console.log("Error getting document:", error);
      }
    };
    GetData();

    /* setTimeout(function () {
      setIsLoading(false);
    }, 500); */
    setIsLoading(false);
  }, []);

  console.log(DataUsers);

  console.log(data);
  console.log(filter);

  useEffect(() => {
    const result = data.filter((item: any) => {
      return item.name.toLowerCase().match(search.toLowerCase());
    });
    setFilter(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleDelete = (val: any) => {
    const newData = data.filter((item: any) => item.id !== val);
    setData(newData);
  };

  /* 
  const [uniqueNames, setuniqueNames] = useState([]);
  const uniq = records.name.filter(
    (value: any, index: any, self: any) => self.indexOf(value) === index
  ); */

  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-3 py-0 w-[85rem] rounded-md">
      <div className="flex flex-row justify-center items-center gap-[55rem]">
        {/* select class */}

        <div className="mb-5 flex flex-row justify-center items-center gap-2"></div>
      </div>
      <div className="mt-5 rounded-md overflow-y-auto h-[20rem]">
        {IsLoading ? (
          <div className="flex justify-center items-center text-center text-black font-bold text-9xl">Loading...</div>
        ) : (
          <table className="w-full h-full">
            <thead>
              <tr className="p-5 rounded-md bg-teal-400 h-fit text-lg font-black justify-center items-center">
                <th className="border border-slate-600 text-center p-3 px-5">
                  NISN
                </th>
                <th className="border border-slate-600 text-center p-3 px-5">
                  Nama
                </th>
                <th className="border border-slate-600 text-center p-3 px-5">
                  Kelas
                </th>
                <th className="border border-slate-600 text-center p-3 px-5">
                  Tindakan
                </th>
              </tr>
            </thead>
            <tbody className="font-bold ">
              {DataUsers.map((val, index) => (
                <tr
                  key={val.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-slate-300" : "bg-white"
                  } `}
                >
                  <td className="border border-slate-600 p-3 px-5 text-center">
                    {val.nisn}
                  </td>
                  <td className="border border-slate-600 p-3 px-5 text-center">
                    {val.fullname}
                  </td>
                  <td className="border border-slate-600 p-3 px-5 text-center">
                    {val.class}
                  </td>
                  <td className="border border-slate-600 p-3 px-5 text-center">
                    <div className="flex flex-row justify-center items-start gap-2">
                      {/* <button
                        type="button"
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white p-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Ubah
                      </button> */}
                      <button
                        type="button"
                        className="text-sm bg-red-500 hover:bg-red-600 text-white p-4 rounded focus:outline-none focus:shadow-outline"
                        /* onClick={() => handleDelete(row.id)} */
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/*  <div className="rounded-md overflow-y-auto h-[31rem]">
        <DataTable
          progressPending={pending}
          customStyles={customStyles}
          columns={columns}
          data={data}
          pagination
          fixedHeader
          highlightOnHover
          subHeader
          subHeaderComponent={
            <div className="flex flex-row justify-center items-center gap-[57.8rem]">
              <div className="flex">
                <button
                  id="states-button"
                  type="button"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200"
                >
                  <label className="font-bold" htmlFor="states">
                    KELAS :
                  </label>
                </button>

                <select
                  id="states"
                  className="bg-gray-50 border-2 border-gray-300 text-gray-900 font-bold text-sm rounded-e-lg border-s-gray-100 border-s-2 block w-full p-2.5"
                >
                  <option selected>Pilih Kelas</option>
                  {data.map(
                    (data: any, index: React.Key | null | undefined) => (
                      <option key={index}>{data.class}</option>
                    )
                  )}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Cari..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border-2 border-gray-400 bg-gray-50 rounded-md p-1 px-4 w-40"
                />
              </div>
            </div>
          }
        />
      </div> */}
    </div>
  );
}

export default NOSSR;
