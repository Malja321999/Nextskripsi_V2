import { headers } from "next/headers";
import { it } from "node:test";
import React, { useEffect, useState } from "react";
import DataTable, {
  createTheme,
  SortOrder,
  TableStyles,
} from "react-data-table-component";
import {
  addDoc,
  collection,
  deleteDoc,
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
import { IoClose, IoSearch } from "react-icons/io5";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Modal from "react-modal";
import Link from "next/link";
import { FaPlus, FaSync } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";

function NOSSR() {
  const [IsLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [DataUsers, setDataUsers] = useState<DocumentData[]>([]);
  const [Filter, setFilter] = useState<DocumentData[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sync, setSync] = useState(false);

  const GetData = async () => {
    setIsLoading(true);
    setSync(true);
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
        setFilter(snapshot.docs.map((doc) => doc.data()));
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
    setIsLoading(false);
    setSync(false);
  };

  useEffect(() => {
    GetData();
  }, []);

  console.log(DataUsers);

  const columns = [
    {
      name: "NISN",
      selector: (row: any) => row.nisn,
      sortable: true,
    },
    {
      name: "NAMA",
      selector: (row: any) => row.fullname,
      sortable: true,
      sortField: "nama",
    },
    {
      name: "KELAS",
      selector: (row: any) => row.class,
      sortable: true,
    },
    {
      name: "TINDAKAN",
      cell: (row: any) => (
        <div className="flex flex-row justify-center items-center gap-2">
          <button
            className="text-white text-base p-2 bg-red-700 hover:bg-rose-500 w-fit rounded-md"
            onClick={() => handleDelete(row.fullname)}
          >
            Hapus
          </button>
        </div>
      ),
    },
  ];
  const customStyles: TableStyles = {
    table: {
      style: {
        width: "80rem",
      },
    },
    head: {
      style: {
        color: "white",
        fontSize: "20px",
        fontWeight: 500,
      },
    },
    headRow: {
      style: {
        backgroundColor: "#2dd4bf",
        minHeight: "52px",
        borderBottomWidth: "1px",
        borderBottomColor: "white",
        borderBottomStyle: "solid",
      },
      denseStyle: {
        minHeight: "32px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "16px",
      },
      draggingStyle: {
        cursor: "move",
      },
    },
    rows: {
      style: {
        border: "1px solid",
      },
    },
  };

  /*   const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState("5");
  const recordsPerPageNumber = parseInt(recordsPerPage, 10);
  const lastIndex = currentPage * recordsPerPageNumber;
  const firstIndex = lastIndex - recordsPerPageNumber;
  let records = DataUsers.slice(firstIndex, lastIndex);
  let npage = Math.ceil(DataUsers.length / recordsPerPageNumber);
  if (npage === 1) npage = 0;
  const numbers = Array.from({ length: npage }, (_, i) => i + 1); */

  function handleSelect(event: any) {
    setSearch(event.target.value);
  }

  console.log(search.length === 1);

  /* Fungsi Search */
  useEffect(() => {
    if (Number.isNaN(Number(search))) {
      if (search.length > 1) {
        const result = DataUsers.filter((item) => {
          return item.fullname.toLowerCase().match(search.toLowerCase());
        });
        setFilter(result);
      } else if (search.length === 1) {
        const result3 = DataUsers.filter((item) => {
          return item.class.toLowerCase().match(search.toLowerCase());
        });
        console.log(result3);
        setFilter(result3);
      }
    } else {
      const result2 = DataUsers.filter((item) => {
        return item.nisn.toLowerCase().match(search.toLowerCase());
      });
      console.log(result2);
      setFilter(result2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleDelete = async (val: any) => {
    /* hapus data siswa didatabase */
    const db = query(
      collection(firestore, "users"),
      where("fullname", "==", `${val}`)
    );
    const docRef = (await getDocs(db)).docs[0].ref;
    await deleteDoc(docRef);

    /* hapus data siswa ditabel */
    const newData = DataUsers.filter((item: any) => item.fullname !== val);
    setFilter(newData);

    /* relaod data siswa lagi */
    GetData();
    /*     window.location.reload();
     */
  };

  const SumClass = Object.values(DataUsers);
  console.log(DataUsers);
  console.log(SumClass);
  console.log(search);

  return (
    <div className="px-3 py-0 w-[85rem] rounded-md">
      <div className={`mt-0 rounded-md overflow-y-auto h-[30rem]`}>
        {IsLoading ? (
          <div className="flex justify-center items-center text-center text-black font-bold text-9xl">
            Loading...
          </div>
        ) : (
          <div className={`flex flex-col justify-center items-center w-full`}>
            {/* table */}
            <div className="mt-5 rounded-md overflow-y-auto h-full">
              <DataTable
                customStyles={customStyles}
                columns={columns}
                data={Filter}
                pagination
                highlightOnHover
                subHeader
                subHeaderComponent={
                  <div className="flex flex-row justify-center items-center gap-[57.8rem]">
                    <div className="font-bold flex flex-col justify-start gap-5">
                      <div>
                        <form className="flex fle-row justify-center items-center gap-2 max-w-sm mx-auto">
                          <select
                            value={search}
                            onChange={handleSelect}
                            id="countries"
                            className="bg-teal-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          >
                            <option selected value="">
                              Semua Kelas
                            </option>
                            {SumClass.map((item) => (
                              <option
                                className="bg-gray-50"
                                key={item.id}
                                value={item.class}
                              >
                                Kelas {item.class}
                              </option>
                            ))}
                          </select>
                        </form>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
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
                              className="block w-40 p-1 px-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                              placeholder="Nama / NISN"
                              required
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Video Modal"
        /* closeTimeoutMS={500} */
        className="flex justify-center items-center text-5xl p-5 rounded-md w-fit"
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.7)",
          },
          content: {
            zIndex: "9999",
            width: "80rem",
            height: "85vh",
            margin: "auto", // Center the modal horizontally
            padding: "0px",
            border: "none",
            overflow: "hidden",
            marginTop: "100px",
          },
        }}
      >
        <div
          style={{ animation: "dropTop .30s linear" }}
          className="flex flex-col justify-start items-center gap-2"
        >
          <h1 className="text-3xl text-center font-bold bg-indigo-500 p-5 w-fit rounded-md shadow-md">
            Panduan Media Pembelajaran <br /> BILANGAN BULAT
          </h1>

          <iframe
            className="w-[38rem] h-[25rem] rounded-md"
            loading="lazy"
            src="https://www.canva.com/design/DAGE6nXV6FY/o0-Xg_uhhv8oU5mEts8OVg/view?embed"
            allowFullScreen
          />
          <button
            onClick={() => setModalIsOpen(false)}
            className="text-base bg-red-500 p-2 w-fit rounded-md flex flex-col justify-center items-center gap-2"
          >
            <IoClose />
            Tutup
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default NOSSR;
