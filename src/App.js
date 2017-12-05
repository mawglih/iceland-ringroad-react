import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
