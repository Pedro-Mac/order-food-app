import React from "react";

import { Link } from "react-router-dom";

import { buttonLinkProps } from "./Models/buttonLinkProps";

import "./style.scss";

const ButtonLink: React.FC<buttonLinkProps> = ({ to, text, className }) => {
  return (
    <Link to={to} className={className}>
      {text}
    </Link>
  );
};

export default ButtonLink;
