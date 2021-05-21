interface ConcealedRadioProps {
  value: number;
  selected: number;
  handleChange: Function;
}
export const ConcealedRadio = ({ value, selected, handleChange }: ConcealedRadioProps) => {
  return (
    <input
      onChange={() => handleChange(value)}
      type="radio"
      className="hidden"
      name="switch"
      checked={value === selected}
    />
  );
};
