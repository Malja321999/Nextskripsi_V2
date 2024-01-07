"use client";
import React, { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Bab1_G1 from "../../../asset/Bab_0_Gambar1_BB.jpg";
import { FaRegBookmark, FaRegCalendarCheck } from "react-icons/fa";
import ButttonpnUP from "@/app/component/ButttonpnUP";
import ButttonpnDOWN from "@/app/component/ButttonpnDOWN";
import { RiMapPinAddFill } from "react-icons/ri";
import Cardbab from "@/app/component/Cardbab";
import Cardsubbab from "@/app/component/Cardsubbab";

const Page = () => {
  const [Collapse, SetCollapse] = useState(false);
  const [Collapse2, SetCollapse2] = useState(false);
  const sky = "text-sky-400 font-bold";
  const Card = "bg-gray-900 p-2 w-fit rounded-md my-7 mt-5";
  const CVideo =
    "bg-gray-900 w-fit mt-20 mb-10 mx-auto p-4 rounded-md flex flex-col relative";

  return (
    <div className="bg-rose-700 h-[37.1rem] w-[88.8rem] mt-[5rem] mx-2 mb-5 p-10 flex flex-col relative rounded-md left-[-90.9rem] text-3xl text-white overflow-y-scroll">
      {/* ButtonpnUP */}
      <ButttonpnUP p={"/"} n={"/bab1_kuis"} />
      {/* Bab, Prasyarat, dan Tujuan */}
      <div className="mx-2 mt-0 left-[-90.9rem]">
        {/* Judul Bab */}
        <Cardbab n={1} p={"Bilangan Bulat"} />
        <div
          className={`bg-gray-900 w-[23rem] p-2 mt-2 rounded-md ${
            Collapse ? "h-[6rem]" : "h-[55px]"
          } duration-300 relative`}
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-2">
              <FaRegCalendarCheck />
              Prasyarat
            </div>

            <IoIosArrowForward
              className={`${Collapse && "rotate-90 duration-300 relative"}`}
              onClick={() => SetCollapse(!Collapse)}
            />
          </div>

          <div
            className={`w-[22rem] p-2 bg-gray-800 rounded-md text-base ${
              !Collapse && "scale-0"
            } `}
          >
            Tidak Ada Syarat Untuk Pembelajaran
          </div>
        </div>
        <div
          className={`bg-gray-900 w-[23rem] p-2 mt-2 rounded-md ${
            Collapse2 ? "h-[7.5rem]" : "h-[55px]"
          } duration-300 relative`}
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-2">
              <FaRegCalendarCheck />
              Tujuan Pembelajaran
            </div>

            <IoIosArrowForward
              className={`${Collapse2 && "rotate-90 duration-300 relative"}`}
              onClick={() => SetCollapse2(!Collapse2)}
            />
          </div>

          <div
            className={`w-[22rem] p-2 bg-gray-800 rounded-md text-base ${
              !Collapse2 && "scale-0"
            } `}
          >
            1. Siswa dapat mengetahui apa itu bilangan bulat
          </div>
        </div>
      </div>

      {/* Video Intro Bab */}
      <div className={CVideo}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DA4nq8YL80I?si=6N7oOQzwWtgVRFrp"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <h1 className="text-center mt-10 mb-5">Apa Itu Bilangan Bulat?</h1>
      </div>

      {/* Konten Bab 1 */}
      <div className="mx-20 text-white text-justify">
        {/* Judul Sub Bab */}
        <Cardsubbab n={1.1} p={"Mengenal Bilangan Bulat"} />
        {/* Isi Sub Bab */}
        <p className="mt-5 mb-2">
          <span className={sky}>Bilangan bulat</span> adalah jenis bilangan yang
          terdiri dari bilangan bulat positif, nol, serta bilangan bulat
          negatif. Pengertian bilangan bulat lainnya adalah satuan dalam
          matematika yang abstrak, dapat dikurangi, ditambah, atau dikalikan.
          <span className={sky}> Bilangan bulat</span> terdiri dari bilangan
          cacah dan bilangan bulat negatif.
          <span className={sky}> Bilangan cacah</span> sendiri merupakan
          himpunan bilangan yang terdiri dari bilangan nol dan bilangan bulat
          positif. Bilangan bulat positif bisa juga disebut sebagai bilangan
          asli, merupakan himpunan bilangan bulat yang bernilai positif.
          Sementara itu, bilangan bulat negatif merupakan himpunan bilangan
          bulat yang bernilai negatif.
          <br />
          <br />
          <span className={sky}>Bilangan asli</span> terbagi lagi menjadi
          bilangan{" "}
          <span className={sky}>ganjil, genap, prima, dan komposit</span>.{" "}
          <span className={sky}>Bilangan ganjil</span> merupakan himpunan
          bilangan yang bukan kelipatan dua atau nilainya tidak habis jika
          dibagi 2. Kebalikannya, <span className={sky}>Bilangan genap</span>{" "}
          merupakan himpunan bilangan kelipatan 2 atau nilainya akan habis jika
          dibagi 2.
          <span className={sky}>Contohnya</span>, 8 merupakan bilangan genap
          karena kalo kita bagi dengan 2, nilainya akan habis atau tidak punya
          sisa. Berbeda dengan 13. Coba, 13 apakah bisa dibagi 2? Jawabannya
          bisa, tapi nilainya tidak habis. Berarti, 13 bukan kelipatan 2. Itu
          tandanya, 13 termasuk bilangan ganjil.
          <br />
          <br />
          Coba Amati Bilangan Asli, bilangan cacah, dan bilangan bulat berikut:
          <br />
        </p>
        <ol className="mt-5 mb-2 list-disc relative left-20">
          <li>Bilangan Asli = 1,2,3,...</li>
          <li>Cacah = 0,1,2,3,...</li>
          <li>Bilangan Bulat = ...,-2,-1,0,1,2,...</li>
        </ol>
        <br />
        <p className="mt-5 mb-2">
          Bisa kita lihat seperti yang diatas bahwa bilangan asli ialah bilangan
          yang dimulai dari angka satu sampai seterusnya sedangkan bilangan
          cacah ialah bilangan yang dimulai dari 0 sampai seterusnya. Sedangkan
          Bilangan Bulat ialah bilangan yang memuat bilangan asli, Cacah dan
          bilangan negatif. Letak suatu bilangan bulat pada garis Bilangan dapat
          dilihat seperti gambar dibawah ini.
          <br />
          {/* Gambar Bab */}
          <Image src={Bab1_G1} alt="Bab1_G1" className={Card} />
          Semakin jauh ke kanan atau di atas angka pada garis bilangan, semakin
          besar nilainya. Sebaliknya, semakin jauh angkanya, semakin rendah
          nilainya. Perhatikan bahwa setiap angka positif selalu lebih besar
          dari angka negatif.
          <br />
          <br />
          <span className={sky}>
            Penerapan bilangan bulat dalam kehidupan sehari-hari
          </span>{" "}
          adalah dalam penulisan <span className={sky}>suhu udara</span>,
          misalnya pada salah satu puncak tertinggi di Indonesia adalah Puncak
          Jayawijaya di Papua. Pada malam hari, suhu udara turun hingga minus
          10°C hingga puncak Jayawijaya diselimuti salju. Saat menentukan
          besarnya suhu udara, bilangan bulat digunakan untuk menuliskannya.
          Ingat bahwa bilangan bulat memiliki titik acuan (normal) yaitu 0.
          Titik acuan ini dapat digunakan untuk mengukur suhu udara di kota-kota
          di seluruh dunia dengan pasti.
        </p>
      </div>
      <ButttonpnDOWN p={"/"} n={"/bab1_kuis"} />
    </div>
  );
};

export default Page;
