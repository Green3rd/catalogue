import React, { ChangeEventHandler } from "react";
import "./Dropdown.scss";

export interface DropDownItem {
  text: string;
  value: string;
}
interface Props {
  label?: string;
  name: string;
  data?: DropDownItem[];
  defaultValue: string;
  currentValue: string;
  onSelect?: ChangeEventHandler;
}

const Dropdown = (props: Props) => {
  const { label, name, data, onSelect, defaultValue, currentValue } = props;
  const items = data?.map((it) => {
    return (
      <option className="Dropdown__Dropdown" key={it.value} value={it.value}>
        {it.text}
      </option>
    );
  });
  return (
    <div className="Dropdown">
      {label && <label className="Dropdown__Label">{label}</label>}
      <select value={currentValue} onChange={onSelect} className="Dropdown__Input" name={name} defaultValue={defaultValue}>
        {items}
      </select>
    </div>
  );
};

Dropdown.displayName = "Dropdown";
export { Dropdown };
