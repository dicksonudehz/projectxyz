import React from "react";
import "./singleproduct.css";
import BreadcrumSlider from "../../component/breadcrumslider/BreadcrumSlider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RelatedProducts from "../../component/relatedproduct/RelatedProducts";

const SingleProduct = () => {
  return (
    <>
      <BreadcrumSlider />
      <div className="singleProductContainer">
        <div className="singleProductBreadcrum">
          <ul>
            <li>home</li>
            <li>
              <ArrowForwardIosIcon className="arrowForward" />
            </li>
            <li>flour food</li>
            <li>
              <ArrowForwardIosIcon className="arrowForward" />
            </li>
            <li>african delicacies</li>
            <li>
              <ArrowForwardIosIcon className="arrowForward" />
            </li>
            <li>foreign food</li>
            <li>
              <ArrowForwardIosIcon className="arrowForward" />
            </li>
            <li>product name </li>
          </ul>
        </div>
        <div className="productContentContainer">
          <div className="productContentContainerLeftItems">
            <div className="productContentContainerLeft">
              <div className="productContentItems">
                <div className="productImageDesc">
                  <img
                    src="./images/custard.jpg"
                    alt=""
                    className="productMainImage"
                  />
                  <div className="featureImageDesc">
                    <div className="productImageDescContainer">
                      <ArrowBackIosIcon />
                      <img
                        src="./images/custard.jpg"
                        alt=""
                        className="productFeatureImage"
                      />
                      <img
                        src="./images/custard.jpg"
                        alt=""
                        className="productFeatureImage"
                      />
                      <img
                        src="./images/custard.jpg"
                        alt=""
                        className="productFeatureImage"
                      />
                      <img
                        src="./images/custard.jpg"
                        alt=""
                        className="productFeatureImage"
                      />
                      <img
                        src="./images/custard.jpg"
                        alt=""
                        className="productFeatureImage"
                      />
                      <ArrowForwardIosIcon />
                    </div>
                    <div className="shareProductSocials">
                      <h1>share this product </h1>
                      <div className="socialMediaIcon">
                        <FacebookIcon className="singleProductSocials1" />
                        <InstagramIcon className="singleProductSocials" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="productDescContent">
                <div className="prodDescTitle">
                  <h1 className="officalStore">Official Store</h1>
                  <h1 className="officialAniversiry">Anniversary deal</h1>
                  <FavoriteBorderIcon className="prodDescIcon" />
                </div>
                <div className="productTitleDesc">
                  <p> Oraimo 1.69'' IPS Screen Smart Watch - Silver Edition</p>
                </div>
                <p className="productDescName">
                  <b>Brand:</b> Oraimo | Similar products from Oraimo
                </p>
                <h1 className="productDescPrice">N1,200.00</h1>
                <p className="inStock">in stock</p>
                <p className="productShippingDetails">
                  + shipping from ₦ 250 to LEKKI-AJAH (SANGOTEDO)
                </p>
                <div className="productAddToCart">add to cart</div>
                <div className="productPromoDetails">
                  <h1 className="promoTitles">PROMOTIONS</h1>
                  <p>
                    Need extra money? Loan up to N500,000 on the JumiaPay
                    Android app.
                  </p>
                  <p>
                    Need extra money? Loan up to N500,000 on the JumiaPay
                    Android app.
                  </p>
                  <p>
                    Need extra money? Loan up to N500,000 on the JumiaPay
                    Android app.
                  </p>
                </div>
              </div>
            </div>
            <div className="relatedProduct">
              <RelatedProducts />
            </div>
          </div>

          <div className="productContentContainerRight">
            <h1 className="deliveryStatus">delivery status</h1>
            <p className="freeDelivery">
              Free delivery on thousands of products in Lagos, Ibadan & Abuja
              <b>Details</b>
            </p>
            <h1 className="chooseLocation">
              choose your location
            </h1>
          <select name="location" id=""></select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
