import React, { useEffect, useState } from "react";
import BreadcrumSlider from "../../component/breadcrumslider/BreadcrumSlider";
import custard from "../../images/custard.jpg";
import { Call, Delete } from "@mui/icons-material";
import "./addtocart.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TopSales } from "../../slice/topSaleSlice";
import { removeItemFromCart } from "../../slice/addToCartSlice";
import { addToCart } from "../../slice/addToCartSlice";
import { toast, ToastContainer } from "react-toastify";

const AddToCart = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.cartItem);

  const itemQty = Number(
    item.reduce((acc, item) => acc + item.price * item.qty, 0)
  ).toLocaleString();

  const {
    loading: CLoading,
    data: CData,
    error: CError,
  } = useSelector((state) => state.TopSales);

  const handleDelete = (id) => {
    dispatch(removeItemFromCart(id));
    toast.success("product remove successfully");
  };

  const handleIncrement = () => {
  };
  const handleDecrement = (id) => {
    dispatch(removeItemFromCart(id));
  };

  useEffect(() => {
    dispatch(TopSales());
  }, [dispatch]);

  function Arrow(props) {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          marginRight: "10px",
          marginLeft: "10px",
          color: "blue",
          zIndex: "999999",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
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
      <ToastContainer />
      <BreadcrumSlider />
      <div className="addToCartContainer">
        <div className="cartSummary">
          <h1>cart summary</h1>
        </div>

        <div className="subTotalContainer">
          <div className="subTotalHeader">
            <h3>subtotal</h3>
            <h1>
              N{" "}
              {Number(
                item.reduce((acc, item) => acc + item.price * item.qty, 0)
              ).toLocaleString()}
            </h1>
          </div>
          <div className="subTotal-SubTitle">
            <p>Delivery fees not included yet.</p>
          </div>
          <div className="cartItemsTitle">
            <h3>cart({item.length})</h3>
          </div>
          {item &&
            item.map((product, index) => (
              <div className="itemContainer" key={index}>
                <div className="itemDescContainer">
                  <img src={product.image} alt="" className="itemImage" />
                  <div className="addToCartItemDesc">
                    <div className="addToCartTitleItems">
                      <p> {product.name}</p>
                      <p>Seller: KIngsley furniture</p>
                      <p>
                        Number of items: <b>{product.qty}</b>
                      </p>
                      <h3>
                        <span>Amount: </span> <b>N{product.price}</b>
                      </h3>
                      <h3>
                        <b>Sub-Total: N{itemQty}</b>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="controlsContainer">
                  <div
                    className="deleteContainer"
                    onClick={() => handleDelete(product.product)}
                  >
                    <Delete className="deleteItem" />
                    <h3>remover</h3>
                  </div>
                  <div className="incrementContainer">
                    <div className="increementNav">
                      <h1 onClick={handleDecrement}>-</h1>
                      <h3>
                        <b>{item.qty}</b>
                      </h3>
                      <h1 onClick={handleIncrement}>+</h1>
                    </div>
                  </div>
                  <span className="soldOut">
                    {item ? "product available" : "sold out"}
                  </span>
                </div>
              </div>
            ))}
          <div className="callCheckoutContainer">
            <Call className="addToCartCall" />
            <button className="checkout">checkout</button>
          </div>
          <div className="returnPolicy">
            <h5>Returns are easy</h5>
            <p>
              Free return with 15 days for Official Store items and 7 days for
              other eligible items other eligible items Free return with 15 days
              for Official Store items and 7 days for other eligible items Free
              return with 15 days for Official Store items and 7 days for other
              eligible items other eligible items Free return with 15 days for
              Official Store items and 7 days for other eligible items Free
              return with 15 days for Official Store items and 7 days for other
              eligible items other eligible items Free return with 15 days for
              Official Store items and 7 days for other eligible items
            </p>
          </div>

          <div className="topSellingContainer">
            <h1>top selling product</h1>
            <Slider {...settings} className="topSellingSlider">
              {CLoading && <p>Loading...</p>}
              {CError && <p>Error...</p>}
              {CData &&
                CData.map((product, index) => {
                  return (
                    <>
                      <div className="topSellingProConBottom">
                        <div className="topSellingMainProContainer">
                          <div className="topSellingMainProIcons">
                            <h1 className="topSellingPercent">
                              {product.discount}%
                            </h1>
                          </div>
                          <div className="topSellingMainProInfoCon">
                            <img
                              src={product.image[0]}
                              alt=""
                              className="topSellingProImg"
                            />
                            {/* <button className="addToCart">
                          <ShoppingCartOutlinedIcon />
                          </button> */}
                            <div className="topSellingMainProTitle">
                              <h1 className="topSellingProTitle">
                                {product.name}
                              </h1>
                              <p className="topSellingProPrice">
                                N{product.price}
                              </p>
                              {/* <button className="" onClick={() =>HandleClick(product)}>view</button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
