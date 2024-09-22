// src/components/CategoryManagement.js
import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
// import axios from "axios";

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategories(res.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const handleAddCategory = () => {
    setEditingCategory(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    form.setFieldsValue(category);
    setIsModalVisible(true);
  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/categories/${id}`);
      fetchCategories();
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (editingCategory) {
        await axios.put(
          `http://localhost:5000/api/categories/${editingCategory._id}`,
          values
        );
      } else {
        await axios.post("http://localhost:5000/api/categories", values);
      }
      fetchCategories();
      setIsModalVisible(false);
    } catch (error) {
      console.error("Failed to save category:", error);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Actions",
      key: "action",
      render: (text, record) => (
        <span>
          <Button
            onClick={() => handleEditCategory(record)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button danger onClick={() => handleDeleteCategory(record._id)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div>
      <Button
        type="primary"
        onClick={handleAddCategory}
        style={{ marginBottom: 16 }}
      >
        Add Category
      </Button>
      <Table columns={columns} dataSource={categories} rowKey="_id" />
      <Modal
        title={editingCategory ? "Edit Category" : "Add Category"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Category Name"
            rules={[
              { required: true, message: "Please enter a category name!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CategoryManagement;
