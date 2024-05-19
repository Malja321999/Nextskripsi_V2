"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { firestore } from "../lib/firebase/init";
import { DocumentData, doc, getDoc } from "firebase/firestore";
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
  const [isLoading, setIsLoading] = useState(true);

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

  const getDataFirestore = async () => {
    const docRef = await doc(firestore, "DataUsers", `${userEmail}`);
    const docSnap = await getDoc(docRef);
    try {
      setSync(true);
      if (docSnap.exists()) {
        setsnapshotFirestore([docSnap.data()]); // Converting DocumentData to array and setting it
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
    setIsLoading(false);
    setTimeout(function () {
      setSync(false);
    }, 1000);
  };

  useEffect(() => {
    if (isLoading) {
      getDataFirestore();
    }
  });

  const dataFirestore = snapshotFirestore || {};
  const ObjectDataFirestore = Object.values(dataFirestore);
  console.log(dataFirestore);

  if (dataFirestore.length === 0) {
    getDataFirestore();
  }

  const router = useRouter();

  const [sync, setSync] = useState(false);

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
                <div>{userRole === "admin" ? "GURU" : "MURID"}</div>
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
            <li className="mt-[10rem] h-fit w-full text-start text-xl font-bold bg-rose-500 p-3 rounded-md">
              <button
                className="flex justify-start items-center gap-2"
                onClick={() => signOut()}
              >
                <BiLogOut />
                Logout
              </button>
            </li>
          </ul>
        </div>
        {/* Pengaturan */}
        <div className="w-[72rem] h-[37rem] bg-gradient-to-r from-purple-500 to-pink-500 p-5 rounded-md flex flex-col">
          <div className="text-black overflow-y-auto mb-5 rounded-md shadow w-full h-[80rem] border-4 border-gray-500">
            {ObjectDataFirestore.map((data) => (
              <table key={data.id} className="w-full h-full">
                <thead>
                  <tr className="p-5 rounded-md bg-teal-400 h-fit text-lg font-black justify-center items-center">
                    <th className="border border-slate-600 text-center p-3 px-5">
                      Kuis
                    </th>
                    <th className="flex flex-col justify-center items-center gap-1 border border-slate-600 text-center p-3 px-5">
                      <div className="flex flex-row justify-center items-center gap-10">
                        <button
                          onClick={() => {
                            getDataFirestore();
                            setSync(true);
                          }}
                          className="hover:text-blue-700 text-xl font-bold"
                        >
                          <FaSync
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
            ))}
          </div>
          <div className="p-5 rounded-md bg-gray-700 w-full h-fit text-xl font-black">
            <div className="flex justify-start items-center gap-2">
              <IoMdSettings />
              PENGATURAN AKUN
            </div>
          </div>
          <button
            onClick={() => router.push("/profile/changeusernamepassword")}
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
