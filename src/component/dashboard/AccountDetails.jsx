import "./accountdetails.css";

const AccountDetails = () => {
  return (
    <>
      <div className="adminDetailContainer" id="admindashboard">
        <h1 className="accountOverview">account overview</h1>
        <div className="accountDetailsContainerContent">
          <div className="adminDetailContLeft">
            <div className="adminDetailsContent">
              <h4 className="accountDetailsHeader">account details</h4>
              <hr />
              <div className="accountDetailsInfo">
                <p className="accountDetailName">ogbudu dickson</p>
                <p className="accountDetailEmail">dicksonudehz@gmail.com</p>
              </div>
            </div>
            <span className="companyName">
              black investment store limited Store
            </span>
            <span className="accountDetailAmount">N3000</span>
          </div>
          <div className="adminDetailContRight">
            <h1 className="adminDetailContRightHeader">address book</h1>
            <hr />
            <div className="defaultShippingAddress">
              <p>your detault Shipping address</p>
              <div className="accountDetailsAddressInfo">
                <span className="accountDetailsAddressName">ogbudu dickson</span>
                <span className="accountDetailsAddressHouseno">44, Obafalabi street, ojodu berger</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
