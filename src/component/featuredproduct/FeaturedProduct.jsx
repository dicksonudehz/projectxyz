import React, { useState, useEffect } from "react";
import "./featuredproduct.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { previewProductData } from "../../pages/expressorder/productData";
import { fetchAllProduct } from "../../slice/fetchAllProductSlice";
import { useDispatch, useSelector } from "react-redux";

const FeaturedProduct = () => {
  const dispatch = useDispatch();

  const {
    loading: pLoading,
    data: pData,
    error: pError,
  } = useSelector((state) => state.fetchAllProduct);

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  const [select, setSelect] = useState(null);

  const Toogle = (index) => {
    if (select === index) {
      return setSelect(select);
    }
    setSelect(index);
  };
  const HandleClick = (item)=> {
console.log(item)
  }
  return (
    <>
      <div className="featureProductContainer">
        <div className="featuredProductContainerLeft">
          <div className="featuredProductContainerLeftTop">
            <h1 className="featuredProductContainerLeftTopTitle">featured</h1>
            <div className="featureProductContainerTopIcons">
              <ChevronRightOutlinedIcon className="iconsRight" />
              <KeyboardArrowLeftOutlinedIcon className="iconsLeft" />
            </div>
          </div>
          <div className="featureProductConBottom">
            <div className="featuredProductCon">
              <div className="featureProductConBottomLeft">
                <h1 className="featureProductConTitle">featured</h1>
              </div>
              <div className="featureProductConBottomRight">
                <ProductionQuantityLimitsOutlinedIcon className="featuredIcon" />
                <SearchOutlinedIcon className="featuredIcon" />
              </div>
            </div>
            <div className="featureProConBottom">
              {pLoading && <p>loading...</p>}
              {pError && <p>error: {pError} </p>}
             
              <img
                src="./images/malta.jpg"
                alt="this is a placeholder"
                className="featureProductImg"
              />
              <div className="featuredProConTitle">
                <h1 className="ProTitle">Jolly Jolly Bread Slice</h1>
                <p className="prie">N800</p>
              </div>
            </div>
          </div>
        </div>
        <div className="featuredContainerRight">
          <div className="featureProRightTop">
            <div className="featureProConTopLeftContainer">
              <ul>
                <li className="featureProConTopItems">speacial offers</li>
                <li className="featureProConTopItems"> new </li>
                <li className="featureProConTopItems">featured offer</li>
                <li className="featureProConTopItems">top seller offer</li>
              </ul>
            </div>
            <div className="featureProConTopRightContainer">
              <ChevronRightOutlinedIcon className="iconsRight" />
              <KeyboardArrowLeftOutlinedIcon className="iconsLeft" />
            </div>
          </div>
          <div className="featuredProConBottom">
          {pData &&
                pData.map((product, index) => {
                  return (
                    <>
                  <div className= "mainProContainer" key={index}>
                    <div className="mainProIcons">
                      <SearchOutlinedIcon className="mainProIcon" />
                    </div>
                    <div className="mainProInfoCon">
                      <img src={product.image} alt="" className="proImg" />
                      <button className="addToCart">
                       add to cart
                      </button>
                      {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
                      <div className="mainProTitle">
                        <h1 className="proTitle">{product.name}</h1>
                        <p className="proPrice">{product.price}</p>
                        {/* <button className="" onClick={() =>HandleClick(product)}>view</button> */}
                      </div>
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

export default FeaturedProduct;
