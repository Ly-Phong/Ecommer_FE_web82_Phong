// src/components/CategoryManagement.js
import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import { getCategoryList } from "../apis/category";
import { Spin } from 'antd';
import { useNavigate, useSearchParams } from "react-router-dom"; 
import { Popconfirm } from 'antd';
import constants from '../../constants';
const CategoryManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingCategory, setEditingCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [totalItems, setTotalItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilter , setIsFilter] = useState(false);
  const navigate = useNavigate();
  const pageNumber = Number.parseInt(searchParams.get("pn") !== null ? searchParams.get("pn") : 1);
  useEffect(() => {
    if(!isFilter) {
      setIsLoading(true);
      getCategoryList(pageNumber, constants.CONST_CATEGORY_PER_PAGE).then((response) => {
        if (response.status === 200) {
          console.log(response);
          console.log(response.data.data.items);
          setCategories(response.data.data.items);
          setTotalItems(response.data.data.totalItems);
        }
      }).catch((error) => {
        console.log(error);
      }).finally(() =>{
        setIsLoading(false);
      });
    }
  }, [])

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
      <Table columns={columns} 
      dataSource={categories} 
      rowKey="_id"  
      loading={isLoading && <Spin tip="Loading"></Spin>} 
      pagination={{
        current: pageNumber,
        total: totalItems,
        pageSize: constants.CONST_CATEGORY_PER_PAGE,
        onChange: (pageNumber, pageSize) => {window.location.href=`/admin/categories?pn=${pageNumber}`}
      }}
      />
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
