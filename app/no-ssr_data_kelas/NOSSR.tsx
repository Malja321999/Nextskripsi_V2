import { headers } from "next/headers";
import { it } from "node:test";
import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { FaPlus, FaSync } from "react-icons/fa";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

function NOSSR({ modalIsOpen, setModalIsOpen }: any) {
  const [data, setData] = useState<any>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<any>([]);

  const getData = async () => {
    try {
      const req = await fetch("https://fakestoreapi.com/products");
      const res = await req.json();
      setData(res);
      setFilter(res);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);
  console.log(filter);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const result = data.filter((item: any) => {
      return item.name.toLowerCase().match(search.toLowerCase());
    });
    setFilter(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const columns = [
    {
      name: "Nama Barang",
      selector: (row: any) => row.title,
    },
    {
      name: "NISN",
      selector: (row: any) => row.nisn,
      sortable: true,
    },
    {
      name: "Nama",
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: "Kelas",
      selector: (row: any) => row.class,
      sortable: true,
    },
    {
      name: "Tindakan",
      cell: (row: any) => (
        <div className="flex flex-row justify-start items-start gap-2">
          {/* <button
            type="button"
            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Ubah
          </button> */}
          <button
            type="button"
            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleDelete(row.id)}
          >
            Hapus
          </button>
        </div>
      ),
    },
  ];

  const handleDelete = (val: any) => {
    const newData = data.filter((item: any) => item.id !== val);
    setData(newData);
  };

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#2dd4bf",
        fontSize: "20px",
      },
    },
    pagination: {
      style: {
        color: "blue",
        borderRadius: "10px",
      },
    },
    rows: {
      style: {
        minHeight: "34px", // override the row height
      },
    },
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
                  Kuis
                </th>
                <th className="flex flex-col justify-center items-center gap-1 border border-slate-600 text-center p-3 px-5">
                  <div className="flex flex-row justify-center items-center gap-10">
                    <button className="hover:text-blue-700 text-xl font-bold">
                      <FaSync />
                    </button>
                  </div>
                  <div>Nilai</div>
                </th>
              </tr>
            </thead>
            <tbody className="font-bold ">
              <tr className={`border-b bg-gray-100 `}>
                <td className="border border-slate-600 p-3 px-5 text-center">
                  BAB 1 Bilangan Positif Dan Negatif
                </td>
                <td className="border border-slate-600 p-3 px-5 text-center">
                  {data.bab1_kuis}
                </td>
              </tr>
              <tr
                className={`border-b  bg-gray-300
                    `}
              >
                <td className="border border-slate-600 p-3 px-5 text-center">
                  BAB 2 Penjumlahan dan Pengurangan Bilangan Bulat
                </td>
                <td className="border border-slate-600 p-3 px-5 text-center">
                  {data.bab2_kuis}
                </td>
              </tr>

              <tr className={`border-b bg-gray-100`}>
                <td className="border border-slate-600 p-3 px-5 text-center">
                  BAB 3 Perkalian dan Pembagian Bilangan Bulat
                </td>
                <td className="border border-slate-600 p-3 px-5 text-center">
                  {data.bab3_kuis}
                </td>
              </tr>
              <tr className={`border-b bg-gray-300`}>
                <td className="border border-slate-600 p-3 px-5 text-center">
                  Ujian Akhir
                </td>
                <td className="border border-slate-600 p-3 px-5 text-center">
                  {data.ujian_akhir}
                </td>
              </tr>
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
