"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { firestore } from "@/app/lib/firebase/init";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";

const ChangeUsername = () => {
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
              "success update username, Please log in again to apply all changes"
            );
            signOut();
          })
          .catch((error) => {
            console.log("failed update username", error);
            alert("failed update username");
          });
      } else {
        alert("tidak ada user");
      }
    }
  };

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
              "success update password user, Please log in again to apply all changes"
            );
            signOut();
          })
          .catch((error) => {
            console.log("failed update password user", error);
            alert("failed update password user");
          });
      } else {
        alert("tidak ada user");
      }
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center text-black">
      <div className="w-1/2 h-fit rounded-md bg-gray-100 shadow-lg justify-center items-center mt-20">
        <div className="h-fit w-full justify-center flex items-center pt-2">
          <span className="text-3xl text-center font-mono font-semibold bg-teal-300 p-3 rounded-lg">
            Selamat Datang <br /> {userName}
          </span>
        </div>
        <div className="w-fit hfit ml-[14.5rem] text-xl mt-4 p-2 border-2 border-fuchsia-500">
          <div className="font-bold">Email: {userEmail}</div>
          <div className="font-bold">Nama Pengguna: {userName}</div>
        </div>
        {visibleForm === "" && (
          <>
            <div className="flex gap-2 w-full items-center justify-around my-4">
              <button
                className="text-xl cursor-pointer py-1 px-2 bg-yellow-400 rounded-md"
                onClick={() => setVisibility("username")}
              >
                Ganti Nama Pengguna
              </button>
              <button
                className="text-xl cursor-pointer py-1 px-2 bg-yellow-400 rounded-md"
                onClick={() => setVisibility("password")}
              >
                Ganti Kata Sandi
              </button>
            </div>
            <div className="flex justify-center items-center w-full h-fit px-auto py-2">
              <button
                className="text-xl cursor-pointer py-1 px-2 bg-teal-300 rounded-md"
                onClick={() => router.push("/profile")}
              >
                Kembali ke Profil
              </button>
            </div>
          </>
        )}
        {visibleForm === "username" && (
          <>
            <div className="h-28 w-full justify-center flex items-center">
              <span className="text-3xl  font-mono font-semibold bg-yellow-300 p-3 rounded-lg">
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
                <div>
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
                        placeholder="Full name"
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
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {isLoading ? "Loading..." : "Change Username"}
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center w-full h-fit px-auto py-2">
              <button
                className="text-xl cursor-pointer py-1 px-2 bg-teal-300 rounded-md"
                onClick={() => setVisibility("")}
              >
                Kembali
              </button>
            </div>
          </>
        )}
        {visibleForm === "password" && (
          <>
            <div className="h-28 w-full justify-center flex items-center">
              <span className="text-3xl  font-mono font-semibold bg-yellow-300 p-3 rounded-lg">
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
                        className="flex-1 text-black dark:text-white"
                        crossOrigin={undefined}
                        placeholder="Confirm Password"
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
                        getValues("password") === value ||
                        "Passwords do not match",
                    }}
                    render={({ field }) => (
                      <Input
                        className="flex-1 text-black dark:text-white"
                        crossOrigin={undefined}
                        placeholder="Confirm Password"
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
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {isLoading ? "Loading..." : "Change Password"}
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center w-full h-fit px-auto py-2">
              <button
                className="text-xl cursor-pointer py-1 px-2 bg-teal-300 rounded-md"
                onClick={() => setVisibility("")}
              >
                Kembali
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChangeUsername;
