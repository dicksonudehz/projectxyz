import './App.css';
import Footer from "./component/footer/Footer";
import Home from "./pages/Home";
import BestSellerPage from "./pages/bestsellingproduct/BestSellerPage";
import BrowseStoreSlider from "./pages/browsestore/BrowseStoreSlider";
import Category from "./pages/category/Category";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ExpressOrder from "./pages/expressorder/ExpressOrder";
import ExpessOrderOne from "./pages/expressorder/ExpessOrderOne";
import SingleProduct from "./pages/singleproduct/SingleProduct";
// import Dashboard from './component/dashboard/Dashboard';
import AdminDashboard from './component/dashboard/AdminDashboard';
import AddToCart from './pages/addtocart/AddToCart';


function App() {
  return (
    
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bestseller" element={<BestSellerPage />} />
          <Route path="/store" element={<BrowseStoreSlider />} />
          <Route path="/category" element={<Category />} />
          {/* <Route path="/expressorder" element={<ExpressOrder />} /> */}
          <Route path="/expressorderone" element={<ExpessOrderOne />} />
          <Route path="/singleproduct/:id" element={<SingleProduct/>} />
          <Route path="/singleproduct" element={<SingleProduct/>} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/addtocart" element={<AddToCart />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
