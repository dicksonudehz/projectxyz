import React, { useEffect } from "react";
import BreadcrumSlider from "../breadcrumslider/BreadcrumSlider";
import "./admindashboard.css";
import { adminDashboardData } from "../../pages/expressorder/productData";
import MyOrders from "./MyOrders";
import myprofile from "../../images/myprofile.png";
import CreateProduct from "./CreateProduct";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createProduct } from "../../slice/createProductSlice";
import NewProduct from "./NewProduct";

const AdminDashboard = () => {
  return (
    <>
      <BreadcrumSlider />
      <div className="adminDashboardContainer">
        <div className="adminLeftDashboardContainer">
          <div className="adminDdashboardUser">
            <img src={myprofile} alt="" className="adminprofilePics" />
            <h1 className="adminmyprofileDetails">
              welcome: <b>john doe</b>
            </h1>
          </div>
          <div className="adminDashboardItems">
            {adminDashboardData.map((data, index) => {
              return (
                <>
                  <div className="adminDashboardContent" key={index}>
                    <Link to={`createproduct/${data.url}`}>
                      <span className="adminDashboardIcon">{data.icon}</span> 
                      <h className="adminDashboardContentTitle">{data.title}</h>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="adminRightDashboardContainer">
          {/* <MyOrders /> */}
          {/* <Routes>
          {adminDashboardData.map((data, index) => {
            return (
              <>
                <Route path={`/${data.url}`} element={<CreateProduct />} />
              </>
            );
          })}
          </Routes> */}
          <NewProduct/>
        {/* <CreateProduct/> */}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
