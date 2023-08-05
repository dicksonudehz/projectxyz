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
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct";
import AccountDetails from "./AccountDetails";
import { HashLink as Links } from "react-router-hash-link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import Person3Icon from "@mui/icons-material/Person3";
import ViewListIcon from "@mui/icons-material/ViewList";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import PaymentsIcon from "@mui/icons-material/Payments";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

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
            <div className="adminDashboardContent">
              <span className="adminDashboardIcon"><DashboardIcon /></span>
              <h className="adminDashboardContentTitle">admin details</h>
            </div>
            <Links to={CreateProduct}>
            <div className="adminDashboardContent">
              <span className="adminDashboardIcon"><EditLocationAltIcon /></span>
              <h className="adminDashboardContentTitle">create product</h>
            </div>
            </Links>
            
            <div className="adminDashboardContent">
              <span className="adminDashboardIcon"><DashboardIcon /></span>
              <h className="adminDashboardContentTitle">admin details</h>
            </div>
            <div className="adminDashboardContent">
              <span className="adminDashboardIcon"><PlaylistAddIcon /></span>
              <h className="adminDashboardContentTitle">new product</h>
            </div>
            <div className="adminDashboardContent">
              <span className="adminDashboardIcon"><FavoriteIcon /></span>
              <h className="adminDashboardContentTitle">create product review</h>
            </div>
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
          <CreateProduct />
          <DeleteProduct/>
          <AccountDetails />
          <UpdateProduct />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
