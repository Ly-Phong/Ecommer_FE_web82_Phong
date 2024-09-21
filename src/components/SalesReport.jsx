import React from 'react';
import { Card, Col, Row, Statistic, DatePicker } from 'antd';
import { Line } from '@ant-design/charts';

const SalesReport = () => {
  const data = [
    { month: 'Tháng 1', revenue: 1000000 },
    { month: 'Tháng 2', revenue: 1500000 },
    { month: 'Tháng 3', revenue: 2000000 },
    // Thêm dữ liệu doanh thu
  ];

  const config = {
    data,
    xField: 'month',
    yField: 'revenue',
    smooth: true,
    lineStyle: {
      stroke: '#5B8FF9',
    },
  };

  return (
    <div>
      <h2>Báo cáo doanh thu</h2>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Doanh thu tháng" value={2000000} suffix="VND" />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Sản phẩm bán ra" value={120} />
          </Card>
        </Col>
      </Row>
      <DatePicker.RangePicker style={{ margin: '20px 0' }} />
      <Line {...config} />
    </div>
  );
};

export default SalesReport;
