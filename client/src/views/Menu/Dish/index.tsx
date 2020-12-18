import React from "react";
import ButtonOperate from "../../../components/Buttons/ButtonOperate";
import { dishProps } from "./models/dishProps";
import "./style.scss";
const Dish: React.FC<dishProps> = ({ name, price, ingredients }) => {
  const ingredientsString: string = ingredients.join(", ");

  const handleAddDish = () => {};

  return (
    <div className="d-flex justify-content-between">
      <div className="dish--info-container ">
        <h6 className="dish--header">{name}</h6>
        <p className="dish--ingredients">{ingredientsString}</p>
        <p className="dish--price">${(price / 100).toFixed(2)}</p>
      </div>

      <ButtonOperate
        text="+ Add"
        className="button--add-highlight text-center px-3 py-1"
        onClick={handleAddDish}
      />
    </div>
  );
};

export default Dish;
