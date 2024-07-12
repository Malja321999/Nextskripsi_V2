import { headers } from "next/headers";
import { it } from "node:test";
import React, { useEffect, useRef, useState } from "react";
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
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import { FaFilePdf, FaPrint } from "react-icons/fa";
import { usePDF } from "react-to-pdf";
import { useReactToPrint } from "react-to-print";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { SiMicrosoftexcel } from "react-icons/si";

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
      name: "NILAI",
      cell: (row: any) => (
        <div className="flex justify-center items-center font-bold text-lg">
          {GetScoreQuiz === "bab1_kuis" && <div>{row.bab1_kuis}</div>}
          {GetScoreQuiz === "bab2_kuis" && <div>{row.bab2_kuis}</div>}
          {GetScoreQuiz === "bab3_kuis" && <div>{row.bab3_kuis}</div>}
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

  const [GetScoreQuiz, setGetScoreQuiz] = useState("bab1_kuis");

  /* Fungsi PDF */
  const { toPDF, targetRef } = usePDF({
    filename: `${search || "Semua Kelas"}_${GetScoreQuiz || "bab1_kuis"}`,
  });

  /* Fungsi Excel */
  const ExportToExcel = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const ws = XLSX.utils.json_to_sheet(DataUsers);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(
      data,
      `${search || "Semua Kelas"}_${GetScoreQuiz || "bab1_kuis"}` +
        fileExtension
    );
  };

  /* Fungsi Print */
  const componentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current || null,
    documentTitle: `${search || "Semua Kelas"}_${GetScoreQuiz || "bab1_kuis"}`,
  });

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
            <div
              ref={(element) => {
                componentRef.current = element;
                targetRef.current = element;
              }}
              className="mt-5 rounded-md overflow-y-auto h-full"
            >
              <DataTable
                customStyles={customStyles}
                columns={columns}
                data={Filter}
                pagination
                highlightOnHover
                subHeader
                subHeaderComponent={
                  <div className="flex flex-row justify-center items-center gap-5">
                    {/* Atur Kelas yang akan ditampilkan */}
                    <div className="font-bold flex flex-col justify-start gap-5">
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

                    {/* Atur Kuis yang akan ditampilkan */}
                    <div>
                      <form className="max-w-sm mx-auto">
                        <div className="flex">
                          <button
                            id="states-button"
                            data-dropdown-toggle="dropdown-states"
                            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm text-center text-black font-bold bg-teal-400 border border-gray-300 rounded-s-lg hover:bg-teal-300 focus:ring-4 focus:outline-none focus:ring-gray-100"
                            type="button"
                          >
                            Kuis :
                          </button>

                          <label htmlFor="states" className="sr-only">
                            Pilih Kuis
                          </label>
                          <select
                            value={GetScoreQuiz}
                            onChange={(e) => setGetScoreQuiz(e.target.value)}
                            id="states"
                            className="bg-[#ffffff] border-2 border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100  border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          >
                            <option selected value="bab1_kuis">
                              Kuis Bab 1
                            </option>
                            <option value="bab2_kuis">Kuis Bab 2</option>
                            <option value="bab3_kuis">Kuis Bab 3</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    {/* Tomborl Export */}
                    <div className="flex flex-row items-center gap-2 font-bold text-gray-50">
                      {/* <button
                        onClick={() => toPDF()}
                        className="flex justify-center items-center gap-2 w-fit p-2 bg-rose-500 hover:bg-rose-400 rounded-md"
                      >
                        <FaFilePdf />
                        PDF
                      </button> */}
                      <button
                        onClick={() => ExportToExcel()}
                        className="flex justify-center items-center gap-2 w-fit p-2 bg-emerald-500 hover:bg-emerald-400 rounded-md"
                      >
                        <SiMicrosoftexcel />
                        EXCEL
                      </button>
                      <button
                        onClick={handlePrint}
                        className="flex justify-center items-center gap-2 w-fit p-2 bg-gray-400 hover:bg-gray-300 rounded-md"
                      >
                        <FaPrint />
                        PRINT
                      </button>
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
