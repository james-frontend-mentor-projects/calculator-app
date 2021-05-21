interface ClickableLabelProps {
  value: number;
  handleChange: Function;
  textColor: string;
}
export const ClickableLabel = ({ value, handleChange, textColor }: ClickableLabelProps) => {
  return (
    <label className={`text-text-${textColor}`} onClick={() => handleChange(value)}>
      {value}
    </label>
  );
};
