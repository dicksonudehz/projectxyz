import React from "react";
import "./productad.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const ProductAd = () => {
  return (
    <>
      <div className="productAdContainer">
        <div className="productAdLeft">
          <img src="./images/obiji.jpeg" alt="" className="productAdImg" />
        </div>
        <div className="productAdRight">
          <div className="productAdRightTop">
            <div className="productAdTitle">
              <h1 className="proAdRightTopTitle">MORE FLAVOR</h1>
              <p>Need more flavour? Check these out!</p>
            </div>
            <div className="productAdArrow">
              <ArrowBackIosOutlinedIcon className="proAdLeftArrow" />
              <ArrowForwardIosOutlinedIcon className="proAdRightArrow" />
            </div>
            <img
              src="./images/larsor.jpg"
              alt=""
              className="proAdRightTopSlideImage"
            />
            <div className="productAdNavIcons">
              <ShoppingCartOutlinedIcon className="productAdNavIcon" />
              <SearchOutlinedIcon className="productAdNavIcon" />
            </div>
            <div className="priceAd">
              <h1 className="productAdTile">
                larsor fried rice seasoning (10G)
              </h1>
              <div className="ProductAdPrice">N3000.00</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAd;
