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
          <option value="default">Select</option>
          <option value="lowtohigh">Highest To Lowest</option>
          <option value="hightolow">Lowest To Highest</option>
        </select>
      </div>
    </div>
  );
};
export default ProductHeader;
