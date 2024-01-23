"use client";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session }: { data: any } = useSession();
  return (
    <div className="flex justify-center items-center place-items-center text-center rounded-md h-screen mt-10 p-20 flex-col font-bold select-none">
      <h1 className="text-9xl text-indigo-500">PROFILE</h1>
      <h2 className="text-5xl text-emerald-400">{session?.user?.fullname}</h2>
    </div>
  );
}
