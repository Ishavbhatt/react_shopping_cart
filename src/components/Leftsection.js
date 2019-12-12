import React from "react";

const Leftsection = props => {
  return (
    <div className="filters">
      <h3 className="sizes-heading">Sizes:</h3>
      <div className="available-sizes">
        <label>
          <input
            className="checkbox-input"
            type="checkbox"
            value="XS"
            onClick={() => props.filtereddata("XS")}
          />
          <span className="checkmark-span">XS</span>
        </label>
      </div>
      <div className="available-sizes">
        <label>
          <input
            className="checkbox-input"
            type="checkbox"
            value="S"
            onClick={() => props.filtereddata("S")}
          />
          <span className="checkmark-span">S</span>
        </label>
      </div>
      <div className="available-sizes">
        <label>
          <input
            className="checkbox-input"
            type="checkbox"
            value="M"
            onClick={() => props.filtereddata("M")}
          />
          <span className="checkmark-span">M</span>
        </label>
      </div>
      <div className="available-sizes">
        <label>
          <input
            className="checkbox-input"
            type="checkbox"
            value="ML"
            onClick={() => props.filtereddata("ML")}
          />
          <span className="checkmark-span">ML</span>
        </label>
      </div>
      <div className="available-sizes">
        <label>
          <input
            className="checkbox-input"
            type="checkbox"
            value="L"
            onClick={() => props.filtereddata("L")}
          />
          <span className="checkmark-span">L</span>
        </label>
      </div>
      <div className="available-sizes">
        <label>
          <input
            className="checkbox-input"
            type="checkbox"
            value="XL"
            onClick={() => props.filtereddata("XL")}
          />
          <span className="checkmark-span">XL</span>
        </label>
      </div>
      <div className="available-sizes">
        <label>
          <input
            className="checkbox-input"
            type="checkbox"
            value="XXL"
            onClick={() => props.filtereddata("XXL")}
          />
          <span className="checkmark-span">XXL</span>
        </label>
      </div>
      <div className="starbutton-container">
        <small className="starheading">
          Leave a star on Github if this repository was useful :)
        </small>
        <div className="starbutton-anchor">
          <button className="starbutton"> Star</button>
          <button className="no.ofstars">
            <a href="">1,011</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leftsection;
