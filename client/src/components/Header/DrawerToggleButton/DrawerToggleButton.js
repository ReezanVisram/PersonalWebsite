import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = () => {
    return (
        <button className="toggle-button">
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
        </button>
    )
}

export default DrawerToggleButton;