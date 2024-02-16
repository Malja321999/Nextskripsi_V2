"use client";
import { useSession } from "next-auth/react";
import { child, get, getDatabase, ref } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import app, { firestore } from "../lib/firebase/init";
import { DocumentData, doc, getDoc } from "firebase/firestore";

export default function ProfilePage() {
  const { data: session }: { data: any } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  /* Get Data Firestore */
  const [snapshotFirestore, setsnapshotFirestore] = useState<DocumentData[]>(
    []
  ); // Explicitly typing the state as DocumentData array

  const userEmail = session?.user?.email;
  console.log({ userEmail });

  const fetchData = async () => {
    const docRef = doc(firestore, `${userEmail}`, "DataUsers");
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
  };

  useEffect(() => {
    if (isLoading) {
      fetchData();
    }
  });

  const dataFirestore = snapshotFirestore || {};
  const ObjectDataFirestore = Object.values(dataFirestore);
  console.log(ObjectDataFirestore);

  /* Get Data Realtime */
  const isEmpty = useRef(false);
  const snapshot = useRef(null);
  const error = useRef(null);

  const username = session?.user?.fullname.toUpperCase();
  console.log({ username });

  const path = `/users/${username}` || "";
  console.log({ path });

  const getValue = async () => {
    console.log({ path });
    if (path !== "/users/undefined") {
      try {
        const database = getDatabase(app);
        const rootReference = ref(database);
        const dbGet = await get(child(rootReference, path));
        const dbValue = dbGet.val();
        const dbExists = dbGet.exists();
        if (!dbExists) {
          isEmpty.current = true;
        }
        snapshot.current = dbValue;
      } catch (getError: any) {
        error.current = getError.message;
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const dataPost = snapshot || {};
  const ObjectData = Object.values(dataPost);
  console.log(ObjectData);

  return (
    <div className="flex justify-center items-center place-items-center text-center rounded-md h-screen mt-10 p-20 flex-col font-bold">
      {/* {isLoading && <h4>Fetching data...</h4>} */}
      <h1 className="text-9xl text-indigo-500">PROFILE</h1>
      <h2 className="text-5xl text-rose-400">
        {ObjectDataFirestore !== null &&
          ObjectDataFirestore.map((data, index) => (
            <div key={index}>Firestore : {data?.fullname}</div>
          ))}
      </h2>
      <h2 className="text-5xl text-sky-400">
        {ObjectData !== null &&
          ObjectData.map((data, index) => (
            <div key={index}>Realtime : {data?.fullname}</div>
          ))}
      </h2>
    </div>
  );
}
