import React, { useEffect } from "react";
import "./browsestoreslider.css";
import BreadcrumSlider from "../../component/breadcrumslider/BreadcrumSlider";
import { fetchAllProduct } from "../../slice/fetchAllProductSlice";
import { useDispatch, useSelector } from "react-redux";

const BrowseStoreSlider = () => {
  const Dispatch = useDispatch();
  // const Selector = useSelector()

  const {
    loading: bLoading,
    data: bdata,
    error: berror,
  } = useSelector((state) => state.fetchAllProduct);
  useEffect(() => {
    Dispatch(fetchAllProduct());
  }, [Dispatch]);
  return (
    <>
      {/* <Topbar /> */}
      <BreadcrumSlider />
      <div className="contentContainer">
        <div className="cardContentContainerItems">
          {bLoading && <p>Loading </p>}
          {berror && <p>Error </p>}
          {bdata &&
            bdata.map((product, index) => {
              return (
                <>
                  <div className="cardContentContainers">
                    <img
                      src={product.image}
                      alt=""
                      className="cardContentImage"
                    />
                    <h1 className="cardContent">drinks</h1>
                    {/* <div className="cardContent">
            </div> */}
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default BrowseStoreSlider;
