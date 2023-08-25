import React, { useState, useEffect } from "react";
import "./featuredproduct.css";
// import { previewProductData } from "../../pages/expressorder/productData";
import { fetchAllProduct } from "../../slice/fetchAllProductSlice";
import { useDispatch, useSelector } from "react-redux";
import malta from "../../images/malta.jpg";
import { Link } from "react-router-dom";
import { topSixProduct } from "../../slice/topSixProductSlice";
import { CartAddItem } from "../../slice/addToCartSlice";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const FeaturedProduct = ({ name, price, quantity, totalPrice }) => {
  const dispatch = useDispatch();

  const {
    loading: pLoading,
    data: pData,
    error: pError,
  } = useSelector((state) => state.topSixProduct);

  const addToCartItems = useSelector((state) => state.CartAddItem);


  const handleAddToCart = () => {
    dispatch(addToCartItems);
  };
  useEffect(() => {
    dispatch(topSixProduct());
  }, [dispatch]);

  const [select, setSelect] = useState(null);

  const Toogle = (index) => {
    if (select === index) {
      return setSelect(select);
    }
    setSelect(index);
  };
  const HandleClick = (item) => {
    console.log(item);
  };
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
              {pError && <p>error</p>}

              <img
                src={malta}
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
                    <div className="mainProContainer" key={index}>
                      {/* <Link to={`/singleproduct/${product._id}`}> */}
                      <div className="mainProIcons">
                        <SearchOutlinedIcon className="mainProIcon" />
                      </div>
                      <div className="mainProInfoCon">
                        <img src={product.image} alt="" className="proImg" />
                        <button className="addToCart" onClick={handleAddToCart}>
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
                      {/* </Link> */}
                    </div>
                    {/* </Link> */}
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
