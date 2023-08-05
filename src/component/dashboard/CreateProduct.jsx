import React, { useEffect } from "react";
import "./createproduct.css";
import { createProduct } from "../../slice/createProductSlice";
import { useDispatch, useSelector } from "react-redux";

const CreateProduct = () => {
  const dispatch = useDispatch();

  const {
    loading: cloading,
    success: csuccess,
    failure: cfailure,
  } = useSelector((state) => state.createProduct);

  useEffect(() => {
    dispatch(createProduct());
  }, [dispatch]);
  return (
    <>
      <div className="createProductContainer" id="CreateProduct">
        <h1>create a new product </h1>
        <div className="createProductNameContainer">
          <h1>name</h1>
          <input
            type="text"
            placeholder="product name"
            className="createProductInput"
          />
        </div>
        <div className="createProductNameContainer">
          <h1>category</h1>
          <select name="category" id="" className="createProductCategory">
            <option value="fluid">custard</option>
            <option value="fluid">custard</option>
            <option value="fluid">custard</option>
            <option value="fluid">custard</option>
            <option value="fluid">custard</option>
            <option value="fluid">custard</option>
          </select>
        </div>
        <div className="createProductNameContainer">
          <h1>quantity</h1>
          <select name="category" id="" className="createProductQty">
            <option value="number">1</option>
            <option value="number">2</option>
            <option value="number">3</option>
            <option value="number">4</option>
            <option value="number">5</option>
          </select>
        </div>
        <div className="createProductNameContainer">
          <h1>quantity</h1>
          <input
            type="text"
            className="createProductPrice"
            placeholder="price"
          />
        </div>
        <div className="createProductNameContainer">
          <h1>description</h1>
          <textarea
            name="product description"
            className="createProductDesc"
            id=""
            cols="30"
            rows="10"
            placeholder="product description"
          />
        </div>
        <div className="createProductNameContainer">
          <h1>description</h1>
          <input type="file" className="createProductFile" />
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
