import React from "react";
import { Table, Button, Space } from "antd";

const UserManagement = () => {
  const columns = [
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Actions",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">View Details</Button>
          <Button type="default">Edit</Button>
          <Button type="danger">Delete</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Nguyen Van A",
      email: "a@example.com",
      phone: "0909123456",
    },
    {
      key: "2",
      name: "Tran Van B",
      email: "b@example.com",
      phone: "0909876543",
    },
    // Add more customer data here
  ];

  return (
    <div>
      <h2>User Management</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default UserManagement;
