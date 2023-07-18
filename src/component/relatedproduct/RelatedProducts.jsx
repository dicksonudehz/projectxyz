import "./relatedproduct.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { previewProductData } from "../../pages/expressorder/productData";

const RelatedProducts = () => {
  return (
    <>
      <h1 className="relatedProductTitle">related products</h1>
      <div className="relatedProductContainerItems">
        {previewProductData.map((product, index) => {
          return (
            <>
              <div className="relatedProductContainer">
                {/* <div className="relatedProsIcons">
                  <SearchOutlinedIcon className="relatedProsIcon" />
                </div> */}
                <div className="relatedProdInfo" key={index}>
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
                    <h1 className="relatedProTitle">{product.title}</h1>
                    <p className="relatedProdPrice">{product.price}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
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
