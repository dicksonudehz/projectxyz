import BreadcrumSlider from "../../component/breadcrumslider/BreadcrumSlider";
import "./checkoutpage.css";
import CheckIcon from "@mui/icons-material/Check";
import yam from "../../images/yam.jpg";

const CheckoutPage = () => {
  return (
    <>
      <BreadcrumSlider />
      <div className="checkoutContainer">
        <div className="checkoutContainerLeft">
          <div className="trackItemContainer">
            <div className="checkoutStatusContainer">
              <span className="checkoutStatus">1</span>
            </div>
            <div className="checkoutTitleContainer">
              <h5 className="checkoutTitle">shipping</h5>
            </div>
          </div>
          <div class="vl"></div>
          <div className="trackItemContainer">
            <div className="checkoutStatusContainer">
              <span className="checkoutStatus">
                <CheckIcon />
              </span>
            </div>
            <div className="checkoutTitleContainer">
              <h5 className="checkoutTitle">personal details</h5>
            </div>
          </div>
          <div className="vl"></div>
          <div className="trackItemContainer">
            <div className="checkoutStatusContainer">
              <span className="checkoutStatus">1</span>
            </div>
            <div className="checkoutTitleContainer">
              <h5 className="checkoutTitle">payment</h5>
            </div>
          </div>
        </div>
        <div className="checkoutContainerCenter">
          <h1 className="checkoutLabel">payment</h1>
          <span className="cardTypeTitle">card type</span>
          <div className="cardChoiceContainer">
            <div className="cardChoiceVisa">
              <input type="radio" />
              <span>credit card</span>
            </div>
            <div className="cardChoiceMaster">
              <input type="radio" />
              <span>master card</span>
            </div>
          </div>
          <div className="cardNumberContainer">
            <span className="cardNumberTitle">card number</span>
            <input
              type="text"
              className="cardNumber"
              placeholder="6775 7765 5678 544"
            />
          </div>
          <div className="cardNumberContainer">
            <span className="cardInfor">card information</span>
            <input
              type="date"
              className="cardNumber"
              placeholder="expiring date"
            />
            <input
              type="text"
              className="cardNumberCvv"
              placeholder="cvv/ code"
            />
          </div>
          <div className="cardNumberContainerSaveDetails">
            <input
              type="checkbox"
              className="cardNumberCheckbox"
              placeholder="expiring date"
            />
            <span className="cardSaveDetails">save card details</span>
          </div>
          <div className="cardNumberButtonContainer">
            <button className="backButton">back</button>
            <button className="purchaseButton">puchase now</button>
          </div>
        </div>
        <div className="checkoutContainerRight">
          <h1 className="checkoutOrderHeader">orders</h1>
          <div className="checkoutOrderContainer">
            <img src={yam} alt="" className="checkoutOrderProduct" />
            <div className="checkoutOrderItemsCont">
              <div className="checkoutOrderItems">
                <div className="checkoutOrderItemTitles">
                  <h1>the fault in our stars</h1>
                  <p>by john green</p>
                </div>
                <div className="checkoutOrderNumbers">
                  <p>4</p>
                </div>
              </div>
              <div className="checkoutItemsRemove">
                <h1>remove</h1>
                <span>N4000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
