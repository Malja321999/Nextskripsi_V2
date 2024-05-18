import { headers } from "next/headers";
import { it } from "node:test";
import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";

function NOSSR() {
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
    <div className="px-3 py-0 w-[85rem] rounded-md">
      <div className="flex flex-row justify-center items-center gap-[55rem]">
        {/* select class */}

        <div className="mb-5 flex flex-row justify-center items-center gap-2"></div>
      </div>

      <div className="rounded-md overflow-y-auto h-[31rem]">
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
      </div>
    </div>
  );
}

export default NOSSR;
