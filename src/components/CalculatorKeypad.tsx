import { CalculatorKey } from "./CalculatorKey";

interface Props {
  handleInput: Function;
  handleDelete: Function;
  handleReset: Function;
  handleEquals: Function;
}

export const CalculatorKeypad = ({ handleInput, handleDelete, handleReset, handleEquals }: Props) => {
  return (
    <div className="bg-background-keypad keypad">
      <CalculatorKey handleClick={handleInput} value="7" color="primary" gridArea="seven" />
      <CalculatorKey handleClick={handleInput} value="8" color="primary" gridArea="eight" />
      <CalculatorKey handleClick={handleInput} value="9" color="primary" gridArea="nine" />
      <CalculatorKey handleClick={handleDelete} value="del" color="tertiary" gridArea="delete" />
      <CalculatorKey handleClick={handleInput} value="4" color="primary" gridArea="four" />
      <CalculatorKey handleClick={handleInput} value="5" color="primary" gridArea="five" />
      <CalculatorKey handleClick={handleInput} value="6" color="primary" gridArea="six" />
      <CalculatorKey handleClick={handleInput} value="+" color="primary" gridArea="plus" />
      <CalculatorKey handleClick={handleInput} value="1" color="primary" gridArea="one" />
      <CalculatorKey handleClick={handleInput} value="2" color="primary" gridArea="two" />
      <CalculatorKey handleClick={handleInput} value="3" color="primary" gridArea="three" />
      <CalculatorKey handleClick={handleInput} value="-" color="primary" gridArea="minus" />
      <CalculatorKey handleClick={handleInput} value="." color="primary" gridArea="bullet" />
      <CalculatorKey handleClick={handleInput} value="0" color="primary" gridArea="zero" />
      <CalculatorKey handleClick={handleInput} value="/" color="primary" gridArea="divide" />
      <CalculatorKey handleClick={handleInput} value="x" color="primary" gridArea="times" />
      <CalculatorKey handleClick={handleReset} value="reset" color="tertiary" gridArea="reset" />
      <CalculatorKey handleClick={handleEquals} value="=" color="secondary" gridArea="equals" />
    </div>
  );
};
