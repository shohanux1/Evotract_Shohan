import React from "react";
import styles from "./Rightbar.module.css";
import joinClasses from "@/utils/joinClasses";
import { Avatar, Button, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AiFillEdit, AiOutlineMessage, AiOutlinePlus } from "react-icons/ai";

const Rightbar = () => {
  return (
    <div className={joinClasses(styles.rightbar)}>
      <div className={styles.rightbarTop}>
        <Avatar size={50} className={styles.avatar} icon={<UserOutlined />} />
      </div>

      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
        }}
      >
        <Button
          style={{
            backgroundColor: "#fff",
            color: "#333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50px",
            width: "50px",
          }}
          size={"large"}
          shape="circle"
          icon={<AiFillEdit style={{ fontSize: "1.3rem" }} />}
        />

        <Button
          style={{
            backgroundColor: "#fff",
            color: "#333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50px",
            width: "50px",
          }}
          size={"large"}
          shape="circle"
          icon={<AiOutlineMessage style={{ fontSize: "1.3rem" }} />}
        />

        <Button
          style={{
            backgroundColor: "#333",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50px",
            width: "50px",
          }}
          size={"large"}
          shape="circle"
          icon={<AiOutlinePlus style={{ fontSize: "1.3rem" }} />}
        />
      </Space>
    </div>
  );
};

export default Rightbar;
