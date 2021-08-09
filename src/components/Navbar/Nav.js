import React from "react";
import pemantLogo from "../../assets/images/PemantLogo.png";

const Nav = () => {
  return (
    <div className="navigation">
      <div className="navigation_background">
        <nav className="navigation_nav">
          <div className="navigation_nav_logo">
            <img className="logo" src={pemantLogo} alt="PEMANT" />
          </div>
          <ul className="navigation_items">
            <li className="navigation_item">
              <a href="/">Home</a>
            </li>
            <li className="navigation_item">
              <a href="/faq">FAQ</a>
            </li>
            <li className="navigation_item disabled_button">
              <a href="/">Repay</a>
            </li>
            <li className="navigation_item disabled_button">
              <a href="/">Download App</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Nav;
