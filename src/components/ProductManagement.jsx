import React from 'react';
import { Table, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const ProductManagement = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      render: (text) => `${text} VND`,
    },
    {
      title: 'Số lượng tồn',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">Chỉnh sửa</Button>
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
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ProductManagement;
