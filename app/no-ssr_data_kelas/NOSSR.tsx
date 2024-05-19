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

function NOSSR({ modalIsOpen, setModalIsOpen }: any) {
  const [DataUsers, setDataUsers] = useState<DocumentData[]>([]);

  useEffect(() => {
    const GetData = async () => {
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
  }, []);

  console.log(DataUsers);

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

          {/* <DataTable
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
          /> */}
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
