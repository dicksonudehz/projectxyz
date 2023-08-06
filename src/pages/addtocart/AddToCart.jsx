import React, { useEffect } from "react";
import BreadcrumSlider from "../../component/breadcrumslider/BreadcrumSlider";
import custard from "../../images/custard.jpg";
import { Call, Delete } from "@mui/icons-material";
import "./addtocart.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TopSales } from "../../slice/topSaleSlice";

const AddToCart = () => {
  const dispatch = useDispatch();

  const {
    loading: CLoading,
    data: CData,
    error: CError,
  } = useSelector((state) => state.TopSales);

  useEffect(() => {
    dispatch(TopSales());
  }, [dispatch]);

  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          marginRight: "10px",
          marginLeft: "10px",
          color: "blue",
          zIndex: "999999",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumSlider />
      <div className="addToCartContainer">
        <div className="cartSummary">
          <h1>cart summary</h1>
        </div>
        <div className="subTotalContainer">
          <div className="subTotalHeader">
            <h3>subtotal</h3>
            <h1>N 40,000</h1>
          </div>
          <div className="subTotal-SubTitle">
            <p>Delivery fees not included yet.</p>
          </div>
          <div className="cartItemsTitle">
            <h3>cart(3)</h3>
          </div>
          <div className="itemContainer">
            <div className="itemDescContainer">
              <img src={custard} alt="" className="itemImage" />
              <div className="addToCartItemDesc">
                <div className="addToCartTitleItems">
                  <p>Modern custard are good for our body and soul</p>
                  <p>Seller: KIngsley furniture</p>
                  <h3>few units left</h3>
                </div>
                <div className="priceContainer">
                  <h1>N250,000</h1>
                  <h2>294,000</h2>
                </div>
              </div>
            </div>
            <div className="controlsContainer">
              <div className="deleteContainer">
                <Delete className="deleteItem" />
                <h3>remover</h3>
              </div>
              <button className="soldOut">sold out</button>
              {/* <div className="increementNav">
                <h1>-</h1>
                <h3>6</h3>
                <h1>+</h1>
              </div> */}
            </div>
          </div>
          <div className="callCheckoutContainer">
            <Call className="addToCartCall" />
            <button className="checkout">checkout (N456,000)</button>
          </div>
          <div className="returnPolicy">
            <h5>Returns are easy</h5>
            <p>
              Free return with 15 days for Official Store items and 7 days for
              other eligible items other eligible items Free return with 15 days
              for Official Store items and 7 days for other eligible items Free
              return with 15 days for Official Store items and 7 days for other
              eligible items other eligible items Free return with 15 days for
              Official Store items and 7 days for other eligible items Free
              return with 15 days for Official Store items and 7 days for other
              eligible items other eligible items Free return with 15 days for
              Official Store items and 7 days for other eligible items
            </p>
          </div>
          <div className="topSellingContainer">
            <h1>top selling product</h1>
            <Slider {...settings} className="topSellingSlider">
              {CLoading && <p>Loading...</p>}
              {CError && <p>Error...</p>}
              {CData &&
                CData.map((product, index) => {
                  return (
                    <>
                      <div className="topSellingProConBottom">
                        <div className="topSellingMainProContainer">
                          <div className="topSellingMainProIcons">
                            <h1 className="topSellingPercent">
                              {product.discount}%
                            </h1>
                          </div>
                          <div className="topSellingMainProInfoCon">
                            <img
                              src={product.image[0]}
                              alt=""
                              className="topSellingProImg"
                            />
                            {/* <button className="addToCart">
                          <ShoppingCartOutlinedIcon />
                          </button> */}
                            <div className="topSellingMainProTitle">
                              <h1 className="topSellingProTitle">
                                {product.name}
                              </h1>
                              <p className="topSellingProPrice">
                                N{product.price}
                              </p>
                              {/* <button className="" onClick={() =>HandleClick(product)}>view</button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
