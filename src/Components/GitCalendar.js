import React, { Component } from 'react';
import loadCall from '../Scripts/GitScript';
import './GitCalendar.css';

class GitCalendar extends Component {
    render() {
        return (
            <div className="Content-Container Content-Border">
                <div className="ContentTitleBlack">
                    My GitHub Activity
                </div>
                <div className="calendar">
                    Loading Data
                </div>
            </div>
        );
    }

    componentDidMount () {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js";
        script.async = true;

        const link = document.createElement("link");
        link.rel = "stylesheet"
        link.href = "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
    
        document.body.appendChild(script);
        document.body.appendChild(link);
        loadCall();
    }
    
}

export default GitCalendar;

