import React from "react";
import "./FormInput.scss";
import { Field, ErrorMessage } from "formik";
import { generateClassName } from "shared/utils/reactClassName";
import { ReactElement } from "react";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  hideArrow?: boolean;
  error?: boolean;
  type: "email" | "password" | "text" | "number" | "tel" | "textarea";
  children?: ReactElement;
}

const FormInput = (props: Props) => {
  const { label, name, placeholder, type, hideArrow, error, children } = props;
  const input = children || (
    <Field
      className={generateClassName("FormInput__Field", [
        hideArrow ? "noArrow" : "",
        error ? "error" : "",
      ])}
      type={type === "textarea" ? "text" : type}
      component={type === "textarea" ? type : null}
      name={name}
      placeholder={placeholder}
    />
  );
  return (
    <div
      className={generateClassName("FormInput", [
        children ? "children" : "",
        error ? "error" : "",
      ])}
    >
      <label className="FormInput__Label" htmlFor={name}>
        {label}
      </label>
      {input}
      <ErrorMessage className="FormInput__Error" name={name} component="div" />
    </div>
  );
};
FormInput.displayName = "FormInput";
export { FormInput };
