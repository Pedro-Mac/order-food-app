import React, { Dispatch, SetStateAction } from "react";

export interface hamburgerProps {
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
  handleToggle: () => void;
}
