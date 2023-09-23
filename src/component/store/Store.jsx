import React, { useEffect } from "react";
import BreadcrumSlider from "../breadcrumslider/BreadcrumSlider";
import custard from "../../images/custard.jpg";
import { productQuery } from "../../selector/Selector";
import { useRecoilValue } from "recoil";
import "./store.css";

function Store() {
  const apiData = useRecoilValue(productQuery);
  return (
    <>
      <BreadcrumSlider />
      <div className="storeProductMainContainer">
        {apiData.product.map((product, index) => (
          <div className="storeProductContainer" key={index}>
            <div className="storeProductInfo">
              <img
                src={product.image[0]}
                alt=""
                className="storeProductImage"
              />
              <div className="storeProductItems">
                <p className="storeProductName">{product.name}</p>
                <p className="storeProductIcon">{product.price}</p>
              </div>
              <p className="storeProductDesc">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Store;
