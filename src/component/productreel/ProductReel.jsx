import React from "react";
import "./productreel.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ube from "../../images/ube.jpg";
import redpepper from "../../images/redpepper.jpg";
import yam from "../../images/yam.jpg";
import onion from "../../images/onion.jpg";
import manyyam from "../../images/manyyam.jpg";


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
              <img src={ube} alt="" className="mainProCardImg" />
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
              <img src={redpepper} alt="" className="mainProCardImg" />
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
              <img src={yam} alt="" className="mainProCardImg" />
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
              <img src={onion} alt="" className="mainProCardImg" />
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
              <img src={manyyam} alt="" className="mainProCardImg" />
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
