import { useState } from "react";
import { CalculatorHeader } from "./CalculatorHeader";
import { CalculatorKeypad } from "./CalculatorKeypad";
import { CalculatorScreen } from "./CalculatorScreen";

export type Calculation = "+" | "-" | "x" | "/" | "=" | ".";
export const MAX_INPUT_LENGTH = 10;
export const BASE_RESULT = "ZERO";

export const Calculator = () => {
  const [underlyingResult, setUnderlyingResult] = useState<string>(BASE_RESULT);
  const [displayedValue, setDisplayedValue] = useState<string>(BASE_RESULT);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [ongoingNumber, setOngoingNumber] = useState<string>(BASE_RESULT);
  const [action, setAction] = useState<Calculation | null>(null);

  function removeFromOngoingNumber() {
    const newValue =
      underlyingResult !== BASE_RESULT && underlyingResult.length > 0 ? underlyingResult.slice(0, -1) : null;
    setUnderlyingResult(newValue || BASE_RESULT);
    setDisplayedValue(newValue || BASE_RESULT);
  }

  function resetEverything() {
    setOngoingNumber(BASE_RESULT);
    setErrorMessage(null);
    setUnderlyingResult(BASE_RESULT);
    setDisplayedValue(BASE_RESULT);
    setAction(null);
  }

  function calculate(calculationToPerform: Calculation): string {
    try {
      if (calculationToPerform === "=") {
        return action ? calculate(action) : ongoingNumber;
      }
      if (ongoingNumber !== BASE_RESULT && underlyingResult !== BASE_RESULT) {
        if (calculationToPerform === "+") {
          return (parseFloat(underlyingResult) + parseFloat(ongoingNumber)).toString();
        }
        if (calculationToPerform === "-") {
          return (parseFloat(underlyingResult) - parseFloat(ongoingNumber)).toString();
        }
        if (calculationToPerform === "x") {
          return (parseFloat(underlyingResult) * parseFloat(ongoingNumber)).toString();
        }
        if (calculationToPerform === "/") {
          return (parseFloat(underlyingResult) / parseFloat(ongoingNumber)).toString();
        }
      }
    } catch (e) {}

    return ongoingNumber;
  }

  function handleInput(actionOrNumber: string | Calculation) {
    switch (actionOrNumber) {
      case "+": {
        setAction("+");
        const res = calculate("+");
        setUnderlyingResult(res);
        setDisplayedValue(BASE_RESULT);
        break;
      }
      case "-": {
        setAction("-");
        const res = calculate("-");
        setUnderlyingResult(res);
        setDisplayedValue(BASE_RESULT);
        break;
      }
      case "x": {
        setAction("x");
        const res = calculate("x");
        setUnderlyingResult(res);
        setDisplayedValue(BASE_RESULT);
        break;
      }
      case "/": {
        setAction("/");
        const res = calculate("/");
        setUnderlyingResult(res);
        setDisplayedValue(BASE_RESULT);
        break;
      }
      case "=": {
        const res = calculate("=");
        setDisplayedValue(res);
        break;
      }
      case ".": {
        if (!ongoingNumber.includes(".")) {
          const newValue = `${displayedValue}.`;
          console.log(newValue);
          setOngoingNumber(newValue);
          setDisplayedValue(newValue);
        }
        break;
      }
      default: {
        const value: string = actionOrNumber;
        const newValue = displayedValue === BASE_RESULT ? value : displayedValue + value;
        let newValueAsFloat;
        try {
          newValueAsFloat = parseFloat(displayedValue);
        } catch (e) {
          newValueAsFloat = 0;
        }
        if (newValueAsFloat.toLocaleString().length <= MAX_INPUT_LENGTH) {
          setOngoingNumber(newValue);
          setDisplayedValue(newValue);
        }
      }
    }
  }

  return (
    <div className="container">
      <CalculatorHeader />
      <CalculatorScreen result={displayedValue} errorMessage={errorMessage} />
      <CalculatorKeypad
        handleInput={handleInput}
        handleDelete={removeFromOngoingNumber}
        handleReset={resetEverything}
        handleEquals={handleInput}
      />
    </div>
  );
};
