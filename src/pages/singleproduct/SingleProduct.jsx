import React, { useEffect } from "react";
import "./singleproduct.css";
import BreadcrumSlider from "../../component/breadcrumslider/BreadcrumSlider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RelatedProducts from "../../component/relatedproduct/RelatedProducts";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import custard from "../../images/custard.jpg";
import { addToCart } from "../../slice/addToCartSlice";
import { singleProduct } from "../../slice/singleProductSlice";
import { relatedProduct } from "../../slice/relatedProductSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [qty, setQty] = useState(2);

  const {
    loading: sLoading,
    data: sData,
    error: sError,
  } = useSelector((state) => state.singleProduct);

  const HandleAddToCart = () => {
    const cartItem = {
      name: sData?.name,
      price: sData?.price,
      product: sData?._id,
      image: sData?.image[0],
      quantity: Number(qty),
    };
    dispatch(addToCart(cartItem));
  };

  useEffect(() => {
    dispatch(singleProduct(params.id));
    dispatch(relatedProduct(params.id));
  }, [dispatch, params.id]);

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
                  {sLoading && <p>Loading...</p>}
                  {sError && <p>Error...</p>}
                  {sData && (
                    <>
                      <img
                        src={sData.image[0]}
                        alt=""
                        className="productMainImage"
                      />
                      <div className="featureImageDesc">
                        <div className="productImageDescContainer">
                          <ArrowBackIosIcon />
                          {sData.image.map((item, i) => {
                            return (
                              <>
                                <img
                                  src={item}
                                  alt=""
                                  className="productFeatureImage"
                                />
                              </>
                            );
                          })}

                          <img
                            src={custard}
                            alt=""
                            className="productFeatureImage"
                          />
                          <img
                            src={custard}
                            alt=""
                            className="productFeatureImage"
                          />
                          <img
                            src={custard}
                            alt=""
                            className="productFeatureImage"
                          />
                          <img
                            src={custard}
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
                    </>
                  )}
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
            <h1 className="chooseLocation">choose your location</h1>
            <select name="location" id=""></select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
