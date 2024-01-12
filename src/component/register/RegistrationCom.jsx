import React, { useEffect } from "react";
import { useState } from "react";
import BreadcrumSlider from "../breadcrumslider/BreadcrumSlider";
import "./registerone.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RegistrationCom() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState("email");

  // const emailExisting = (email) => {
  //   const existingUser = JSON.parse(localStorage.getItem("users")) || [];
  //   return existingUser.some((user) => user.email === email);
  //   console.log(existingUser, 'this is the existing user email ')
  // };

  const handleReg = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !address) {
      toast.error("all the field must be filled");
    } else {
      try {
        const res = await axios.post(
          `https://calm-gold-dugong-gown.cyclic.app/api/ecommerce/admin/admin-register`,
          {
            name: name,
            email: email,
            password: password,
            address: address,
          }
        );
        // const data = localStorage.setItem("email");
        toast.success("registration is successful");
        navigate("/loginpage");
      } catch (error) {
        console.log("error in registration", error);
      }

      setName("");
      setEmail("");
      setPassword("");
      setAddress("");
    }
  };

  return (
    <>
      <BreadcrumSlider />
      <div className="register">
        <ToastContainer />
        <div className="loginWrapper">
          <div className="logingLeft">
            <h3 className="loginLogo">Shop Here</h3>
            <span className="loginDesc">
              shop all household items on our store with ease and affordability
            </span>
          </div>
          <div className="loginRightRegistration">
            <div className="loginBoxContainer">
              <form onSubmit={handleReg} className="loginBoxContainer">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  className="loginInput"
                  autoComplete="name"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="loginInput"
                  autoComplete="email"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="loginInput"
                  autoComplete="Password"
                />
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="your address here"
                  className="loginInput"
                  autoComplete="address"
                />
                <button className="loginButton" type="submit">
                  sign up
                </button>
              </form>
              {/* <button className="loginRegisterButton">
                login into account
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationCom;
