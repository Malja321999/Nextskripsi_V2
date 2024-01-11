"use client";
import "./globals.css";
import { Roboto } from "next/font/google";
import React from "react";
import UsetateNavbar from "./component/UsetateNavbar";
import UsetateFooter from "./component/UsetateFooter";
import { SessionProvider } from "next-auth/react";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css"
          integrity="sha512-Oy+sz5W86PK0ZIkawrG0iv7XwWhYecM3exvUtMKNJMekGFJtVAhibhRPTpmyTj8+lJCkmWfnpxKgT2OopquBHA=="
        />
      </head>
      <body
        className={`${roboto.className} dark:bg-black text-white h-screen w-screen`}
      >
        <SessionProvider>
          <UsetateNavbar />
          {children}
          <UsetateFooter />
        </SessionProvider>
      </body>
    </html>
  );
}
