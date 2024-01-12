import "./App.css";
import react, { Suspense} from 'react'
import Footer from "./component/footer/Footer";
import Home from "./pages/Home";
import BestSellerPage from "./pages/bestsellingproduct/BestSellerPage";
// import BrowseStoreSlider from "./pages/browsestore/BrowseStoreSlider";
import Category from "./pages/category/Category";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ExpressOrder from "./pages/expressorder/ExpressOrder";
import ExpessOrderOne from "./pages/expressorder/ExpessOrderOne";
import SingleProduct from "./pages/singleproduct/SingleProduct";
// import Dashboard from './component/dashboard/Dashboard';
import AdminDashboard from "./component/dashboard/AdminDashboard";
import AddToCart from "./pages/addtocart/AddToCart";
import UserDashboard from "./component/dashboard/userdashboard/UserDashboard";
import CheckoutPage from "./pages/checkoutpage/CheckoutPage";
import Store from "./component/store/Store";
import RegistrationCom from "./component/register/RegistrationCom";
import Login from "./component/login/Login";
import AdminLogin from "./component/adminLogin/adminLogin";
import AdminRegister from "./component/adminRegister/adminRegister";

function App() {
  return (
    <>
    <Suspense fallback={<h1>Loading....</h1>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bestseller" element={<BestSellerPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/expressorderone" element={<ExpessOrderOne />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/loginpage" element={<Login />} />
          <Route path="/AdminLogin" element={<AdminLogin/>}/>
          <Route path="/registerone" element={<RegistrationCom />} />
          <Route path="/AdminRegister" element={<AdminRegister />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/addtocart" element={<AddToCart />} />
        </Routes>
      </Router>
      </Suspense>
      
    </>
  );
}

export default App;
