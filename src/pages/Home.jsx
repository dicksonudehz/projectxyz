import Topbar from "../component/Topbar";
import BodyContent from "../component/bodycontent/BodyContent";
import Slider from "../component/slider/Slider";
import ProductCards from "../component/productcard/ProductCards";
import "./home.css";
import FeaturedProduct from "../component/featuredproduct/FeaturedProduct";
import ProductAd from "../component/productad/ProductAd";
import SalesProduct from "../component/salesproduct/SalesProduct";
import GreenProduct from "../component/greenproduct/GreenProduct";
import ProductReel from "../component/productreel/ProductReel";
import BestSeller from "../component/bestsellingproduct/BestSeller";

function Home() {
  return (
    <>
      <Topbar />
      <Slider />
      <BodyContent />
      <ProductCards />
      <FeaturedProduct />
      <ProductAd />
      <SalesProduct />
      <GreenProduct />
      <ProductReel />
      <BestSeller/>
    </>
  );
}

export default Home;
