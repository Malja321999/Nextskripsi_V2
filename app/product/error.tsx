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
    <div className="flex flex-col justify-center place-items-center h-screen w-screen gap-5">
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
