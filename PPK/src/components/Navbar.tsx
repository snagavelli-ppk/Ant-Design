import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Companies from "./contentComponents/Companies";
import CompanyAdmins from "./contentComponents/CompanyAdmin";
import Dashboard from "./contentComponents/Dashboard";
import Simulations from "./contentComponents/Simulations";
import Tutorials from "./contentComponents/Tutorial";
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
import NavigationBar from "./contentComponents/ContentNav";

const { Header, Sider } = Layout;

const siderMenuStyle: React.CSSProperties = {
  borderRadius: 5,
  background: "lightskyblue",
  color: "whitesmoke",
};

const NavBar: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (

      <Layout
        style={{
          width: "100vw",
          height: "100vh"
        }}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={siderMenuStyle}
        >
          <Button
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 78,
              height: 64,
              background: "inherit",
              color: "black",
            }}
          />

          <Menu
            mode="inline"
            inlineCollapsed={collapsed}
            style={{backgroundColor: 'inherit'}}
          >
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="/companies" icon={<SlackOutlined />}>
              <Link to="/companies">Companies</Link>
            </Menu.Item>
            <Menu.Item key="/company-admins" icon={<UserOutlined />}>
              <Link to="/company-admins">Company Admins</Link>
            </Menu.Item>
            <Menu.Item key="/tutorials" icon={<AppstoreOutlined />}>
              <Link to="/tutorials">Tutorials</Link>
            </Menu.Item>
            <Menu.Item key="/simulations" icon={<ProjectFilled />}>
              <Link to="/simulations">Simulations</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              background:'lightsteelblue',
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
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/companies" element={<Companies />} />
            <Route path="/company-admins" element={<CompanyAdmins />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/simulations" element={<Simulations />} />
          </Routes>
        </Layout>
      </Layout>
  );
};

export default NavBar;
