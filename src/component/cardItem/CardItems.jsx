import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import "./card.css";

const CardItems = () => {
  return (
    <>
      <div className="cardContainerBottom">
        <div className="cardContainerBottomUpItems">
          <div className="cardContainerTopItems">
            <div className="cardDiscountExplore">
              <span className="discount">-10%</span>
            </div>
            <div className="productIconExplore">
              <FavoriteBorderOutlinedIcon className="ProductIconExploreIcon" />
              <FavoriteBorderOutlinedIcon className="ProductIconExploreIcon" />
              <SearchOutlinedIcon className="ProductIconExploreIcon" />
            </div>
          </div>
          <div className="cardContainerBottomItems">
            <img
              src="./images/peakmilk.jpg"
              alt="main subject item"
              className="cardImage"
            />
            <h1 className="cardContainerBottomItemsHeader">
              game triger finger new insulated PH-X
            </h1>
            <div className="cardPrice">
              <h1 className="maxPrice">N3000</h1>
              <span className="operand">-</span>
              <h1 className="maxPrice">N1500</h1>
            </div>
            <div className="rating">
              <StarOutlinedIcon className="starContent" />
              <StarOutlinedIcon className="starContent" />
              <StarOutlinedIcon className="starContent" />
              <StarHalfOutlinedIcon className="starContent" />
              <StarOutlineOutlinedIcon className="starContent" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItems;
