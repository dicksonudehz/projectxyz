import React, { useEffect, useState } from "react";
import "./deleteproduct.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../../slice/fetchAllProductSlice";
import axios from 'axios';
import { allProducts } from "../../selector/Selector";
import { useRecoilValue } from "recoil";

const DeleteProduct = () => {
  const allProductItems = useRecoilValue(allProducts);
  console.log(allProductItems, 'this is the all product route')
  const [product, setProduct] = useState([])
  

  const handleDelete = async (productId) => {
    try {
      const deleteProduct = await axios.delete(`https://calm-gold-dugong-gown.cyclic.app/api/products/${productId}`)
      setProduct(deleteProduct => deleteProduct.filter(product => product.id !== productId));

    } catch (error) {
      console.log(error, "product cannot be deleted");
    }
  };


  return (
    <>
      <div className="deleteProductMainContainer">
        {allProductItems.product.map((item, index) => {
          return (
            <>
              <div className="deleteProductContainer">
                <div className="deleteProductInfo">
                  <img
                    src={item.image}
                    alt=""
                    className="deleteProductImage"
                  />
                  <div className="deleteProductItems">
                    <p className="deleteProductName">{item.name}</p>
                    <p className="deleteProductIcon">
                      <DeleteIcon onClick={() => handleDelete(item._id)} />
                    </p>
                  </div>
                  <p className="deleteProductDesc">{item.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DeleteProduct;
