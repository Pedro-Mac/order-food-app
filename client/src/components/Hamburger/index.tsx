import React from "react";
import "./style.scss";

import { hamburgerProps } from "./models/props";

const Hamburger: React.FC<hamburgerProps> = ({ isActive, handleToggle }) => {
  return (
    <button
      className={`hamburger hamburger--slider ${isActive}`}
      type="button"
      onClick={handleToggle}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
