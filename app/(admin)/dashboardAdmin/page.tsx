"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status }: any = useSession();
  const router = useRouter();
  console.log(session);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(
        "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F"
      );
    } else if (status === "authenticated") {
      if (session?.user?.role !== "admin") {
        router.push("/");
      }
    }
  }, [router, session?.user?.role, status]);
  return (
    <div className="w-full h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      <h1 className="font-bold text-9xl text-indigo-500">Dashboard</h1>
    </div>
  );
}
