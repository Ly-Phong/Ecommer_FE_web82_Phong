import React from "react";
import { Table, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";

const ProductManagement = () => {
  const navigate = useNavigate();

  // Column configuration for the product table
  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => `${text.toLocaleString()} VND`, // Format price with thousand separators
    },
    {
      title: "Stock Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Actions",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record.key)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  // Sample data for the product table
  const data = [
    {
      key: "1",
      name: "Product 1",
      price: 120000,
      quantity: 50,
    },
    {
      key: "2",
      name: "Product 2",
      price: 250000,
      quantity: 30,
    },
    // Add more product data here
  ];

  // Function to navigate to the Add Product page
  const goToAddProductPage = () => {
    navigate("/admin/products/add");
  };

  // Function to handle product edit
  const handleEdit = (record) => {
    navigate(`/admin/products/edit/${record.key}`); // Navigate to edit page with product ID
  };

  // Function to handle product deletion
  const handleDelete = (key) => {
    console.log("Delete product with key:", key);
    // Implement product deletion logic here
  };

  return (
    <div>
      <h2>Product Management</h2>
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={goToAddProductPage}
      >
        Add New Product
      </Button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default ProductManagement;
