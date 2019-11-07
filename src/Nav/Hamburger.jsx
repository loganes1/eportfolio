import React from "react";
import "./Hamburger.css";

export default class Hamburger extends React.Component {
    render() {
        return <button id="hamburger" className="hamburger hamburger--slider-r" type="button" onClick={this.props.onClick}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    }
}