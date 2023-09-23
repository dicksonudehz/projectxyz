import React from "react";
import "./productreel.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ube from "../../images/ube.jpg";
import redpepper from "../../images/redpepper.jpg";
import yam from "../../images/yam.jpg";
import onion from "../../images/onion.jpg";
import manyyam from "../../images/manyyam.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TopSales } from "../../slice/topSaleSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductReel = () => {
  const dispatch = useDispatch();

  const {
    loading: tLoading,
    data: tData,
    error: tError,
  } = useSelector((state) => state.TopSales);

  useEffect(() => {
    dispatch(TopSales());
  }, [dispatch]);
  console.log(tData, "this is the data coming from the tdate");

  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
      <div className="productReelContainer">
        <div className="productHeader">
          <h1 className="prodTitle">from the garden</h1>
          <ul>
            <li>fresh</li>
            <li>dried</li>
            <li>spice</li>
          </ul>
        </div>
        {tLoading && <p>Loading...</p>}
        {tError && <p>Error...</p>}
        {tData &&
          tData.map((product, index) => {
            <div className="mainProCardContainer" key={index}>
              <div className="prodCardContainer">
                <div className="mainProCardIcons">
                  <SearchOutlinedIcon className="mainProCardIcon" />
                </div>
                <div className="mainProInfoCon">
                  <img
                    src={product.image[0]}
                    alt=""
                    className="mainProCardImg"
                  />
                  <button className="prodCardAddToCard">Add to cart </button>
                  {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
                  <div className="prodCardTitle">
                    <h1 className="cardTitle">{product.name}</h1>
                    <p className="cardPrice">N{product.price}</p>
                  </div>
                </div>
              </div>
            </div>;
          })}
      </div>
    </>
  );
};

export default ProductReel;
