import React from 'react';
import "./Technology.css";

export default class Technology extends React.Component {
    render() {
        return <div className="technology">
            <img src={this.props.imgPath} alt={this.props.alt}/>
            <p>{this.props.label}</p>
        </div>
    }
}