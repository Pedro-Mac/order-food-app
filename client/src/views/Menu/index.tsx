import React, { useEffect, useState } from "react";
import Dish from "./Dish";

import { getDishes } from "../../services/dishes";
import { dishType } from "./models/dish";
const Menu = () => {
  const [menuDishes, setMenuDishes] = useState<dishType[]>([]);
  useEffect(() => {
    getDishes().then((data) => {
      setMenuDishes(data.dishList);
    });
  }, []);
  return (
    <div>
      <div>
        <h1>Menu</h1>
        <section>
          {menuDishes.map((dish: dishType, index: number) => {
            return (
              <Dish
                key={index}
                name={dish.name}
                ingredients={dish.ingredients}
                price={dish.price}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Menu;
