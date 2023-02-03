import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import joinClasses from "@/utils/joinClasses";
import Logo from "../../public/evotrack.png";
import LogoSmall from "../../public/small.ico";
import Image from "next/image";
import MenuOption from "./MenuOption";
import {
  HiChartBar,
  HiBookmark,
  HiOutlineLogout,
  HiViewGridAdd,
} from "react-icons/hi";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

// make an ary of icons and text
const menuOptions = [
  {
    key: "1",
    Icon: HiChartBar,
    text: "Dashboard",
  },
  {
    key: "2",
    Icon: HiViewGridAdd,
    text: "Education",
    subItem: [
      {
        key: "3",
        Icon: HiViewGridAdd,
        text: "Genetics 1010",
      },
      {
        key: "4",
        Icon: HiViewGridAdd,
        text: "DNS synthesis",
      },
      {
        key: "5",
        Icon: HiViewGridAdd,
        text: "Evolution",
      },
    ],
  },
  {
    key: "6",
    Icon: HiBookmark,
    text: "Resources",
  },
  {
    key: "7",
    Icon: HiBookmark,
    text: "Tutorials",
    subItem: [
      {
        key: "3",
        Icon: HiViewGridAdd,
        text: "Genetics 1010",
      },
      {
        key: "4",
        Icon: HiViewGridAdd,
        text: "DNS synthesis",
      },
      {
        key: "5",
        Icon: HiViewGridAdd,
        text: "Evolution",
      },
    ],
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const setActiveClass = (text) => {
    setActive(text);
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={joinClasses(
        styles.sidebar,
        styles.wrapper,
        `${collapsed && styles.collapsed}`
      )}
      // {...(collapsed && { style: { width: "80px" } })}
    >
      <div onClick={toggleSidebar} className={styles.toggleIcon}>
        {collapsed ? <BiChevronsRight /> : <BiChevronsLeft />}
      </div>

      <div className={styles.header}>
        <div className={joinClasses(styles.logo)}>
          <Image
            style={{
              width: "150px",
              height: "100%",
              objectFit: "contain",
            }}
            src={collapsed ? LogoSmall : Logo}
            alt="Logo"
          />
        </div>

        <div className={styles.menu}>
          {menuOptions.map((option) => (
            <MenuOption
              key={option.key}
              className={active === option.text && styles.active}
              Icon={option.Icon}
              collapsed={collapsed}
              subItem={option.subItem}
              text={option.text}
              setActiveClass={setActiveClass}
            />
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.logOutIcon}>
          <HiOutlineLogout />
        </div>
        {!collapsed && <span>Log out</span>}
      </div>
    </div>
  );
};

export default Sidebar;
