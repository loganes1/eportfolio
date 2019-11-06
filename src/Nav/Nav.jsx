import React from "react";
import { Link } from "react-router-dom";
import House from "./Icon/Home";
import "./Nav.css";
import Lightbulb from "./Icon/Lightblub";
import Project from "./Icon/Projects";

export default class Nav extends React.Component {
    toggleIsActive() {
        const hamburger = document.getElementById("hamburger");
        hamburger.classList.toggle("is-active");
        // show/hide the menu
        const nav = document.getElementById("nav");
        nav.classList.toggle("open");
    }

    render() {
        return <nav id="nav" className="container">
            <div className="top-margin"></div>
            <div className="content">
                <div onClick={this.toggleIsActive}>
                    <Link to="/"><House /></Link>
                    <Link to="/skills"><Lightbulb /></Link>
                    <Link to="/projects"><Project /></Link>
                </div>
                <div className="vertical">
                    <p>Resum‌‌&#233;</p>
                </div>
            </div>
        </nav>
    }
}