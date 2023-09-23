import { Link } from "react-router-dom";
import BreadcrumSlider from "../breadcrumslider/BreadcrumSlider";
import "./login.css";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("this is the login button");
    } else {
    }
  };
  return (
    <>
      <BreadcrumSlider />
      <div className="login">
        <div className="loginWrapper">
          <div className="logingLeft">
            <h3 className="loginLogo">Dicksonsocials</h3>
            <span className="loginDesc">
              connect with friends and family on dicksonsocials
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
              <button className="loginButton">login</button>
              <span className="loginForgot">forgot password</span>
              <Link to="/registerone" className="loginRoute">
                <button className="loginRegisterButton" type="onsubmit">
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
