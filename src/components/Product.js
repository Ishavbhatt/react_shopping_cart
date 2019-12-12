import React from "react";
import data from "../data.json";

export default function Product() {
  return (
    <div className="right-container">
      <div className="rightcontainer-header">
        <small className="product-found">
          <span>16 Product found</span>
        </small>
        <div className="sort">
          Order by
          <select>
            <option value="Select">Select</option>
            <option value="lowestprice">Lowest To Highest</option>
            <option value="highestprice">Highest To Lowest</option>
          </select>
        </div>
      </div>
      {data.products.map(item => {
        return (
          <div className="rightcontainer-item">
            <div className="freeshipping">Free Shipping</div>
            <div className="rightcontainer-itemthumb">
              <img src={`static/products/${item.sku}_1.jpg`} alt="pic" />

              <p className="rightcontainer-itemtitle">{item.title}</p>
              <div className="rightcontainer-itemprice">
                <div className="val">
                  <small>{item.currencyFormat}</small>
                  <b>{item.price}</b>
                  <span>.90</span>
                </div>
                <div className="installment">
                  <span>or {item.installments} x</span>
                  <b>$1.21</b>
                </div>
              </div>
              <div className="rightcontainer-itembutton">Add to cart</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
