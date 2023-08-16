import React, { useEffect } from "react";
import "./deleteproduct.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../../slice/fetchAllProductSlice";

const DeleteProduct = () => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.fetchAllProduct
  );
  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);
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
                        <DeleteIcon />
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
