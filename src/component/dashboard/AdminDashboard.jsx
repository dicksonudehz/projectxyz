import React, { useEffect, useState } from "react";
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
import EmailIcon from '@mui/icons-material/Email';
import Messages from "./Messages";
import NoMessages from "./NoMessages";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('')

  const handleNavigation = (section) => {
    setActiveSection(section)
  }
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
              <h className="adminDashboardContentTitle" onClick={() => handleNavigation("accountDetails")}>admin profile</h>
            </div>
            <div className="adminDashboardContent">
              <span className="adminDashboardIcon"><EditLocationAltIcon /></span>
              <h className="adminDashboardContentTitle" onClick={() => handleNavigation("createProduct")}>create product</h>
            </div>
            
            <div className="adminDashboardContent">
              <span className="adminDashboardIcon"><DashboardIcon /></span>
              <h className="adminDashboardContentTitle" onClick={() => handleNavigation("deleteProduct")}>delete product</h>
            </div>
            <div className="adminDashboardContent">
              <span className="adminDashboardIcon"><PlaylistAddIcon /></span>
              <h className="adminDashboardContentTitle" onClick={() => handleNavigation("updateProduct")}>update product</h>
            </div>
            <div className="adminDashboardContent">
              <span className="adminDashboardIcon"><FavoriteIcon /></span>
              <h className="adminDashboardContentTitle" onClick={() => handleNavigation("myOrders")}>all orders</h>
            </div>
            <div className="adminDashboardContent">
              <span className="adminDashboardIcon"><EmailIcon /></span>
              <h className="adminDashboardContentTitle" onClick={() => handleNavigation("message")}>messages</h>
            </div>
            <div className="adminDashboardContent">
              <span className="adminDashboardIcon"><EmailIcon /></span>
              <h className="adminDashboardContentTitle" onClick={() => handleNavigation("nomessage")}>no message</h>
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
          {activeSection === 'newProduct' && <NewProduct/>}
          {activeSection === 'createProduct' &&  <CreateProduct />}
          {activeSection === 'deleteProduct' && <DeleteProduct/>}
          {activeSection === 'accountDetails' &&  <AccountDetails /> }
          {activeSection === 'myOrders' && <MyOrders/>}
          {activeSection === 'updateProduct' && <UpdateProduct />}
          {activeSection === 'message' && <Messages/>}
          {activeSection === 'nomessage' && <NoMessages/>}
          {/* <NewProduct/>
          <CreateProduct />
          <DeleteProduct/>
          <AccountDetails /> */}
          {/* <MyOrders/> */}
          {/* <AccountDetails /> */}
          {/* <UpdateProduct /> */}
          {/* <Messages/> */}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
