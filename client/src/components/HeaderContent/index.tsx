import React from "react";
import ButtonLink from "../Buttons/ButtonLink";

import { headerDishesText } from "./headerDishesText";
import "./style.scss";
import { headerContentProps } from "./models/headerContentProps";
import { headerText } from "./models/headerText";

const HeaderContent: React.FC<headerContentProps> = ({ dish }) => {
  const headerText = (text: headerText) => {
    return (
      <>
        <p className="header--content-start">{text.headerStart}</p>
        <h2 className="header--content-highlight mb-4">
          {text.headerHighlight}
        </h2>
        <p className="header--content-end">{text.headerEndTop}</p>
        <p className="header--content-end">{text.headerEndBottom}</p>
        <ButtonLink to="/menu" text="Menu" className="button--link-dishes" />
      </>
    );
  };

  const { pineapplePizza, pineappleSalad, pineapplePie } = headerDishesText;

  return (
    <div className="header--main-container">
      {dish === "pineappleSalad" && headerText(pineappleSalad)}
      {dish === "pineapplePie" && headerText(pineapplePie)}
      {dish === "pineapplePizza" && headerText(pineapplePizza)}
    </div>
  );
};

export default HeaderContent;
