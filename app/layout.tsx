import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import UsetateNavbar from "./component/UsetateNavbar";
import UsetateFooter from "./component/UsetateFooter";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BILBUL",
  description: "Apps For Education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${roboto.className} dark:bg-black text-white h-screen w-screen`}
        >
          <UsetateNavbar />
          {children}
          <UsetateFooter />
        </body>
      </html>
    </ClerkProvider>
  );
}
