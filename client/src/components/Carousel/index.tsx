import React, { useState, useEffect, useMemo } from "react";
import "./style.scss";

import HeaderContent from "../HeaderContent";

const Carousel = () => {
  const [x, setX] = useState(0);

  const sliderItems = useMemo(
    () => ["pineappleSalad", "pineapplePie", "pineapplePizza"],
    [],
  );

  useEffect(() => {
    const slideLeftAuto = () => {
      if (x / 100 !== -sliderItems.length + 1) {
        setX(x - 100);
      } else {
        setX(0);
      }
    };
    const timer = setTimeout(slideLeftAuto, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [x, sliderItems]);

  return (
    <div className="carousel">
      {sliderItems.map((item, index) => {
        return (
          <div
            key={index}
            className="carousel--item"
            style={{
              transform: `translateX(${x}%)`,
            }}
          >
            <HeaderContent dish={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
