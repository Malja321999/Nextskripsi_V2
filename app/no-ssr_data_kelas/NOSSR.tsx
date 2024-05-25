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
  setDoc,
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
  const [CreateClass, setCreateClass] = useState("");

  const GetData = async () => {
    setIsLoading(true);
    setSync(true);
    const q = query(
      collection(firestore, "TokenClass"),
      orderBy("token", "asc")
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

  let NumberTabel = 1;

  const columns = [
    {
      name: "Kelas",
      selector: (row: any) => row.class,
      sortable: true,
    },
    {
      name: "Token",
      cell: (row: any) => (
        <div className="text-center font-bold text-xl">{row.token}</div>
      ),
    },
    {
      name: "TINDAKAN",
      cell: (row: any) => (
        <div className="flex flex-row justify-center items-center gap-2">
          <button
            className="text-white text-base p-2 bg-red-700 hover:bg-rose-500 w-fit rounded-md"
            onClick={() => handleDelete(row.class)}
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
        fontSize: "20px",
        border: "1px solid",
      },
    },
  };

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
      collection(firestore, "TokenClass"),
      where("class", "==", `${val}`)
    );
    const docRef = (await getDocs(db)).docs[0].ref;
    await deleteDoc(docRef);

    /* hapus data siswa ditabel */
    const newData = DataUsers.filter((item: any) => item.class !== val);
    setFilter(newData);

    /* relaod data siswa lagi */
    GetData();
    /*     window.location.reload();
     */
  };

  var token = "";

  async function FCreateClass(classInput: any) {
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 4; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
    const docRef = await addDoc(collection(firestore, "TokenClass"), {
      class: `${classInput}`,
      token: `${token}`,
    })
      .then((response) => {
        console.log("Berhasil membuat kelas", response);
        alert("Berhasil membuat kelas");
        GetData();
        setModalIsOpen(false);
        setCreateClass("");
      })
      .catch((error) => {
        console.log("Gagal membuat kelas, mohon coba kembali", error);
        alert("Gagal membuat kelas, mohon coba kembali");
      });
  }

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
                    <div className="font-bold flex flex-col justify-start gap-5"></div>
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
                      <div className="flex flex-row gap-2 justify-center items-center ">
                        <button
                          onClick={() => setModalIsOpen(true)}
                          className="bg-teal-400 flex flex-row justify-center items-center gap-2 p-2 rounded-md font-bold"
                        >
                          <span className="text-2xl">
                            <FaPlus />
                          </span>
                          Tambah Kelas
                        </button>
                        <button
                          onClick={() => {
                            GetData();
                            setSync(true);
                          }}
                          className="hover:text-blue-700 text-xl font-bold"
                        >
                          <FaSync
                            className={`text-xl rounded cursor-pointer block float-left mr-2 duration-5000 ${
                              sync && "animate-spin"
                            }`}
                          />
                        </button>
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
          className="rounded-md shadow-md p-5 text-black flex flex-col justify-center items-center gap-2 w-[40rem] h-[40rem]"
        >
          <div
            id="authentication-modal"
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden justify-center items-center w-full"
          >
            <div className="relative p-4">
              <div className="relative bg-white rounded-lg shadow h-[17rem]">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                  <h3 className="text-3xl font-semibold text-gray-900 ">
                    Data Kelas
                  </h3>
                  <button
                    onClick={() => setModalIsOpen(false)}
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="authentication-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="py-2 px-4">
                  <div className="py-4 border-b rounded-t">
                    <label
                      htmlFor="class"
                      className="text-xl block mb-2 font-medium text-gray-900"
                    >
                      Nama kelas
                    </label>
                    <input
                      value={CreateClass}
                      onChange={(e) => setCreateClass(e.target.value)}
                      type="text"
                      name="class"
                      id="class"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Kelas 7A"
                      required
                    />
                  </div>
                  <button
                    onClick={() => FCreateClass(CreateClass)}
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Buat Kelas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default NOSSR;
