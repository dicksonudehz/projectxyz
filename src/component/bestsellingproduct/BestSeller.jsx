import React, { useEffect } from "react";
import "./bestseller.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import advertimage from "../../images/advertimage.jpg";
import onion from "../../images/onion.jpg";
import ehuru from "../../images/ehuru.jpg";
import ube from "../../images/ube.jpg";
import custard from "../../images/custard.jpg";
import yam from "../../images/yam.jpg";
import { useDispatch, useSelector } from "react-redux";
import { BestSellerProduct } from "../../slice/bestSellerProductSlice";

const BestSeller = () => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.BestSellerProduct
  );

  useEffect(() =>{
    dispatch(BestSellerProduct)
  })
  return (
    <>
      <div className="bestSellerProdContainer">
        <div className="bestSellerProdConLeft">
          <div className="bestSellerContentCon">
            <div className="bestSellerContentImg">
              <img src={advertimage} alt="" className="proBestSellerImg" />
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
                <img src={onion} alt="" className="bestSellerprodImg" />
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
                <img src={ehuru} alt="" className="bestSellerprodImg" />
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
                <img src={ube} alt="" className="bestSellerprodImg" />
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
                <img src={custard} alt="" className="bestSellerprodImg" />
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
                <img src={yam} alt="" className="bestSellerprodImg" />
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
