import React, { useEffect } from "react";
import "./newproduct.css";
import custard from "../../images/custard.jpg";
import { useDispatch, useSelector } from "react-redux";
import { newProduct } from "../../slice/newProductSlice";

const NewProduct = () => {
  const dispatch = useDispatch();

  const {
    loading: NLoading,
    data: NData,
    error: NError,
  } = useSelector((state) => state.newProduct);

  useEffect(() => {
    dispatch(newProduct);
  });
  return (
    <>
      <div className="newProductMainContainer">
        {NLoading && <p>Loading...</p>}
        {NError && <p>Error...</p>}
        {NData &&
          NData.map((product, index) => {
            return (
              <>
                <div className="newProductContainer" key={index}>
                  <div className="newProductInfo">
                    <img src={product.image[0]} alt="" className="newProductImage" />
                    <div className="newProductItems">
                      <p className="newProductName">{product.name}</p>
                      <p className="newProductPrice">{product.price}</p>
                    </div>
                    <p className="newProductDesc">{product.description}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default NewProduct;
