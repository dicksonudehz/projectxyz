import React, { Component } from "react";
import Slider from "react-slick";
import pic1 from "../../banner/pic1.jpg";
import pic2 from "../../banner/pic2.jpg";
import pic3 from "../../banner/pic3.jpg";
import "./slider.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings} style={{ width: '100%' }} >
          <div >
          <img src={pic1} alt="" className="sliderImg" />
          </div>
          <div  >
          <img src={pic2} alt="" className="sliderImg" />
          </div>
          <div  >
          <img src={pic3} alt="" className="sliderImg" />
          </div>
          
        </Slider>
      </div>
    );
  }
}