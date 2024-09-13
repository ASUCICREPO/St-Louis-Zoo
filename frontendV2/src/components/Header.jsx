import React from 'react';
import logoImage from "../assets/logo.png";
import "../index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Saint Louis Zoo" />
        {/* <span>Saint Louis Zoo</span> */}
      </div>
      <nav>
        <ul>
          <li className="active">Home</li>
          <li>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
