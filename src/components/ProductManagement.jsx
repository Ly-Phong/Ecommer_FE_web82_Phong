import React, { useEffect, useState } from 'react';
import { Table, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getProductList } from '../apis/product';
import constants from '../../constants';
const ProductManagement = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [totalItems, setTotalItems] = useState([]);
  useEffect(() => {
    getProductList(1,"", null, constants.CONST_PRODUCT_PER_PAGE).then((response) => {
      if (response.status === 200) {
        console.log(response.data.data.totalItems);
        setProducts(response.data.data.items);
        setTotalItems(response.data.data.totalItems);
      }
    }).catch((error) => {
      console.log("System has error:" + error);
    });
  }, [])
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => `${text} VND`,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Availble',
      dataIndex: 'isAvailable',
      key: 'isAvailable',
    },
    {
      title: 'Category',
      dataIndex: 'categoryId',
      key: 'categoryId',
      render: (categoryId) => categoryId === null ? "" : categoryId.name
    },
    {
      title: 'Thao tác',
      key: 'action',
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
      <Table columns={columns} dataSource={products} pagination={{
          total: totalItems,
          pageSize: constants.CONST_PRODUCT_PER_PAGE
        }}/>
    </div>
  );
};

export default ProductManagement;
