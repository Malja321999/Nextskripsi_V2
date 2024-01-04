"use client";
import logoTailwind from "../../asset/tailwind.svg";
import Image from "next/image";
import { useState } from "react";
/* import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
 */ /* import { auth } from "@/app/firebase/config";
 */ import Link from "next/link";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*   const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
   */ const router = useRouter();

  /*   const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem("user", "true");
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  }; */

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-white">
      <div className="bg-indigo-600  dark:bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto bg-white dark:bg-inherit rounded-md"
            src={logoTailwind}
            alt="Your Company"
          />
          <h2 className="dark:text-white mb-5 text-center text-2xl font-bold leading-9 tracking-tight">
            Sign In to <span className="dark:text-indigo-600">BIL</span>
            <span className="text-teal-500">BUL</span>
          </h2>
        </div>

        <input
          autoComplete="email"
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 dark:bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <input
          autoComplete="current-password"
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 dark:bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <button
          /*           onClick={handleSignIn}
           */ className="w-full p-3 bg-teal-500 rounded text-white hover:bg-indigo-500"
        >
          Sign In
        </button>
        <p className="mt-10 text-center text-sm text-gray-300 dark:text-gray-500">
          Not have account?{" "}
          <Link
            href="/signup"
            className="font-semibold leading-6 text-white dark:text-indigo-600 hover:text-indigo-500"
          >
            Create new account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
