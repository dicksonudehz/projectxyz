import './App.css';
import Footer from "./component/footer/Footer";
import Home from "./pages/Home";
import BestSellerPage from "./pages/bestsellingproduct/BestSellerPage";
import BrowseStoreSlider from "./pages/browsestore/BrowseStoreSlider";
import Category from "./pages/category/Category";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExpressOrder from "./pages/expressorder/ExpressOrder";
import SingleProduct from "./pages/singleproduct/SingleProduct";

function App() {
  return (
    
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bestseller" element={<BestSellerPage />} />
          <Route path="/store" element={<BrowseStoreSlider />} />
          <Route path="/category" element={<Category />} />
          <Route path="/expressorder" element={<ExpressOrder />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
