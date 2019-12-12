import React from "react";

const ProductHeader = props => {
  return (
    <div className="rightcontainer-header">
      <small className="product-found">
        <span>16 Product(s) Found</span>
      </small>
      <div className="sort">
        Order by
        <select class="select-input" onChange={props.handlechangesort}>
          <option selected disabled>
            Select
          </option>
          <option value="lowtohigh">Lowest To Highest</option>
          <option value="hightolow">Highest To Lowest</option>
        </select>
      </div>
    </div>
  );
};
export default ProductHeader;
