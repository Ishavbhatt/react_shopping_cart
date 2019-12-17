import React from "react";
import data from "../data.json";

import "../styles/main.css";
import Total from "./Total";
import { render } from "@testing-library/react";

export default function Cart(props) {
  return (
    <div className="cart-bag">
      <div onClick={props.handleCheckoutPage} className="cartbag-crossbutton">
        x
      </div>
      <div className="cartbag-content">
        <div className="cartbag-header">
          <div>
            <span>
              <img className="bag-icon" src="static/bag-icon.png" alt="cart" />
              <span className="bag-quantity">{props.cart.length}</span>
            </span>
            <span className="header-title">Cart</span>
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
                    <div className="cartitem-detail">
                      <h4 className="cartitem-title">{item.title}</h4>
                      <h4 className="cartitem-style">{item.style}</h4>
                      <h4 className="cartitem-quantity">
                        Quantity: {item.quantity}
                      </h4>
                    </div>
                    <div className="cart-rightdata">
                      <p
                        className="cart-itemdelete"
                        onClick={() => props.handleItemDelete(item)}
                      >
                        ✗
                      </p>
                      <p className="cart-itemprice">$ {item.price}</p>
                      <div>
                        <button
                          className="cartitem-dec"
                          onClick={() => props.handleDecrement(item.id)}
                        >
                          -
                        </button>
                        <button
                          className="cartitem-inc"
                          onClick={() => props.handleIncrement(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {props.cart.length ? (
            <div class="float-cart-footer">
              <Total cart={props.cart} />
              <div className="checkout-button" onClick={props.checkout}>
                CHECKOUT
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

// export default Cart;
