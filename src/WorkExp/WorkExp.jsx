import React from 'react'
import "./WorkExp.css"

export default class WorkExp extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        // Company Name
        // Date at Company
        // Position in company
        // Date of position
        // Job highlights

        return <section>
            <div className="company">
                <h2>Brigham Young University - Idaho</h2>
                <h3>Senior Reports Analyst</h3>
                <div className="indent-20px">
                <label>August 2019 - Present</label>
                <ul>
                    <li>Created an email interface that improved process and quality of emails for support center agents</li>
                    <li>Wrote documentation for multiple web applications</li>
                </ul>
                </div>
                <h3>Reports Analyst</h3>
                <div className="indent-20px">
                <label>August 2018 - August 2019</label>
                <ul>
                    <li>Updated Excel spreadsheets with updated logic for macros</li>
                    <li>Administered data to other departments on campus</li>
                </ul>
                </div>
                <h3>Project Manager</h3>
                <div className="indent-20px">
                <label>January 2019 - April 2019</label>
                <ul>
                    <li>Coordinated large and small projects to gather data</li>
                    <li>Advanced the Quality Assurance process by developing and maintaining a web application</li>
                    <li>Directed a small team of specialists in uploading data, building reports, and revitalizing procedures</li>
                </ul>
                </div>
            </div>
        </section>
    }
}