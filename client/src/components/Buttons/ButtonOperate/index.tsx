import React from "react";
import { buttonOperateProps } from "./models/buttonOperateProps";

const ButtonOperate: React.FC<buttonOperateProps> = ({
  text,
  className,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default ButtonOperate;
