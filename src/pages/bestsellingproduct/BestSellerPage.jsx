import React from "react";
import BreadcrumSlider from "../../component/breadcrumslider/BreadcrumSlider";
import "./bestsellerpage.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const BestSeller = () => {
  return (
    <>
      <BreadcrumSlider />
      <div className="bestSellerContainer">
        <div className="bestSellerContainerLeft">
          <div className="bestSellerLeftItems">
            <p>tam</p>
            <h1>
              african groceries deliver <br />
              at your doorstep{" "}
            </h1>
          </div>
          <img
            src="./images/bestseller.jpg"
            alt=""
            className="bestSellerImage"
          />
        </div>
        <div className="bestSellerContainerRight">
          <div className="bestSellerRightTitleItems">
            <div className="bestSellerTitle">
              <h1>trending products</h1>
            </div>
            <div className="bestSellerRightItems">
              <div className="bestSellerItems">
                <ul>
                  <li>provisions</li>
                  <li>spice</li>
                  <li>flour</li>
                  <li>grains</li>
                  <li>ethnic</li>
                </ul>
              </div>
              <div className="bestSelletIcons">
                <KeyboardArrowLeftOutlinedIcon className="bestSellericonsLeft" />
                <ChevronRightOutlinedIcon className="bestSellericonsRight" />
              </div>
            </div>
          </div>
          <div className="bestSellerProductContainer">
            <div className="bestSellsProdItemContainer">
              <SearchOutlinedIcon className="searchBestSellerIcon" />
              <img
                src="./images/labis.jpg"
                alt=""
                className="BestSellerProduct"
              />
              {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
              <div className="bestSellerProduct">
                <button className="bestSellerAddtoCart">Add to cart </button>
                <h1 className="bestSellerTittle">
                  Burger Peanuts Snack by Nkatie
                </h1>
                <p className="bestSellerPrice">N4000</p>
              </div>
            </div>
            <div className="bestSellsProdItemContainer">
              <SearchOutlinedIcon className="searchBestSellerIcon" />
              <img
                src="./images/labis.jpg"
                alt=""
                className="BestSellerProduct"
              />
              {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
              <div className="bestSellerProduct">
                <button className="bestSellerAddtoCart">Add to cart </button>
                <h1 className="bestSellerTittle">
                  Burger Peanuts Snack by Nkatie
                </h1>
                <p className="bestSellerPrice">N4000</p>
              </div>
            </div>
            <div className="bestSellsProdItemContainer">
              <SearchOutlinedIcon className="searchBestSellerIcon" />
              <img
                src="./images/labis.jpg"
                alt=""
                className="BestSellerProduct"
              />
              {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
              <div className="bestSellerProduct">
                <button className="bestSellerAddtoCart">Add to cart </button>
                <h1 className="bestSellerTittle">
                  Burger Peanuts Snack by Nkatie
                </h1>
                <p className="bestSellerPrice">N4000</p>
              </div>
            </div>
            <div className="bestSellsProdItemContainer">
              <SearchOutlinedIcon className="searchBestSellerIcon" />
              <img
                src="./images/labis.jpg"
                alt=""
                className="BestSellerProduct"
              />
              {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
              <div className="bestSellerProduct">
                <button className="bestSellerAddtoCart">Add to cart </button>
                <h1 className="bestSellerTittle">
                  Burger Peanuts Snack by Nkatie
                </h1>
                <p className="bestSellerPrice">N4000</p>
              </div>
            </div>
            <div className="bestSellsProdItemContainer">
              <SearchOutlinedIcon className="searchBestSellerIcon" />
              <img
                src="./images/labis.jpg"
                alt=""
                className="BestSellerProduct"
              />
              {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
              <div className="bestSellerProduct">
                <button className="bestSellerAddtoCart">Add to cart </button>
                <h1 className="bestSellerTittle">
                  Burger Peanuts Snack by Nkatie
                </h1>
                <p className="bestSellerPrice">N4000</p>
              </div>
            </div>
            <div className="bestSellsProdItemContainer">
              <SearchOutlinedIcon className="searchBestSellerIcon" />
              <img
                src="./images/labis.jpg"
                alt=""
                className="BestSellerProduct"
              />
              {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
              <div className="bestSellerProduct">
                <button className="bestSellerAddtoCart">Add to cart </button>
                <h1 className="bestSellerTittle">
                  Burger Peanuts Snack by Nkatie
                </h1>
                <p className="bestSellerPrice">N4000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
