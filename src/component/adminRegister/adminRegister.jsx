import React, { useEffect } from "react";
import { useState } from "react";
import BreadcrumSlider from "../breadcrumslider/BreadcrumSlider";
import "./adminRegister.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AdminRegister() {
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
          navigate("/adminRegLoginpage");
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
        <div className="adminRegLoginWrapper">
          <div className="adminRegLogingLeft">
            <h3 className="adminRegLoginLogo">all admin can register here</h3>
            <span className="adminRegLoginDesc">
              kindly register here as an admin here 
            </span>
          </div>
          <div className="adminRegLoginRightRegistration">
            <div className="adminRegLoginBoxContainer">
              <form onSubmit={handleReg} className="adminRegLoginBoxContainer">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  className="adminRegLoginInput"
                  autoComplete="name"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="adminRegLoginInput"
                  autoComplete="email"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="adminRegLoginInput"
                  autoComplete="Password"
                />
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="your address here"
                  className="adminRegLoginInput"
                  autoComplete="address"
                />
                <button className="adminRegLoginButton" type="submit">
                  sign up
                </button>
              </form>
              {/* <button className="adminRegLoginRegisterButton">
                adminRegLogin into account
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
