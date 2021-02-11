import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

const Header = ({ active }) => {
    return (
        <div className="header">
            <h1>INÉE ADER</h1>
            {/* <img className="header__icon" src='https://img.icons8.com/dotty/2x/ffffff/crow.png' alt='white raven head' /> */}
            <ul>
                <Link to="/">
                    <li className={active === 'main' ? 'header__main--active' : null} >Main</li>
                </Link>

                <Link to="/about">
                    <li className={active === 'about' ? 'header__about--active' : null} >About</li>
                </Link>

                <Link to="/other">
                    <li className={active === 'other' ? 'header__other--active' : null} >Other</li>
                </Link>
            </ul>
        </div>
    );
}

export default Header;