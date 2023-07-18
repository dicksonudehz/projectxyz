import React, { useState, useEffect, useRef } from "react";
import "./expressorder.css";
import BreadcrumSlider from "../../component/breadcrumslider/BreadcrumSlider";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FlashlightOnIcon from "@mui/icons-material/FlashlightOn";
import {Data} from "./productData.js";

const ExpressOrder = () => {
  const [clicked, setClicked] = useState(false);
  let menuRef = useRef()

  useEffect((i)=>{
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setClicked(clicked)
      };
    }
    document.addEventListener("mousedown", handler)
    return () =>{
      document.removeEventListener("mousedown", handler)
    }
   }, [clicked])

  const toogle = (i) => {
    if (clicked === i) {
      return setClicked(clicked);
    }
    setClicked(i);
  };

  return (
    <>
      <BreadcrumSlider />

      <div className="containerWrapper">
        {Data.map((item, i) => {
          return (
            <>
              <div className="accordianWrapper" onClick={() => toogle(i)} key={i} ref={menuRef}>
                <div className="accordianHeader" >
                  {clicked ===i ? <KeyboardArrowDownIcon/>: <KeyboardArrowUpIcon className="accordianArrow" />}
                 
                  <FlashlightOnIcon className="descArrow" />
                  <h1>body care</h1>
                </div>
                <div
                  className="accordianContent"
                >
                  {
                    clicked === i ? (
                      <div className="headerItemsContainer">
                    <div className="dropdownMenu">
                      <select name="sortingItems" id="sorting">
                        <option value="1">sort alphabetically A-Z</option>
                        <option value="1">sort alphabetically Z-A</option>
                        <option value="1">
                          sort by listed: newest to oldest
                        </option>
                        <option value="1">
                          sort by listed: oldest to newest
                        </option>
                        <option value="1">sort by price: high to low</option>
                        <option value="1">sort by price: low to high</option>
                        <option value="1">sort by SKU: high to low</option>
                        <option value="1">sort by SKU: low to high</option>
                      </select>
                      <input
                        type="text"
                        className="searchingItems"
                        placeholder="Search by name"
                      />
                    </div>
                    <div className="headerItemsRight">
                      <button className="addtocart">add all to cart</button>
                    </div>
                  </div>
                    ) : null
                  }
                  {
                    clicked === i ? (
                      <div className="accordianProductContainer">
                      {Data.map((productItem, i) => {
                        return (
                          <div className="productItem">
                            <img
                              src={productItem.image}
                              alt=""
                              className="accordianImg"
                            />
                            <div className="accordianProductDesc">
                              <div className="accordianproductTitle">
                                <h2 className="accordianTitle">
                                  {productItem.title}
                                </h2>
                                <h2 className="accordianPrice">
                                  N{productItem.price}
                                </h2>
                              </div>
                              <div className="accordianAddIcon">
                                <h1>{productItem.addSign}</h1>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                      ) : null
                  }
                  
                </div>
              </div>
              ;
            </>
          );
        })}
      </div>
    </>
  );
};

export default ExpressOrder;
