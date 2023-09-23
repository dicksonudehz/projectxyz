import { HashLink as Links } from "react-router-hash-link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import Person3Icon from "@mui/icons-material/Person3";
import ViewListIcon from "@mui/icons-material/ViewList";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import PaymentsIcon from "@mui/icons-material/Payments";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import EmailIcon from "@mui/icons-material/Email";
import BreadcrumSlider from "../../breadcrumslider/BreadcrumSlider";
import myprofile from "../../../images/myprofile.png";
import "./userdashboard.css";
import UserDetails from "./UserDetails";
import Inbox from "./Inbox";
import RecentlyViewed from "./RecentlyViewed";
import SavedItems from "./SavedItems";
import Voucher from "./Voucher";
import MyOrders from "../MyOrders";
import { useState } from "react";

const UserDashboard = () => {
  const [activesection, setActiveSection] = useState("useDetails");

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <BreadcrumSlider />
      <div className="useradminDashboardContainer">
        <div className="useradminLeftDashboardContainer">
          <div className="useradminDdashboardUser">
            <img src={myprofile} alt="" className="useradminprofilePics" />
            <h1 className="useradminmyprofileDetails">
              welcome: <b>john doe</b>
            </h1>
          </div>
          <div className="useradminDashboardItems">
            <div className="useradminDashboardContent">
              <span className="useradminDashboardIcon">
                <DashboardIcon />
              </span>
              <h
                className="useradminDashboardContentTitle"
                onClick={() => handleNavigation("useDetails")}
              >
                user profile
              </h>
            </div>
            <div className="useradminDashboardContent">
              <span className="useradminDashboardIcon">
                <EditLocationAltIcon />
              </span>
              <h
                className="useradminDashboardContentTitle"
                onClick={() => handleNavigation("myOrders")}
              >
                my orders
              </h>
            </div>

            <div className="useradminDashboardContent">
              <span className="useradminDashboardIcon">
                <DashboardIcon />
              </span>
              <h
                className="useradminDashboardContentTitle"
                onClick={() => handleNavigation("inbox")}
              >
                inbox
              </h>
            </div>
            <div className="useradminDashboardContent">
              <span className="useradminDashboardIcon">
                <PlaylistAddIcon />
              </span>
              <h
                className="useradminDashboardContentTitle"
                onClick={() => handleNavigation("recentlyViewed")}
              >
                recently viewed
              </h>
            </div>
            <div className="useradminDashboardContent">
              <span className="useradminDashboardIcon">
                <FavoriteIcon />
              </span>
              <h
                className="useradminDashboardContentTitle"
                onClick={() => handleNavigation("savedItems")}
              >
                saved items
              </h>
            </div>

            <div className="useradminDashboardContent">
              <span className="useradminDashboardIcon">
                <EmailIcon />
              </span>
              <h
                className="useradminDashboardContentTitle"
                onClick={() => handleNavigation("voucher")}
              >
                voucher
              </h>
            </div>
          </div>
        </div>
        <div className="useradminRightDashboardContainer">
          {/* <Routes>
          {useradminDashboardData.map((data, index) => {
            return (
              <>
                <Route path={`/${data.url}`} element={<CreateProduct />} />
              </>
            );
          })}
          </Routes> */}
          {/* <NewProduct/>
          <CreateProduct />
          <DeleteProduct/>
          <AccountDetails /> */}
          {activesection === "myOrders" && <MyOrders />}

          {activesection === "voucher" && <Voucher />}
          {activesection === "savedItems" && <SavedItems />}
          {activesection === "recentlyViewed" && <RecentlyViewed />}
          {activesection === "inbox" && <Inbox />}
          {activesection === "useDetails" && <UserDetails />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
