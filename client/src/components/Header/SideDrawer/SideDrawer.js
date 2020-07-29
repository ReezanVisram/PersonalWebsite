import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './SideDrawer.css';
import resume from '../../Resume.pdf';
import referenceLetter from '../../ReferenceLetter.pdf';

const SideDrawer = ({ click, show }) => {

    let drawerClasses = 'side-drawer';

    if (show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <h1><AnchorLink className="side-drawer-header" href="#about" onClick={click}>Reezan Visram</AnchorLink></h1>

            <ul>
                
                <li><AnchorLink href='#about' onClick={click}>About Me</AnchorLink></li>
                <li><AnchorLink href='#projects' onClick={click}>Projects</AnchorLink></li>
                <li><AnchorLink href='#experience' onClick={click}>Experience</AnchorLink></li>
                <li><AnchorLink href='#awards' onClick={click}>Awards</AnchorLink></li>
                <li><a href={referenceLetter} onClick={click}>Reference Letters</a></li>
                <li><a href={resume} onClick={click}>Resume</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer;