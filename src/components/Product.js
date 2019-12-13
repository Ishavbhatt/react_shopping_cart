import React from "react";

const Product = props => {
  return (
    <>
      <div className="rightcontainer-item">
        <div>
          {props.isFreeShipping ? (
            <span className="freeshipping">Free shipping</span>
          ) : (
            ""
          )}
        </div>

        <div className="rightcontainer-itemthumb">
          <img src={`static/products/${props.sku}_1.jpg`} alt="pic" />

          <p className="rightcontainer-itemtitle">{props.title}</p>
          <hr className="hr-line"></hr>

          <div className="rightcontainer-itemprice">
            <div className="val">
              <small>{props.currencyFormat}</small>
              <b className="bold">{props.price}</b>
              <span>.90</span>
            </div>
            <div className="installment">
              <span>or {props.installments} x</span>
              <b>$1.21</b>
            </div>
          </div>
          <div
            className="rightcontainer-itembutton"
            onClick={() => props.addcart(props)}
          >
            Add to cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
