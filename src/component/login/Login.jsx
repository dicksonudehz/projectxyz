import { Link, useNavigate } from "react-router-dom";
import BreadcrumSlider from "../breadcrumslider/BreadcrumSlider";
import "./login.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("all the field must be filled");
    } else {
      try {
        const res = await axios.post(
          `https://calm-gold-dugong-gown.cyclic.app/api/users/login/`,
          {
            email: email,
            password: password,
          }
         
        );
      
          console.log(res.data, 'this is the response value')
          toast.success("login successfully");
          navigate('/')
         
          localStorage.setItem("email", JSON.stringify(email));
          setEmail("");
          setPassword("");
       
      } catch (error) {
        console.log("login failed", error);
      }
    }
  };
  const productName = localStorage.getItem("name");

  console.log(productName, 'this is the product name from the local storage')
  return (
    <>
      <BreadcrumSlider />
      <div className="login">
        <ToastContainer />
        <div className="loginWrapper">
          <div className="logingLeft">
            <h3 className="loginLogo">Shop Here</h3>
            <span className="loginDesc">
              shop all household items on our store with ease
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleSubmit}>
              <input
                placeholder="Email"
                className="loginInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                className="loginInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="loginButton">login here</button>

              <span className="loginForgot">forgot password</span>
              <Link to="/registerone" className="loginRoute">
                <button className="loginRegisterButton" type="submit">
                  create account{" "}
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
