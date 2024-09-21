import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';

const Dashboard = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card>
            <Statistic title="Tổng doanh thu" value={112893} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Số đơn hàng mới" value={93} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Sản phẩm tồn kho" value={30} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Dashboard;
