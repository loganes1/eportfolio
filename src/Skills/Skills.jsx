import React from "react";
import "./Skills.css";
import Technology from "./Technology/Technology";
import Circle from "./Circle/Circle";

export default class Skills extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return <section className="skills">
            <h2>Languages</h2>
            <section>
                <Technology imgPath={require("./logos/html5.svg")} alt="HTML5" label="HTML5" />
                <Technology imgPath={require("./logos/css3.svg")} alt="CSS3" label="CSS3" />
                <Technology imgPath={require("./logos/js.svg")} alt="JavaScript" label="JavaScript" />
                <Technology imgPath={require("./logos/c++.svg")} alt="C++" label="C++" />
                <Technology imgPath={require("./logos/csharp.svg")} alt="C#" label="C#" />
                <Technology imgPath={require("./logos/vba.svg")} alt="VBA" label="VBA" />
                <Technology imgPath={require("./logos/php.svg")} alt="PHP" label="PHP" />
                <Technology imgPath={require("./logos/psql.svg")} alt="PostgresSQL" label="PostgresSQL" />
                <Technology imgPath={require("./logos/git.svg")} alt="Git" label="Git" />
            </section>
            <h2>Frameworks</h2>
            <section>
                <Technology imgPath={require("./logos/react.svg")} alt="React" label="React" />
                <Technology imgPath={require("./logos/nodejs.svg")} alt="Node.js" label="Node.js" />
                <Technology imgPath={require("./logos/momentjs.svg")} alt="Moment.js" label="Moment.js" />
                <Technology imgPath={require("./logos/jquery.svg")} alt="jQuery" label="jQuery" />
                <Technology imgPath={require("./logos/dot-net.svg")} alt=".NET" label=".NET" />
            </section>
            <h2>Software</h2>
            <section>
                <Technology imgPath={require("./logos/github.svg")} alt="Github" label="Github" />
                <Technology imgPath={require("./logos/visual-studio.svg")} alt="Visual Studio" label="Visual Studio" />
                <Technology imgPath={require("./logos/vs-code.svg")} alt="VS Code" label="VS Code" />
                <Technology imgPath={require("./logos/ms-word.svg")} alt="Word" label="Word" />
                <Technology imgPath={require("./logos/ms-excel.svg")} alt="Excel" label="Excel" />
                <Technology imgPath={require("./logos/ms-powerpoint.svg")} alt="Powerpoint" label="Powerpoint" />
                <Technology imgPath={require("./logos/ms-teams.svg")} alt="Teams" label="Teams" />
                <Technology imgPath={require("./logos/teamdynamix.svg")} alt="TeamDynamix" label="TeamDynamix" />
            </section>
            <h2>Practice</h2>
            <section className="practice">
                <Circle percentage="75" description="Front-End" />
                <Circle percentage="50" description="Back-End" />
                <Circle percentage="65" description="Functional" />
                <Circle percentage="80" description="Object-Oriented" />
            </section>
        </section>
    }
}