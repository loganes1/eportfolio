import React from "react";
import "./Hamburger.css";

export default class Hamburger extends React.Component {
    toggleIsActive() {
        const hamburger = document.getElementById("hamburger");
        hamburger.classList.toggle("is-active");
        // show/hide the menu
        const nav = document.getElementById("nav");
        nav.classList.toggle("open");
    }

    render() {
        return <button id="hamburger" className="hamburger hamburger--slider-r" type="button" onClick={this.toggleIsActive}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    }
}