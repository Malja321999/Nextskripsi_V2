"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Bilcon from "../asset/Bilcon.svg";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { MdAccountCircle } from "react-icons/md";
import ThemeSwitch from "./ThemeSwitch";
import { firestore } from "../lib/firebase/init";
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useAppContext } from "../context/AppWrapper";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();

  const { data: session, status }: { data: any; status: string } = useSession();
  const username = session?.user?.fullname;

  let isLoading = false;
  let sync = false;

  const user = session?.user;
  const userName = session?.user?.fullname;
  const userRole = session?.user?.role;
  const userEmail = session?.user?.email;
  const userClass = session?.user?.class;
  const userNisn = session?.user?.nisn;
  console.log({ user });

  const { UpdateUserName, setUpdateUserName } = useAppContext();

  /* Get Data Firestore */
  const [snapshotFirestore, setsnapshotFirestore] = useState<DocumentData[]>(
    []
  ); // Explicitly typing the state as DocumentData array

  const GetData = async () => {
    isLoading = true;
    sync = true;
    const db = query(
      collection(firestore, "users"),
      where("email", "==", `${userEmail}`)
    );
    const snapshot = await getDocs(db);
    try {
      if (snapshot.empty) {
        console.log("No such document!");
      } else {
        setsnapshotFirestore(snapshot.docs.map((doc) => doc.data()));
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
    isLoading = false;
    sync = false;
    setUpdateUserName(false);
  };

  useEffect(() => {
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (snapshotFirestore.length === 0) {
    GetData();
  }

  if (UpdateUserName) {
    GetData();
  }

  return (
    <div>
      <nav className="fixed w-max-screen md:w-full h-auto md:h-[91px] bg-indigo-600 top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <div>
                  <Image
                    src={Bilcon}
                    alt="Bilcon"
                    className="w-8 h-5 dark:text-white"
                  />
                  <div
                    className={`${
                      pathname === "/" ? "text-teal-300" : "text-white"
                    } text-xl font-bold hover:text-teal-200`}
                  >
                    BILANGAN BULAT
                  </div>
                </div>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-teal-500 rounded-md outline-none focus:border-white focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <IoMdClose size={20} /> : <FaBars size={20} />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto md:flex md:flex-row flex flex-col items-center">
                <li className="text-xl">
                  {session?.user?.role === "admin" ? (
                    <Link href="/halaman_guru/data_siswa">
                      <span
                        className={`${
                          pathname === "/halaman_guru/data_siswa" ||
                          pathname === "/halaman_guru/data_kelas" ||
                          pathname === "/halaman_guru/data_hasil_kuis" ||
                          pathname === "/halaman_guru/data_ujian_akhir"
                            ? "text-teal-300"
                            : "text-white"
                        } pb-1 text-xl py-2 px-6 text-center  hover:bg-teal-500 border-teal-500 md:hover:text-teal-200 md:hover:bg-transparent rounded-md`}
                      >
                        Halaman Guru
                      </span>
                    </Link>
                  ) : null}
                </li>
                <li>
                  <Link href="/capem">
                    <span
                      className={`${
                        pathname === "/capem" ||
                        pathname === "/tujuan" ||
                        pathname === "/peta"
                          ? "text-teal-300"
                          : "text-white"
                      } pb-1 text-xl py-2 px-6 text-center  hover:bg-teal-500 border-teal-500 md:hover:text-teal-200 md:hover:bg-transparent rounded-md`}
                    >
                      Kurikulum
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/bab1_1">
                    <span
                      className={`${
                        pathname === "/bab1_1" ? "text-teal-300" : "text-white"
                      } pb-1 text-xl py-2 px-6 text-center  hover:bg-teal-500 border-teal-500 md:hover:text-teal-200 md:hover:bg-transparent rounded-md`}
                    >
                      Materi
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/profile">
                    <span
                      className={`${
                        pathname === "/profile" ||
                        pathname ===
                          "/profile/changeusernamepassword/GantiNama" ||
                        pathname ===
                          "/profile/changeusernamepassword/GantiSandi"
                          ? "text-teal-300"
                          : "text-white"
                      } pb-1 text-xl py-2 md:px-6 text-center   hover:bg-teal-500  border-teal-500  md:hover:text-teal-200 md:hover:bg-transparent rounded-md`}
                    >
                      Profil
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span
                      className={`${
                        pathname === "/about" ? "text-teal-300" : "text-white"
                      } pb-1 text-xl py-2 md:px-6 text-center   hover:bg-teal-500  border-teal-500  md:hover:text-teal-200 md:hover:bg-transparent rounded-md`}
                    >
                      Tentang
                    </span>
                  </Link>
                </li>

                <li>
                  {status === "authenticated" ? (
                    <Link href="/profile">
                      <div className="flex flex-col item-center text-center md:rounded-md md:bg-inherit bg-sky-500 md:w-auto w-fit rounded-md md:p-1 p-5 -mt-1">
                        <div className="flex justify-center items-center">
                          <MdAccountCircle className="w-[5vh] h-auto bg-black rounded-full" />
                        </div>
                        <h4>
                          {snapshotFirestore.map((data) => (
                            <div key={data.id}>{data.fullname}</div>
                          ))}
                        </h4>
                        <button onClick={() => signOut()}>
                          <span className="pb-1 py-2 md:px-6 text-center font-bold hover:bg-indigo-500 border-teal-500 text-rose-400 hover:text-rose-300 md:hover:bg-transparent rounded-md">
                            Logout
                          </span>
                        </button>
                      </div>
                    </Link>
                  ) : (
                    <button onClick={() => signIn()}>
                      <span className="">Login</span>
                    </button>
                  )}
                </li>
                <li className="w-28 text-xl text-white py-2 px-6 text-center border-teal-500  rounded-md">
                  {/* <div
                    className="relative justify-end w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    <FaMoon className="text-white" size={18} />
                    <div
                      className="absolute bg-white w-6 h-6 rounded-full transform transition-transform duration-300"
                      style={darkMode ? { left: "2px" } : { right: "px" }}
                    ></div>
                    <BsSunFill className="ml-auto text-yellow-400" size={18} />
                  </div> */}
                  <ThemeSwitch />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
