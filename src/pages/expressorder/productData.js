import onion from "../../images/onion.jpg";
import yam from "../../images/yam.jpg";
import custard from "../../images/custard.jpg";
import manyyam from "../../images/manyyam.jpg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import Person3Icon from "@mui/icons-material/Person3";
import ViewListIcon from "@mui/icons-material/ViewList";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import PaymentsIcon from "@mui/icons-material/Payments";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { HashLink as Links } from "react-router-hash-link";

export const Data = [
  {
    image: onion,
    title: " African Batthing Spong",
    price: 200,
    addSign: "+",
  },
  {
    image: yam,
    title: "African Yam in pieces",
    price: 200,
    addSign: "+",
  },
  {
    image: custard,
    title: "Flour Food",
    price: 1000,
    addSign: "+",
  },
  {
    image: manyyam,
    title: "Original African Yam",
    price: 6000,
    addSign: "+",
  },
];

export const previewProductData = [
  {
    image: onion,
    title: "game triger finger new insulated PH-X",
    price: 2000,
    addtocart: "add to cart",
  },
  {
    image: manyyam,
    title: "game triger finger new insulated PH-X",
    price: 2000,
    addtocart: "add to cart",
  },
  {
    image: custard,
    title: "game triger finger new insulated PH-X",
    price: 2000,
    addtocart: "add to cart",
  },
  {
    image: yam,
    title: "game triger finger new insulated PH-X",
    price: 2000,
    addtocart: "add to cart",
  },
  {
    image: onion,
    title: "game triger finger new insulated PH-X",
    price: 2000,
    addtocart: "add to cart",
  },
  {
    image: custard,
    title: "game triger finger new insulated PH-X",
    price: 2000,
    addtocart: "add to cart",
  },
];

export const dashboardData = [
  {
    icon: <DashboardIcon />,
    title: "dashboard",
    url: "CreateProduct",
  },
  {
    icon: <EditLocationAltIcon />,
    title: "edit address",
    url: "CreateProduct",
  },
  {
    icon: <FavoriteIcon />,
    title: "wishlist",
    url: "CreateProduct",
  },
  {
    icon: <ViewListIcon />,
    title: "my order",
    url: "CreateProduct",
  },
  {
    icon: <Person3Icon />,
    title: "user profile",
    url: "CreateProduct",
  },
  {
    icon: <PaymentsIcon />,
    title: "payment method",
    url: "CreateProduct",
  },
  {
    icon: <LogoutIcon />,
    title: "log out",
    url: "CreateProduct",
  },
];

export const adminDashboardData = [
  {
    icon: <DashboardIcon />,
    title: "admin details",
    url: "CreateProduct",
    // url: <Links to={createProduct} />,
  },
  {
    icon: <EditLocationAltIcon />,
    title: "create product",
    url: "CreateProduct",
  },
  {
    icon: <PlaylistAddIcon />,
    title: "new products",
    url: "CreateProduct",
  },
  {
    icon: <FavoriteIcon />,
    title: "create product review",
    url: "CreateProduct",
  },
  {
    icon: <ViewListIcon />,
    title: "delete a product",
    url: "CreateProduct",
  },
  {
    icon: <Person3Icon />,
    title: "update product",
    url: "CreateProduct",
  },
  {
    icon: <PaymentsIcon />,
    title: "payment method",
    url: "CreateProduct",
  },
  {
    icon: <LogoutIcon />,
    title: "log out",
    url: "CreateProduct",
  },
];
