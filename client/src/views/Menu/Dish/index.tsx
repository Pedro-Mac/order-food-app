import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonOperate from "../../../components/Buttons/ButtonOperate";
import { dishProps } from "./models/dishProps";
import { ADD_ITEM } from "../../../redux/cart/cartActions";
import "./style.scss";
const Dish: React.FC<dishProps> = ({ name, price, ingredients, id }) => {
  const dispatch = useDispatch();

  const ingredientsString: string = ingredients.join(", ");

  const handleAddDish = () => {
    dispatch({
      type: ADD_ITEM,
      payload: { itemName: name, itemPrice: price, quantity: 1, id },
    });
  };

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
