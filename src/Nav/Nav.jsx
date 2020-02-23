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
            <div className="content" onClick={this.props.onClick}>
                <Link to="/">
                    <House />
                    <p>Home</p>
                </Link>
                <Link to="/projects">
                    <Project />
                    <p>Projects</p>
                </Link>
                <Link to="/skills">
                    <Lightbulb />
                    <p>Skills</p>
                </Link>
                <Link to="/work-experience">
                    <Briefcase />
                    <p>Work</p>
                </Link>
            </div>
            <div className="vertical" onClick={this.props.onClick}>
                <a className="icon" href={pdf}>Resum‌‌&#233;</a>
            </div>
        </nav>
    }
}