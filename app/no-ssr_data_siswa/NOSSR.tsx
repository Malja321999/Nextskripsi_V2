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
import { IoSearch } from "react-icons/io5";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function NOSSR() {
  const [IsLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [DataUsers, setDataUsers] = useState<DocumentData[]>([]);

  useEffect(() => {
    const GetData = async () => {
      setIsLoading(true);
      const q = query(
        collection(firestore, "users")
        /* where("role", "==", "member") */
      );
      const snapshot = await getDocs(q);

      try {
        if (snapshot.empty) {
          console.log("No such document!");
        } else {
          setDataUsers(snapshot.docs.map((doc) => doc.data()));
          setFilter(snapshot.docs.map((doc) => doc.data()));
        }
      } catch (error) {
        console.log("Error getting document:", error);
      }
    };
    GetData();
    setIsLoading(false);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState("5");
  const recordsPerPageNumber = parseInt(recordsPerPage, 10);
  const lastIndex = currentPage * recordsPerPageNumber;
  const firstIndex = lastIndex - recordsPerPageNumber;
  let records = DataUsers.slice(firstIndex, lastIndex);
  let npage = Math.ceil(DataUsers.length / recordsPerPageNumber);
  if (npage === 1) npage = 0;
  const numbers = Array.from({ length: npage }, (_, i) => i + 1);

  console.log(recordsPerPageNumber);

  console.log(DataUsers);

  console.log(records);

  /* 
  const [uniqueNames, setuniqueNames] = useState([]);
  const uniq = records.name.filter(
    (value: any, index: any, self: any) => self.indexOf(value) === index
  ); */

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(val: any) {
    setCurrentPage(val);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  /*  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
 */

  const [Filter, setFilter] = useState<DocumentData[]>([]);

  /* Fungsi Search */
  useEffect(() => {
    console.log("us");
    const result = DataUsers.filter((item) => {
      return item.fullname.toLowerCase().match(search.toLowerCase());
    });
    setFilter(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleDelete = (val: any) => {
    const newData = DataUsers.filter((item: any) => item.id !== val);
    setDataUsers(newData);
  };

  return (
    <div className="px-3 py-0 w-[85rem] rounded-md">
      <div className={`mt-0 rounded-md overflow-y-auto h-[30rem]`}>
        {IsLoading ? (
          <div className="flex justify-center items-center text-center text-black font-bold text-9xl">
            Loading...
          </div>
        ) : (
          <div className={`flex flex-col justify-center items-center w-full`}>
            <div className={`flex justify-between items-center w-full p-5`}>
              <div className="font-bold flex flex-col justify-start gap-5">
                <div>
                  <form className="flex fle-row justify-center items-center gap-2 max-w-sm mx-auto">
                    <select
                      value={recordsPerPage}
                      onChange={(e) => setRecordsPerPage(e.target.value)}
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="A" selected>
                        Pilih Kelas
                      </option>
                      <option value="A">A</option>
                    </select>
                  </form>
                </div>
                <div>
                  <form className="flex fle-row justify-center items-center gap-2 max-w-sm mx-auto">
                    <select
                      value={recordsPerPage}
                      onChange={(e) => setRecordsPerPage(e.target.value)}
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="5" selected>
                        Tampilkan Data
                      </option>
                      <option value="5">5</option>
                      <option value="10" disabled={DataUsers.length < 10}>
                        10
                      </option>
                      <option value="25" disabled={DataUsers.length < 25}>
                        25
                      </option>
                      <option value="50" disabled={DataUsers.length < 50}>
                        50
                      </option>
                      <option value="100" disabled={DataUsers.length < 100}>
                        100
                      </option>
                    </select>
                  </form>
                </div>
              </div>

              <div>
                <form className="max-w-md mx-auto">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Cari Nama Siswa"
                      required
                    />
                    {/* <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button> */}
                  </div>
                </form>
              </div>
            </div>
            {/* table */}
            <div className="mb-5 rounded-md shadow w-fit  border-4 border-black">
              <table className="w-[80rem] rounded-md">
                <thead>
                  <tr className="p-5 rounded-md bg-teal-400 h-fit text-lg font-black justify-center items-center">
                    <th className="border border-slate-600 text-center p-3  h-fit">
                      NISN
                    </th>
                    <th className="border border-slate-600 text-center p-3 h-fit">
                      Nama
                    </th>
                    <th className="border border-slate-600 text-center p-3 h-fit">
                      Kelas
                    </th>
                    <th className="border border-slate-600 text-center p-3 h-fit">
                      Tindakan
                    </th>
                  </tr>
                </thead>
                <tbody className="font-bold ">
                  {records.map((val, index) => (
                    <tr
                      key={val.id}
                      className={`${
                        search === "" ? "visible" : "hidden"
                      } h-5 border-b ${
                        index % 2 === 0 ? "bg-slate-300" : "bg-white"
                      } `}
                    >
                      <td className="text-xs border border-slate-600 p-3 text-center h-2">
                        {val.nisn}
                      </td>
                      <td className="text-xs border border-slate-600 p-3  text-center h-2">
                        {val.fullname}
                      </td>
                      <td className="text-xs border border-slate-600 p-3  text-center h-2">
                        {val.class}
                      </td>
                      <td className="text-xs border border-slate-600 p-3  text-center h-2">
                        <div className="flex flex-row justify-center items-start gap-2">
                          {/* <button
                        type="button"
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white p-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Ubah
                      </button> */}
                          <button
                            type="button"
                            className="text-xs bg-red-500 hover:bg-red-600 text-white p-4 rounded focus:outline-none focus:shadow-outline"
                            /* onClick={() => handleDelete(row.id)} */
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {Filter.map((val, index) => (
                    <tr
                      key={val.id}
                      className={`${
                        search === "" ? "hidden" : "visible"
                      } h-5 border-b ${
                        index % 2 === 0 ? "bg-slate-300" : "bg-white"
                      } `}
                    >
                      <td className="text-xs border border-slate-600 p-3 text-center h-2">
                        {val.nisn}
                      </td>
                      <td className="text-xs border border-slate-600 p-3  text-center h-2">
                        {val.fullname}
                      </td>
                      <td className="text-xs border border-slate-600 p-3  text-center h-2">
                        {val.class}
                      </td>
                      <td className="text-xs border border-slate-600 p-3  text-center h-2">
                        <div className="flex flex-row justify-center items-start gap-2">
                          {/* <button
                        type="button"
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white p-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Ubah
                      </button> */}
                          <button
                            type="button"
                            className="text-xs bg-red-500 hover:bg-red-600 text-white p-4 rounded focus:outline-none focus:shadow-outline"
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
            </div>
            {/* akhir table */}
            <div className="flex justify-between w-full px-4">
              <div className="bg-white font-bold p-2 rounded-md">
                Tampilkan{" "}
                <span className="bg-blue-500 p-2 rounded-md">
                  {recordsPerPage}
                </span>{" "}
                data dari{" "}
                <span className="bg-blue-500 p-2 rounded-md">
                  {DataUsers.length}
                </span>{" "}
                data
              </div>
              <div>
                <nav
                  className="bg-white isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <button
                    disabled={
                      numbers.length === 0 || currentPage === firstIndex
                    }
                    onClick={() => prePage()}
                    className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
                      numbers.length !== 0 && "hover:bg-blue-200"
                    } focus:z-20 focus:outline-offset-0`}
                  >
                    <span className="sr-only">Sebelumnya</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>

                  {numbers.length === 0 && (
                    <button
                      className={`hover:bg-blue-200 bg-blue-500 relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"`}
                    >
                      1
                    </button>
                  )}

                  {numbers.map((i) => (
                    <button
                      key={i}
                      className={`hover:bg-blue-200 ${
                        currentPage === i ? "bg-blue-500" : "bg-white"
                      } relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"`}
                      onClick={() => changePage(i)}
                    >
                      {i}
                    </button>
                  ))}

                  <button
                    disabled={numbers.length === 0 || currentPage === lastIndex}
                    onClick={() => nextPage()}
                    className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 ${
                      numbers.length !== 0 && "hover:bg-blue-200"
                    } `}
                  >
                    <span className="sr-only">Selanjutnya</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NOSSR;
