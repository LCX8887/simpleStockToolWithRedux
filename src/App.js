import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { StockList, StockDetails, StockNews, StockRecentTrend } from './views/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StockList />
                
      </div>
    );
  }
}

export default App;
