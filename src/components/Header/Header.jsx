import React from 'react';

import planeLogo from '../../plane_logo.png';
import './Header.css';

const Header =({ title }) => {
    return(
    <div className="header-wrapper">
        <header className="main-header">
            <img src={planeLogo} className="main-logo" alt="logo" />
            <h1 className="main-title">Flight Schedule</h1>
        </header>
        <div className="main-content">
            <div className="main-title">
                <h2>{title}</h2>
            </div>
        </div>
    </div>

    )
}

export default Header;