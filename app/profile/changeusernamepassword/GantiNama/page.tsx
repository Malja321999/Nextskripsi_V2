"use client";
import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { firestore } from "@/app/lib/firebase/init";
import {
  collection,
  doc,
  DocumentData,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@material-tailwind/react";
import { usePathname, useRouter } from "next/navigation";
import { FaBars, FaUser } from "react-icons/fa";
import Link from "next/link";
import { RiLockPasswordLine } from "react-icons/ri";

const GantiNama = () => {
  const { data: session }: { data: any } = useSession();

  const router = useRouter();

  const [Collapse, setCollapse] = useState(true);

  const pathname = usePathname();

  let isLoading = false;

  /* Get Data Firestore */
  const [snapshotFirestore, setsnapshotFirestore] = useState<DocumentData[]>(
    []
  ); // Explicitly typing the state as DocumentData array

  const user = session?.user;
  const userEmail = session?.user?.email;
  console.log({ user });

  const GetData = async () => {
    isLoading = true;
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
  };

  useEffect(() => {
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (snapshotFirestore.length === 0) {
    GetData();
  }

  console.log({ snapshotFirestore });

  type Inputs = {
    fullname: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    unregister,
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const usernameHandleSubmit = async (e: any) => {
    if (e) {
      const q = query(
        collection(firestore, "users"),
        where("email", "==", userEmail)
      );
      const shapshot = await getDocs(q);
      const user = shapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(user[0]);
      if (user) {
        const ref = doc(firestore, "users", `${user[0].id}`);
        updateDoc(ref, {
          fullname: e.fullname,
        })
          .then((response) => {
            console.log("success update username", response);
            alert(
              "Berhasil memperbarui nama pengguna, Silakan login lagi untuk menerapkan semua perubahan"
            );
            GetData();
            reset();
          })
          .catch((error) => {
            console.log("failed update username", error);
            alert("gagal memperbarui nama pengguna");
          });
      } else {
        alert("tidak ada user");
      }
    }
  };

  return (
    <div className="flex flex-row justify-start items-center gap-7 w-full">
      {/* Sidebar */}
      <div className="flex justify-left items-center">
        <div
          className={`${
            Collapse ? "w-[15rem]" : "w-[5rem]"
          } transition-all duration-300 transform shadow-lg peer-checked:translate-x-0 bg-indigo-600 p-5 rounded-md h-screen flex justify-left items-start mt-[4.5rem]
          `}
        >
          <div>
            {/* button sidebar */}
            <div className={`${!Collapse && "ml-[5px]"}`}>
              <button
                className="text-4xl text-teal-200"
                onClick={() => setCollapse(!Collapse)}
              >
                <FaBars />
              </button>
            </div>

            <div
              className={`flex flex-col mt-10 ${
                !Collapse ? "gap-6" : "gap-10"
              }`}
            >
              {/* button Menu */}
              <Link href="/profile/changeusernamepassword/GantiNama">
                <button
                  className={`${
                    pathname === "/profile/changeusernamepassword/GantiNama" &&
                    "bg-teal-500"
                  }  rounded-md p-2 hover:bg-teal-400 text-2xl flex justify-start items-center ${
                    Collapse ? "flex-row gap-2" : "flex-col gap-0"
                  } `}
                >
                  <div>
                    <FaUser />
                  </div>
                  <div className={` ${!Collapse && "text-xs"}`}>Ganti Nama</div>
                </button>
              </Link>
              <Link href="/profile/changeusernamepassword/GantiSandi">
                <button
                  className={`${
                    pathname === "/profile/changeusernamepassword/GantiSandi" &&
                    "bg-teal-500"
                  } rounded-md p-2 hover:bg-teal-400 text-2xl flex justify-start items-center ${
                    Collapse ? "flex-row gap-2" : "flex-col gap-0"
                  } `}
                >
                  <div className="font-bold">
                    <RiLockPasswordLine />
                  </div>
                  <div className={` ${!Collapse && "text-xs"}`}>
                    Ganti Sandi
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* content menu */}
      <div className="flex flex-col gap-5 mx-auto w-1/2">
        {snapshotFirestore.map((data) => (
          <div
            key={data.id}
            className="text-black mx-40 flex flex-col justify-center items-center gap-2 bg-teal-500 p-5 rounded-md w-fit text-5xl"
          >
            <div>Nama pengguna : </div>
            <div className="font-bold">{data.fullname}</div>
          </div>
        ))}
        <div className="flex flex-col text-black h-fit rounded-md bg-gray-100 shadow-lg justify-center items-center">
          <div className="h-28 w-full justify-center flex items-center">
            <span className="text-3xl  font-mono font-semibold bg-teal-500 p-3 rounded-lg">
              Ganti Nama Pengguna
            </span>
          </div>
          <form
            onSubmit={handleSubmit(usernameHandleSubmit)}
            className="h-full w-1/2 mx-auto"
          >
            <div>
              <label
                htmlFor="fullname"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Nama Lengkap
              </label>
              <div className="border border-gray-400 rounded-md">
                <Controller
                  name="fullname"
                  rules={{
                    required: "fullname is Required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters required",
                    },
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input
                      className="text-black dark:text-white"
                      placeholder="Nama Lengkap"
                      crossOrigin={undefined}
                      size="lg"
                      {...field}
                      error={Boolean(errors?.fullname?.message)}
                    />
                  )}
                />

                {errors?.fullname?.message && (
                  <div className="h-[1px] p-none m-none text-red-500 text-xs font-medium">
                    {errors?.fullname?.message}
                  </div>
                )}
              </div>
            </div>
            <div className="py-5">
              <button
                disabled={isLoading}
                className="w-full text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                {isLoading ? "Loading..." : "Simpan Nama"}
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center w-full h-fit px-auto py-2">
            <button
              className="w-fit text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
              onClick={() => router.push("/profile")}
            >
              Kembali Ke Profile Pengguna
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GantiNama;
