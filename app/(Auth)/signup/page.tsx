"use client";
import Bilcon from "../../asset/Bilcon.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "@/app/lib/firebase/init";
import { doc, setDoc } from "firebase/firestore";
import Bab1_1 from "@/app/pagekuis/bab1_kuis/page";

const SignUp = () => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const onSubmit = async (e: any) => {
    const kuis = {
      bab1_kuis: "Belum Mengerjakan Kuis Bab 1",
      bab2_kuis: "Belum Mengerjakan Kuis Bab 2",
      bab3_kuis: "Belum Mengerjakan Kuis Bab 3",
      bab4_kuis: "Belum Mengerjakan Kuis Bab 4",
    };

    setError("");
    setIsLoading(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        fullname: e.fullname,
        email: e.email,
        password: e.password,
      }),
    });
    console.log(res.status);
    if (res.status === 200) {
      const ref = doc(firestore, "DataUsers", `${e.email}`);
      setDoc(ref, kuis)
        .then((response) => {
          console.log("success submit data user", response);
        })
        .catch((error) => {
          console.log("failed submit data user", error);
          alert("failed submit data user");
        });
      setIsLoading(false);
      push("/signin");
    } else {
      setIsLoading(false);
      console.log("catch", e.message);
      if (e.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else if (e.code === "auth/invalid-email") {
        alert("Invalid email");
      } else if (e.code === "auth/weak-password") {
        alert("Weak password");
      } else {
        alert("Something went wrong, please try again");
      }
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-white dark:bg-black text-black dark:text-white ">
      <div className="bg-white w-[60vh] h-[88vh] shadow-md border border-gray-500 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="dark:text-white mb-5 text-center text-2xl font-bold leading-9 tracking-tight">
            <div className="w-10 h-5 m-1 flex justify-center items-center mx-auto ">
              <Image
                src={Bilcon}
                alt="Bilcon"
                className="mx-auto h-10 w-auto"
              />
            </div>
            <span className="text-black dark:text-white">Sign Up to </span>
            <span className="text-indigo-600">BIL</span>
            <span className="text-teal-500">BUL</span>
          </h2>
          <div>
            <label
              htmlFor="fullname"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your full name
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
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your email
            </label>
            <div>
              <Controller
                name="email"
                rules={{
                  required: "email is Required",
                  pattern: {
                    value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                    message: "Email ID is invaild",
                  },
                }}
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="Email"
                    crossOrigin={undefined}
                    size="lg"
                    {...field}
                    error={Boolean(errors?.email?.message)}
                  />
                )}
              />
              {errors?.email?.message && (
                <div className="h-[1px] p-none m-none text-red-500 text-xs font-medium">
                  {errors?.email?.message}
                </div>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your Password
            </label>
            <div className="flex justify-between items-center">
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
                    className="flex-1"
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
                className="ml-2 p-2 w-fit h-fit flex justify-center items-center rounded-lg bg-gray-100 border-2 border-gray-500 text-center text-sm text-black font-mono cursor-pointer"
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
          <div>
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Konfirmasi Password
            </label>
            <div className="flex justify-between items-center">
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
                    className="flex-1"
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
                className="ml-2 p-2 w-fit h-fit flex justify-center items-center rounded-lg bg-gray-100 border-2 border-gray-500 text-center text-sm text-black font-mono cursor-pointer"
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
          <button
            disabled={isLoading}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLoading ? "Loading..." : "Sign up account"}
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Have an account registered?
            <Link
              href="/signin"
              className="ml-1 text-blue-700 hover:underline dark:text-blue-500"
            >
              Sign in here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
