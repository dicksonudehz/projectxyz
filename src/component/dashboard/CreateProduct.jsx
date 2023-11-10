import React, { useEffect, useState } from "react";
import "./createproduct.css";
import { createProduct } from "../../slice/createProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateProduct = () => {
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    name: "",
    category: "",
    quantity: 0,
    price: 0,
    description: "",
    image: null,
  });

  const handleChange = (value, name) => {
    console.log(value, name);
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    Object.keys(productData).forEach((key) => {
      formData.append(key, productData[key]);
    });
    try {
      const formData = new FormData();

      const res = await axios.post(
        `https://calm-gold-dugong-gown.cyclic.app/api/products`,
        {
          formData,
        }
      );
      toast.success("product created successfully");
      console.log(res.data, "this data are coming from creating product data");
    } catch (error) {
      console.log(error, "product cannot be created successfully");
    }
  };

  // const HandleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (!name || !category || !quantity || !price || !description) {
  //     toast.error("all the field must be filled");
  //   } else {
  //     try {
  //       const formData = new FormData();

  //       const res = await axios.post(
  //         `https://delightful-spacesuit-frog.cyclic.app/api/products`,
  //         {
  //           formData,
  //         }
  //       );
  //       toast.success("product created successfully");
  //       console.log(res.data, "this is coming from product creation");
  //     } catch (error) {
  //       console.log(error, "product cannot be deleted");
  //     }
  //   }
  // };

  return (
    <>
      <div className="createProductContainer" id="CreateProduct">
        <ToastContainer />
        <h1>create a new product </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="createProductNameContainer">
            <h1>name</h1>
            <input
              name="name"
              type="text"
              placeholder="product name"
              className="createProductInput"
              value={productData.name}
              onChange={({ target }) => handleChange(target.value, target.name)}
            />
          </div>
          <div className="createProductNameContainer">
            <h1>category</h1>
            <select
              name="category"
              value={productData.category}
              onChange={({ target }) => handleChange(target.value, target.name)}
              id=""
              className="createProductCategory"
            >
              <option value="grains">grains</option>
              <option value="fluid">swallow</option>
              <option value="fluid">custard</option>
              <option value="fluid">custard</option>
              <option value="fluid">custard</option>
              <option value="fluid">custard</option>
            </select>
          </div>
          <div className="createProductNameContainer">
            <h1>quantity</h1>
            <select
              name="quantity"
              id=""
              className="createProductQty"
              value={productData.quantity}
              onChange={({ target }) => handleChange(target.value, target.name)}
            >
              <option value="1">1</option>
              <option value="number">2</option>
              <option value="number">3</option>
              <option value="number">4</option>
              <option value="number">5</option>
            </select>
          </div>
          <div className="createProductNameContainer">
            <h1>new price</h1>
            <input
              name="price"
              type="number"
              className="createProductPrice"
              placeholder="price"
              value={productData.price}
              onChange={({ target }) => handleChange(target.value, target.name)}
            />
          </div>
          <div className="createProductNameContainer">
            <h1>description</h1>
            <textarea
              name="description"
              className="createProductDesc"
              id=""
              cols="30"
              rows="10"
              placeholder="product description"
              value={productData.description}
              onChange={({ target }) => handleChange(target.value, target.name)}
            />
          </div>
          <div className="createProductFileContainer">
            <h1>choose image</h1>
            <input
              name="file"
              type="file"
              accept=".jpg, .jpeg, .png, .webp, .avif"
              value={productData.image}
              className="createProductFile"
              onChange={({ target }) => handleChange(target.value, target.name)}
            />
            <button className="createProduct" type="submit">
              create a product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
