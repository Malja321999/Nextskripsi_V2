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

  const userEmail = session?.user?.email;
  const userName = session?.user?.fullname;
  console.log({ userEmail });

  const getDataFirestore = async () => {
    const docRef = doc(firestore, "DataUsers", `${userEmail}`);
    const docSnap = await getDoc(docRef);
    try {
      if (docSnap.exists()) {
        setsnapshotFirestore([docSnap.data()]); // Converting DocumentData to array and setting it
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoading) {
      getDataFirestore();
    }
  });

  const dataFirestore = snapshotFirestore || {};
  const ObjectDataFirestore = Object.values(dataFirestore);
  console.log(ObjectDataFirestore);

  const router = useRouter();

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
              <h1 className="font-bold text-2xl mb-2 mt-2">{userName}</h1>
              <div className="h-1 w-[17rem] bg-white rounded-md"></div>
              <h6 className="mt-10">
                <span className="font-bold text-lg">Email : </span> <br />
                {userEmail}
              </h6>
            </li>
            <li className="mt-60 h-fit w-full text-start text-xl font-bold bg-rose-500 p-3 rounded-md">
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
          <div>
            <div className="p-5 rounded-md bg-gray-700 w-full h-fit text-lg font-black justify-center items-center">
              <div className="flex justify-center items-center gap-[40rem]">
                <div>HALAMAN BAB</div>
                <div>NILAI</div>
              </div>
            </div>
            <div>{ObjectDataFirestore === null && "Loading data..."}</div>
            <div className="p-5 rounded-md bg-gray-500 w-full h-fit mb-5 text-base text-center">
              {ObjectDataFirestore.map((data) => (
                <div key={data.id}>
                  <div className="flex justify-between items-center mb-2 bg-rose-700 h-5">
                    <div className="pl-40">BAB 1</div>
                    <div className="pr-10">{data.bab1_kuis}</div>
                  </div>
                  <div className="flex justify-between items-center mb-2 bg-emerald-700 h-5">
                    <div className="pl-40">BAB 2</div>
                    <div className="pr-10">{data.bab2_kuis}</div>
                  </div>
                  <div className="flex justify-between items-center mb-2 bg-blue-700 h-5">
                    <div className="pl-40">BAB 3</div>
                    <div className="pr-10">{data.bab3_kuis}</div>
                  </div>
                  <div className="flex justify-between items-center mb-2 bg-fuchsia-600 h-5">
                    <div className="pl-40">BAB 4</div>
                    <div className="pr-10">{data.bab4_kuis}</div>
                  </div>
                </div>
              ))}
            </div>
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
