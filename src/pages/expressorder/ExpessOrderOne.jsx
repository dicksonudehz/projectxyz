import Accordion from "react-bootstrap/Accordion";
import BreadcrumSlider from "../../component/breadcrumslider/BreadcrumSlider";
import FlashlightOnIcon from "@mui/icons-material/FlashlightOn";
import "./expressorderone.css";
import { Data } from "./productData.js";

function BasicExample() {
  return (
    <>
      <BreadcrumSlider />
      <Accordion defaultActiveKey="0" className="accordianWrapper">
        <Accordion.Item eventKey="0" className="accordianSingle">
          <Accordion.Header className="accordianHeader">
            <FlashlightOnIcon className="descArrow" />
            <h1>my body care</h1>
          </Accordion.Header>
          <Accordion.Body>
            <div className="accordianContent">
              <div className="headerItemsContainer">
                <div className="dropdownMenu">
                  <select name="sortingItems" id="sorting">
                    <option value="1">sort alphabetically A-Z</option>
                    <option value="1">sort alphabetically Z-A</option>
                    <option value="1">sort by listed: newest to oldest</option>
                    <option value="1">sort by listed: oldest to newest</option>
                    <option value="1">sort by price: high to low</option>
                    <option value="1">sort by price: low to high</option>
                    <option value="1">sort by SKU: high to low</option>
                    <option value="1">sort by SKU: low to high</option>
                  </select>
                  <input
                    type="text"
                    className="searchingItems"
                    placeholder="Search by name"
                  />
                </div>
                <div className="headerItemsRight">
                  <button className="addtocart">add all to cart</button>
                </div>
              </div>
              <div className="accordianProductContainer">
                {Data.map((productItem, i) => {
                  return (
                    <div className="productItem">
                      <img
                        src={productItem.image}
                        alt=""
                        className="accordianImg"
                      />
                      <div className="accordianProductDesc">
                        <div className="accordianproductTitle">
                          <h2 className="accordianTitle">
                            {productItem.title}
                          </h2>
                          <h2 className="accordianPrice">
                            N{productItem.price}
                          </h2>
                        </div>
                        <div className="accordianAddIcon">
                          <h1>{productItem.addSign}</h1>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="accordianSingle">
          <Accordion.Header className="accordianHeader">
            <FlashlightOnIcon className="descArrow" />
            <h1>body care</h1>
          </Accordion.Header>
          <Accordion.Body>
            <div className="accordianContent">
              <div className="headerItemsContainer">
                <div className="dropdownMenu">
                  <select name="sortingItems" id="sorting">
                    <option value="1">sort alphabetically A-Z</option>
                    <option value="1">sort alphabetically Z-A</option>
                    <option value="1">sort by listed: newest to oldest</option>
                    <option value="1">sort by listed: oldest to newest</option>
                    <option value="1">sort by price: high to low</option>
                    <option value="1">sort by price: low to high</option>
                    <option value="1">sort by SKU: high to low</option>
                    <option value="1">sort by SKU: low to high</option>
                  </select>
                  <input
                    type="text"
                    className="searchingItems"
                    placeholder="Search by name"
                  />
                </div>
                <div className="headerItemsRight">
                  <button className="addtocart">add all to cart</button>
                </div>
              </div>
              <div className="accordianProductContainer">
                {Data.map((productItem, i) => {
                  return (
                    <div className="productItem">
                      <img
                        src={productItem.image}
                        alt=""
                        className="accordianImg"
                      />
                      <div className="accordianProductDesc">
                        <div className="accordianproductTitle">
                          <h2 className="accordianTitle">
                            {productItem.title}
                          </h2>
                          <h2 className="accordianPrice">
                            N{productItem.price}
                          </h2>
                        </div>
                        <div className="accordianAddIcon">
                          <h1>{productItem.addSign}</h1>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="accordianSingle">
          <Accordion.Header className="accordianHeader">
            <FlashlightOnIcon className="descArrow" />
            <h1>body care</h1>
          </Accordion.Header>
          <Accordion.Body>
            <div className="accordianContent">
              <div className="headerItemsContainer">
                <div className="dropdownMenu">
                  <select name="sortingItems" id="sorting">
                    <option value="1">sort alphabetically A-Z</option>
                    <option value="1">sort alphabetically Z-A</option>
                    <option value="1">sort by listed: newest to oldest</option>
                    <option value="1">sort by listed: oldest to newest</option>
                    <option value="1">sort by price: high to low</option>
                    <option value="1">sort by price: low to high</option>
                    <option value="1">sort by SKU: high to low</option>
                    <option value="1">sort by SKU: low to high</option>
                  </select>
                  <input
                    type="text"
                    className="searchingItems"
                    placeholder="Search by name"
                  />
                </div>
                <div className="headerItemsRight">
                  <button className="addtocart">add all to cart</button>
                </div>
              </div>
              <div className="accordianProductContainer">
                {Data.map((productItem, i) => {
                  return (
                    <div className="productItem">
                      <img
                        src={productItem.image}
                        alt=""
                        className="accordianImg"
                      />
                      <div className="accordianProductDesc">
                        <div className="accordianproductTitle">
                          <h2 className="accordianTitle">
                            {productItem.title}
                          </h2>
                          <h2 className="accordianPrice">
                            N{productItem.price}
                          </h2>
                        </div>
                        <div className="accordianAddIcon">
                          <h1>{productItem.addSign}</h1>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="accordianSingle">
          <Accordion.Header className="accordianHeader">
            <FlashlightOnIcon className="descArrow" />
            <h1>body care</h1>
          </Accordion.Header>
          <Accordion.Body>
            <div className="accordianContent">
              <div className="headerItemsContainer">
                <div className="dropdownMenu">
                  <select name="sortingItems" id="sorting">
                    <option value="1">sort alphabetically A-Z</option>
                    <option value="1">sort alphabetically Z-A</option>
                    <option value="1">sort by listed: newest to oldest</option>
                    <option value="1">sort by listed: oldest to newest</option>
                    <option value="1">sort by price: high to low</option>
                    <option value="1">sort by price: low to high</option>
                    <option value="1">sort by SKU: high to low</option>
                    <option value="1">sort by SKU: low to high</option>
                  </select>
                  <input
                    type="text"
                    className="searchingItems"
                    placeholder="Search by name"
                  />
                </div>
                <div className="headerItemsRight">
                  <button className="addtocart">add all to cart</button>
                </div>
              </div>
              <div className="accordianProductContainer">
                {Data.map((productItem, i) => {
                  return (
                    <div className="productItem">
                      <img
                        src={productItem.image}
                        alt=""
                        className="accordianImg"
                      />
                      <div className="accordianProductDesc">
                        <div className="accordianproductTitle">
                          <h2 className="accordianTitle">
                            {productItem.title}
                          </h2>
                          <h2 className="accordianPrice">
                            N{productItem.price}
                          </h2>
                        </div>
                        <div className="accordianAddIcon">
                          <h1>{productItem.addSign}</h1>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default BasicExample;
