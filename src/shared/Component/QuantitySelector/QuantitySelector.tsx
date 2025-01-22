import React from "react";
import "./QuantitySelector.scss";
import { generateClassName } from "shared/utils/reactClassName";

interface QuantitySelectorProps {
  onClick?: (num: number) => void;
  step?: number;
  value?: number;
  maxValue?: number;
  disablePlus?: boolean;
}

const QuantitySelectorComponent = (props: QuantitySelectorProps) => {
  const { onClick, value, disablePlus, maxValue } = props;
  const [number, setNumber] = React.useState(value ?? 0);
  const [minusDisable, setMinusDisable] = React.useState(true);
  const step = props.step ?? 1;

  React.useEffect(() => {
    if (value != null && value >= 0) {
      setNumber(value);
      setMinusDisable(value <= 0);
    }
  }, [value]);

  const onMinus = () => {
    if (minusDisable) {
      return;
    }
    if (number <= step) {
      setMinusDisable(true);
    }
    setNumber((val) => val - step);
    onClick && onClick(number - step);
  };

  const onPlus = () => {
    if (disablePlus) return;
    setNumber((val) => val + step);
    onClick && onClick(number + step);
    setMinusDisable(false);
  };

  const handleNumberChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.currentTarget.value);
    if (typeof newValue === "number") {
      if (newValue > (maxValue ?? 1000)) return;
      const value = isNaN(newValue) ? 0 : newValue;
      setMinusDisable(isNaN(newValue));
      setNumber(value);
      onClick && onClick(value);
    }
  };

  return (
    <div className="QuantitySelector">
      <span className="QuantitySelector__Text">Amount</span>
      <span className="QuantitySelector__ButtonContainer">
        <button
          className={generateClassName(
            "QuantitySelector__Button",
            minusDisable ? "disable" : ""
          )}
          onClick={onMinus}
        >
          <span className="QuantitySelector__MinusText">-</span>
        </button>
        <input
          className={generateClassName(
            "QuantitySelector__Number",
            number > 0 ? "select" : ""
          )}
          onChange={handleNumberChange}
          value={number}
        />
        <button
          className={generateClassName(
            "QuantitySelector__Button",
            disablePlus ? "disable" : ""
          )}
          onClick={onPlus}
        >
          +
        </button>
      </span>
    </div>
  );
};
const QuantitySelector = React.memo(QuantitySelectorComponent);
QuantitySelector.displayName = "QuantitySelector";

export { QuantitySelector };
