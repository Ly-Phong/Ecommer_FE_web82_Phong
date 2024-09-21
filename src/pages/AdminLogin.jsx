import React from "react";
import { Form, Input, Button, Typography, Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Layout/Logo"

const { Title, Text } = Typography;

const AdminLogin = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/admin/dashboard");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
        padding: '0 24px',
      }}
    >
      <Row justify="center" align="middle" style={{ width: '100%', height: '100%' }}>
        <Col xs={24} sm={16} md={12} lg={8}>
          <Card
            bordered={false}
            style={{ borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
          >
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <Logo width={120} height={40} />
              <Title level={2} style={{ margin: 0 }}>
                Đăng Nhập
              </Title>
              <Text type="secondary">Nhập tài khoản và mật khẩu để tiếp tục</Text>
            </div>
            <Form name="login" onFinish={onFinish} layout="vertical">
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
              >
                <Input placeholder="Tài khoản" size="large" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
              >
                <Input.Password placeholder="Mật khẩu" size="large" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%", height: 40 }}
                  size="large"
                >
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminLogin;
