import { Link, useNavigate } from "react-router-dom";
import BreadcrumSlider from "../breadcrumslider/BreadcrumSlider";
import "./adminLogin.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const res = {};

    e.preventDefault();
    if (!email || !password) {
      toast.error("all the field must be filled");
    } else {
      try {
        const config = {
          headers: {
            "Content-Type": "application/JSON",
            ...(res.token
              ? { Authorization: res?.token && `Bearer ${res?.token}` }
              : {}),
          },
        };

        const res = await axios.post(
          `https://calm-gold-dugong-gown.cyclic.app/api/ecommerce/admin/admin-adminLogin`,

          {
            email: email,
            password: password,
          },

          config
        );
        console.log("this is the token", res.data.token);

        toast.success("adminLogin successfully");
        // navigate("/");

        setEmail("");
        setPassword("");
      } catch (error) {
        console.log("adminLogin failed", error);
      }

      const config = {
        headers: {
          "Content-Type": "application/JSON",
          ...(res.token
            ? { Authorization: res?.token && `Bearer ${res?.token}` }
            : {}),
        },
      };
    }
  };
  const productName = localStorage.getItem("name");

  return (
    <>
      <BreadcrumSlider />
      <div className="adminLogin">
        <ToastContainer />
        <div className="adminLoginWrapper">
          <div className="adminLogingLeft">
            <h3 className="adminLoginLogo">All admins Login here</h3>
            <span className="adminLoginDesc">
              This is the adminLogin page for all the admins
            </span>
          </div>
          <div className="adminLoginRight">
            <form className="adminLoginBox" onSubmit={handleSubmit}>
              <input
                placeholder="Email"
                className="adminLoginInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <input
                placeholder="Password"
                className="adminLoginInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="Password"
              />
              <button className="adminLoginButton">adminLogin here</button>

              <span className="adminLoginForgot">forgot password</span>
              <Link to="/registerone" className="adminLoginRoute">
                <button className="adminLoginRegisterButton" type="submit">
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
