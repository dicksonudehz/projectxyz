import React, { useEffect, useState } from "react";
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
// import custard from "../../images/custard.jpg";
import { addToCart } from "../../slice/addToCartSlice";
import { singleProduct } from "../../slice/singleProductSlice";
import { relatedProduct } from "../../slice/relatedProductSlice";
import axios from "axios";

const SingleProduct = () => {
  const [data, setData] = useState(null);

  const dispatch = useDispatch();
  const params = useParams();

  const [qty, setQty] = useState(2);

  

  useEffect(() => {
    const fetchSingleProd = async () => {
      const res = await axios.get(
        `https://calm-gold-dugong-gown.cyclic.app/api/products/${params.id}`
      );
      const product = res.data;
      setData(product);
      console.log(product, 'this is the product from the api')

      return res.data;
    };
    fetchSingleProd();
  }, []);

  const singleProAddToCart = () => {
    const product = {
      name: product.name,
      price: product.price,
      product: product._id,
      image: product.image[0],
      qty: 1,
    };
    setData([...data, product])
   };

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
            {data && (
              <div className="productContentContainerLeft">
                <div className="productContentItems">
                  <div className="productImageDesc">
                    <img
                      src={data.product.image}
                      alt=""
                      className="productMainImage"
                    />
                    <div className="featureImageDesc">
                      <div className="productImageDescContainer">
                        <ArrowBackIosIcon />

                        <ArrowForwardIosIcon />
                      </div>
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
                <div className="productDescContent">
                  <div className="prodDescTitle">
                    <h1 className="officalStore">Official Store</h1>
                    <h1 className="officialAniversiry">Anniversary deal</h1>
                    <FavoriteBorderIcon className="prodDescIcon" />
                  </div>
                  <div className="productTitleDesc">
                    <p> </p>
                  </div>
                  <p className="productDescName">
                    <b>Brand:</b> description
                  </p>
                  <h1 className="productDescPrice">N{data.product.price} </h1>
                  <p className="inStock">{data.product.name}</p>
                  <p className="productShippingDetails">
                    + shipping from ₦ 250 to LEKKI-AJAH (SANGOTEDO)
                  </p>
                  <div
                    className="productAddToCart"
                    onClick={() => singleProAddToCart(data)}
                  >
                    add to cart
                  </div>
                  <div className="productPromoDetails">
                    <h1 className="promoTitles">PROMOTIONS</h1>
                    <p>
                      Need extra money? Loan up to N500,000 on the JumiaPay
                      Android app.
                    </p>
                  </div>
                </div>
              </div>
            )}

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
