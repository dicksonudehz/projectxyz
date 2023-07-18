import React, { useState } from "react";
import "./salesproduct.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { previewProductData } from "../../pages/expressorder/productData";

const SalesProduct = () => {
  const [details, setDetails] = useState([]);
  const [popdetails, setPopDetails] = useState(false);
  const [styling, setStyling] = useState(null);
  const handDetails = (product) => {
    setDetails([product]);
    setPopDetails(!popdetails);
    if (styling === null) {
      setStyling({
        position: "fixed",
      });
    } else {
      setStyling(null);
    }
  };
  return (
    <>
      <div className="salesProductCon">
        <div className="salesProConLeft">
          <div className="salesProConTopCon">
            <div className="salesProTopTitleItem">
              <h1>enjoyment ministry</h1>
            </div>
            <div className="salesProSubTitle">
              <ul>
                <li>provisions</li>
                <li>drip of flavour</li>
                <li>self-care</li>
              </ul>
            </div>
            <div className="salesProTopIcon">
              <ChevronRightOutlinedIcon className="salesIconLeft" />
              <KeyboardArrowLeftOutlinedIcon className="salesIconRight" />
            </div>
          </div>
          <div className="mainProSalesContainer">
            {previewProductData.map((product, index) => {
              return (
                <>
                  <div className="saleProConLeftBottom" key={index}>
                    <div className="salesProConTop">
                      <SearchOutlinedIcon
                        className="mainProIcon"
                        onClick={() => handDetails(product)}
                      />
                    </div>
                    <div className="salesProInfoCon">
                      <img src={product.image} alt="" className="salesProImg" />
                      <button className="salesAddToCart">Add to cart </button>
                      <div className="salesProTopTitle">
                        <h1 className="salesTitle">{product.title}</h1>
                        <p className="salesPrice">N{product.price}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            {popdetails &&
              details.map((pop, index) => {
                return (
                  <>
                    <div className="coverPopContainer" onClick={handDetails}>
                      <div
                        className="productModalContainer"
                        onClick={(e) => e.stopPropagation}
                      >
                        <div className="imgContainer">
                          <img src={pop.image} alt="" className="imgModel" />
                          <button className="imgAddToCart">Add to cart </button>
                        </div>
                        <div className="productDescCont">
                          <h1 className="proName">{pop.title}</h1>
                          <p>Brand: Obiji Foods</p>
                          <h1 className="price">${pop.price}</h1>
                          <p className="productDescriptionCont">
                            Obiji’s Whole Prekese – a versatile <br />
                            plant with medicinal benefits including prevention{" "}
                            <br />
                            of bacteria growth, ulcer inhibition, hypertension
                            reduction, <br />
                            and asthma management.
                          </p>
                          <div className="productCounter">
                            <button className="substract">-</button>
                            <button className="counter">2</button>
                            <button className="addition">+</button>
                            <button className="addCartCounter">
                              add to cart
                            </button>
                          </div>
                          <p>
                            <b>SKU:</b> ETD27
                          </p>
                          <p>
                            <b>Category:</b> Ethnic Delicacies
                          </p>
                          <div className="shareProdSocialIcons">
                            <p>
                              <b>share</b>
                            </p>
                            <p>social media icons</p>
                          </div>
                        </div>
                        <div className="closeButton" onClick={handDetails}>
                          X
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        <div className="salesProContainerRight">
          <div className="salesTopItems">
            <div className="salesProContTopTitle">
              <h1>on sales</h1>
            </div>
            <div className="salesProIcons">
              <KeyboardArrowLeftOutlinedIcon />
              <ChevronRightOutlinedIcon />
            </div>
          </div>
          <div className="salesProductConBottomRight">
            <ProductionQuantityLimitsOutlinedIcon className="salesProIcon" />
            <SearchOutlinedIcon className="salesProIcon" />
          </div>
          <div className="saleProdContainerContent">
            <div className="salesProductConBottomRightCon">
              <p className="percentageBarge">3%</p>
              <p className="featuredBarge">featured</p>
            </div>
            <img src="./images/malt.jpg" alt="" className="salesImage" />
          </div>

          <div className="salesProConTitle">
            <h1 className="salesProdName">Jolly Jolly Bread Slice</h1>
            <div className="priceContainer">
              <p className="formalPrice">N1500</p>
              <p className="currentPrice">N800</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesProduct;
