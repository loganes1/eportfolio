import React from "react";
import { Link } from "react-router-dom";
import Home from "./Icon/Home";
import "./Nav.css";

export default class Nav extends React.Component {
    render() {
        return <nav id="nav">
            <div className="top-margin"></div>
            <div className="content">
                <div>
                    <Link to="/home"><Home /></Link>
                </div>
                <div className="vertical">
                    <p>Resum‌‌&#233;</p>
                </div>
            </div>
        </nav>
    }
}