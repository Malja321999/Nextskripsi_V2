import React, { useEffect, useState } from "react";
import { FaPlus, FaSync } from "react-icons/fa";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
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
import { useRouter } from "next/router";
import DataTable from "react-data-table-component";
import { TableStyles, Theme, Themes } from "./types.";

function NOSSR() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [IsLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [DataUsers, setDataUsers] = useState<DocumentData[]>([]);
  const [Filter, setFilter] = useState<DocumentData[]>([]);

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

  const columns = [
    {
      name: "nisn",
      selector: (row: any) => row.nisn,
    },
    {
      name: "nama",
      selector: (row: any) => row.fullname,
    },
    {
      name: "kelas",
      selector: (row: any) => row.class,
    },
    {
      name: "Tindakan",
      cell: (row: any) => (
        <div className="flex flex-row justify-center items-center gap-2">
          <Link
            href={`/no-ssr_data_siswa/${row.nisn}`}
            className="flex flex-row justify-center items-center gap-2 bg-teal-400 p-2 rounded-md font-bold"
          >
            <span className="text-2xl">
              <FaSync />
            </span>
            Edit
          </Link>
        </div>
      ),
    },
  ];
  const customStyles: TableStyles = {
    table: {
      style: {
        color: "white",
        backgroundColor: "black",
      },
    },
    tableWrapper: {
      style: {
        display: "table",
      },
    },
    responsiveWrapper: {
      style: {},
    },
    header: {
      style: {
        fontSize: "22px",
        color: "white",
        backgroundColor: "black",
        minHeight: "56px",
        paddingLeft: "16px",
        paddingRight: "8px",
      },
    },
    subHeader: {
      style: {
        backgroundColor: "black",
        minHeight: "52px",
      },
    },
    head: {
      style: {
        color: "white",
        fontSize: "12px",
        fontWeight: 500,
      },
    },
    headRow: {
      style: {
        backgroundColor: "black",
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
  };

  return (
    <div className="mt-5">
      <div className="px-3 py-0 w-[85rem] rounded-md">
        <div className="flex flex-row justify-between gap-[55rem]">
          <div></div>
          <button
            onClick={() => setModalIsOpen(true)}
            className="flex flex-row justify-center items-center gap-2 bg-teal-400 p-2 rounded-md font-bold"
          >
            <span className="text-2xl">
              <FaPlus />
            </span>
            Tambah Kelas
          </button>
        </div>

        <div className="mt-5 rounded-md overflow-y-auto h-[20rem]">
          <DataTable
            customStyles={customStyles}
            columns={columns}
            data={DataUsers}
            pagination
            highlightOnHover
            subHeader
            subHeaderComponent={
              <div className="flex flex-row justify-center items-center gap-[57.8rem]">
                <div></div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Cari..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="border-2 border-gray-400 bg-gray-50 rounded-md p-1 px-4 w-40"
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => setModalIsOpen(true)}
                      className="flex flex-row justify-center items-center gap-2 bg-teal-400 p-2 rounded-md font-bold"
                    >
                      <span className="text-2xl">
                        <FaPlus />
                      </span>
                      Tambah Kelas
                    </button>
                  </div>
                </div>
              </div>
            }
          />
        </div>
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
