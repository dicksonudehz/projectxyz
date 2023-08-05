import './userdetails.css'

const UserDetails = () => {
  return (
    <>
     <div className="userDetailContainer" id="userdashboard">
        <h1 className="accountOverview">account overview</h1>
        <div className="accountDetailsContainerContent">
          <div className="userDetailContLeft">
            <div className="userDetailsContent">
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
          <div className="userDetailContRight">
            <h1 className="userDetailContRightHeader">address book</h1>
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
  )
}

export default UserDetails
