import React, { useEffect, useState } from "react";
import "./createproduct.css";
import { createProduct } from "../../slice/createProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const CreateProduct = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const {
    loading: cloading,
    data: csuccess,
    error: cfailure,
  } = useSelector((state) => state.createProduct);

  console.log(csuccess)


  const HandleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (csuccess) {
      toast.success("product created is Successful", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        Navigate("/");
      }, 3000);
    } else if (cfailure) {
      toast.error(cfailure, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [csuccess, cfailure, Navigate]);

  return (
    <>
      <div className="createProductContainer" id="CreateProduct">
        <h1>create a new product </h1>
        <form action="" onSubmit={HandleSubmit}>
          <div className="createProductNameContainer">
            <h1>name</h1>
            <input
              type="text"
              placeholder="product name"
              className="createProductInput"
              value={name}
              onChange={setName}
            />
          </div>
          <div className="createProductNameContainer">
            <h1>category</h1>
            <select
              name="category"
              value={category}
              onChange={setCategory}
              id=""
              className="createProductCategory"
            >
              <option value="grains" >
                grains
              </option>
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
              name="category"
              id=""
              className="createProductQty"
              value={category}
              onChange={setCategory}
            >
              <option value="1">1</option>
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
              value={price}
              onChange={setPrice}
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
              value={description}
              onChange={setDescription}
            />
          </div>
          <div className="createProductFileContainer">
            <h1>description</h1>
            <input type="file" className="createProductFile" />
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
