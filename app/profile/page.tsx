"use client";
import { useSession } from "next-auth/react";
import { get, ref } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import UpdateDataUsers from "@/app/lib/firebase/UpdateDataUsers";
import { database } from "../lib/firebase/init";

export default function ProfilePage() {
  const { data: session }: { data: any } = useSession();

  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    const userRef = ref(database, "users");
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...(data as object), // Explicitly type data as object before spreading its properties
            })
          );
          setUsers(userArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const fullname = session?.user?.fullname || "update terakhir data users";

  const path = `users/${fullname}`;
  if (fullname !== "update terakhir data users") {
    const value = {
      fullname: fullname,
      createdAt: new Date(),
      updatedAt: new Date(),
      categories: "Alhamdulillah SDH BISA!",
    };
    UpdateDataUsers(path, value);
  }

  return (
    <div className="flex justify-center items-center place-items-center text-center rounded-md h-screen mt-10 p-20 flex-col font-bold select-none">
      {/* {isLoading && <h4>Fetching data...</h4>} */}
      <h1 className="text-9xl text-indigo-500">PROFILE</h1>
      <h2 className="text-5xl text-emerald-400">{session?.user?.fullname}</h2>
      <div className="grid grid-cols-3 gap-3">
        {users.map((user: any) => (
          <div key={user.fullname}>
            <div>{user.fullname}</div>
            <div>{user.categories}</div>
            <div>{user.createdAt}</div>
            <div>{user.updatedAt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
