import React, { useEffect } from "react";

import { getDishes } from "../../services/dishes";

const Menu = () => {
  useEffect(() => {
    const dishesList = getDishes();
    console.log(dishesList);
  }, []);
  return (
    <div>
      <div>
        <h1>Menu</h1>
      </div>
    </div>
  );
};

export default Menu;
