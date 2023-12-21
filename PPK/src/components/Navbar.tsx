import React, { useState } from 'react';
import ComanyForm from './CompanyAdmin';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SlackOutlined,
  HomeOutlined,
  AppstoreOutlined,
  ProjectFilled 
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{width: '100vw',height: '100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}
      style={{width: 200, minHeight: 280}}
      > 
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              backgroundColor: 'grey',
              fontSize: '16px',
              width: 64,
              height: 64,
              color: 'white'
            }}
          />
       
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'DashBoard',
            },
            {
              key: '2',
              icon: <SlackOutlined />,
              label: 'Companies',
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: 'Company Admins',
            },
            {
              key: '4',
              icon: <AppstoreOutlined />,
              label: 'Tutorials',
            },
            {
              key: '5',
              icon: <ProjectFilled />,
              label: 'Simulations',
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, backgroundColor:'greenyellow',textAlign: 'center'}}>
          <h2>App</h2>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            backgroundColor: 'goldenrod'
          }}
        >
          <div style={{width: '50vw', border: '2px solid gold', borderRadius: '5px',marginLeft: '200px'}}>
          <ComanyForm></ComanyForm> 
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;