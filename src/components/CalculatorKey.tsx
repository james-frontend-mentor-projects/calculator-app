import { useContext } from "react";
import ThemeContext from "../contexts/themeContext";
import { Calculation } from "./Calculator";

interface Props {
  value: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0" | "." | Calculation | "reset" | "del";
  color: "primary" | "secondary" | "tertiary";
  gridArea:
    | "one"
    | "two"
    | "three"
    | "four"
    | "five"
    | "six"
    | "seven"
    | "eight"
    | "nine"
    | "zero"
    | "bullet"
    | "plus"
    | "minus"
    | "times"
    | "divide"
    | "delete"
    | "reset"
    | "equals";
  handleClick: Function;
}
export const CalculatorKey = ({ value, color, gridArea, handleClick }: Props) => {
  const { theme } = useContext(ThemeContext);

  const classNames = [
    `bg-keys-${color}`,
    `shadow-shadows-${color}`,
    "text-text-light",
    "key",
    gridArea,
    theme === 3 && gridArea === "equals"
      ? "text-text-dark"
      : ["delete", "reset", "equals"].includes(gridArea)
      ? "text-text-white"
      : null,
  ];
  return (
    <button className={classNames.filter((el) => el).join(" ")} onClick={() => handleClick(value)}>
      {value}
    </button>
  );
};
