"use client";
import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
} from "react-icons/tb";

import dynamic from "next/dynamic";
import { Menu } from "antd";
import { Layout, Button } from "antd";
import Link from "next/link";

const { Sider } = Layout;

const Sidebar = ({ darkMode }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const style = { color: `${darkMode ? "#a6adb4" : "black"}` };
  return (
    <div className="overflow-y-scroll h-screen p-1 bg-[#001529]">
      <Sider
        theme={darkMode ? "dark" : "light"}
        width={380}
        collapsed={collapsed}
        collapsible
        trigger={null}
        className={`mt-[5.7rem] text-white dark:text-black h-screen flex flex-col-reverse gap-[15px] relative${
          collapsed ? "w-auto" : "w-[500px]"
        }`}
      >
        {/* Button Tutup SideBar */}
        <Button
          className={`mt-2 ${collapsed ? "left-7" : "left-[21rem]"}`}
          type="text"
          onClick={() => setCollapsed(!collapsed)}
          icon={
            collapsed ? (
              <AiOutlineMenuUnfold size={30} style={style} />
            ) : (
              <AiOutlineMenuFold size={30} style={style} />
            )
          }
        />
        {/* Menu Semu Bab Yang Ada SidebarC  */}
        <Menu
          mode="inline"
          theme={darkMode ? "dark" : "light"}
          className="text-lg font-semibold"
        >
          {/* Bab 1 */}
          <Menu.SubMenu
            key="MBB"
            icon={<TbCircleNumber1 size={`${collapsed ? "25" : "40"}`} />}
            title="Bilangan Bulat"
          >
            <Menu.Item key="bab1">
              <Link href={"/bab1_1"}>1.1 Mengenal Bilangan Bulat</Link>
            </Menu.Item>
            <Menu.Item key="bab1kuis">
              <Link href={"/bab1_kuis"}>Kuis 1</Link>
            </Menu.Item>
          </Menu.SubMenu>

          {/* Bab 2 */}
          <Menu.SubMenu
            key="subtask1"
            icon={<TbCircleNumber2 size={`${collapsed ? "25" : "40"}`} />}
            title="Bilangan Positif Dan Negatif"
          >
            <Menu.Item key="task-2.1">
              <Link href={"/bab2_1"}>2.1 Bilangan Dengan Tanda</Link>
            </Menu.Item>
            <Menu.Item key="task-2.2">
              <Link href={"/bab2_2"}>2.2 Membandingkan Bilangan Bulat</Link>
            </Menu.Item>
            <Menu.Item key="task-2.3">
              <Link href={"/bab2_kuis"}>Kuis 2</Link>
            </Menu.Item>
          </Menu.SubMenu>

          {/* Bab 3 */}
          <Menu.SubMenu
            key="subtask2"
            icon={<TbCircleNumber3 size={`${collapsed ? "25" : "40"}`} />}
            title="Penjumlahan Dan Pengurangan"
          >
            <Menu.Item key="task-3.1">
              <Link href={"/bab3_1"}>3.1 Penjumlahan Bilangan Bulat</Link>
            </Menu.Item>
            <Menu.Item key="task-3.2">
              <Link href={"/bab3_2"}>3.2 Pengurangan Bilangan Bulat</Link>
            </Menu.Item>
            <Menu.Item key="task-3.3">
              <Link href={"/bab3_kuis"}>Kuis 3</Link>
            </Menu.Item>
          </Menu.SubMenu>

          {/* Bab 4 */}
          <Menu.SubMenu
            key="subtask3"
            icon={<TbCircleNumber4 size={`${collapsed ? "25" : "40"}`} />}
            title="Perkalian Dan Pembagian"
          >
            <Menu.Item key="task-4.1">
              <Link href={"/bab4_1"}>4.1 Perkalian Bilangan Bulat</Link>
            </Menu.Item>
            <Menu.Item key="task-4.2">
              <Link href={"/bab4_2"}>4.2 Pembagian Bilangan Bulat</Link>
            </Menu.Item>
            <Menu.Item key="task-4.3">
              <Link href={"/bab4_kuis"}>Kuis 4</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Sidebar), { ssr: false });
