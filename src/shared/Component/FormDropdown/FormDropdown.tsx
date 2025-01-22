import React from "react";
import "./FormDropdown.scss";
import { ErrorMessage, Field } from "formik";

export interface DropDownItem {
  text: string;
  value: string;
  isHighlight?: boolean;
}
interface Props {
  label: string;
  name: string;
  data?: DropDownItem[];
}

const FormDropdown = (props: Props) => {
  const { label, name, data } = props;
  const items = data?.map((it) => {
    return (
      <option className="FormDropdown__Dropdown" value={it.value}>
        {it.text}
      </option>
    );
  });
  return (
    <label className="FormDropdown">
      {label}

      <Field className="FormDropdown__Input" as="select" name={name}>
        {items}
      </Field>

      <ErrorMessage
        className="FormDropdown__Error"
        name={props.name}
        component="div"
      />
    </label>
  );
};
FormDropdown.displayName = "FormDropdown";
export { FormDropdown };
