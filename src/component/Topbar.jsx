import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./topbar.css";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { useSelector } from "react-redux";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { HashLink as Links } from "react-router-hash-link";



function Topbar({ name, ...props }) {
  const { cartItems } = useSelector((state) => state.cart);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [openSidebar, setOpenSidebar] = useState(false);
  let menuRef = useRef();

  const[rightSidebar, setRightSidebar] = useState(false)

  const [showToogle, setShowToogle] = useState(true);

  const HandleToogle = () => {
    setShowToogle(!showToogle);
  };

  const handleRightSideOpen = () => {
    setRightSidebar(!rightSidebar);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenSidebar(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
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
          <div className="cart">
            <Link to="/addtocart">
              {/* Cart{" "} */}
              <ShoppingCartIcon className="cartIcon" />
              <div className="cartPRice">
                {cartItems.reduce((acc, item) => acc + item.qty, 7)}
              </div>
            </Link>
          </div>
          <div className="loginRegister" onClick={handleShow}>
            <h4>login/Register</h4>
          </div>
          {["end"].map((placement, idx) => (
            <Offcanvas
              show={show}
              onHide={handleClose}
              {...props}
              key={idx}
              placement={placement}
              name={placement}
              className="handleclose"
            >
              <div className="offcanvasContainer">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="signupTitle"></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="offcanvaBody">
                  <div className="formSignUpButton">
                    <button
                      className={showToogle ? "signupHere" : "loginHere"}
                      onClick={HandleToogle}
                    >
                      {showToogle ? "signUp" : "Login"}
                    </button>
                    {/* <button
                      className="signupHere"
                      onClick={() =>HandleToogle}
                    >
                      sign up
                    </button> */}
                  </div>
                </Offcanvas.Body>

                {showToogle ? <Login /> : <Register />}
              </div>
            </Offcanvas>
          ))}
        </div>
      </div>
      <div className="topBarBottomContainer">
        {/* <div className="leftNavContainer"> */}
        <div className="topBarBottomLeft" ref={menuRef}>
          <div
            className="test"
            onClick={() => {
              setOpenSidebar(!openSidebar);
            }}
          >
            <div className="topBarBottomDropLeft">
              <DensityMediumIcon className="dropBar" />
              <span className="category">browse categories</span>
            </div>
            <ArrowDropDownIcon className="dropBarArrow" />
          </div>
          <div
            className={`dropdownItems ${openSidebar ? "active" : "inactive"}`}
          >
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
          <div className="categoryItems">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/expressorderone">express order</Link>
              </li>
              <li>
                <Link to="/bestseller">best sellers</Link>
              </li>
              <li>
                <Link to="/store"> all products</Link>
              </li>
              <li>
                <Link to="/category"> browse store</Link>
              </li>
              <li>
                <Link to="/singleproduct">single Product</Link>
              </li>
            </ul>
          </div>
          <div className="rightBottomLeft"  >
            <div className="openToogle" onClick={handleRightSideOpen} >

            <span className="deliveryDate"><PersonOutlineOutlinedIcon/> Hi, Dickson</span>
            </div>
            <div className= {`acountDetailsDropDownItems ${rightSidebar ? "activestate" : "inactive"}` }>
              <ul>
                <li>
                  <Links to="#admindashboard">My Account</Links>
                </li>
                <li>Orders</li>
                <li>inbox</li>
                <li>voucher</li>
                <li>logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
