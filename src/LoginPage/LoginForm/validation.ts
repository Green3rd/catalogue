import * as yup from "yup";
import { validateEmail, validateText } from "shared/utils/yupValidation";
import { LoginFormValues } from "./types";

export const initLoginFormValue = (): LoginFormValues => {
  return {
    email: "",
  };
};

export const validateLoginSchema = () => {
  return yup.object().shape({
    email: validateEmail(),
  });
};
