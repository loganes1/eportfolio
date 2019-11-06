import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Nav from "./Nav/Nav";
import Hamburger from './Nav/Hamburger';
import Home from "./Home/Home";
import Lightbulb from "./Nav/Icon/Lightblub";

export default function App() {
  return (
    <Router>
      <Hamburger />
      <Nav onClick={Hamburger.toggleIsActive} />

      <main className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/skills">
            <Lightbulb />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}