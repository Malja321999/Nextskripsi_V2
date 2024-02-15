"use client";
import { useSession } from "next-auth/react";
import { get, ref } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import UpdateDataUsers from "@/app/lib/firebase/UpdateDataUsers";
import { database, firestore } from "../lib/firebase/init";
import { doc, getDoc } from "firebase/firestore";
import { fetchData } from "next-auth/client/_utils";

export default function ProfilePage() {
  const { data: session }: { data: any } = useSession();

  const [fullnameDB, setFullnameDB] = useState([]);

  const username = session?.user?.fullname || "WaitDataUsers";

  const userEmail = session?.user?.email || "WaitDataUsers";

  const fetchData = async () => {
    const docRef = doc(firestore, `${userEmail}`, "DataUsers");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const response = docSnap.data().fullname;
      const data = await response;
      setFullnameDB(data);
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    fetchData();
  });

  console.log({ fullnameDB });
  return (
    <div className="flex justify-center items-center place-items-center text-center rounded-md h-screen mt-10 p-20 flex-col font-bold">
      {/* {isLoading && <h4>Fetching data...</h4>} */}
      <h1 className="text-9xl text-indigo-500">PROFILE</h1>
      <h2 className="text-5xl text-emerald-400">{fullnameDB}</h2>
      <div className="grid grid-cols-3 gap-3"></div>
    </div>
  );
}
