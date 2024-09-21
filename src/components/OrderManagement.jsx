import React from 'react';
import { Table, Button, Space, Tag } from 'antd';

const OrderManagement = () => {
  const columns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: 'Khách hàng',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'total',
      key: 'total',
      render: (text) => `${text} VND`,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === 'Hoàn thành' ? 'green' : status === 'Đang xử lý' ? 'blue' : 'red';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">Xem chi tiết</Button>
          <Button type="default">Cập nhật trạng thái</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      orderId: 'DH001',
      customer: 'Nguyễn Văn A',
      total: 500000,
      status: 'Hoàn thành',
    },
    {
      key: '2',
      orderId: 'DH002',
      customer: 'Trần Văn B',
      total: 120000,
      status: 'Đang xử lý',
    },
    // Thêm dữ liệu đơn hàng tại đây
  ];

  return (
    <div>
      <h2>Quản lý đơn hàng</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default OrderManagement;
