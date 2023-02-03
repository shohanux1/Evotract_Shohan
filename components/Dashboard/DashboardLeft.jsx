import React from "react";
import styles from "./DashboardLeft.module.css";
import { Button, Card, Typography } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import StatsCard from "../Card/StatsCard";
import WelcomeCard from "../Card/WelcomeCard";
import StatsData from "@/utils/StatsData";

const DashboardLeft = () => {
  return (
    <>
      <div className={styles.welCard}>
        <div className={styles.dashTop}>
          <div className={styles.dashTopLeft}>
            <h1>Today's Plan</h1>
            <span>June 14th 2022</span>
          </div>
          <div className={styles.dashTopRight}>
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
          </div>
        </div>
        <div className={styles.stats}>
          <Card
            style={{
              width: "100%",
              border: "1px solid #d7d3d0",
              borderRadius: "0",
            }}
          >
            <div className={styles.statsTop}>
              <div className={styles.statsTopLeft}>
                <WelcomeCard />
              </div>

              <div className={styles.statsTopRight}>chart</div>
            </div>
          </Card>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {StatsData.map((item, index) => {
          return (
            <StatsCard
              key={index}
              Icon={item.icon}
              title={item.title}
              count={item.count}
              color={item.color}
              iconColor={item.iconColor}
            />
          );
        })}
      </div>
    </>
  );
};

export default DashboardLeft;
