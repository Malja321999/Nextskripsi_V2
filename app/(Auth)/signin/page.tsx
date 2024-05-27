"use client";
import Bilcon from "../../asset/Bilcon.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "@/app/lib/firebase/init";

const SignIn = ({ searchParams }: any) => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const callbackUrl = searchParams?.callbackUrl || "/HomePage";

  type Inputs = {
    fullname: string;
    nisn: string;
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
      nisn: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (e: any) => {
    setError("");
    setIsLoading(true);
    console.log(e.nisn, e.password);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.email,
        nisn: e.nisn,
        password: e.password,
        callbackUrl: callbackUrl,
      });
      if (!res?.error) {
        setIsLoading(false);
        const q = query(
          collection(firestore, "users"),
          where("nisn", "==", e.nisn)
        );
        const shapshot = await getDocs(q);
        const user = shapshot.docs.map((doc) => ({
          id: doc.id,
          role: doc.data().role,
        }));
        console.log(user[0]?.role);
        if (user[0]?.role === "admin") {
          push("/halaman_guru/data_siswa");
        } else if (user[0]?.role === "member") {
          push(callbackUrl);
        }
      } else {
        setIsLoading(false);
        console.log(res);
        if (res.status === 401) {
          setError("NISN atau Password salah");
          alert("NISN atau Password salah");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen flex items-center justify-center text-white mx-auto">
      <div className="h-screen w-auto flex justify-center items-center flex-col">
        <div className="bg-white w-[60vh] shadow-md border border-gray-500 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="dark:text-white mb-5 text-center text-2xl font-bold leading-9 tracking-tight">
              <div className="w-10 h-10 flex justify-center items-center mx-auto ">
                <Image
                  src={Bilcon}
                  alt="Bilcon"
                  className="mx-auto h-10 w-auto"
                />
              </div>
              <span className="text-black dark:text-white">Login Siswa </span>{" "}
              <br />
              <span className="text-teal-500">BILANGAN BULAT</span>
            </h2>
            <div>
              <label
                htmlFor="nisn"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                NISN
              </label>
              <div>
                <Controller
                  name="nisn"
                  rules={{
                    required: "Mohon Masukkan NISN Anda",
                    pattern: {
                      value: /^[0-9]{9}$/,
                      message:
                        "NISN tidak sesuai, pastikan NISN adalah angka minimal 10 karakter",
                    },
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="NISN"
                      crossOrigin={undefined}
                      size="lg"
                      {...field}
                      error={Boolean(errors?.nisn?.message)}
                    />
                  )}
                />
                {errors?.nisn?.message && (
                  <div className="h-[1px] p-none m-none text-red-500 text-xs font-medium">
                    {errors?.nisn?.message}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Password
              </label>
              <div className="flex justify-between items-center">
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Masukkan Password Anda",
                    minLength: {
                      value: 8,
                      message: "Password minimal 8 karakter",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      className="flex-1"
                      crossOrigin={undefined}
                      placeholder="Password"
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
            <div className="flex flex-col gap-5 justify-center items-center">
              <button
                disabled={isLoading}
                type="submit"
                className="w-[20rem] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {isLoading ? "Loading..." : "Masuk"}
              </button>
              <Link href="/signin_guru">
                <button className="w-[20rem] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Masuk Sebagai Guru
                </button>
              </Link>
            </div>
            {/*  <hr />
            <button
              type="button"
              onClick={() => signIn("google")}
              className="flex justify-center items-center w-full text-black bg-white border border-gray-400 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-blue-100 dark:focus:ring-blue-800"
            >
              <span className="flex justify-between items-center px-[5px]">
                <FcGoogle className="w-5 h-5 mr-1" />
                Login with Google
              </span>
            </button> */}
            <div className="flex justify-center items-center text-sm font-medium text-gray-500 dark:text-gray-300">
              Belum punya akun?
              <Link
                href="signup"
                className="ml-1 text-blue-700 hover:underline dark:text-blue-500"
              >
                Buat Akun
              </Link>
            </div>
            {/* 
            <div className="flex justify-between items-center ">
              <div className=" bg-[#ccd0d5] rounded-md w-[8rem] h-[0.5px]"></div>
              <h1 className="text-black dark:text-white">OR</h1>
              <div className=" bg-[#ccd0d5] rounded-md w-[8rem] h-[0.5px]"></div>
            </div>
            <div className="flex justify-center items-center">
              <Link
                href={"/signinAdmin"}
                className="text-blue-700 hover:underline dark:text-blue-500 text-center text-sm font-medium"
              >
                Masuk Sebagai Guru
              </Link>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
