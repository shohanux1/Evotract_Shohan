import React from "react";
import styles from "./Content.module.css";
import joinClasses from "@/utils/joinClasses";
import DashboardLeft from "../Dashboard/DashboardLeft";

const Content = () => {
  return (
    <div className={joinClasses(styles.contentWrapper)}>
      <div className={joinClasses(styles.left)}>
        <div className={joinClasses(styles.leftContent)}>
          <DashboardLeft />
        </div>
      </div>
      <div className={joinClasses(styles.right)}>
        <div className={joinClasses(styles.rightContent)}>
          <h1>Right Left</h1>
        </div>
      </div>
    </div>
  );
};

export default Content;
