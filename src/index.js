import React from "react";
import { render } from "react-dom";

import data from "./data.json";
import Product from "./components/Product";
import ProductHeader from "./components/ProductHeader";
import Leftsection from "./components/Leftsection.js";
import Cart from "./components/Cart.js";

import "./styles/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortby: [...data.products],
      active: "default",
      filterdata: [],
      cart: []
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
    let filteredarr = this.state.sortby.filter(newarray =>
      newarray.availableSizes.some(filtered => filtered === size)
    );
    this.setState({
      filterdata: this.state.filterdata.concat(filteredarr),
      active: "filtered"
    });
  };

  // Handle Add to cart
  addcart = additem => {
    this.setState({ cart: this.state.cart.concat(additem) });
  };

  handleCheckoutPage = () => {
    this.setState({
      active: "default"
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
            {this.state.filterdata.length
              ? this.state.filterdata.map(newarray => <Product {...newarray} />)
              : this.state.sortby.map(item => (
                  <Product {...item} addcart={this.addcart} />
                ))}
          </div>
        </main>
        <Cart
          cart={this.state.cart}
          handleCheckoutPage={this.handleCheckoutPage}
        />
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
