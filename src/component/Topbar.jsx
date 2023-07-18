import React, {useState, useEffect, useRef} from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./topbar.css";
import {  Link } from "react-router-dom";

function Topbar() {
  const [openSidebar, setOpenSidebar] = useState(false)
  let menuRef = useRef();

 useEffect(()=>{
  let handler = (e) => {
    if(!menuRef.current.contains(e.target)){
      setOpenSidebar(false)
    };
  }
  document.addEventListener("mousedown", handler)
  return () =>{
    document.removeEventListener("mousedown", handler)
  }
 })
  
  return (
    <>
      <div className="topBarContainer">
        <div className="leftTopBarContainer">
          <h1 className="myLogo">my logo </h1>
        </div>
        <div className="middleTopBarContainer">
          <input
            placeholder="search all product here"
            className="searchAllProduct"
          />
          <SearchIcon className="topBarSearchIcon" />
        </div>
        <div className="rightTopBarContainer">
          <h2 className="topBarAuth">login/register</h2>
          <div className="cart">
            <ShoppingCartIcon className="cartIcon" />
            <div className="cartPRice">1</div>
          </div>
        </div>
      </div>
      <div className="topBarBottomContainer">
        {/* <div className="leftNavContainer"> */}
        <div className="topBarBottomLeft" ref={menuRef}>
          <div className="test" onClick={()=>{setOpenSidebar(!openSidebar)}}>
            <div className="topBarBottomDropLeft"  >
              <DensityMediumIcon className="dropBar" />
              <span className="category">browse categories</span>
            </div>
            <ArrowDropDownIcon className="dropBarArrow" />
          </div>
          <div className={`dropdownItems ${openSidebar ? 'active' : 'inactive'}`}>
            <ul>
              <li>body care</li>
              <li>drinks</li>
              <li>ethnic delicacies</li>
              <li>fish & sea food</li>
              <li>flour</li>
              <li>fresh produce</li>
              <li>fruit & vegetable</li>
              <li>grains</li>
              <li>houshold</li>
              <li>oil</li>
              <li>provision</li>
              <li>spices</li>
            </ul>
          </div>
        </div>
        {/* </div> */}
        <div className="middleBarBottomLeft">
          <ul className="categoryItems">
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/expressorder">express order</Link>
            </li>
            <li>
              <Link to="/bestseller">best sellers</Link>
            </li>
            <li>
            <Link to="/store"> all products</Link>
             
              </li>
            <li>
            <Link to="/category"> browse store</Link></li>
            <li>
                <Link to="/singleproduct">signle product</Link>
              </li>
          </ul>
          <div className="rightBottomLeft">
            <span className="deliveryDate">
              FREE SAME-DAY DELIVERY IN HOUSTON
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
