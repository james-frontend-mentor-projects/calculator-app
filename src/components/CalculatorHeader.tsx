import { useContext, useEffect, useState } from "react";
import ThemeContext from "../contexts/themeContext";
import { CalculatorThemeSelector } from "./themeSelector/CalculatorThemeSelector";

export const CalculatorHeader = () => {
  const { theme } = useContext(ThemeContext);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const textColor = theme !== 1 ? "light" : "white";

  return (
    <header>
      <h1 className={`text-text-${textColor}`}>{width}</h1>
      <CalculatorThemeSelector textColor={textColor} />
    </header>
  );
};
