import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { topSixProduct } from "../../../slice/topSixProductSlice";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./recentlyviewed.css";

const RecentlyViewed = () => {
  const dispatch = useDispatch();

  const {
    loading: pLoading,
    data: pData,
    error: pError,
  } = useSelector((state) => state.topSixProduct);

  useEffect(() => {
    dispatch(topSixProduct());
  }, [dispatch]);

  return (
    <>
      <div className="recentlyViewedProductContainer">
        <div className="featuredProConBottom">
          {pData &&
            pData.map((product, index) => {
              return (
                <>
                  <div className="recentlyViewedProdContainer" key={index}>
                    <Link to={`/singleproduct/${product._id}`}>
                      <div className="recentlyViewedProdIcons">
                        <SearchOutlinedIcon className="recentlyViewedProdIcon" />
                      </div>
                      <div className="recentlyViewedProdInfoCon">
                        <img src={product.image} alt="" className="proImg" />
                        <button className="addToCart">add to cart</button>
                        {/* <button className="addToCart">
                          <ShoppingCartOutlinedIcon />
                          </button> */}
                        <div className="recentlyViewedProdTitle">
                          <h1 className="proTitle">{product.name}</h1>
                          <p className="proPrice">{product.price}</p>
                          {/* <button className="" onClick={() =>HandleClick(product)}>view</button> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                  {/* </Link> */}
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default RecentlyViewed;
