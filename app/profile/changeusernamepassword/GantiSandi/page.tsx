"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { firestore } from "@/app/lib/firebase/init";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@material-tailwind/react";
import { usePathname, useRouter } from "next/navigation";
import bcrypt from "bcryptjs";
import { FaBars, FaUser } from "react-icons/fa";
import Link from "next/link";
import { RiLockPasswordLine } from "react-icons/ri";

const GantiSandi = () => {
  const { data: session }: { data: any } = useSession();

  const userEmail = session?.user?.email;
  const userName = session?.user?.fullname;

  console.log(session);

  const [visibleForm, setVisibility] = useState<any>("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const [Collapse, setCollapse] = useState(true);

  const pathname = usePathname();

  console.log(pathname);

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

  const passwordHandleSubmit = async (e: any) => {
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
        const passwordUpdate = await bcrypt.hash(e.password, 10);
        updateDoc(ref, {
          password: passwordUpdate,
        })
          .then((response) => {
            console.log("success update password user", response);
            alert(
              "Berhasil memperbarui kata sandi pengguna, Silakan masuk lagi untuk menerapkan semua perubahan"
            );
          })
          .catch((error) => {
            console.log("failed update password user", error);
            alert("gagal memperbarui kata sandi pengguna");
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
      <div className="mx-auto text-black w-1/2 h-fit rounded-md bg-gray-100 shadow-lg justify-center items-center">
        <div className="h-28 w-full justify-center flex items-center">
          <span className="text-3xl font-mono font-semibold bg-teal-500 p-3 rounded-lg">
            Ganti Kata Sandi
          </span>
        </div>
        <form
          onSubmit={handleSubmit(passwordHandleSubmit)}
          className="h-full w-1/2 mx-auto "
        >
          <div className="py-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Kata Sandi
            </label>
            <div className="flex justify-between items-center text-gray-900">
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is Required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters required",
                  },
                }}
                render={({ field }) => (
                  <Input
                    className="flex-1 text-black border border-gray-400 rounded-md"
                    crossOrigin={undefined}
                    placeholder="Masukkan Kata Sandi"
                    type={showPassword ? "text" : "password"}
                    {...field}
                    size="lg"
                    error={Boolean(errors?.password?.message)}
                  />
                )}
              />

              <button
                onClick={() => setShowPassword(!showPassword)} //setShowPassword)}
                className="ml-2 p-2 w-fit h-fit flex justify-center items-center rounded-lg bg-gray-100 border-2 border-gray-500 text-center text-sm  font-mono cursor-pointer"
              >
                {showPassword ? "hide" : "show"}
              </button>
            </div>
            {errors?.password?.message && (
              <div className="h-[1px] p-none m-none text-red-500 text-xs font-medium">
                {errors?.password?.message}
              </div>
            )}
          </div>
          <div className="py-2">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium block mb-2"
            >
              Konfirmasi Kata Sandi
            </label>
            <div className="flex justify-between items-center text-gray-900">
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: "Confirm Password is Required",
                  validate: (value) =>
                    getValues("password") === value || "Passwords do not match",
                }}
                render={({ field }) => (
                  <Input
                    className="flex-1 text-black border border-gray-400 rounded-md"
                    crossOrigin={undefined}
                    placeholder="Konfirmasi Kata Sandi"
                    type={showConfirmPassword ? "text" : "password"}
                    {...field}
                    size="lg"
                    error={Boolean(errors?.confirmPassword?.message)}
                  />
                )}
              />

              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} //setShowConfirmPassword)}
                className="ml-2 p-2 w-fit h-fit flex justify-center items-center rounded-lg bg-gray-100 border-2 border-gray-500 text-center text-sm  font-mono cursor-pointer"
              >
                {showConfirmPassword ? "hide" : "show"}
              </button>
            </div>
            {errors?.confirmPassword?.message && (
              <div className="h-[1px] p-none m-none text-red-500 text-xs font-medium">
                {errors?.confirmPassword?.message}
              </div>
            )}
          </div>
          <div className="py-5">
            <button
              disabled={isLoading}
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              {isLoading ? "Loading..." : "Simpan Sandi"}
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
  );
};

export default GantiSandi;
