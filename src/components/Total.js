import React from "react";

export default function Total(props) {
  if (props.cart.length) {
    var total = props.cart
      .map(e => e.price * e.quantity)
      .reduce((acc, price) => acc + price);
    return (
      <div class="totalamount">
        <div class="subtotal">SUBTOTAL</div>
        <p class="sub-price-val">{`$ ${String(total).slice(0, 6)}`}</p>
      </div>
    );
  }
}
