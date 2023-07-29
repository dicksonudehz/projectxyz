import "./myorders.css";
import custard from "../../images/custard.jpg";

const MyOrders = () => {
  return (
    <>
      <div className="orderContainer">
        <div className="orderHeader">
          <h1>my Orders</h1>
        </div>
        <hr className="lineDivider" />
        <div className="productOrderContainer">
          <div className="mainProduct">
            <div className="productOrderitem">
              <span className="productQuantity">1</span>
              <img src={custard} alt="" className="productOrderimg" />
            </div>
            <div className="productTitleItems">
              <h1>low fat product</h1>
              <span>best to be taken in the morning</span>
            </div>
          </div>
          <div className="productPrice">
            <p>N5,000.00</p>
          </div>
        </div>
        <hr className="lineDivider" />
        <div className="productOrderContainer">
          <div className="mainProduct">
            <div className="productOrderitem">
              <span className="productQuantity">1</span>
              <img src={custard} alt="" className="productOrderimg" />
            </div>
            <div className="productTitleItems">
              <h1>low fat product</h1>
              <span>best to be taken in the morning</span>
            </div>
          </div>
          <div className="productPrice">
            <p>N5,000.00</p>
          </div>
        </div>
        <hr className="lineDivider" />
        <div className="subtotalContainer">
          <div className="subtotalItem">
            <span>subtotal</span>
            <p>N10,000.00</p>
          </div>
          <div className="subtotalItem">
            <span>shiping</span>
            <p>N1,000.00</p>
          </div>
          <hr className="lineDivider" />
          <div className="subtotalItem">
            <h1>total</h1>
            <h1>N1,000.00</h1>
          </div>
        </div>
        <button className="placeOrderButton">place order</button>
      </div>
    </>
  );
};

export default MyOrders;
