import React from 'react';
import './SideDrawer.css';

const SideDrawer = ({ click, show }) => {

    let drawerClasses = 'side-drawer';

    if (show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>

            <h1><a className="side-drawer-header" href="#">Reezan Visram</a></h1>

            <ul>
                
                <li><a href='#' onClick={click}>About Me</a></li>
                <li><a href='#' onClick={click}>Projects</a></li>
                <li><a href='#' onClick={click}>Experience</a></li>
                <li><a href='#' onClick={click}>Reference Letters</a></li>
                <li><a href='#' onClick={click}>Resume</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer;