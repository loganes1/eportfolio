import React from "react";
import Home from "./Icon/Home";
import "./Nav.css"

export default class Nav extends React.Component {
    render() {
        return <nav id="nav">
            <div className="top-margin"></div>
            <div className="content">
                <div>
                    <Home />
                    <Home />
                    <Home />
                    <Home />
                    <Home />
                </div>
                <div className="vertical">
                    <p>Resum‌‌&#233;</p>
                </div>
            </div>
        </nav>
    }
}