import "./myorders.css";
import custard from "../../images/custard.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const MyOrders = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.cartItem);

  return (
    <>
      <div className="orderContainer">
        <div className="orderHeader">
          <h1>my Orders</h1>
        </div>
        <hr className="lineDivider" />
        {item &&
          item.map((product, index) => (
            <div className="productOrderContainer" key={index}>
              <div className="mainProduct">
                <div className="productOrderitem">
                  <span className="productQuantity">{product.qty}</span>
                  <img src={product.image} alt="" className="productOrderimg" />
                </div>
                <div className="productTitleItems">
                  <h1>{product.name}</h1>
                  <span>best to be taken in the morning</span>
                </div>
              </div>
              <div className="productPrice">
                <span>price</span>
                <p>N{product.price}</p>
                <span >sub-total</span>
                <p  className="itemSubTotalPrice">
                N{" "}
              {Number(
                item.reduce((acc, item) => product.price * product.qty, 0)
              ).toLocaleString()}
                </p>
              </div>
            </div>
          ))}

        <hr className="lineDivider" />
        <div className="subtotalContainer">
          <div className="subtotalItem">
            <h1>total:</h1>
            <h1>  N{" "}
              {Number(
                item.reduce((acc, item) => acc + item.price * item.qty, 0)
              ).toLocaleString()}</h1>
          </div>
        </div>
        <button className="placeOrderButton">place order</button>
      </div>
    </>
  );
};

export default MyOrders;
