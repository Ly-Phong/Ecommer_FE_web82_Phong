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

const { TextArea } = Input; // Đảm bảo khai báo chính xác

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
        form={form}
        onFinish={onFinish}
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
          rules={[{ required: true, message: "Vui lòng chọn loại sản phẩm" }]}>
          <Select placeholder="Chọn loại sản phẩm">
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
            placeholder="Nhập giá"
            min={0}
            style={{ width: "100%" }}
          />
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
          <Upload multiple={false} listType="picture-card" onChange={(e) => { setFileList(e.fileList[0])}}>
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
          <Button 
          type="primary" 
          htmlType="submit" 
            >
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
