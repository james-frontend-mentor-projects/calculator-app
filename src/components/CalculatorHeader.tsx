import React, { useContext } from "react";
import ThemeContext from "../contexts/themeContext";
import { CalculatorThemeSelector } from "./CalculatorThemeSelector";

export const CalculatorHeader = () => {
  const { theme } = useContext(ThemeContext);

  const textColor = theme !== 1 ? "light" : "white";

  return (
    <header>
      <h1 className={`text-text-${textColor}`}>calc</h1>
      <CalculatorThemeSelector textColor={textColor} />
    </header>
  );
};
