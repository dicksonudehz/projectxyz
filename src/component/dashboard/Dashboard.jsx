import React from "react";
import "./dashboard.css";
import BreadcrumSlider from "../breadcrumslider/BreadcrumSlider";
import myprofile from "../../images/myprofile.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { dashboardData } from "../../pages/expressorder/productData";
import MyOrders from "./MyOrders";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <BreadcrumSlider />
      <div className="dashboardContainer">
        <div className="leftDashboardContainer">
          <div className="dashboardUser">
            <img src={myprofile} alt="" className="profilePics" />
            <h1 className="myprofileDetails">
              welcome: <b>john doe</b>
            </h1>
          </div>
          <div className="dashboardItems">
            {dashboardData.map((data, index) => {
              return (
                <>
                  <div className="dashboardContent">
                    <Link to={`/${data.url}`}>
                      <span className="dashboardIcon">{data.icon}</span>
                      <h className="dashboardContentTitle">{data.title}</h>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="rightDashboardContainer">
          {data.map((data, index) => {
            return (
              <>
                <Route path={`/${data.url}`} element={<CreateProduct />} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
