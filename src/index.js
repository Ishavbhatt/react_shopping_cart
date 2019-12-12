import React from "react";
import { render } from "react-dom";

import data from "./data.json";
import Product from "./components/Product";

import "./styles/main.css";

export default function App() {
  return (
    <main className="main">
      <div className="filters">
        <h3 className="sizes-heading">Sizes:</h3>
        <div className="available-sizes">
          <label>
            <input className="checkbox-input" type="checkbox" value="XS" />
            <span className="checkmark-span">XS</span>
          </label>
        </div>
        <div className="available-sizes">
          <label>
            <input className="checkbox-input" type="checkbox" value="S" />
            <span className="checkmark-span">S</span>
          </label>
        </div>
        <div className="available-sizes">
          <label>
            <input className="checkbox-input" type="checkbox" value="M" />
            <span className="checkmark-span">M</span>
          </label>
        </div>
        <div className="available-sizes">
          <label>
            <input className="checkbox-input" type="checkbox" value="ML" />
            <span className="checkmark-span">ML</span>
          </label>
        </div>
        <div className="available-sizes">
          <label>
            <input className="checkbox-input" type="checkbox" value="L" />
            <span className="checkmark-span">L</span>
          </label>
        </div>
        <div className="available-sizes">
          <label>
            <input className="checkbox-input" type="checkbox" value="XL" />
            <span className="checkmark-span">XL</span>
          </label>
        </div>
        <div className="available-sizes">
          <label>
            <input className="checkbox-input" type="checkbox" value="XXL" />
            <span className="checkmark-span">XXL</span>
          </label>
        </div>
      </div>
      <Product />
    </main>
  );
}

render(<App />, document.getElementById("root"));
