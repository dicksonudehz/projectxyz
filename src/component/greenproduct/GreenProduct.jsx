import React from "react";
import "./greenproduct.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const GreenProduct = () => {
  return (
    <>
      <div className="mainGreenProdContainer">
        <div className="greenProdLeftContainer">
          <div className="greenProTitleItems">
            <h1 className="greenProdTitle">green from home</h1>
            <p className="greenProdParagh">
              Liven your meals with these
              <br /> African vegetables.
            </p>
          </div>
          <div className="greenProdArrows">
            <ArrowBackIosOutlinedIcon className="greenAdLeftArrow" />
            <ArrowForwardIosOutlinedIcon className="greenAdRightArrow" />
          </div>
          <img src="./images/ehuru.jpg" alt="" className="greenProductAdImg" />
          <div className="greenProductAdNavIcons">
            <ShoppingCartOutlinedIcon className="greenProductAdNavIcon" />
            <SearchOutlinedIcon className="greenProductAdNavIconSearch" />
          </div>
          <div className="greenPriceAd">
            <h1 className="greenProductAdTile">Ube (african Bear) 6ft</h1>
            <div className="greenProductAdPrice">N300.00</div>
          </div>
        </div>
        <div className="greenProdRightContainer">
          <img
            src="./images/vegetable.jpg"
            alt=""
            className="vegetableProductAdImg"
          />
        </div>
      </div>
    </>
  );
};

export default GreenProduct;
