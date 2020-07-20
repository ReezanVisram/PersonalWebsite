import React from 'react';
import './Header.css';
import Pdf from '../Resume.pdf';

import DrawerToggleButton from './DrawerToggleButton/DrawerToggleButton';

const Header = ({ drawerClickHandler }) => {
    return (
        <header className="App-header">
            <div className="header-title-container">
                <h1 className="header-title"><a className="header-title-link" href="#">Reezan Visram</a></h1>
            </div>
            
            <div className="header-links-container">
                <a className="header-link" href="#">About Me</a>
                <a className="header-link" href="#">Projects</a>
                <a className="header-link" href="#">Experience</a>
                <a className="header-link" href="#">Reference Letters</a>
                <a className="header-button" href={Pdf}>Resume</a>
            </div>

            <div className="header-side-drawer-toggle-button-container">
                <DrawerToggleButton click={drawerClickHandler} />
            </div>
        </header>
    )
}

export default Header;