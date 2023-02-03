import React from "react";
import { Card, Typography } from "antd";
import styles from "./StatsCard.module.css";

const StatsCard = ({ Icon, title, count, color, iconColor }) => {
  const { Title } = Typography;
  return (
    <Card
      style={{
        width: "100%",
        border: "1px solid #d7d3d0",
        borderRadius: "2",
      }}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardContentLeft}>
          <Title style={{ margin: 0, color: "#4D4D5C" }} level={5}>
            {title}
          </Title>
          <Title style={{ margin: 0, color: "#4D4D5C" }} level={4}>
            {count}
          </Title>
          <span>Last week</span>
        </div>
        <div
          className={styles.cardContentRight}
          style={{ background: ` ${color}` }}
        >
          <Icon style={{ fontSize: "1.5rem", color: `${iconColor}` }} />
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
