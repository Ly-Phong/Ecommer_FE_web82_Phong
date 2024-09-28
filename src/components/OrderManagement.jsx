import React from "react";
import { Table, Button, Space, Tag } from "antd";

const OrderManagement = () => {
  // Sample order data
  const data = [
    {
      key: "1",
      orderId: "DH001",
      customer: "Nguyen Van A",
      total: 500000,
      status: "Completed",
    },
    {
      key: "2",
      orderId: "DH002",
      customer: "Tran Van B",
      total: 120000,
      status: "Processing",
    },
    // Add more order data here
  ];

  // Function to handle order status update
  const handleUpdateStatus = (record) => {
    console.log("Update status for order:", record);
    // Implement status update functionality here
  };

  // Function to handle viewing order details
  const handleViewDetails = (record) => {
    console.log("View details for order:", record);
    // Implement view details functionality here
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Total Amount",
      dataIndex: "total",
      key: "total",
      render: (text) => `${text.toLocaleString()} VND`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color =
          status === "Completed"
            ? "green"
            : status === "Processing"
            ? "blue"
            : "red";
        return <Tag color={color}>{status}</Tag>;
      },
      filters: [
        { text: "Completed", value: "Completed" },
        { text: "Processing", value: "Processing" },
        { text: "Cancelled", value: "Cancelled" },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: "Actions",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleViewDetails(record)}>
            View Details
          </Button>
          <Button type="default" onClick={() => handleUpdateStatus(record)}>
            Update Status
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2>Order Management</h2>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default OrderManagement;
