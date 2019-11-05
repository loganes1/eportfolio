import React from 'react';
import './App.css';
import Nav from "./Nav/Nav";
import Hamburger from './Nav/Hamburger';

function App() {
  return (
    <div className="app">
      <Hamburger />
      <Nav />
    </div>
  );
}

export default App;
