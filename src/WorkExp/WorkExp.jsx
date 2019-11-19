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
                <h2>Company Name</h2>
                <p className="right-align">Date Range at Company</p>
                <h3>Position</h3>
                <p className="right-align">Date Range in position</p>
                <p>Job highlights</p>
            </div>
        </section>
    }
}