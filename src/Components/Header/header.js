import React from "react";
import './header.css';
import headerlogo from '../../img/logo.png';

function Header() {
  return (
    <div className="Header">
        <div className="wrapper">
            <div className="linkBox">
                <a href="https://www.shiply.com/" target="_blank" rel="noreferrer" className="logoBox"><img src={headerlogo} alt="Logo" /></a>
                <a className="how" target="_blank" rel="noreferrer" href="https://www.shiply.com/how-it-works">How it Works</a>
            </div>
        </div>
    </div>
  );
}

export default Header;
