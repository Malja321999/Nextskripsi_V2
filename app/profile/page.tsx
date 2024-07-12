"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { firestore } from "../lib/firebase/init";
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Image from "next/image";
import { IoMdSettings } from "react-icons/io";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";
import { GrNext } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { FaSync } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";

export default function ProfilePage() {
  const [adagambar, setAdagambar] = useState(false);
  const imageProfilUrl =
    "https://i.pinimg.com/736x/ab/f4/24/abf4246c960d5c90fe27a1bdf262a3f8.jpg";

  const [open, setOpen] = React.useState(0);
  const { data: session }: { data: any } = useSession();
  let isLoading = false;
  let sync = false;

  /* Get Data Firestore */
  const [snapshotFirestore, setsnapshotFirestore] = useState<DocumentData[]>(
    []
  ); // Explicitly typing the state as DocumentData array

  const user = session?.user;
  const userName = session?.user?.fullname;
  const userRole = session?.user?.role;
  const userEmail = session?.user?.email;
  const userClass = session?.user?.class;
  const userNisn = session?.user?.nisn;
  console.log({ user });

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
  };

  useEffect(() => {
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useRouter();

  if (snapshotFirestore.length === 0) {
    GetData();
  }

  return (
    <div className="flex justify-start items-start h-screen mt-28">
      <div className="flex gap-5 px-5">
        {/* Profile */}
        <div className="p-5 w-[20rem] h-[37rem] flex justify-start items-start bg-[url('/profileBackground.png')] rounded-3xl">
          <ul className="flex flex-col gap-5 mx-auto">
            <li>
              {!adagambar ? (
                <Image
                  src="/defaultprofile.png"
                  alt="defaultprofile"
                  width={100}
                  height={100}
                  className="w-[10vh] h-auto bg-white rounded-full border-4 border-white"
                />
              ) : (
                <Image
                  src={`${imageProfilUrl}`}
                  alt="foto gue"
                  width={100}
                  height={100}
                  className="w-[10vh] h-auto rounded-full border-4 border-white"
                />
              )}
            </li>
            <li className="text-start">
              <h1 className="font-bold text-2xl mb-2 mt-2 flex flex-row justify-start items-center gap-2">
                <div>
                  {userRole === "admin" ? <GiTeacher /> : <PiStudentFill />}
                </div>
                <div>{userRole === "admin" ? "GURU" : "SiSWA"}</div>
              </h1>
              <h1 className="font-bold text-2xl mb-2 mt-2">{userName}</h1>
              <h2 className="text-sm mb-2 mt-2 text-gray-400">
                <span className="font-bold">
                  {userRole === "admin" ? "NIP :" : "NISN :"}
                </span>
                {userNisn}
              </h2>
              <div className="h-1 w-[17rem] bg-white rounded-md"></div>
              <h6 className="mt-10">
                <span className="font-bold text-lg">Email : </span>
                {userEmail} <br />
                <span className="font-bold text-lg">Kelas : </span>
                {userClass}
              </h6>
            </li>
            <button
              className="mt-[10rem] h-fit w-full text-start text-xl font-bold bg-rose-500 p-3 rounded-md flex justify-start items-center gap-2"
              onClick={() => signOut()}
            >
              <BiLogOut />
              Logout
            </button>
          </ul>
        </div>
        {/* Pengaturan */}
        <div className="w-[72rem] h-[37rem] bg-gradient-to-r from-purple-500 to-pink-500 p-5 rounded-md flex flex-col">
          <div className="text-black overflow-hidden mb-5 rounded-md shadow w-full h-[80rem] border-4 border-gray-500">
            {snapshotFirestore.map((data) => (
              <table key={data.id} className="w-full h-full text-4xl">
                <thead>
                  <tr className="p-5 rounded-md bg-teal-400 h-fit font-black justify-center items-center">
                    <th className="border border-slate-600 text-center p-3 px-5">
                      Kuis
                    </th>
                    <th className="flex flex-col justify-center items-center gap-1 border border-slate-600 text-center p-3 px-5">
                      <div className="flex flex-row justify-center items-center gap-10">
                        <button
                          onClick={() => {
                            GetData();
                          }}
                          className="hover:text-blue-700 text-xl font-bold"
                        >
                          <Image
                            src={"/nilai.png"}
                            alt="sync"
                            width={70}
                            height={70}
                            className={`text-4xl rounded cursor-pointer block float-left mr-2 duration-5000 ${
                              sync && "animate-spin"
                            }`}
                          />
                        </button>
                      </div>
                      <div>Nilai</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-left font-bold text-3xl">
                  <tr className={`border-b bg-gray-100 `}>
                    <td className="border border-slate-600 p-3 px-5">
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
                    <td className="border border-slate-600 p-3 px-5">
                      BAB 2 Penjumlahan dan Pengurangan Bilangan Bulat
                    </td>
                    <td className="border border-slate-600 p-3 px-5 text-center">
                      {data.bab2_kuis}
                    </td>
                  </tr>

                  <tr className={`border-b bg-gray-100`}>
                    <td className="border border-slate-600 p-3 px-5">
                      BAB 3 Perkalian dan Pembagian Bilangan Bulat
                    </td>
                    <td className="border border-slate-600 p-3 px-5 text-center">
                      {data.bab3_kuis}
                    </td>
                  </tr>
                  <tr className={`border-b bg-gray-300`}>
                    <td className="border border-slate-600 p-3 px-5">
                      Ujian Akhir
                    </td>
                    <td className="border border-slate-600 p-3 px-5 text-center">
                      {data.ujian_akhir}
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
          <div className="p-5 rounded-md bg-gray-700 w-full h-fit text-xl font-black">
            <div className="flex justify-start items-center gap-2">
              <IoMdSettings />
              PENGATURAN AKUN
            </div>
          </div>
          <button
            onClick={() =>
              router.push("/profile/changeusernamepassword/GantiNama")
            }
            className="flex justify-between items-center gap-2 p-5 rounded-md bg-gray-600 text-xl font-black mb-1 mt-1"
          >
            Ganti Nama Pengguna Dan Kata Sandi
            <GrNext />
          </button>
          {/* <button
            onClick={() => router.push("/profile/changepassword")}
            className="flex justify-between items-center gap-2 p-5 rounded-md bg-gray-600 text-xl font-black mb-1"
          >
            Ganti Password
            <GrNext />
          </button> */}
        </div>
      </div>
    </div>
  );
}
