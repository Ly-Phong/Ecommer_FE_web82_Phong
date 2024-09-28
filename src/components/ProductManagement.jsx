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
          <Button onClick={console.log(text)} type="primary">Chỉnh sửa</Button>
          <Button type="danger">Xóa</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Sản phẩm 1',
      price: 120000,
      quantity: 50,
    },
    {
      key: '2',
      name: 'Sản phẩm 2',
      price: 250000,
      quantity: 30,
    },
    // Thêm dữ liệu sản phẩm tại đây
  ];

  // Hàm điều hướng đến trang thêm sản phẩm
  const goToAddProductPage = () => {
    navigate('/admin/products/add'); // Đường dẫn đến trang thêm sản phẩm
  };

  return (
    <div>
      <h2>Quản lý sản phẩm</h2>
      <Button type="primary" style={{ marginBottom: 16 }} onClick={goToAddProductPage}>
        Thêm sản phẩm mới
      </Button>
      <Table columns={columns} dataSource={products} pagination={{
          total: totalItems,
          pageSize: constants.CONST_PRODUCT_PER_PAGE
        }}/>
    </div>
  );
};

export default ProductManagement;
