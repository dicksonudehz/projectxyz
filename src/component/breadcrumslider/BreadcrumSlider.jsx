import React from 'react'
import './breadcrumslider.css'
import Topbar from '../Topbar'
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";


const BreadcrumSlider = () => {
  return (
    <>
    <Topbar/>
      <div className="browseStoreSliderContainer">
          <img src="./images/retail.jpg" alt="" className="sliderImage" />
          <div className="sliderContent">
            <h1>browser TAM</h1>
            <div className="sliderContentItems">
              <span>home</span>
              <KeyboardDoubleArrowRightIcon className="forwardArrowBreadcrum" />
              <span>browse TAM</span>
            </div>
          </div>
        </div>
    </>
  )
}

export default BreadcrumSlider
