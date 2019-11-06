import React from "react";
import "./Home.css";

export default class Home extends React.Component {
    render() {
        return <section>
            <h1>Logan</h1>
            <div className="education">
                <h2>Education</h2>
                <p>Brigham Young University - Idaho</p>
                <p>Software Engineering</p>
                <p>Graphic Design</p>
                <p>3.47</p>
            </div>
        </section>
    }
}