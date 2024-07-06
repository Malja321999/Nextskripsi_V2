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
    <div className="bg-white flex flex-col gap-2 justify-center items-center place-items-center text-center rounded-md h-screen p-20">
      <h1 className="bg-rose-500 text-center text-9xl p-5 rounded-md w-fit">
        Something went wrong!
      </h1>
      <button
        onClick={() => reset()}
        className="bg-sky-500 p-5 rounded-md w-fit text-center hover:bg-teal-500"
      >
        Try Again
      </button>
    </div>
  );
}
