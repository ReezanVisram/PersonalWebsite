import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header-container">
                <h3 className="about-header">About Me</h3>
            </div>

            <div className="about-content-container">
                <p>Hi I'm</p>
                <h1>Reezan Visram</h1>
                <img src={ require('../../images/Me.jpg') } />
            </div>
        </div>

    )
}

export default About;