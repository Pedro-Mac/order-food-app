import React, { useState } from "react";
import Hamburger from "../Hamburger";
import logo from "../../images/svg/logo.svg";
import "./style.scss";

const Navbar: React.FC = () => {
  const [hamburgerIsActive, setHamburgerIsActive] = useState("");
  const [navMenuIsActive, setNavMenuIsActive] = useState("");

  const handleMenuToggle = () => {
    hamburgerIsActive
      ? setHamburgerIsActive("")
      : setHamburgerIsActive("is-active");
    navMenuIsActive
      ? setNavMenuIsActive("")
      : setNavMenuIsActive("menu-active");
  };

  return (
    <nav className="d-flex justify-content-between align-items-center pt-4 pb-2 px-3">
      <img src={logo} alt="logo pineapple" className="logo-pineapple" />
      <Hamburger
        isActive={hamburgerIsActive}
        setIsActive={setHamburgerIsActive}
        handleToggle={handleMenuToggle}
      />

      <div className={`navbar-menu ${navMenuIsActive}`}>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
