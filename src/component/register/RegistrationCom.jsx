import React from "react";
import { useState } from "react";
import BreadcrumSlider from "../breadcrumslider/BreadcrumSlider";
import "./registerone.css";
import axios from "axios";
import { ToastContainer, toast} from "react-toastify";

function RegistrationCom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleReg = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !address) {
      toast.error('all the field must be filled')
      console.log("all field must be filled");
    } else {
      try {
        const res = await axios.post(
          `https://delightful-spacesuit-frog.cyclic.app/api/users/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              email: email,
              password: password,
              address: address,
            }),
          }
        );

        if (!res.ok) {
          throw new Error("Registration failed");
        } else {
          toast.success('registration is successful')

        }

        const data = await res.json();
        console.log("User registered:", data);
      } catch (error) {
        console.log("error in registration", error);
      }
    }
    setName("");
    setEmail("");
    setPassword("");
    setAddress("");
  };

  return (
    <>
      <BreadcrumSlider />
      <div className="register">
      <ToastContainer />
        <div className="loginWrapper">
          <div className="logingLeft">
            <h3 className="loginLogo">Dicksonsocials</h3>
            <span className="loginDesc">
              connect with friends and family on dicksonsocials
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
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="loginInput"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="loginInput"
                />
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="your address here"
                  className="loginInput"
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
