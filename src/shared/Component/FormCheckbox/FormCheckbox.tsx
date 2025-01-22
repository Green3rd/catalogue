import React from "react";
import "./FormCheckbox.scss";
import { ErrorMessage, Field } from "formik";

interface Props {
  label: string;
  name: string;
}

const FormCheckbox = (props: Props) => {
  const { label, name } = props;
  return (
    <label className="FormCheckbox">
      <Field className="FormCheckbox__Input" type="checkbox" name={name} />
      <span className="FormCheckbox__Checkmark" />
      {label}
      <ErrorMessage
        className="FormCheckbox__Error"
        name={props.name}
        component="div"
      />
    </label>
  );
};
FormCheckbox.displayName = "FormCheckbox";
export { FormCheckbox };
