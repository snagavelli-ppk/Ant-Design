import React, { useState } from "react";
import ComanyForm from "./CompanyAdmin";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SlackOutlined,
  HomeOutlined,
  AppstoreOutlined,
  ProjectFilled,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showCompanyForm, setShowCompanyForm] = useState(false);

  const handleMenuClick = (key: string) => {
    if (key === "add") {
      setShowCompanyForm(true);
    } else {
      setShowCompanyForm(false);
    }
  };

  return (
    <Layout style={{ width: "100vw", height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          borderRadius: 5,
          background: "linear-gradient(to bottom right, black, #444, #888)",
        }}
      >
        <Button
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 78,
            height: 64,
            background: "inherit",
            color: "whitesmoke",
          }}
        />

        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "DashBoard",
            },
            {
              key: "2",
              icon: <SlackOutlined />,
              label: "Companies",
            },
            {
              key: "3",
              icon: <UserOutlined />,
              label: "Company Admins",
            },
            {
              key: "4",
              icon: <AppstoreOutlined />,
              label: "Tutorials",
            },
            {
              key: "5",
              icon: <ProjectFilled />,
              label: "Simulations",
            },
          ]}
          style={{
            background: "linear-gradient(to bottom right, black, #444, #888)",
            color: "whitesmoke",
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "linear-gradient(to bottom right, black, #444, #888)",
            textAlign: "end",
            borderRadius: 5,
            color: "whitesmoke",
            margin: "0 15px 0 18px",
          }}
        >
          <h2>
            SuperAdmin <UserOutlined />
          </h2>
        </Header>
        <Content
          style={{
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            borderRadius: 5,
            background: "linear-gradient(to bottom right, black, #444, #888)",
          }}
        >
          <Menu
            mode="horizontal"
            theme="light"
            onClick={({ key }) => handleMenuClick(key as string)}
            style={{ marginBottom: 16 }}
          >
            <Menu.Item key="add">Add</Menu.Item>
            <Menu.Item key="edit">Edit</Menu.Item>
            <Menu.Item key="delete">Delete</Menu.Item>
          </Menu>
          {showCompanyForm && <ComanyForm />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
