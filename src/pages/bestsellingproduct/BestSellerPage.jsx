import React, { useEffect } from "react";
import BreadcrumSlider from "../../component/breadcrumslider/BreadcrumSlider";
import "./bestsellerpage.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import bestseller from "../../images/bestseller.jpg";
import { bestSellingProduct } from "../../selector/Selector";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const productData = useRecoilValue(bestSellingProduct);
 
 
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
          <img src={bestseller} alt="" className="bestSellerImage" />
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
            {productData &&
              productData.products.map((product, index) => {
                return (
                  <>
                    <div className="bestSellsProdItemContainer">
                      <SearchOutlinedIcon className="searchBestSellerIcon" />
                      <Link
                        to={`/singleproduct/${product._id}`}
                      >
                        <img
                          src={product.image[0]}
                          alt=""
                          className="BestSellerProduct"
                        />
                      </Link>
                      {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
                      <div className="bestSellerProduct">
                        <button className="bestSellerAddtoCart">
                          Add to cart{" "}
                        </button>
                        <h1 className="bestSellerTittle">{product.name}</h1>
                        <p className="bestSellerPrice">{product.price}</p>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
