import React from 'react';
import './Footer.css';

import { InstagramOutlined, GithubOutlined, CopyrightCircleOutlined } from '@ant-design/icons';

const Footer = ({ contactClickHandler, modalClickHandler }) => {
    const [date, setDate] = React.useState(new Date().getFullYear()); 

    return (
        <footer> 
            <div className="footer-content-container">
                <div className="footer-website-title">
                    <h1>Reezan Visram</h1>
                    <div className="footer-media-container">
                        <a href="https://www.instagram.com/reezanvisram/">
                            <InstagramOutlined color="#D2BD45" />
                        </a>
                        <a href="https://github.com/ReezanVisram">
                            <GithubOutlined color="#D2BD45" /> 
                        </a>
                    </div>
                </div>

                <div className="footer-information-container">
                    <h1>Information</h1>
                    <ul>
                        <li>
                            <p onClick={contactClickHandler}>Contact Me</p>
                        </li>
                        <li>
                            <p onClick={() => modalClickHandler(true, false, 'reezanvisram.com', 'My personal portfolio website.', ["JavaScript (React)", "Python (Flask)"], 'https://github.com/ReezanVisram/PersonalWebsite', 'http://www.reezanvisram.com')}>About reezanvisram.com</p>
                        </li>
                        <li>
                            <p>Sitemap</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-copyright-container">
                <p><CopyrightCircleOutlined color="#D2BD45" /> Reezan Visram {date}</p>
            </div>
        </footer>
    )
}

export default Footer;
