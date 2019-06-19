import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Category from "./category/Category";
import Cart from "./cart/Cart";
import Product from "./product/Product";
import Header from './shared/containers/Header';

class App extends Component {
  render() {
    return (
      <div className="App">    
        <Header cartCount={0} />
        <Switch>
          <Route exact path="/" component={Category} />
          <Route path="/cart" component={Cart}/>
          <Route path="/product/:id" component={Product}/>
        </Switch>
      </div>
    );
  }
}

export default App;
