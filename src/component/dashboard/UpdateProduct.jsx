import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../../slice/fetchAllProductSlice";
import "./updateproduct.css";

const UpdateProduct = () => {
  const dispatch = useDispatch();

  const { loading:ULoading, data:UData, error:UError } = useSelector(
    (state) => state.fetchAllProduct
  );
  useEffect(() => {
    dispatch(fetchAllProduct);
  }, [dispatch]);

  return (
    <>
      <div className="updateProductMainContainer">
        {ULoading && <p>Loading</p>}
        {UError && <p>Error</p>}
        {UData &&
          UData.map((product, index) => {
            return (
              <>
                <div className="updateProductContainer">
                  <div className="updateProductInfo">
                    <img
                      src={product.image}
                      alt=""
                      className="updateProductImage"
                    />
                    <div className="updateProductItems">
                      <p className="updateProductName">{product.name}</p>
                      <p className="updateProductIcon">
                        update product
                      </p>
                    </div>
                    <p className="updateProductDesc">{product.description}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default UpdateProduct;
