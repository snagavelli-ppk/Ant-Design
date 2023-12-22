import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const Dashboard = () => (
  <Content style={contentStyle}>
    <h1>Dashboard Content</h1>
  </Content>
);

const contentStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "24px 16px",
  minHeight: 280,
  borderRadius: 5,
  background: "lightblue",
};

export default Dashboard;
