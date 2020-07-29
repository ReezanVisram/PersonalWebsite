import React from 'react';
import './About.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { DownOutlined } from '@ant-design/icons';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header-container">
                <h3 className="about-header">About Me</h3>
            </div>

            <div className="about-content-container">
                <p>Hi I'm</p>
                <h1>Reezan Visram</h1>
                <img src={ require('../../images/Me.jpg') } alt={"Me (Reezan Visram)"} />

                <h2>Below are some of my software projects</h2>
                <AnchorLink href="#projects">
                    <DownOutlined className="down-arrow-1" />
                </AnchorLink>

            </div>
        </div>

    )
}

export default About;