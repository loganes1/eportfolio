import React from 'react';
import "./Circle.css";

export default class Circle extends React.Component {
    // To change the circle Percentage, adjust the first number for the stroke-dasharray
    render() {
        return <section className="circle-container">
            <svg viewBox="0 0 36 36" className="circle">
                    <path className="circle-foreground" strokeDasharray="65, 100" d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                
                <p className="percentage">{this.props.percentage}%</p>
                <p className="description">{this.props.description}</p>
        </section>
    }
}