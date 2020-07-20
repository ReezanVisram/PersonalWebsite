import React from 'react';
import './Backdrop.css';

const Backdrop = ({ click }) => {
    return (
        <div className="backdrop" onClick={click} />
    )
}

export default Backdrop;