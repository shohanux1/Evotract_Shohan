import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Rightbar from "./Rightbar/Rightbar";
import styles from "../styles/Layout.module.css";
import joinClasses from "@/utils/joinClasses";

const layout = ({ children }) => {
  return (
    <>
      <div className={joinClasses(styles.wrapper)}>
        <Sidebar />
        {children}
        <Rightbar />
      </div>
    </>
  );
};

export default layout;
