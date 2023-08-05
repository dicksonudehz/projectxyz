import React from "react";
import "./slider.css";
import pic1 from "../../banner/pic1.jpg";
import pic2 from "../../banner/pic2.jpg";
import pic3 from "../../banner/pic3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SliderNav() {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      <div className="sliderContainer">
        {/* <Slider {...settings} > */}
            <div className="sliderContainerImg">
              <img src={pic1} alt="" className="sliderImg" />
              <div className="sliderContainerItems">
                <h1>quality african breakfast</h1>
                <h6> from TAMs collection of organic</h6>
                <button className="orderButton">order now</button>
              </div>
          </div>

        {/* </Slider> */}
      </div>
    </>
  );
}

export default SliderNav;
