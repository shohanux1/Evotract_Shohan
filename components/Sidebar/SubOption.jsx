import joinClasses from "@/utils/joinClasses";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";

const SubOption = ({ subItem, collapsed, setIsOpen }) => {
  const [activeClass, setActiveClass] = useState({});

  const toggleSubItem = (text) => {
    setActiveClass(text);
    // setIsOpen(false);
  };

  return subItem.map((item) => (
    <div
      key={item.key}
      onClick={() => toggleSubItem(item.text)}
      className={joinClasses(
        styles.subMenuItem,
        activeClass === item.text && styles.active
      )}
    >
      {!collapsed && item.text && <span>{item.text}</span>}
    </div>
  ));
};

export default SubOption;
