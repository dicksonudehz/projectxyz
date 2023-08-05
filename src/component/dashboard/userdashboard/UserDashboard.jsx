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

const UserDashboard = () => {
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
              <h className="useradminDashboardContentTitle">user profile</h>
            </div>
            <div className="useradminDashboardContent">
              <span className="useradminDashboardIcon">
                <EditLocationAltIcon />
              </span>
              <h className="useradminDashboardContentTitle">my orders</h>
            </div>

            <div className="useradminDashboardContent">
              <span className="useradminDashboardIcon">
                <DashboardIcon />
              </span>
              <h className="useradminDashboardContentTitle"> inbox</h>
            </div>
            <div className="useradminDashboardContent">
              <span className="useradminDashboardIcon">
                <PlaylistAddIcon />
              </span>
              <h className="useradminDashboardContentTitle">recently viewed</h>
            </div>
            <div className="useradminDashboardContent">
              <span className="useradminDashboardIcon">
                <FavoriteIcon />
              </span>
              <h className="useradminDashboardContentTitle">saved items</h>
            </div>
            <div className="useradminDashboardContent">
              <span className="useradminDashboardIcon">
                <EmailIcon />
              </span>
              <h className="useradminDashboardContentTitle">voucher</h>
            </div>
          </div>
        </div>
        <div className="useradminRightDashboardContainer">
          {/* <MyOrders /> */}
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
          <Voucher/>
          {/* <SavedItems /> */}
          {/* <RecentlyViewed /> */}
          {/* <Inbox/> */}
          {/* <UserDetails/> */}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
