"use client";
import Bilcon from "../../asset/Bilcon.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import { firestore } from "@/app/lib/firebase/init";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  type Inputs = {
    fullname: string;
    nisn: string;
    email: string;
    password: string;
    confirmPassword: string;
    token: string;
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
      email: "",
      password: "",
      confirmPassword: "",
      token: "",
    },
  });

  const onSubmit = async (e: any) => {
    if (e.token === "G4R4") {
      setError("");
      setIsLoading(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          fullname: e.fullname,
          nisn: e.nisn,
          email: e.email,
          class: "ALL",
          role: "admin",
          password: e.password,
          bab1_kuis: "Belum Mengerjakan Kuis Bab 1",
          bab2_kuis: "Belum Mengerjakan Kuis Bab 2",
          bab3_kuis: "Belum Mengerjakan Kuis Bab 3",
          ujian_akhir: "Belum Mengerjakan Ujian Akhir",
        }),
      });
      console.log(res.status);
      if (res.status === 200) {
        setIsLoading(false);
        push("/signin_guru");
      } else {
        setIsLoading(false);
        console.log("catch", e.message);
        if (e.code === "auth/email-already-in-use") {
          alert("email sudah digunakan");
        } else if (e.code === "auth/invalid-email") {
          alert("Invalid email");
        } else if (e.code === "auth/weak-password") {
          alert("password lemah");
        } else {
          alert("Ada kesalahan yang tidak diketahui, silahkan coba lagi");
        }
      }
    } else if (e.token !== "G4R4") {
      alert(
        "Token Undangan Untuk Guru Salah atau Tidak Terdaftar, Silahkan Coba Lagi"
      );
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-white dark:bg-black text-black dark:text-white ">
      <div className=" bg-white w-[60vh] h-fit shadow-md border border-gray-500 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="dark:text-white text-center text-2xl font-bold leading-9 tracking-tight">
            <div className="w-10 h-5 m-1 flex justify-center items-center mx-auto ">
              <Image
                src={Bilcon}
                alt="Bilcon"
                className="mx-auto h-10 w-auto"
              />
            </div>
            <span className="text-black dark:text-white">Registrasi Guru</span>
            <br />
            <span className="text-teal-500">BILANGAN BULAT</span>
          </h2>
          <div>
            <label
              htmlFor="fullname"
              className="text-sm font-medium text-gray-900 block dark:text-gray-300"
            >
              Nama Lengkap
            </label>
            <div>
              <Controller
                name="fullname"
                rules={{
                  required: "Masukkan Nama Lengkap",
                  minLength: {
                    value: 3,
                    message: "Minimal 3 karakter",
                  },
                }}
                control={control}
                render={({ field }) => (
                  <Input
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
          <div>
            <label
              htmlFor="nisn"
              className="text-sm font-medium text-gray-900 block dark:text-gray-300"
            >
              NISN
            </label>
            <div>
              <Controller
                name="nisn"
                rules={{
                  required: "Masukkan NISN",
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
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block dark:text-gray-300"
            >
              Email
            </label>
            <div>
              <Controller
                name="email"
                rules={{
                  required: "Masukkan Email",
                  pattern: {
                    value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                    message: "Email tidak sesuai",
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
              className="text-sm font-medium text-gray-900 block dark:text-gray-300"
            >
              Password
            </label>
            <div className="flex justify-between items-center">
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Masukkan Password",
                  minLength: {
                    value: 8,
                    message: "Minimal 8 karakter",
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
          <div>
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-900 block dark:text-gray-300"
            >
              Konfirmasi Password
            </label>
            <div className="flex justify-between items-center">
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: "Masukkan Konfirmasi Password",
                  validate: (value) =>
                    getValues("password") === value || "Passwords tidak sama",
                }}
                render={({ field }) => (
                  <Input
                    className="flex-1"
                    crossOrigin={undefined}
                    placeholder="Konfirmasi Password"
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
          <div className="mb-5">
            <label
              htmlFor="nisn"
              className="text-sm font-medium text-gray-900 block dark:text-gray-300"
            >
              Token
            </label>
            <div>
              <Controller
                name="token"
                rules={{
                  required: "Masukkan Token",
                  minLength: {
                    value: 4,
                    message: "Minimal 4 karakter",
                  },
                }}
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="Token"
                    crossOrigin={undefined}
                    size="lg"
                    {...field}
                    error={Boolean(errors?.token?.message)}
                  />
                )}
              />
              {errors?.token?.message && (
                <div className="h-[1px] p-none m-none text-red-500 text-xs font-medium">
                  {errors?.token?.message}
                </div>
              )}
            </div>
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="cursor-pointer w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLoading ? "Loading..." : "Daftar"}
          </button>
          <div className="text-center text-sm font-medium text-gray-500 dark:text-gray-300">
            Sudah punya akun?
            <Link
              href="/signin_guru"
              className="ml-1 text-blue-700 hover:underline dark:text-blue-500"
            >
              Login disini
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
