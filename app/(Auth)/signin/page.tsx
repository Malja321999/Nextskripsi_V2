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

const SignIn = ({ searchParams }: any) => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const callbackUrl = searchParams?.callbackUrl || "/";

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
    setError("");
    setIsLoading(true);
    console.log(e.email, e.password);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.email,
        password: e.password,
        callbackUrl: callbackUrl,
      });
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        console.log(res);
        if (res.status === 401) {
          setError("Email or Password is not correct");
          alert("Email or Password is not correct");
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
              <span className="text-black dark:text-white">Sign In to </span>
              <span className="text-indigo-600">BIL</span>
              <span className="text-teal-500">BUL</span>
            </h2>
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
                      value:
                        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
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
            <button
              disabled={isLoading}
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {isLoading ? "Loading..." : "Login to your account"}
            </button>
            <hr />
            <button
              type="button"
              onClick={() => signIn("google")}
              className="flex justify-center items-center w-full text-black bg-white border border-gray-400 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-blue-100 dark:focus:ring-blue-800"
            >
              <span className="flex justify-between items-center px-[5px]">
                <FcGoogle className="w-5 h-5 mr-1" />
                Login with Google
              </span>
            </button>
            <div className="flex justify-center items-center text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?
              <Link
                href="signup"
                className="ml-1 text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
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
