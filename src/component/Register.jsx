import React, { useEffect, useState } from "react";
// import "./topbar.css";
import "./register.css";
import register from "../slice/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../slice/Loader";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, data, error } = useSelector((state) => state.register);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(address);
    if (!name || !email || !password || !address) {
      toast.error("All fields are required", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      dispatch(
        register({
          name: name,
          email: email,
          password: password,
          address: address,
        })
      );
      setName("");
      setEmail("");
      setPassword("");
      setAddress("");
    }
  };
  useEffect(() => {
    if (data) {
      toast.success("registration is Succesfull", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/AccountDetails");
      }, 3000);
    } else if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [[data, error, navigate]]);

  return (
    <>
      <div className="signupContainer">
        <ToastContainer />
        <form action="" onSubmit={(e)=> handleSubmit} className="registerForm">
          <input
            type="text"
            className="signUpinputField"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="signUpinputField"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="signUpinputField"
            placeholder="your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            className="signUpinputField"
            placeholder="your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {loading ? (
            <Loader />
          ) : (
            <button className="signInButton" type="submit">
              create an account
            </button>
          )}
        </form>
        <p className="existingAccount">
          Do you have an account already?{" "}
          <b className="clickhere">click here</b>
        </p>
      </div>
    </>
  );
};

export default Register;
