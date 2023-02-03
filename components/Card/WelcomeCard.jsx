import { Button, Typography } from "antd";
import React from "react";

const WelcomeCard = () => {
  const { Title, Paragraph } = Typography;

  return (
    <>
      <Title level={3}>
        Hi, Welcome Back <span style={{ color: "#377DFE" }}>Shohan</span>
      </Title>
      <Paragraph>
        Ant Design, a design language for background applications, is refined by
        Ant UED Team. Ant Design, a design language for background applications,
      </Paragraph>

      <Button
        type="primary"
        size={"large"}
        style={{
          background: "#377DFE",
          color: "#fff",
        }}
      >
        Upgrade Now
      </Button>
    </>
  );
};

export default WelcomeCard;
