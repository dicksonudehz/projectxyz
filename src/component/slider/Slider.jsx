import React from "react";
import "./slider.css";
import pic1 from "../../banner/pic1.jpg";
import pic2 from "../../banner/pic2.jpg";
import pic3 from "../../banner/pic3.jpg";

function Slider() {
  return (
    <>
      <div className="sliderContainer">
        <div className="sliderContainerImg">
          {/* <img src={pic1} alt="" className="sliderImg" /> */}

          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 sliderImg"
                  src={pic1}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 sliderImg"
                  src={pic2}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  class="d-block w-100 sliderImg"
                  src={pic3}
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          {/* <img src="banner/pic1.jpg" alt="" className="sliderImg" /> */}
          <div className="sliderContainerItems">
            <h1>quality african breakfast</h1>
            <h6> from TAMs collection of organic</h6>
            <button className="orderButton">order now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
