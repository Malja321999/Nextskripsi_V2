"use client";
import Bilcon from "../asset/Bilcon.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Coba = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex items-center justify-center text-white mx-auto">
      <div className="h-screen w-auto flex justify-center items-center flex-col">
        {/*   {error !== "" && (
          <div className="text-red-600 text-5xl font-bold mb-3">{error}</div>
        )} */}
        <div className="bg-white w-[60vh] shadow-md border border-gray-500 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6">
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
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <hr />
            <div className="flex justify-center items-center">
              <button
                type="button"
                className="flex justify-center items-center w-full text-black bg-white border border-gray-400 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <span className="flex justify-between items-center px-[75px]">
                  <FcGoogle  className="w-5 h-5 mr-1"/>
                  Login with Google
                </span>
              </button>
            </div>
            <div className="flex justify-center items-center text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link
                href="signup"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </Link>
            </div>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Coba;
