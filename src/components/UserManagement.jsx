import React from 'react';
import { Table, Button, Space } from 'antd';

const UserManagement = () => {
  const columns = [
    {
      title: 'Tên khách hàng',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">Xem chi tiết</Button>
          <Button type="default">Chỉnh sửa</Button>
          <Button type="danger">Xóa</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Nguyễn Văn A',
      email: 'a@example.com',
      phone: '0909123456',
    },
    {
      key: '2',
      name: 'Trần Văn B',
      email: 'b@example.com',
      phone: '0909876543',
    },
    // Thêm dữ liệu khách hàng tại đây
  ];

  return (
    <div>
      <h2>Quản lý khách hàng</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default UserManagement;
