import React from "react";
import data from "../data.json";

const Cart = props => {
  return (
    <div className="cart-bag">
      <div className="cartbag-crossbutton">x</div>
      <div className="cartbag-content">
        <div className="cartbag-header">
          <span>
            <img className="bag-icon" src="static/bag-icon.png" alt="cart" />
            <span className="bag-quantity">2</span>
          </span>
          <span className="header-title">Cart</span>
        </div>
        <div className="cartbag-container">
          <div className="cartbag-item">
            <div className="cartbag-centeritem">
              <div className="cartbag-img">
                <img
                  className="cart_item_img"
                  src={`static/products/${props.sku}_2.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
