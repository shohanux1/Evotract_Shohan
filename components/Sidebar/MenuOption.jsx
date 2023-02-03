import joinClasses from "@/utils/joinClasses";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import styles from "./Sidebar.module.css";
import SubOption from "./SubOption";

const MenuOption = ({
  Icon,
  subItem,
  text,
  setActiveClass,
  className,
  collapsed,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubItem = ({ text }) => {
    setActiveClass(text);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={() => toggleSubItem({ text })}
        className={joinClasses(
          styles.menuOption,
          className,
          collapsed && styles.jutifyCenter
        )}
      >
        <div className={styles.option}>
          <Icon />
        </div>
        {!collapsed && <span>{text}</span>}
        {subItem && !collapsed && <Chevron isOpen={isOpen} />}
      </div>
      {subItem && isOpen && (
        <div className={`${styles.subMenu}`}>
          <SubOption
            setIsOpen={setIsOpen}
            collapsed={collapsed}
            subItem={subItem}
          />
        </div>
      )}
    </>
  );
};

const Chevron = ({ isOpen }) => {
  return isOpen ? (
    <BiChevronDown className={styles.chevron} />
  ) : (
    <BiChevronUp className={styles.chevron} />
  );
};

export default MenuOption;
