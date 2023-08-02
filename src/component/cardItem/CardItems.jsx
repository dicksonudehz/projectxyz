import React, { useEffect } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import peakmilk from "../../images/peakmilk.jpg";
import { TopSales } from "../../slice/topSaleSlice";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import productCard from "../productcard/ProductCards";
import { previewProductData } from "../../pages/expressorder/productData";

const CardItems = (props) => {
  const dispatch = useDispatch();

  const {
    loading: tLoading,
    data: tData,
    error: tError,
  } = useSelector((state) => state.TopSales);

  useEffect(() => {
    dispatch(TopSales());
  }, [dispatch]);

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
      <div className="carouselContainer">
        <Slider {...settings}>
          {tLoading && <p>Loading...</p>}
          {tError && <p>Error...</p>}
          {tData &&
            tData.map((product, index) => {
              return (
                <>
                  <div className="cardContainerBottomItems">
                    <div className="cardContainerContent">
                      <div className="cardContainerTopItems">
                        <div className="cardDiscountExploreItem">
                          <span className="discount">-10%</span>
                        </div>
                        <div className="productIconExplore">
                          <FavoriteBorderOutlinedIcon className="ProductIconExploreIcon" />
                          <FavoriteBorderOutlinedIcon className="ProductIconExploreIcon" />
                          <SearchOutlinedIcon className="ProductIconExploreIcon" />
                        </div>
                      </div>
                      <img
                        src={product.image[0]}
                        alt="main subject item"
                        className="cardImage"
                      />
                      <h1 className="cardContainerBottomItemsHeader">
                        {product.name}
                      </h1>
                      <div className="cardPrice">
                        <h1 className="maxPrice">N{product.price}</h1>
                        <span className="operand">-</span>
                        <h1 className="maxPrice">N1500</h1>
                      </div>
                      <div className="rating">
                        <StarOutlinedIcon className="starContent" />
                        <StarOutlinedIcon className="starContent" />
                        <StarOutlinedIcon className="starContent" />
                        <StarHalfOutlinedIcon className="starContent" />
                        <StarOutlineOutlinedIcon className="starContent" />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default CardItems;
