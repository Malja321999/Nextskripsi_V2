"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
    /*   reset(); */
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center bg-rose-500 text-center rounded-md h-screen mt-10 p-20 gap-5">
      <h1 className=" text-center text-9xl p-5 rounded-md w-fit">
        Something went wrong!
      </h1>
      <button
        onClick={() => reset()}
        className="bg-emerald-500 p-5 rounded-full border border-gray-500 w-fit text-center hover:bg-emerald-400 text-5xl"
      >
        Try Again
      </button>
    </div>
  );
}
