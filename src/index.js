import React from "react";
import { render } from "react-dom";

import data from "./data.json";
import Product from "./components/Product";
import ProductHeader from "./components/ProductHeader";
import Leftsection from "./components/Leftsection.js";

import "./styles/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortby: [...data.products],
      active: "default",
      filterdata: []
    };
  }

  // Handle sort function
  handlesort = () => {
    return this.state.sortby.sort((val1, val2) => {
      return val2.price - val1.price;
    });
  };

  handlechangesort = event => {
    this.setState({ active: event.target.value });
    this.handleSortViews();
  };

  // Handle filter function
  filterdata = size => {
    let filteredarr = this.state.sortby.filter(item =>
      item.availableSizes.some(filtered => filtered === size)
    );
    this.setState({
      filterdata: this.state.filterdata.concat(filteredarr),
      active: "filtered"
    });
  };

  handleSortViews = () => {
    switch (this.state.active) {
      case "default":
        this.setState({ sortby: [...data.products] });
        break;

      case "lowtohigh":
        this.setState({ sortby: this.handlesort() });
        break;

      case "hightolow":
        this.setState({ sortby: this.handlesort().reverse() });
        break;

      case "filtered":
        this.setState({ sortby: this.filterdata() });
        break;

      default:
        this.setState({ sortby: [...data.products] });
    }
  };

  render() {
    return (
      <>
        <main className="main">
          <Leftsection filtereddata={this.filterdata} />

          <div className="right-container">
            <ProductHeader handlechangesort={this.handlechangesort} />
            {/* 
            <div className="rightcontainer-item">
              {this.state.filterdata.length
                ? this.state.filterdata.map(item => <Product {...item} />)
                : this.state.sortby.map(item2 => <Product {...item2} />)}
            </div> */}

            {/* <div className="maincontainer"> */}
            {this.state.sortby.map(item => (
              <Product {...item} />
            ))}
            {/* </div> */}
          </div>
        </main>
        {/* <div className="cart-bag">
        <div className="cartbag-crossbutton">x</div>
        <div className="cartbag-content">
          <div className="cartbag-header">
          <span className="icon">

          </span>
          </div>
        </div>
      </div> */}
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
