import React, { useEffect, useState } from "react";
import "./topbar.css";
import { login } from "../slice/LoginSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../slice/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    loading: lloading,
    data: ldata,
    error: lerror,
  } = useSelector((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = (event) => {
    event.preventDefault();
    
    if (!email || !password) {
      toast.error("All fields are required", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      dispatch(login({email:email, password:password}));
      setEmail("");
      setPassword("");
    }
  };

  useEffect(() => {
    if (ldata) {
      toast.success("Login Succesfull", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/AccountDetails");
      }, 3000);
    } else if (lerror) {
      toast.lerror(lerror, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [ldata, lerror, navigate]);
  
  return (
    <>
      <div className="loginContainer">
        <div className="signInWithGoogle">
          <button className="signupGoogle">sign in with google</button>
          <p>or use your account</p>
        </div>
        <div className="inputItems">
          <ToastContainer />
          <form
            action=""
            className="loginContainerForm"
            onSubmit={HandleSubmit}
          >
            <input
              type="email"
              className="inputemail"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="inputpassword"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>
              Wrong password? click <b className="clickhere">here</b> to reset
            </p>
            {lloading ? (
              <Loader />
            ) : (
              <button className="signInButton" type="submit">sign in</button>
            )}
          </form>
        </div>
        <p className="clickhere">logout</p>
      </div>
    </>
  );
};

export default Login;
