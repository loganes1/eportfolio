import React from "react";
import "./Skills.css";
import Technology from "./Technology/Technology";

export default class Skills extends React.Component {
    render() {
        return <section>
            <h2>Languages</h2>
            <section className="technologies">
                <Technology imgPath={require("./logos/html5.svg")} alt="HTML" label="HTML" />
                <Technology imgPath={require("./logos/css3.svg")} alt="CSS3" label="CSS3" />
                <Technology imgPath={require("./logos/js.svg")} alt="JavaScript" label="JavaScript" />
                <Technology imgPath={require("./logos/react.svg")} alt="React" label="React" />
                <Technology imgPath={require("./logos/nodejs.svg")} alt="Node.js" label="Node.js" />
                <Technology imgPath={require("./logos/momentjs.svg")} alt="Moment.js" label="Moment.js" />
                <Technology imgPath={require("./logos/jquery.svg")} alt="jQuery" label="jQuery" />
                <Technology imgPath={require("./logos/c++.svg")} alt="C++" label="C++" />
                <Technology imgPath={require("./logos/csharp.svg")} alt="C#" label="C#" />
                <Technology imgPath={require("./logos/dot-net.svg")} alt=".NET" label=".NET" />
                <Technology imgPath={require("./logos/vba.svg")} alt="VBA" label="VBA" />
                <Technology imgPath={require("./logos/php.svg")} alt="PHP" label="PHP" />
                <Technology imgPath={require("./logos/psql.svg")} alt="PostgresSQL" label="PostgresSQL" />
                <Technology imgPath={require("./logos/git.svg")} alt="Git" label="Git" />
            </section>
            <h2>Software</h2>
        </section>
    }
}