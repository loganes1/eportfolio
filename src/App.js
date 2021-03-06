import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Nav from "./Nav/Nav";
import Hamburger from './Nav/Hamburger';
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import WorkExp from "./WorkExp/WorkExp";

export default class App extends React.Component {
  toggleNavIsActive() {
    // toggle from a hamburger to an 'X'
    const hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("is-active");
    // show/hide the menu
    const nav = document.getElementById("nav");
    nav.classList.toggle("open");
    const main = document.querySelector(".app");
    main.classList.toggle("open");
  }

  render() {
    return <Router>
      <Hamburger onClick={this.toggleNavIsActive} />
      <Nav onClick={this.toggleNavIsActive} />

      <main className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
          </Route>
          <Route path="/work-experience">
            <WorkExp />
          </Route>
        </Switch>
      </main>
    </Router>
  }
}