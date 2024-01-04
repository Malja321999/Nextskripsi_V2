"use client";
import Image from "next/image";
import React from "react";
import FGue from "../asset/Foto Gue Nih.png";
import Link from "next/link";
import * as Icon from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div className="mx-auto my-[24vh] h-96 w-96 flex justify-center items-center bg-sky-400 dark:bg-white rounded-3xl">
        <ul>
          <li className="text-start dark:text-black">
            <Image
              src={FGue}
              alt="foto gue"
              className="w-20 h-20 rounded-full border-4 border-indigo-700 dark:border-sky-400"
            />
            <p className="text-indigo-700 dark:text-sky-400 font-black text-sans text-normal">
              Frontend And Backend Developer
            </p>
            <h1 className="font-bold text-2xl">Jamaludin</h1>
            <p className="text-xs">NIM : 1610131210017</p>
            <p className="text-xs mb-5">
              Instansi : Universitas Lambung Mangkurat
            </p>

            <h1 className="font-bold text-2xl">Dosen Pembimbing : </h1>
            <p className="text-xs">Dr. R. Ati Sukmawati, M.Kom</p>
            <p className="text-xs">Delsika Pramata Sari, M.Pd</p>
            <Link href="https://wa.me/+6282250872529">
              <button className="my-2 bg-indigo-700 dark:bg-sky-400 rounded-xl w-[270px] h-9 font-bold">
                <ul className="flex justify-center items-center ">
                  <li className="font-black mx-3 mt-[-10px] w-2 h-2">
                    <Icon.BsWhatsapp />
                  </li>
                  <li>Contact Me</li>
                </ul>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
