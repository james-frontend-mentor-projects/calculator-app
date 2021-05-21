import { useContext, useEffect, useState } from "react";
import ThemeContext from "../contexts/themeContext";
import { BASE_RESULT, MAX_INPUT_LENGTH } from "./Calculator";

interface Props {
  result: string;
  errorMessage: string | null;
}

export const CalculatorScreen = ({ result, errorMessage }: Props) => {
  const { theme } = useContext(ThemeContext);

  const [formattedResult, setFormattedResult] = useState(result);

  const resultColor = theme !== 1 ? "light" : "white";

  useEffect(() => {
    if (result === BASE_RESULT) {
      setFormattedResult("0");
    } else {
      try {
        const resultAsFloat = parseFloat(result);
        if (resultAsFloat.toLocaleString("fullwide").length > MAX_INPUT_LENGTH) {
          // full number is greater than 13 characters long
          setFormattedResult(resultAsFloat.toExponential());
        } else {
          setFormattedResult(
            result.endsWith(".") ? resultAsFloat.toLocaleString() + "." : resultAsFloat.toLocaleString()
          );
        }
      } catch (e) {
        setFormattedResult(result);
      }
    }
  }, [result]);

  return (
    <div className="bg-background-screen screen">
      <div className={`text-text-${resultColor} result`}>{errorMessage || formattedResult}</div>
    </div>
  );
};
