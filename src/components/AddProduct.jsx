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

const { TextArea } = Input; // Ensure correct declaration

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AddProductForm = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const navigate = useNavigate(); // Navigation hook

  // Function to navigate back to the ProductManagement page
  const handleGoBack = () => {
    navigate("/admin/products"); // Path to the ProductManagement page
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
          label="Product Name"
          name="productName"
          rules={[{ required: true, message: "Please enter the product name" }]}
        >
          <Input placeholder="Enter product name" />
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="price"
          rules={[
            { required: true, message: "Please enter the product price" },
          ]}
        >
          <InputNumber
            placeholder="Enter price"
            min={0}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          label="Product Category"
          name="category"
          rules={[
            { required: true, message: "Please select a product category" },
          ]}
        >
          <Select placeholder="Select product category">
            <Select.Option value="electronics">Electronics</Select.Option>
            <Select.Option value="fashion">Fashion</Select.Option>
            <Select.Option value="home">Home Appliances</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Release Date" name="releaseDate">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Product Description" name="description">
          <TextArea rows={4} placeholder="Enter product description" />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "Please upload an image" }]}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Available for Sale"
          name="status"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
      <Button
        type="default"
        icon={<ArrowLeftOutlined />}
        onClick={handleGoBack}
        style={{ marginBottom: 16, width: "100px" }}
      >
        Go Back
      </Button>
    </>
  );
};

export default AddProductForm;
