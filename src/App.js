import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Products from "./components/products";
import ProductDetails from "./components/ProductDetails";
import CartDetails from "./components/cartDetails";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Redirect exact path='/' to='/products' />
          <Route path='/products' exact component={Products} />
          <Route path='/productdetails' exact component={ProductDetails} />
          <Route path='/cart' exact component={CartDetails} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
