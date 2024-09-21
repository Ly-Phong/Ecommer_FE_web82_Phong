import React, { useState } from "react";
import { PlusOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Upload,
  Switch,
} from "antd";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input; // Đảm bảo khai báo chính xác

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AddProductForm = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const navigate = useNavigate(); // Hook điều hướng

  // Hàm điều hướng về trang ProductManagement
  const handleGoBack = () => {
    navigate("/admin/products"); // Đường dẫn đến trang ProductManagement
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 800,
        }}
      >
        <Form.Item
          label="Tên sản phẩm"
          name="productName"
          rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm" }]}
        >
          <Input placeholder="Nhập tên sản phẩm" />
        </Form.Item>

        <Form.Item
          label="Giá sản phẩm"
          name="price"
          rules={[{ required: true, message: "Vui lòng nhập giá sản phẩm" }]}
        >
          <InputNumber
            placeholder="Nhập giá"
            min={0}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          label="Loại sản phẩm"
          name="category"
          rules={[{ required: true, message: "Vui lòng chọn loại sản phẩm" }]}
        >
          <Select placeholder="Chọn loại sản phẩm">
            <Select.Option value="electronics">Điện tử</Select.Option>
            <Select.Option value="fashion">Thời trang</Select.Option>
            <Select.Option value="home">Đồ gia dụng</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Ngày phát hành" name="releaseDate">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Mô tả sản phẩm" name="description">
          <TextArea rows={4} placeholder="Nhập mô tả sản phẩm" />
        </Form.Item>

        <Form.Item
          label="Hình ảnh"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "Vui lòng tải lên hình ảnh" }]}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item label="Đăng bán" name="status" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
          <Button type="primary" htmlType="submit">
            Thêm sản phẩm
          </Button>
        </Form.Item>
      </Form>
      <Button
        type="default"
        icon={<ArrowLeftOutlined />}
        onClick={handleGoBack}
        style={{ marginBottom: 16, width: '100px' }}
      >
        Quay lại
      </Button>
    </>
  );
};

export default AddProductForm;
