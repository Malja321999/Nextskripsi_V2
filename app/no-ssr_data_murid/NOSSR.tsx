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
  const [Filter, setFilter] = useState<any>([]);
  const [DataUsers, setDataUsers] = useState<DocumentData[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = DataUsers.slice(firstIndex, lastIndex);
  let npage = Math.ceil(DataUsers.length / recordsPerPage);
  if (npage === 1) return null;
  const numbers = Array.from({ length: npage }, (_, i) => i + 1);
  console.log(numbers);

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
        }
      } catch (error) {
        console.log("Error getting document:", error);
      }
    };
    GetData();
    setIsLoading(false);
  }, []);

  console.log(DataUsers);

  console.log(Filter);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const result = DataUsers.filter((item: any) => {
      return item.name.toLowerCase().match(search.toLowerCase());
    });
    setFilter(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleDelete = (val: any) => {
    const newData = DataUsers.filter((item: any) => item.id !== val);
    setDataUsers(newData);
  };

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
  return (
    <div className="px-3 py-0 w-[85rem] rounded-md">
      <div className="flex flex-row justify-center items-center gap-[55rem]">
        {/* select class */}

        <div className="mb-5 flex flex-row justify-center items-center gap-2"></div>
      </div>
      <div className="mt-5 rounded-md">
        {IsLoading ? (
          <div className="flex justify-center items-center text-center text-black font-bold text-9xl">
            Loading...
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-1 overflow-y-auto overflow-x-hidden h-[30rem]">
            <div className="mt-10 relative flex flex-1">
              <input
                type="text"
                className="bg-white w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm"
                placeholder="Search..."
              />
              <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-500" />
            </div>
            <div>
              <table className="w-[80rem] h-full">
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
                      className={`h-5  border-b ${
                        index % 2 === 0 ? "bg-slate-300" : "bg-white"
                      } `}
                    >
                      <td className="text-base border border-slate-600 p-3 text-center h-5">
                        {val.nisn}
                      </td>
                      <td className="text-base border border-slate-600 p-3  text-center h-5">
                        {val.fullname}
                      </td>
                      <td className="text-base border border-slate-600 p-3  text-center h-5">
                        {val.class}
                      </td>
                      <td className="text-base border border-slate-600 p-3  text-center h-5">
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
            </div>
            <div>
              <nav
                className="bg-white isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={() => prePage()}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
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

                {numbers.map((i) => (
                  <button
                    key={i}
                    className="relative z-10 inline-flex items-center bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                    onClick={() => changePage(i)}
                  >
                    {i}
                  </button>
                ))}

                <button
                  onClick={() => nextPage()}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
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
