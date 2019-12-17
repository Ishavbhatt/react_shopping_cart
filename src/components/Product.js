import React from "react";

const Product = props => {
  let item = props.item;
  return (
    <>
      <div className="rightcontainer-item">
        <div>
          {item.isFreeShipping ? (
            <span className="freeshipping">Free shipping</span>
          ) : (
            ""
          )}
        </div>

        <div className="rightcontainer-itemthumb">
          <img src={`static/products/${item.sku}_1.jpg`} alt="pic" />

          <p className="rightcontainer-itemtitle">{item.title}</p>
          <hr className="hr-line"></hr>

          <div className="rightcontainer-itemprice">
            <div className="val">
              <small>{item.currencyFormat}</small>
              <b className="bold">{item.price}</b>
              <span>.90</span>
            </div>
            <div className="installment">
              <span>or {item.installments} x</span>
              <b>$1.21</b>
            </div>
          </div>
          <div
            className="rightcontainer-itembutton"
            onClick={() => props.addcart(item)}
          >
            Add to cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
