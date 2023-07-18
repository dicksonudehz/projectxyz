import React from "react";
import Topbar from "../../component/Topbar";
import "./category.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AppsIcon from "@mui/icons-material/Apps";
import TuneIcon from "@mui/icons-material/Tune";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Category = () => {
  return (
    <>
      <Topbar />
      <div className="categoryContaienr">
        <div className="breadcrumContainer">
          <img src="./images/retail.jpg" alt="" className="breadcrumImage" />
          <div className="breadcrumContent">
            <div className="breadcrumHeaderNav">
              <KeyboardBackspaceIcon className="arrowBack" />
              <h1>body care</h1>
            </div>
            <ul>
              <li>body care</li>
              <li>drinks</li>
              <li>ethnic delicacies</li>
              <li>fish and sea food</li>
              <li>flour</li>
              <li>fresh produces</li>
              <li>fruits and vegetable</li>
              <li>grains</li>
              <li>household</li>
              <li>oil</li>
              <li>provisions</li>
              <li>spice</li>
            </ul>
          </div>
        </div>
        <div className="breadcrumNavContainer">
          <div className="breadcrumLeftNav">
            <div className="breadcrumLeftItems">
              <ul>
                <li>home</li>
                <li>
                  <KeyboardDoubleArrowRightIcon className="breadcrumNavIcon" />
                </li>
                <li>body care</li>
              </ul>
            </div>
          </div>
          <div className="breadcrumRightNav">
            <div className="breadcrumRightItems">
              <h5>show:</h5>
              <h5>12</h5>
              <h5>/</h5>
              <h5>18</h5>
              <h5>/</h5>
              <h5>24</h5>
            </div>
            <div className="breadcrumRightItems">
              <AppsIcon className="appIcon" />:
              <AppsIcon className="appIcon" />:
              <AppsIcon className="appIcon" />:
            </div>
            <div className="breadcrumRightItems">
              <TuneIcon className="appIcon" />
              <h1>filters</h1>
            </div>
          </div>
        </div>
        <div className="categoryProductContainerBottom">
          <div className="categoryproductItem">
            <SearchOutlinedIcon className="searchCategoryIcon" />
            <img src="./images/labis.jpg" alt="" className="productItemImg" />
            {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
            <div className="categoryProd">
              <button className="categoryAddtoCart">Add to cart </button>
              <h1 className="categoryCardTitle">
                Burger Peanuts Snack by Nkatie
              </h1>
              <p className="categoryProductPrice">N4000</p>
            </div>
          </div>
          <div className="categoryproductItem">
            <SearchOutlinedIcon className="searchCategoryIcon" />
            <img src="./images/labis.jpg" alt="" className="productItemImg" />
            {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
            <div className="categoryProd">
              <button className="categoryAddtoCart">Add to cart </button>
              <h1 className="categoryCardTitle">
                Burger Peanuts Snack by Nkatie
              </h1>
              <p className="categoryProductPrice">N4000</p>
            </div>
          </div>
          <div className="categoryproductItem">
            <SearchOutlinedIcon className="searchCategoryIcon" />
            <img src="./images/labis.jpg" alt="" className="productItemImg" />
            {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
            <div className="categoryProd">
              <button className="categoryAddtoCart">Add to cart </button>
              <h1 className="categoryCardTitle">
                Burger Peanuts Snack by Nkatie
              </h1>
              <p className="categoryProductPrice">N4000</p>
            </div>
          </div>
          <div className="categoryproductItem">
            <SearchOutlinedIcon className="searchCategoryIcon" />
            <img src="./images/labis.jpg" alt="" className="productItemImg" />
            {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
            <div className="categoryProd">
              <button className="categoryAddtoCart">Add to cart </button>
              <h1 className="categoryCardTitle">
                Burger Peanuts Snack by Nkatie
              </h1>
              <p className="categoryProductPrice">N4000</p>
            </div>
          </div>
          <div className="categoryproductItem">
            <SearchOutlinedIcon className="searchCategoryIcon" />
            <img src="./images/labis.jpg" alt="" className="productItemImg" />
            {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
            <div className="categoryProd">
              <button className="categoryAddtoCart">Add to cart </button>
              <h1 className="categoryCardTitle">
                Burger Peanuts Snack by Nkatie
              </h1>
              <p className="categoryProductPrice">N4000</p>
            </div>
          </div>
          <div className="categoryproductItem">
            <SearchOutlinedIcon className="searchCategoryIcon" />
            <img src="./images/labis.jpg" alt="" className="productItemImg" />
            {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
            <div className="categoryProd">
              <button className="categoryAddtoCart">Add to cart </button>
              <h1 className="categoryCardTitle">
                Burger Peanuts Snack by Nkatie
              </h1>
              <p className="categoryProductPrice">N4000</p>
            </div>
          </div>
          <div className="categoryproductItem">
            <SearchOutlinedIcon className="searchCategoryIcon" />
            <img src="./images/labis.jpg" alt="" className="productItemImg" />
            {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
            <div className="categoryProd">
              <button className="categoryAddtoCart">Add to cart </button>
              <h1 className="categoryCardTitle">
                Burger Peanuts Snack by Nkatie
              </h1>
              <p className="categoryProductPrice">N4000</p>
            </div>
          </div>
          <div className="categoryproductItem">
            <SearchOutlinedIcon className="searchCategoryIcon" />
            <img src="./images/labis.jpg" alt="" className="productItemImg" />
            {/* <button className="addToCart">
                      <ShoppingCartOutlinedIcon />
                    </button> */}
            <div className="categoryProd">
              <button className="categoryAddtoCart">Add to cart </button>
              <h1 className="categoryCardTitle">
                Burger Peanuts Snack by Nkatie
              </h1>
              <p className="categoryProductPrice">N4000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
