import React from "react";
import { Link } from "react-router-dom";
import House from "./Icon/Home";
import "./Nav.css";
import Lightbulb from "./Icon/Lightblub";
import Project from "./Icon/Projects";
import Briefcase from "./Icon/Briefcase";
import pdf from "./../resume.pdf";

export default class Nav extends React.Component {    
    render() {
        return <nav id="nav" className="container">
            <div className="top-margin"></div>
            <div className="content">
                <div onClick={this.props.onClick}>
                    <Link to="/"><House /></Link>
                    <Link to="/skills"><Lightbulb /></Link>
                    <Link to="/projects"><Project /></Link>
                    <Link to="/work-experience"><Briefcase /></Link>
                </div>
                <div className="vertical" onClick={this.props.onClick}>
                    <a className="icon" href={pdf}>Resum‌‌&#233;</a>
                </div>
            </div>
        </nav>
    }
}