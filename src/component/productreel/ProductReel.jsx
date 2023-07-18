import React from "react";
import "./productreel.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const ProductReel = () => {
  return (
    <>
      <div className="productReelContainer">
        <div className="productHeader">
          <h1 className="prodTitle">from the garden</h1>
          <ul>
            <li>fresh</li>
            <li>dried</li>
            <li>spice</li>
          </ul>
        </div>
        <div className="mainProCardContainer">
          <div className="prodCardContainer">
            <div className="mainProCardIcons">
              <SearchOutlinedIcon className="mainProCardIcon" />
            </div>
            <div className="mainProInfoCon">
              <img src="./images/ube.jpg" alt="" className="mainProCardImg" />
              <button className="prodCardAddToCard">Add to cart </button>
              {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
              <div className="prodCardTitle">
                <h1 className="cardTitle">Burger Peanuts Snack by Nkatie</h1>
                <p className="cardPrice">N4000</p>
              </div>
            </div>
          </div>
          <div className="prodCardContainer">
            <div className="mainProCardIcons">
              <SearchOutlinedIcon className="mainProCardIcon" />
            </div>
            <div className="mainProInfoCon">
              <img src="./images/redpepper.jpg" alt="" className="mainProCardImg" />
              <button className="prodCardAddToCard">Add to cart </button>
              {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
              <div className="prodCardTitle">
                <h1 className="cardTitle">Burger Peanuts Snack by Nkatie</h1>
                <p className="cardPrice">N4000</p>
              </div>
            </div>
          </div>
          <div className="prodCardContainer">
            <div className="mainProCardIcons">
              <SearchOutlinedIcon className="mainProCardIcon" />
            </div>
            <div className="mainProInfoCon">
              <img src="./images/yam.jpg" alt="" className="mainProCardImg" />
              <button className="prodCardAddToCard">Add to cart </button>
              {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
              <div className="prodCardTitle">
                <h1 className="cardTitle">Burger Peanuts Snack by Nkatie</h1>
                <p className="cardPrice">N4000</p>
              </div>
            </div>
          </div>
          <div className="prodCardContainer">
            <div className="mainProCardIcons">
              <SearchOutlinedIcon className="mainProCardIcon" />
            </div>
            <div className="mainProInfoCon">
              <img src="./images/onion.jpg" alt="" className="mainProCardImg" />
              <button className="prodCardAddToCard">Add to cart </button>
              {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
              <div className="prodCardTitle">
                <h1 className="cardTitle">Burger Peanuts Snack by Nkatie</h1>
                <p className="cardPrice">N4000</p>
              </div>
            </div>
          </div>
          <div className="prodCardContainer">
            <div className="mainProCardIcons">
              <SearchOutlinedIcon className="mainProCardIcon" />
            </div>
            <div className="mainProInfoCon">
              <img src="./images/manyyam.jpg" alt="" className="mainProCardImg" />
              <button className="prodCardAddToCard">Add to cart </button>
              {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
              <div className="prodCardTitle">
                <h1 className="cardTitle">Burger Peanuts Snack by Nkatie</h1>
                <p className="cardPrice">N4000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReel;
