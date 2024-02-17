"use client";
import { useSession } from "next-auth/react";
import { child, get, getDatabase, ref } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import { firestore } from "../lib/firebase/init";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";
import { IoMdSettings } from "react-icons/io";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";

export default function ProfilePage() {
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

  const [adagambar, setAdagambar] = useState(false);
  const imageProfilUrl =
    "https://i.pinimg.com/736x/ab/f4/24/abf4246c960d5c90fe27a1bdf262a3f8.jpg";

  function Icon({ id, open }: any) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex justify-start items-start h-screen mt-28">
      <div className="flex gap-5 px-5">
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
        <div className="w-[72rem] h-[37rem] bg-gradient-to-r from-purple-500 to-pink-500 p-5 rounded-md flex flex-col">
          <div className="p-5 rounded-md bg-gray-700 w-full h-fit  text-xl font-black justify-center items-center">
            <div className="flex justify-start items-center gap-2">
              <IoMdSettings />
              PENGATURAN AKUN
            </div>
          </div>
          <>
            <Accordion
              open={open === 1}
              icon={<Icon id={1} open={open} />}
              placeholder={undefined}
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                placeholder={undefined}
                className="mt-5 p-5 rounded-md bg-gray-700 w-full h-fit"
              >
                Ubah profil
              </AccordionHeader>
              <AccordionBody className="mt-1 p-5 rounded-md bg-gray-600 w-full h-fit">
                Ganti Username
              </AccordionBody>
            </Accordion>
          </>
        </div>
      </div>
    </div>
  );
}
