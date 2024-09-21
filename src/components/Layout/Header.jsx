import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, ShoppingCartOutlined, FileTextOutlined, AppstoreOutlined, LineChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const AdminHeader = () => {
  return (
    <Header className="header" style={{ backgroundColor: '#001529' }}>
      <div className="logo" style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
        Admin Panel
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/admin/users">Quản lý khách hàng</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
          <Link to="/admin/products">Quản lý sản phẩm</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FileTextOutlined />}>
          <Link to="/admin/orders">Quản lý đơn hàng</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<AppstoreOutlined />}>
          <Link to="/admin/categories">Quản lý danh mục</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<LineChartOutlined />}>
          <Link to="/admin/reports">Báo cáo doanh thu</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AdminHeader;
