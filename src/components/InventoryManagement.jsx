import React from 'react';
import { Table } from 'antd';

const InventoryManagement = () => {
  const columns = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Số lượng tồn kho',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Trạng thái',
      key: 'status',
      render: (text, record) => {
        let color = record.stock > 0 ? 'green' : 'red';
        return (
          <span style={{ color }}>
            {record.stock > 0 ? 'Còn hàng' : 'Hết hàng'}
          </span>
        );
      },
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Sản phẩm 1',
      stock: 50,
    },
    {
      key: '2',
      name: 'Sản phẩm 2',
      stock: 0,
    },
    // Thêm dữ liệu kho hàng tại đây
  ];

  return (
    <div>
      <h2>Quản lý kho hàng</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default InventoryManagement;
