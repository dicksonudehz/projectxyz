import React, { useEffect } from "react";
import "./deleteproduct.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../../slice/fetchAllProductSlice";
import axios from "axios";

const DeleteProduct = () => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.fetchAllProduct
  );
  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  const handleDelete = async (index) => {
    try {
      const requestOptions = {
        method: "DELETE",
        redirect: "follow",
      };
      fetch(
        `https://delightful-spacesuit-frog.cyclic.app/api/products`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
      console.log("product  deleted");
    } catch (error) {
      console.log(error, "product cannot be deleted");
    }
  };
  return (
    <>
      <div className="deleteProductMainContainer">
        {loading && <p>Loading</p>}
        {error && <p>Error</p>}
        {data &&
          data.map((product, index) => {
            return (
              <>
                <div className="deleteProductContainer">
                  <div className="deleteProductInfo">
                    <img
                      src={product.image}
                      alt=""
                      className="deleteProductImage"
                    />
                    <div className="deleteProductItems">
                      <p className="deleteProductName">{product.name}</p>
                      <p className="deleteProductIcon">
                        
                        <DeleteIcon onClick={handleDelete} />
                      </p>
                    </div>
                    <p className="deleteProductDesc">{product.description}</p>
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
