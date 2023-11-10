import { useEffect, useState } from 'react';
import './userdetails.css'

const UserDetails = () => {
  const [data, setData] = useState('my account ');
  const [email, setEmail] = useState('my account ');
    useEffect(() => {
    const regData = localStorage.getItem("name");
    setData(regData ? JSON.parse(regData) : null); 

    const regEmail = localStorage.getItem("email")
    setEmail(regEmail ? JSON.parse(regEmail) :null)
  }, []);


  const productName = localStorage.getItem("name");
  const productEmail = localStorage.getItem("email");

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
                <p className="accountDetailName">{data}</p>
                <p className="accountDetailEmail">{email}</p>
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
