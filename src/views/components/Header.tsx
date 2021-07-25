import React from "react";
import '../styles/Header.css';
import logo from '../assets/logo.svg';


function Header() {
    return (
        <div className="header">
            <div className="header-content">
                <img className="app-logo" src={logo} alt="logo"/>
                <h4>Notex</h4>
            </div>

        </div>
    );
}

export default Header;