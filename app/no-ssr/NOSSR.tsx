import React from "react";
import DataTable, { createTheme } from "react-data-table-component";

function NOSSR() {
  const dataStudents = [
    {
      nisn: "1111",
      name: "Jamal",
      class: "A",
    },
    {
      nisn: "1999",
      name: "TBA32",
      class: "B",
    },
    {
      nisn: "1985",
      name: "Rafa",
      class: "C",
    },
    {
      nisn: "2000",
      name: "Siti",
      class: "D",
    },
    {
      nisn: "2002",
      name: "Budi",
      class: "E",
    },
  ];

  const number = dataStudents.length;

  const columns = [
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
      cell: () => (
        <div className="flex flex-row justify-start items-start gap-2">
          <button
            type="button"
            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Ubah
          </button>
          <button
            type="button"
            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Hapus
          </button>
        </div>
      ),
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#2dd4bf",
        color: "black",
      },
    },
    rows: {
      style: {
        minHeight: "50px",
        fontSize: "16px", // override the row height
      },
    },
    pagination: {
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: "5px",
        color: "black",
      },
    },
  };
 
  return (
    <div className="px-3 py-4 w-[85rem] rounded-md">
      <DataTable customStyles={customStyles} columns={columns} data={dataStudents} pagination selectableRows />
    </div>
  );
}

export default NOSSR;
