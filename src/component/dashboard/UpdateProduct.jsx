import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../../slice/fetchAllProductSlice";
import "./updateproduct.css";

const UpdateProduct = () => {
  const dispatch = useDispatch();

  const {
    loading: ULoading,
    data: UData,
    error: UError,
  } = useSelector((state) => state.fetchAllProduct);
  useEffect(() => {
    dispatch(fetchAllProduct);
  }, [dispatch]);

  const handleUpdate = () => {
    try {
      var raw = '{\r\n    "isDiscount": true\r\n}';
      var requestOptions = {
        method: "PUT",
        body: raw,
        redirect: "follow",
      };
      fetch(
        "https://delightful-spacesuit-frog.cyclic.app/api/products/64b2c5b8eb73887bfe6eed4e",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error, "product is not updated");
    }
  };

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
                      <p className="updateProductIcon" onClick={handleUpdate}>
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
