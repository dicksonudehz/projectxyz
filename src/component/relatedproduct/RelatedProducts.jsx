import "./relatedproduct.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { previewProductData } from "../../pages/expressorder/productData";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleProduct from "../../pages/singleproduct/SingleProduct";

const RelatedProducts = () => {
  const distpatch = useDispatch();

  const {
    loading: rLoading,
    data: rData,
    error: rError,
  } = useSelector((state) => state.relatedProduct);

  return (
    <>
      <h1 className="relatedProductTitle">related products</h1>
      <div className="relatedProductContainerItems">
        {/* <div className="relatedProsIcons">
                  <SearchOutlinedIcon className="relatedProsIcon" />
                </div> */}
        <div className="relatedProdInfo">
          {rLoading && <p>Loading...</p>}
          {rError && <p>Error...</p>}
          {rData && rData.length > 0 ? (
            <>
              {rData.map((product, index) => {
                return (
                  <>
                    <div className="relatedProductContainer">
                      <Link
                        to={`/singleProduct/${product._id}`}
                        className="text-decoration-none"
                      >
                        <img
                          src={product.image}
                          alt=""
                          className="relatedProdImage"
                        />
                        <button className="addToCart">add to cart</button>
                        {/* <button className="addToCart">
                          <ShoppingCartOutlinedIcon />
                        </button> */}
                        <div className="relatedProdTitleCon">
                          <h1 className="relatedProTitle">{product.name}</h1>
                          <p className="relatedProdPrice">{product.price}</p>
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <p>no related product</p>
          )}
        </div>
      </div>
      <div className="productDescription">
        <h1 className="productTitle">description</h1>
        <p className="loremipsum">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          debitis facilis minus libero corrupti soluta, cum mollitia voluptates
          adipisci velit, similique laboriosam quae sed non facere beatae rem
          ea. Consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Commodi debitis facilis minus libero corrupti soluta, cum
          mollitia voluptates adipisci velit, similique laboriosam quae sed non
          facere beatae rem ea. Consequuntur?
        </p>
      </div>
    </>
  );
};

export default RelatedProducts;
