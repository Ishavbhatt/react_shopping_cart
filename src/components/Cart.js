import React from "react";
import data from "../data.json";

const Cart = props => {
  return (
    <div className="cart-bag">
      <div onClick={props.handleCheckoutPage} className="cartbag-crossbutton">
        x
      </div>
      <div className="cartbag-content">
        <div className="cartbag-header">
          <span>
            <img className="bag-icon" src="static/bag-icon.png" alt="cart" />
            <span className="bag-quantity">{props.cart.length}</span>
          </span>
          <span className="header-title">Cart</span>
        </div>
        <div className="cartbag-container">
          {props.cart.map(item => (
            <div className="cartbag-item">
              <div className="cartbag-centeritem">
                <div className="cartbag-img">
                  <img
                    className="cart-itemimg"
                    src={`static/products/${item.sku}_2.jpg`}
                    alt=""
                  />
                </div>
                <div className="cartitemdetail">
                  <h4 className="cartitem-title">{item.title}</h4>
                  <h4 className="cartitem-style">{item.style}</h4>
                  <h4 className="cartitem-quantity">Quantity</h4>
                </div>
              </div>
              <div className="cart-rightdata">
                <p className="cart-itemdelete">✗</p>
                <p className="cart-itemprice">$ {item.price}</p>
                <div>
                  <button className="cartitem-dec">-</button>
                  <button className="cartitem-inc">+</button>
                </div>
              </div>
              <button>checkout</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
