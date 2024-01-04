"use client";
import Link from "next/link";
import { useState } from "react";
import NavBar from "../component/Navbar";

const Watch = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="my-40 mx-auto h-96 w-96 flex justify-center items-center">
        <ul>
          <li>
            <h1 className="text-3xl font-bold bg-teal-600 mt-24 text-center rounded-md p-2 shadow-2xl">
              Bilangan Bulat
            </h1>
            <div className="bg-indigo-500 md:w-[485px] w-[350px] h-auto p-5 shadow-2xl my-3 rounded-lg">
              <div className="flex items-center justify-center">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/cQAwIhfC6Dg?si=hIOwWb22YP9Aw4aH"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <h1 className="my-2 text-xl text-center font-bold text-teal-500 bg-white rounded-full md:w-[450px] w-auto h-auto p-2 border-2 border-teal-500">
                <span className="mx-auto">
                  Apa yang Dimaskud Dengan Bilangan Bulat?
                </span>
              </h1>
              <p className="text-justify">
                Video diatas merupakan penjelasan singkat tentang Materi
                Bilangan Bulat secara keseluruhan yang akan di pelajari dalam
                media pelajaran ini.
              </p>
              <Link href={"/login"}>
                <button className="font-bold cursor-pointer bg-teal-500 rounded-lg p-1 shadow-inner md:w-96 w-80 md:mx-8 mx-auto flex items-center justify-center">
                  Let's go to try
                </button>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Watch;
