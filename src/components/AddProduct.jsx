import React, { useEffect, useState } from "react";
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
import { getAllCategory } from "../apis/category";
import { registProduct } from "../apis/product";

const { TextArea } = Input; // Ensure correct declaration

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const onFinish = (values) => {
  const {productName, price, category, image, quantity, description, status} = values;
  let formData = new FormData();
  formData.append("quantity", quantity);
  formData.append("description", description);
  formData.append("categoryId", category);
  formData.append("name", productName);
  formData.append("isAvailable", status);
  formData.append("price", price);
  formData.append("file", image[0].originFileObj);
  registProduct(formData).then((response) => {
    console.log(response)
  });
};

const AddProductForm = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate(); // Hook điều hướng
  const [form] = Form.useForm();
  useEffect(() => {
    getAllCategory().then((response) => {
      if (response.status === 200) {
        setCategoryList(response.data.data);
      }
    }).catch((error) =>{
      console.log(error);
    })
  }, [])
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
        form={form}
        onFinish={onFinish}
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
          rules={[{ required: true, message: "Please choose at one category" }]}>
          <Select placeholder="">
            {
              categoryList.map((category) =>{
                return <Select.Option value={category._id}>{category.name}</Select.Option>
              })
            }
          </Select>
        </Form.Item>

        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[{ required: true, message: "Please input product quantity" }]}
        >
          <InputNumber
            placeholder="Product quantity"
            min={0}
            style={{ width: "100%" }}
          />
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
          <Upload multiple={false} listType="picture-card" onChange={(e) => { setFileList(e.fileList[0])}}>
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
