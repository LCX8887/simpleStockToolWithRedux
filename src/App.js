import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { StockList, StockDetails } from './views/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StockList />
        <StockDetails />
                
      </div>
    );
  }
}

export default App;
