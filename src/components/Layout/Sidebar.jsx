import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: 256, height: '100vh', background: '#001529' }}>
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={['dashboard']}
      >
        <Menu.Item key="dashboard">
          <Link to="/admin/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="users">
          <Link to="/admin/users">Quản lý khách hàng</Link>
        </Menu.Item>
        <Menu.Item key="products">
          <Link to="/admin/products">Quản lý sản phẩm</Link>
        </Menu.Item>
        <Menu.Item key="orders">
          <Link to="/admin/orders">Quản lý đơn hàng</Link>
        </Menu.Item>
        <Menu.Item key="inventory">
          <Link to="/admin/inventory">Quản lý kho hàng</Link>
        </Menu.Item>
        <Menu.Item key="categories">
          <Link to="/admin/categories">Quản lý danh mục</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
