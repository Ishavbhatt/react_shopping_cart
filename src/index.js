import React from "react";
import { render } from "react-dom";

import data from "./data.json";
import Product from "./components/Product";
import ProductHeader from "./components/ProductHeader";
import Leftsection from "./components/Leftsection.js";
import Corner from "./components/Corner";

import Cart from "./components/Cart.js";

import "./styles/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortby: [],
      active: "default",
      isopen: false,
      filterdata: [],
      cart: [],
      Product: [...data.products],
      test: null
    };
  }

  handlechangesort = event => {
    console.log(event.target.value);
    this.setState({ active: event.target.value });
    this.handleSortViews();
  };

  // Delete a item
  handleItemDelete = item => {
    let delitem = Object.assign([], this.state.cart);
    delitem.splice(item, 1);
    this.setState({ cart: delitem });
  };

  // // Item Increment
  handleIncrement = item => {
    const inc = this.state.cart.find(product => product.id == item.id);
    if (inc) {
      this.state.cart.forEach(product => {
        if (product.id === item.id) {
          product.quantity += 1;
          this.setState({
            test: "state updated"
          });
        }
      });
    }
  };
  handleDecrement = item => {
    const inc = this.state.cart.find(product => product.id == item.id);
    if (inc) {
      this.state.cart.forEach(product => {
        if (product.id === item.id) {
          if (product.quantity > 1) {
            product.quantity -= 1;
            this.setState({
              test: "state updated"
            });
          }
        }
      });
    }
  };

  // Handle sort function
  sortlowtohigh = () => {
    let sort = [...this.state.Product].sort((val1, val2) => {
      console.log(val1.price - val2.price);

      return val1.price - val2.price;
    });
    return sort;
  };
  sorthightolow = () => {
    let sort = [...this.state.Product].sort((val1, val2) => {
      return val2.price - val1.price;
    });
    return sort;
  };

  // Handle filter function
  filter = () => {
    let data = this.state.Product;
    return data.filter(item => {
      return this.state.sortby.some(size => item.availableSizes.includes(size));
    });
  };

  filterdata = size => {
    if (!this.state.Product.includes(size)) {
      this.setState({ sortby: [...this.state.sortby, size] });
    } else {
      this.setState({
        sortby: this.state.Product.filter(item => item !== size)
      });
    }
  };

  addcart = item => {
    if (this.state.cart.length) {
      var itemQuantIncresed = false;
      let cartClone = this.state.cart;

      cartClone.forEach(product => {
        if (product.id === item.id) {
          product.quantity++;
          itemQuantIncresed = true;
        }
      });

      if (!itemQuantIncresed) {
        cartClone.push({ ...item, quantity: 1 });
      }

      this.setState({ cart: cartClone });
    } else {
      this.setState({ cart: [{ ...item, quantity: 1 }] });
    }
  };

  // Sub Total
  subTotal = () => {
    this.state.cart.reduce((acc, item) => acc + item.price, 0);
  };

  handleCheckoutPage = () => {
    this.setState({
      active: "Product",
      isopen: false
    });
  };

  // Handle checkout button
  checkout = () => {
    alert("ordered successfully");
  };

  manageCart = () => {
    this.setState({ active: "cart" });
  };

  handleview = () => {};
  changeopen = () => {
    this.setState({ isopen: !this.state.isopen });
  };

  handleSortViews = () => {
    console.log(this.state.active);
    switch (this.state.active) {
      case "default":
        this.setState({ Product: [...data.products] });
        break;

      case "lowtohigh":
        this.setState({ Product: this.sortlowtohigh() });
        break;

      case "hightolow":
        this.setState({ Product: this.sorthightolow() });
        break;

      case "filtered":
        this.setState({ Product: this.filterdata() });
        break;

      default:
        this.setState({ Product: [...data.products] });
    }
  };

  render() {
    let dataToFilter = this.state.sortby.length
      ? this.filter()
      : this.state.Product;
    return (
      <>
        <div className="gitandicon">
          <Corner />
          <span onClick={this.changeopen} className="quantities">
            <img
              className="cartimg"
              src="static/bag-icon.png"
              alt="cart-icon"
            ></img>
            <span className="quantities-content">{this.state.cart.length}</span>
          </span>
          {this.state.isopen ? (
            <Cart
              handleItemDelete={this.handleItemDelete}
              checkout={this.checkout}
              cart={this.state.cart}
              handleCheckoutPage={this.handleCheckoutPage}
              handleIncrement={this.handleIncrement}
              handleDecrement={this.handleDecrement}
            />
          ) : (
            ""
          )}
        </div>
        <main className="main">
          <Leftsection filtereddata={this.filterdata} />

          <div className="right-container">
            <ProductHeader
              handlechangesort={this.handlechangesort}
              data={this.state.sortby}
            />
            {dataToFilter.map(item => (
              <Product item={item} addcart={this.addcart} />
            ))}
          </div>
        </main>
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
