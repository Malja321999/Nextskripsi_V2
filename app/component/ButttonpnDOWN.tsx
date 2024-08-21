import React from "react";
import Link from "next/link";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";

const ButttonpnDOWN = ({ p, n }: any) => {
  return (
    <div className="flex justify-between mt-1">
      <Link href={p}>
        <div className="bg-blue-700 hover:bg-blue-600 p-2 rounded-md flex justify-between text-xl">
          <MdSkipPrevious className={"mt-[4px]"} />
          Sebelumnya
        </div>
      </Link>
      <Link href={n}>
        <div className="bg-blue-700 hover:bg-blue-600 p-2 rounded-md flex justify-between text-xl">
          Selanjutnya
          <MdSkipNext className={"mt-[4px]"} />
        </div>
      </Link>
    </div>
  );
};

export default ButttonpnDOWN;
