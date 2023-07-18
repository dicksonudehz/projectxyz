import React from "react";

import "./productcard.css";
import CardItems from "../cardItem/CardItems";

const productCard = () => {
  return (
    <>
      <div className="cardContainer">
        <div className="cardContainerTop">
          <div className="cardContainerTopLeft">
            <h1 className="cardContainerTopLeftHeader">new top sales!</h1>
          </div>
          <div className="cardContainerTopRight">
            <h4 className="cardContaienrTopRightItems">Audio and video</h4>
            <h4 className="cardContaienrTopRightItems">gaming</h4>
            <h4 className="cardContaienrTopRightItems">headphone</h4>
          </div>
        </div>
        <div className="cards">
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
        </div>
      </div>
    </>
  );
};

export default productCard;
