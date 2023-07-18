import React from "react";
import "./bestseller.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const BestSeller = () => {
  return (
    <>
      <div className="bestSellerProdContainer">
        <div className="bestSellerProdConLeft">
          <div className="bestSellerContentCon">
            <div className="bestSellerContentImg">
              <img
                src="./images/advertimage.jpg"
                alt=""
                className="proBestSellerImg"
              />
            </div>
            <div className="bestSellerContentConItems">
              <p>great houston area</p>
              <h1>
                deliver to your
                <br /> door step
              </h1>
              <p>Same-day scheduled delivery available in select regions.</p>
              <div className="orderNowButton">order now</div>
            </div>
          </div>
        </div>
        <div className="bestSellerProdConRight">
          <div className="bestSellerProdRightHeaderCont">
            <div className="bestSelletProdHeaderLeft">
              <h1>don't missed these</h1>
              <ul>
                <li>ethnic delicacies</li>
                <li>fufu fills</li>
                <li>grains alert</li>
              </ul>
            </div>
            <div className="navIconsRight">
              <ArrowBackIosOutlinedIcon className="bestSellerProdArrow" />
              <ArrowForwardIosOutlinedIcon className="bestSellerProdArrow" />
            </div>
          </div>
          <div className="bestSellerProdContainerBottom">
            <div className="bestSellerProdInfo">
              <div className="bestSellerSearchIcon">
                <SearchOutlinedIcon className="searchIcon" />
              </div>
              <div className="bestSellerProductContentContainer">
                <img
                  src="./images/onion.jpg"
                  alt=""
                  className="bestSellerprodImg"
                />
                <button className="bestSellerAddToCart">Add to cart </button>
                {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
                <div className="bestSellerProTitle">
                  <h1 className="bestSellerProdTitle">
                    Burger Peanuts Snack by Nkatie
                  </h1>
                  <p className="bestSellerProdprice">N4000</p>
                </div>
              </div>
            </div>
            <div className="bestSellerProdInfo">
              <div className="bestSellerSearchIcon">
                <SearchOutlinedIcon className="searchIcon" />
              </div>
              <div className="bestSellerProductContentContainer">
                <img
                  src="./images/ehuru.jpg"
                  alt=""
                  className="bestSellerprodImg"
                />
                <button className="bestSellerAddToCart">Add to cart </button>
                {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
                <div className="bestSellerProTitle">
                  <h1 className="bestSellerProdTitle">
                    Burger Peanuts Snack by Nkatie
                  </h1>
                  <p className="bestSellerProdprice">N4000</p>
                </div>
              </div>
            </div>
            <div className="bestSellerProdInfo">
              <div className="bestSellerSearchIcon">
                <SearchOutlinedIcon className="searchIcon" />
              </div>
              <div className="bestSellerProductContentContainer">
                <img
                  src="./images/ube.jpg"
                  alt=""
                  className="bestSellerprodImg"
                />
                <button className="bestSellerAddToCart">Add to cart </button>
                {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
                <div className="bestSellerProTitle">
                  <h1 className="bestSellerProdTitle">
                    Burger Peanuts Snack by Nkatie
                  </h1>
                  <p className="bestSellerProdprice">N4000</p>
                </div>
              </div>
            </div>
            <div className="bestSellerProdInfo">
              <div className="bestSellerSearchIcon">
                <SearchOutlinedIcon className="searchIcon" />
              </div>
              <div className="bestSellerProductContentContainer">
                <img
                  src="./images/custard.jpg"
                  alt=""
                  className="bestSellerprodImg"
                />
                <button className="bestSellerAddToCart">Add to cart </button>
                {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
                <div className="bestSellerProTitle">
                  <h1 className="bestSellerProdTitle">
                    Burger Peanuts Snack by Nkatie
                  </h1>
                  <p className="bestSellerProdprice">N4000</p>
                </div>
              </div>
            </div>
            <div className="bestSellerProdInfo">
              <div className="bestSellerSearchIcon">
                <SearchOutlinedIcon className="searchIcon" />
              </div>
              <div className="bestSellerProductContentContainer">
                <img
                  src="./images/yam.jpg"
                  alt=""
                  className="bestSellerprodImg"
                />
                <button className="bestSellerAddToCart">Add to cart </button>
                {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
                <div className="bestSellerProTitle">
                  <h1 className="bestSellerProdTitle">
                    Burger Peanuts Snack by Nkatie
                  </h1>
                  <p className="bestSellerProdprice">N4000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
