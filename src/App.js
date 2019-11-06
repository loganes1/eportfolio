import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Nav from "./Nav/Nav";
import Hamburger from './Nav/Hamburger';
import Home from "./Nav/Icon/Home";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Hamburger />
        <Nav />

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}