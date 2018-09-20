import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductList from './ProductList';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <ProductList />
      </div>
    )
  }
}

export default App;