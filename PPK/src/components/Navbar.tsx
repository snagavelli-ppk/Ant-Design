import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Table, Form, Input, Select } from 'antd';

const { Header: AntdHeader, Sider, Content } = Layout;
const { Option } = Select;

const Navbar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('1');

  const handleMenuClick = (item: any) => {
    setSelectedMenuItem(item.key);
  };

  const handleSelectChange = (value: string) => {
    setSelectedMenuItem(value);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderContent = () => {
    switch (selectedMenuItem) {
      case '1':
        const tableColumns = [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          },
        ];

        const tableData = [
          {
            key: '1',
            name: 'John Doe',
            age: 30,
            address: '123 Main St',
          },
          {
            key: '2',
            name: 'Jane Doe',
            age: 25,
            address: '456 Oak St',
          },
        ];

        return <Table dataSource={tableData} columns={tableColumns} />;
      case '2':
        return (
          <Form style={{ width: '300px', marginLeft: 'auto' }}>
            <Form.Item label="Name">
              <Input defaultValue="John Doe" />
            </Form.Item>
            <Form.Item label="Age">
              <Input defaultValue={30} />
            </Form.Item>
            <Form.Item label="Address">
              <Input defaultValue="123 Main St" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        );
      case '3':
        return (
          <div style={{ marginLeft: 'auto' }}>
            <UploadOutlined style={{ fontSize: '24px', marginRight: '8px'}} />
            <UserOutlined style={{ fontSize: '24px', marginRight: '8px' }} />
            <VideoCameraOutlined style={{ fontSize: '24px' }} />
          </div>
        );
      default:
        // Default option with select dropdown
        return (
          <div>
            <h1>Select an Option</h1>
            <Select defaultValue="1" style={{ width: 120 }} onChange={handleSelectChange}>
              <Option value="1">Option 1</Option>
              <Option value="2">Option 2</Option>
              <Option value="3">Option 3</Option>
            </Select>
          </div>
        );
    }
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: '100%' }}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={handleMenuClick}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Option 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Option 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Option 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <AntdHeader style={{ background: colorBgContainer, padding: 0, height: '64px' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              height: '100%',
            }}
          />
        </AntdHeader>
        <Content
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height: '100%',
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;
