import "./bodycontent.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";

function BodyContent() {
  return (
    <>
      <div className="bodyContentContainer">
        <div className="bodyContentContainerTop">
          <h1>TAM Local Delivery</h1>
          <h5>How TAM Houston same-day local delivery works</h5>
        </div>
        <div className="bodyContent">
          <div className="bodyContentContainerLeft">
            <AddShoppingCartIcon className="add-to-cart" />
            <h1>Add Your Items​</h1>
            <h5>
              Shop quality authentic African items and add <br />
              them to your cart.
            </h5>
          </div>
          <div className="bodyContentContainerLeft">
            <CalendarMonthIcon className="add-to-cart" />
            <h1>Add Your Items​</h1>
            <h5>
              Shop quality authentic African items and add <br />
              them to your cart.
            </h5>
          </div>
          <div className="bodyContentContainerLeft">
            <MeetingRoomOutlinedIcon className="add-to-cart" />
            <h1>Add Your Items​</h1>
            <h5>
              Shop quality authentic African items and add <br />
              them to your cart.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodyContent;
