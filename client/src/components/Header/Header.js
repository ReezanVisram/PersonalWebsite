import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Header.css';
import resume from '../Resume.pdf';
import referenceLetter from '../ReferenceLetter.pdf';

import DrawerToggleButton from './DrawerToggleButton/DrawerToggleButton';

const Header = ({ drawerClickHandler }) => {
    return (
        <header className="App-header">
            <div className="header-title-container">
                <h1 className="header-title"><AnchorLink className="header-title-link" href="#about">Reezan Visram</AnchorLink></h1>
            </div>
            
            <div className="header-links-container">
                <AnchorLink className="header-link" href="#about">About Me</AnchorLink>
                <AnchorLink className="header-link" href="#projects">Projects</AnchorLink>
                <AnchorLink className="header-link" href="#experience">Experience</AnchorLink>
                <AnchorLink className="header-link" href="#awards">Awards</AnchorLink>
                <a className="header-link" href={referenceLetter}>Reference Letters</a>
                <a className="header-button" href={resume}>Resume</a>
            </div>

            <div className="header-side-drawer-toggle-button-container">
                <DrawerToggleButton click={drawerClickHandler} />
            </div>
        </header>
    )
}

export default Header;