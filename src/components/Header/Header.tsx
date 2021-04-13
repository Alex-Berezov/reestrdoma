import React from 'react';
import logo from '../../logo.svg';

import './header.scss';

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <img src={logo} alt="logo" />
                <p>Some header information</p>
            </div>
        </header>
    );
}

export default Header;